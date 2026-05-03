"use client";
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { CareerRole } from "@/types/career";
import { parseSkills } from "@/types/career";

export default function CareerOpenRoles() {
  const departments = [
    "All Departments",
    "Engineering",
    "Marketing",
    "Sales",
    "HR",
    "Design",
    "Operations",
    "Finance",
  ];

  const locations = [
    "All Locations",
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

  const [jobs, setJobs] = useState<CareerRole[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRoles() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("career_roles")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false })
          .returns<CareerRole[]>();

        if (error) {
          console.error("Error fetching career roles:", error);
          return;
        }

        setJobs(data ?? []);
      } catch (error) {
        console.error("Error fetching career roles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRoles();
  }, []);

  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");

  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({});

  const toggleReadMore = (id: string) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (selectedDept === "All Departments" || job.department === selectedDept) &&
      (selectedLoc === "All Locations" || job.location === selectedLoc)
  );

  return (
    <section id="open-roles" className="mx-auto max-w-7xl bg-gray-50 px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
        Open Roles At Vaayu
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        We&apos;re looking for mission-driven individuals who care about clean technology, climate,
        and meaningful innovation.
      </p>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
          className="rounded-lg border px-4 py-2 text-gray-700 shadow-sm"
        >
          {departments.map((dept) => (
            <option key={dept}>{dept}</option>
          ))}
        </select>

        <select
          value={selectedLoc}
          onChange={(e) => setSelectedLoc(e.target.value)}
          className="rounded-lg border px-4 py-2 text-gray-700 shadow-sm"
        >
          {locations.map((loc) => (
            <option key={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Job Listings */}
      <div className="mt-10 space-y-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            <p className="mt-3 text-sm text-gray-500">Loading open roles...</p>
          </div>
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {job.department} | {job.type} | {job.location}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={() => toggleReadMore(job.id)}
                    className="mt-4 text-sm font-medium text-blue-600 hover:underline"
                  >
                    {expandedJobs[job.id] ? "Show Less" : "Read More"}
                  </button>

                  {/* Hidden initially, shown on click */}
                  {expandedJobs[job.id] && (
                    <div className="mt-5">
                      <h4 className="mb-3 font-medium text-gray-800">Skills Required:</h4>

                      <ul className="list-disc space-y-2 pl-6 text-sm text-gray-600">
                        {parseSkills(job.skills_required).map((skill, skillIdx) => (
                          <li key={skillIdx}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <a
                  href={`mailto:maneesh1458@gmail.com?subject=${encodeURIComponent(`Application for ${job.title} - ${job.department}`)}&body=${encodeURIComponent(`Hi Vaayu Team,\n\nI am interested in the ${job.title} position (${job.department} - ${job.location}).\n\nPlease find my details below:\n\nFull Name: \nPhone Number: \nCurrent Location: \nTotal Experience: \nRelevant Experience: \nCurrent CTC: \nExpected CTC: \nNotice Period: \n\nPlease find my resume attached.\n\nThank you.`)}`}
                  className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No roles found for selected filters.</p>
        )}
      </div>
    </section>
  );
}
