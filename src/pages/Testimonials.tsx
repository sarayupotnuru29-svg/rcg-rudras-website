import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sky to-sky-dark">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Students{" "}
            <span className="text-accent">Testimonials</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful students who have transformed their careers
            with Rudra's Cloud Gurukul training programs.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
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
