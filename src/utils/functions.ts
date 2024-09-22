export function generateSlug(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

// utils/dateUtils.ts

export function formatDateWithDay(date: string | Date): string {
  const d = new Date(date);

  const dayOfWeek = d
    .toLocaleString("en-US", { weekday: "long" })
    .toUpperCase(); // Get the day name (e.g., SUNDAY)
  const dayOfMonth = d.getDate();
  const month = d.toLocaleString("en-US", { month: "long" }).toUpperCase(); // Get the month name (e.g., SEPTEMBER)
  const year = d.getFullYear();

  // Get the suffix for the day of the month
  const daySuffix = getDaySuffix(dayOfMonth);

  return `${dayOfWeek} ${dayOfMonth}${daySuffix} OF ${month}, ${year}`;
}

// Helper function to get the correct suffix for the day of the month
function getDaySuffix(day: number): string {
  if (day > 3 && day < 21) return "TH"; // Covers 11th to 20th
  switch (day % 10) {
    case 1:
      return "ST";
    case 2:
      return "ND";
    case 3:
      return "RD";
    default:
      return "TH";
  }
}
