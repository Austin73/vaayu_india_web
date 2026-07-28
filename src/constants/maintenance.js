// Toggle site-wide maintenance mode.
// Set NEXT_PUBLIC_MAINTENANCE_MODE=true in your environment (.env.local, or
// your hosting provider's env vars) to show the maintenance message instead
// of the homepage content. Set it to "false" (or remove it) to go back live.
export const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
