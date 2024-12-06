import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, ClipboardList, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Feedback Management System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create, manage, and analyze surveys with our powerful and intuitive platform.
            Get actionable insights from your audience.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/login">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/signup">Create Account</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <ClipboardList className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Survey Builder</h3>
            <p className="text-muted-foreground">
              Drag-and-drop interface with real-time preview. Create professional surveys in minutes.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Easy Distribution</h3>
            <p className="text-muted-foreground">
              Share surveys via email or custom links. Track responses in real-time.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BarChart3 className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-muted-foreground">
              Powerful analytics tools to visualize and understand your feedback data.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}