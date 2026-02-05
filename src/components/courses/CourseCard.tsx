import { Button } from "@/components/ui/button";
import { Course } from "@/lib/courses";
import { redirectToWhatsAppCourse } from "@/lib/whatsapp";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const Icon = course.icon;

  return (
    <div className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Image Header */}
      <div className="relative h-40 bg-gradient-to-br from-sky to-sky-dark overflow-hidden">
        {course.image ? (
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-navy">
              <Icon className="w-8 h-8 text-accent" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-2">
            {course.subtitle}
          </span>
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
            {course.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {course.description}
        </p>

        <Button
          onClick={() => redirectToWhatsAppCourse(course.title)}
          className="w-full bg-primary text-primary-foreground hover:bg-navy-light font-semibold transition-all duration-300"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
