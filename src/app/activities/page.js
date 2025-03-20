import ActivitiesClient from "./ActivitiesClient";

export const metadata = {
  title: "Our Activities",
  description: "Explore the various activities, outreach programs, and community initiatives conducted by the Society of Otolaryngologists of Nepal.",
  keywords: [
    "SOL Nepal activities",
    "ENT outreach Nepal",
    "Medical camps Nepal",
    "ENT awareness programs",
    "Health screening Nepal"
  ],
};

export default function ActivitiesPage() {
  return <ActivitiesClient />;
}
