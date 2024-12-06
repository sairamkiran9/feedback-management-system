"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ClipboardList,
  Home,
  LogOut,
  Settings,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    label: "Surveys",
    icon: ClipboardList,
    href: "/dashboard/surveys",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={pathname === route.href ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            pathname === route.href && "bg-muted"
          )}
          asChild
        >
          <Link href={route.href}>
            <route.icon className="h-4 w-4" />
            {route.label}
          </Link>
        </Button>
      ))}
      <Button variant="ghost" className="w-full justify-start gap-2 text-red-500 hover:text-red-500 hover:bg-red-50">
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </nav>
  );
}