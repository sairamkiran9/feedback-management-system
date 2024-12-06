"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const recentResponses = [
  {
    id: "1",
    name: "Sarah Miller",
    survey: "Customer Satisfaction Q1",
    time: "2 minutes ago",
    initials: "SM",
  },
  {
    id: "2",
    name: "James Wilson",
    survey: "Product Feedback",
    time: "15 minutes ago",
    initials: "JW",
  },
  {
    id: "3",
    name: "Emma Thompson",
    survey: "Website Usability",
    time: "45 minutes ago",
    initials: "ET",
  },
  {
    id: "4",
    name: "Michael Brown",
    survey: "Employee Engagement",
    time: "1 hour ago",
    initials: "MB",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    survey: "Customer Satisfaction Q1",
    time: "2 hours ago",
    initials: "LA",
  },
];

export function RecentResponses() {
  return (
    <div className="space-y-8">
      {recentResponses.map((response) => (
        <div key={response.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{response.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{response.name}</p>
            <p className="text-sm text-muted-foreground">
              {response.survey}
            </p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            {response.time}
          </div>
        </div>
      ))}
    </div>
  );
}