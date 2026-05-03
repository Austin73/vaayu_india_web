import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Edit, Eye, EyeOff, MapPin, Briefcase } from "lucide-react";
import type { CareerRole } from "@/types/career";
import DeleteRoleButton from "@/components/career/DeleteRoleButton";

export default async function AdminCareerPage() {
  const supabase = await createClient();

  const { data: roles, error } = await supabase
    .from("career_roles")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<CareerRole[]>();

  if (error) {
    console.error("Error fetching career roles:", error);
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-dark text-3xl font-bold">Career Roles</h1>
          <p className="text-body-color mt-1 text-sm">Manage open positions at Vaayu</p>
        </div>
        <Link
          href="/admin/career/new"
          className="bg-primary shadow-btn hover:bg-primary-700 hover:shadow-btn-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          New Role
        </Link>
      </div>

      {/* Roles Table */}
      {roles && roles.length > 0 ? (
        <div className="shadow-one overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-body-color px-6 py-4 text-left text-xs font-semibold tracking-wider uppercase">
                  Title
                </th>
                <th className="text-body-color hidden px-6 py-4 text-left text-xs font-semibold tracking-wider uppercase sm:table-cell">
                  Department
                </th>
                <th className="text-body-color hidden px-6 py-4 text-left text-xs font-semibold tracking-wider uppercase md:table-cell">
                  Location
                </th>
                <th className="text-body-color hidden px-6 py-4 text-left text-xs font-semibold tracking-wider uppercase sm:table-cell">
                  Status
                </th>
                <th className="text-body-color hidden px-6 py-4 text-left text-xs font-semibold tracking-wider uppercase lg:table-cell">
                  Date
                </th>
                <th className="text-body-color px-6 py-4 text-right text-xs font-semibold tracking-wider uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {roles.map((role) => (
                <tr key={role.id} className="transition-colors hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-dark font-medium">{role.title}</p>
                      <p className="text-body-color mt-0.5 text-xs">{role.type}</p>
                    </div>
                  </td>
                  <td className="hidden px-6 py-4 sm:table-cell">
                    <span className="text-body-color inline-flex items-center gap-1.5 text-sm">
                      <Briefcase className="h-3.5 w-3.5" />
                      {role.department}
                    </span>
                  </td>
                  <td className="hidden px-6 py-4 md:table-cell">
                    <span className="text-body-color inline-flex items-center gap-1.5 text-sm">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.location}
                    </span>
                  </td>
                  <td className="hidden px-6 py-4 sm:table-cell">
                    {role.published ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                        <Eye className="h-3 w-3" />
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                        <EyeOff className="h-3 w-3" />
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="text-body-color hidden px-6 py-4 text-sm lg:table-cell">
                    {new Date(role.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/career/edit/${role.id}`}
                        className="text-body-color hover:text-primary rounded-lg p-2 transition-colors hover:bg-gray-100"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <DeleteRoleButton roleId={role.id} roleTitle={role.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="shadow-one flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white py-16">
          <div className="mb-4 rounded-full bg-gray-100 p-4">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-dark mb-2 text-lg font-semibold">No roles yet</h3>
          <p className="text-body-color mb-6 text-sm">
            Create your first career role to get started.
          </p>
          <Link
            href="/admin/career/new"
            className="bg-primary shadow-btn hover:bg-primary-700 hover:shadow-btn-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-200"
          >
            <Plus className="h-4 w-4" />
            Create First Role
          </Link>
        </div>
      )}
    </div>
  );
}
