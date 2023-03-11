//* Components imports
import DashboardSidebar from "@/components/specific/DashboardSidebar/DashboardSidebar";
import BooksSelled from "@/components/specific/charts/BooksSelled";

export default async function Dashboard() {
  return (
    <div className="flex flex-row items-start justify-start w-full min-h-screen">
      <div className="flex flex-col items-start justify-start w-full h-full min-h-screen bg-gray-50">
        <div className="flex flex-row items-start justify-start w-full bg-gray-100 rounded-lg">
          <BooksSelled />
        </div>
      </div>
    </div>
  );
}