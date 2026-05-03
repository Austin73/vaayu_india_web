import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import CareerRoleForm from "@/components/career/CareerRoleForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { CareerRole } from "@/types/career";

interface EditCareerRolePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCareerRolePage({
  params,
}: EditCareerRolePageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: role, error } = await supabase
    .from("career_roles")
    .select("*")
    .eq("id", id)
    .single<CareerRole>();

  if (error || !role) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/admin/career"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-body-color transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Roles
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-dark">Edit Role</h1>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-one">
        <CareerRoleForm role={role} />
      </div>
    </div>
  );
}
