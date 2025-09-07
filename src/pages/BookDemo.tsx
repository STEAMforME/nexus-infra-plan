import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BookDemo = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Book a Demo</CardTitle>
            <CardDescription>
              We’ll walk you through safety simulation, zoning intelligence, and compliance workflows.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Button asChild className="w-full">
                <a href="mailto:contact@smartinfra.com?subject=SmartInfra%20Demo%20Request">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <a href="#" aria-disabled>
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule (Coming Soon)
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Prefer a quick chat? Email us and we’ll find a time that works.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookDemo;

