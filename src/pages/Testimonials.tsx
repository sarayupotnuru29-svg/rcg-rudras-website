import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-sky">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Students Testimonials
          </h1>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-1 bg-accent rounded"></div>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <div className="w-8 h-1 bg-accent rounded"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-20 bg-sky">
        <div className="container mx-auto px-4">
          {/* Navigation arrows and grid */}
          <div className="relative">
            {/* Left Arrow */}
            <button className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md items-center justify-center hover:bg-muted transition-colors z-10">
              <ChevronLeft className="w-6 h-6 text-muted-foreground" />
            </button>
            
            {/* Right Arrow */}
            <button className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md items-center justify-center hover:bg-muted transition-colors z-10">
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </button>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-secondary to-navy-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Students Trained" },
              { value: "100+", label: "Career Transitions" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "50+", label: "Hiring Partners" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
