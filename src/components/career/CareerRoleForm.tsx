"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Loader2, Plus, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { CareerRole, CareerRoleFormData } from "@/types/career";
import { parseSkills } from "@/types/career";

interface CareerRoleFormProps {
  role?: CareerRole;
}

const DEPARTMENTS = [
  "Engineering",
  "Marketing",
  "Sales",
  "HR",
  "Design",
  "Operations",
  "Finance",
];

const JOB_TYPES = ["Full-Time", "Part-Time", "Contract", "Internship"];

const LOCATIONS = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Indore",
  "Remote",
];

export default function CareerRoleForm({ role }: CareerRoleFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const [formData, setFormData] = useState<CareerRoleFormData>({
    title: role?.title ?? "",
    department: role?.department ?? DEPARTMENTS[0],
    type: role?.type ?? JOB_TYPES[0],
    location: role?.location ?? LOCATIONS[0],
    skills_required: parseSkills(role?.skills_required),
    published: role?.published ?? false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addSkill = () => {
    const skill = newSkill.trim();
    if (skill && !formData.skills_required.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills_required: [...prev.skills_required, skill],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills_required: prev.skills_required.filter((_, i) => i !== index),
    }));
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Title is required.");
      return;
    }

    if (formData.skills_required.length === 0) {
      alert("Please add at least one skill requirement.");
      return;
    }

    setSaving(true);

    try {
      const supabase = createClient();

      const payload = {
        title: formData.title,
        department: formData.department,
        type: formData.type,
        location: formData.location,
        skills_required: formData.skills_required,
        published: formData.published,
      };

      if (role) {
        // Update existing role
        const { error } = await supabase
          .from("career_roles")
          .update(payload)
          .eq("id", role.id);

        if (error) throw error;
      } else {
        // Create new role
        const { error } = await supabase.from("career_roles").insert(payload);

        if (error) throw error;
      }

      router.push("/admin/career");
      router.refresh();
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save role. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-dark"
        >
          Job Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Sales Engineer"
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Department, Type, Location — row */}
      <div className="grid gap-6 sm:grid-cols-3">
        {/* Department */}
        <div>
          <label
            htmlFor="department"
            className="mb-2 block text-sm font-medium text-dark"
          >
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Type */}
        <div>
          <label
            htmlFor="type"
            className="mb-2 block text-sm font-medium text-dark"
          >
            Job Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {JOB_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-dark"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Skills Required */}
      <div>
        <label className="mb-2 block text-sm font-medium text-dark">
          Skills Required
        </label>

        {/* Existing skills */}
        {formData.skills_required.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {formData.skills_required.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-dark"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="rounded-full p-0.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-red-500"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add new skill */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleSkillKeyDown}
            placeholder="Type a skill and press Enter or click Add"
            className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="button"
            onClick={addSkill}
            className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-dark transition-colors hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
        <p className="mt-1.5 text-xs text-body-color">
          Press Enter to add each skill requirement
        </p>
      </div>

      {/* Published Toggle */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={formData.published}
          onClick={() =>
            setFormData((prev) => ({ ...prev, published: !prev.published }))
          }
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
            formData.published ? "bg-primary" : "bg-gray-300"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ${
              formData.published ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <label className="text-sm font-medium text-dark">
          {formData.published ? "Published" : "Draft"}
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-btn transition-all duration-200 hover:bg-primary-700 hover:shadow-btn-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {role ? "Update Role" : "Create Role"}
        </button>
      </div>
    </form>
  );
}
