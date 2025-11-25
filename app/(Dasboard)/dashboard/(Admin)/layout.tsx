import ProtectedRoute from "@/components/DashboardComponent/Shared/ProtectedRoute";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>{children}</ProtectedRoute>
  );
}
