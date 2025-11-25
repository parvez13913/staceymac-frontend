import LayoutProvider from "@/components/DashboardComponent/Shared/LayoutProvider";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutProvider>
      <div className="xl:p-6 p-4">{children}</div>
    </LayoutProvider>
  );
}
