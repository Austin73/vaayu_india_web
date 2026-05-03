export interface CareerRole {
  id: string;
  created_at: string;
  title: string;
  department: string;
  type: string;
  location: string;
  skills_required: string[];
  published: boolean;
}

export interface CareerRoleFormData {
  title: string;
  department: string;
  type: string;
  location: string;
  skills_required: string[];
  published: boolean;
}

/**
 * Safely parse skills_required from Supabase.
 * Handles both native Postgres arrays (returned as string[])
 * and JSON-encoded strings (returned as '["skill1","skill2"]').
 */
export function parseSkills(skills: string[] | string | null | undefined): string[] {
  if (!skills) return [];
  if (Array.isArray(skills)) return skills;
  if (typeof skills === "string") {
    try {
      const parsed = JSON.parse(skills);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}
