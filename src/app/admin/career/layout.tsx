import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Career Management",
  robots: { index: false, follow: false },
};

export default async function AdminCareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 lg:pt-28">
      <div className="container mx-auto max-w-6xl px-4 pb-16">{children}</div>
    </div>
  );
}
