import ProtectedRoute from "@/components/DashboardComponent/Shared/ProtectedRoute";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute allowedRoles={["USER", "ADMIN"]}>{children}</ProtectedRoute>
  );
}
