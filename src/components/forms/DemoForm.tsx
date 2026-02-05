import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { courses } from "@/lib/courses";
import { redirectToWhatsAppDemo, DemoFormData } from "@/lib/whatsapp";

const DemoForm = () => {
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    phone: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.course) {
      redirectToWhatsAppDemo(formData);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Get Started
        </h3>
        <p className="text-sm text-muted-foreground">
          Start your journey today with a free demo class
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="demo-name" className="text-foreground">
            Your Name *
          </Label>
          <Input
            id="demo-name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="bg-background border-border focus:border-accent focus:ring-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="demo-phone" className="text-foreground">
            Phone Number *
          </Label>
          <Input
            id="demo-phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            className="bg-background border-border focus:border-accent focus:ring-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="demo-course" className="text-foreground">
            Select Course *
          </Label>
          <select
            id="demo-course"
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
            required
            className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Choose a course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-6 shadow-gold transition-all duration-300 hover:scale-[1.02]"
        >
          Get Started →
        </Button>
      </form>

      <p className="text-xs text-center text-muted-foreground mt-4">
        By submitting, you'll be redirected to WhatsApp
      </p>
    </div>
  );
};

export default DemoForm;
