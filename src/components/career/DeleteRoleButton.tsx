"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface DeleteRoleButtonProps {
  roleId: string;
  roleTitle: string;
}

export default function DeleteRoleButton({
  roleId,
  roleTitle,
}: DeleteRoleButtonProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${roleTitle}"? This cannot be undone.`,
    );

    if (!confirmed) return;

    setDeleting(true);

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("career_roles")
        .delete()
        .eq("id", roleId);

      if (error) throw error;

      router.refresh();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete role.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="rounded-lg p-2 text-body-color transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
      title="Delete"
    >
      {deleting ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Trash2 className="h-4 w-4" />
      )}
    </button>
  );
}
