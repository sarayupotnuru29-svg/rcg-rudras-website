import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { courses } from "@/lib/courses";
import { redirectToWhatsAppEnquiry, EnquiryFormData } from "@/lib/whatsapp";

const EnquiryForm = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phone && formData.email && formData.course) {
      redirectToWhatsAppEnquiry(formData);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Get Started Today
        </h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form and we'll get back to you shortly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name" className="text-foreground">
            Full Name *
          </Label>
          <Input
            id="full-name"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
            className="bg-background border-border focus:border-accent focus:ring-accent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              className="bg-background border-border focus:border-accent focus:ring-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-background border-border focus:border-accent focus:ring-accent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="course" className="text-foreground">
            Interested Course *
          </Label>
          <select
            id="course"
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

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">
            Your Message
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your learning goals..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-background border-border focus:border-accent focus:ring-accent min-h-[100px]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-6 shadow-gold transition-all duration-300 hover:scale-[1.02]"
        >
          Submit & Connect on WhatsApp →
        </Button>
      </form>

      <p className="text-xs text-center text-muted-foreground mt-4">
        By submitting, you'll be redirected to WhatsApp to complete your enquiry
      </p>
    </div>
  );
};

export default EnquiryForm;
