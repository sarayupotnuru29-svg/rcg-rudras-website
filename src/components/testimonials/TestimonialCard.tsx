import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 p-6 relative">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4">
        <Quote className="w-10 h-10 text-accent/20" />
      </div>

      {/* Avatar and Info */}
      <div className="mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-gold-dark flex items-center justify-center text-accent-foreground font-bold text-xl mb-3">
          {testimonial.name.charAt(0)}
        </div>
        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "text-accent fill-accent"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>

      {/* Feedback */}
      <p className="text-sm text-muted-foreground leading-relaxed italic">
        "{testimonial.feedback}"
      </p>
    </div>
  );
};

export default TestimonialCard;
