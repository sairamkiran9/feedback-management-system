import { DashboardNav } from "@/components/dashboard/nav";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <DashboardHeader />
      <div className="flex">
        <aside className="hidden md:flex h-[calc(100vh-4rem)] w-56 flex-col border-r bg-muted/10">
          <div className="flex flex-1 flex-col gap-4 p-4">
            <DashboardNav />
          </div>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}