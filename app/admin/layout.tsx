import ProtectedRoute from "@/components/DashboardComponent/Shared/ProtectedRoute";
import TopBar from "@/components/DashboardComponent/Shared/TopBar";
import Sidebar from "./admin-sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <div className="flex bg-[#F6F6F6] h-screen">
        <Sidebar />

        <div className="flex-1   lg:ml-[230px] xl:ml-[245px]">
          <TopBar />
          <div className="p-8">{children}</div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
