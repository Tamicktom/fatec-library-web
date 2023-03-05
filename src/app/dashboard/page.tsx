//* Components imports
import DashboardSidebar from "@/components/specific/DashboardSidebar/DashboardSidebar";
import BooksSelled from "@/components/specific/charts/BooksSelled";

export default async function Dashboard() {
  return (
    <div className="flex flex-row items-start justify-start w-full min-h-screen">
      <DashboardSidebar />
      <div className="w-full h-full min-h-screen flex flex-col justify-start items-start bg-gray-50">
        <h1>Dashboard</h1>
        <div className="w-full flex flex-row justify-start items-start bg-gray-100 rounded-lg">
          <BooksSelled />
        </div>
      </div>
    </div>
  );
}