import { UserNav } from "@/components/dashboard/user-nav";
import { ModeToggle } from "@/components/mode-toggle";

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}