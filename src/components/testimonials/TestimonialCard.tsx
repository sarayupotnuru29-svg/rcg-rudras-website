import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-sky rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6">
        <Quote className="w-12 h-12 text-primary/20" />
      </div>

      {/* Name and Role */}
      <div className="mb-3">
        <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>

      {/* Rating */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>

      {/* Feedback */}
      <p className="text-sm text-muted-foreground leading-relaxed italic pr-8">
        "{testimonial.feedback}"
      </p>
    </div>
  );
};

export default TestimonialCard;
