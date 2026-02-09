import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Users, Trophy, Briefcase, GraduationCap, Clock, TrendingUp, 
  ArrowRight, BookOpen, UserCheck, 
  Search, Award, DollarSign, Zap, ChevronLeft, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import DemoForm from "@/components/forms/DemoForm";
import CourseCard from "@/components/courses/CourseCard";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { courses } from "@/lib/courses";
import { testimonials } from "@/lib/testimonials";
import { companies } from "@/lib/companies";

const highlights = [
  { icon: Users, label: "Interactive live virtual classes conducted by industry/working professionals" },
  { icon: Clock, label: "Over 150+ hours of comprehensive self-paced learning modules" },
  { icon: BookOpen, label: "Well-structured and systematically designed curriculum" },
  { icon: TrendingUp, label: "Dedicated assistance for career transition and job switch" },
  { icon: GraduationCap, label: "Personalized 1:1 mentorship from experienced industry experts" },
  { icon: Briefcase, label: "Access to 50+ real-world industry projects and case studies" },
  { icon: UserCheck, label: "Designed for both technical and non-technical graduates" },
  { icon: Search, label: "Comprehensive mock interview preparation sessions" },
  { icon: Award, label: "Core soft skills and professional development training" },
  { icon: Trophy, label: "100% job placement assistance support" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;
  const totalSlides = Math.max(0, testimonials.length - itemsPerPage + 1);

  const featuredCourses = courses.filter((c) => c.featured).slice(0, 6);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex, totalSlides]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  const SectionBadge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block px-8 py-2 bg-[#0a192f] text-[#fab400] rounded-full text-lg md:text-xl font-bold mb-6 shadow-lg font-serif">
      {children}
    </span>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-navy-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium mb-4 animate-fade-in font-sans">
                #1 DevOps Training Institute in Hyderabad
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold font-serif text-primary-foreground mb-4 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Learn, Grow and <span className="text-gradient-gold">Succeed</span>
              </h1>
              <div className="text-base font-sans text-primary-foreground/80 mb-6 leading-relaxed animate-fade-in space-y-4" style={{ animationDelay: "0.2s" }}>
                <p>
                  Rudra’s Cloud Gurukul is a leading software training institute in Hyderabad, offering high-quality classroom and live online training with real-time projects at affordable prices. Our industry expert trainers, mentor students and professionals to master the latest technologies and achieve strong placement outcomes.
                </p>
                <p>
                  Recognized as one of the best DevOps training institutes in Hyderabad, Rudra’s Cloud Gurukul delivers a well-structured DevOps course with hands-on experience, real-time scenarios, and personalized one-to-one guidance. Our training is suitable for beginners and experienced IT professionals alike.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/courses">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-gold font-sans">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in-right flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px]">
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>About Us</SectionBadge>
          <h2 className="text-2xl md:text-3xl font-semibold font-serif text-foreground mb-8 tracking-tight">
            Elevate Your Career with <span className="text-accent">Rudra's Cloud Gurukul</span>
          </h2>
          <div className="max-w-5xl mx-auto text-left space-y-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed">
            <p>
              Rudra’s Cloud Gurukul offers industry-focused training in cutting-edge technologies such as DevOps with GCP, AWS and Azure, Power BI, Full Stack Development, Data Science, GenAI and more. All training programs are designed and delivered by certified professionals with real-time industry experience, helping learners gain strong conceptual knowledge and accelerate their career growth.
            </p>
            <p>
              With an updated, skill-driven, role-based curriculum and hands-on learning approach, our programs are ideal for both students and working professionals looking to upskill and achieve their career goals. Rudra’s Cloud Gurukul is committed to delivering a high-quality classroom and live online training experience that prepares learners for real-world challenges.
            </p>
            <p className="border-l-4 border-accent pl-6 py-2 bg-muted/50 rounded-r-lg">
              The DevOps course covers core concepts, GCP DevOps, AWS DevOps and popular tools such as Jenkins, Docker, Kubernetes, Git, Maven, Ansible, and Chef. With comprehensive online and classroom options, Rudra’s Cloud Gurukul helps you gain job-ready skills and succeed in today’s competitive IT market.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Key Highlights</SectionBadge>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mt-12">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-5 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors mb-4">
                  <item.icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <p className="text-sm font-sans text-foreground font-medium leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Transition Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Career Transition</SectionBadge>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
            {[
              { icon: TrendingUp, val: "72%", label: "Avg Salary Hike" },
              { icon: Trophy, val: "38 LPA", label: "Highest Package" },
              { icon: DollarSign, val: "12 LPA", label: "Average Package" },
              { icon: Zap, val: "100+", label: "Transitions" }
            ].map((stat, i) => (
              <div key={i} className="p-5 bg-navy-dark rounded-xl border border-accent/20 shadow-md flex flex-col items-center">
                <stat.icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="text-xl md:text-2xl font-black text-white">{stat.val}</h3>
                <p className="text-accent/80 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-12 md:py-16 bg-muted border-t">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Our Alumni</SectionBadge>
          <h2 className="text-2xl md:text-3xl font-semibold font-serif text-foreground mb-10">
            Our Students <span className="text-accent">Work At</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-xl p-4 h-24 flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="max-h-12 w-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Our Courses</SectionBadge>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-12 md:py-16 bg-sky/10">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Testimonials</SectionBadge>
          <div 
            className="relative max-w-7xl mx-auto px-10 mt-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all z-20">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all z-20">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="animate-fade-in transition-opacity duration-500">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-accent" : "w-2 bg-slate-300"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#fab400]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold font-serif text-[#0a192f] mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <Link to="/get-started">
            <Button size="lg" className="bg-[#0a192f] text-white hover:bg-[#0a192f]/90 font-bold px-8 py-4 text-base rounded-xl font-sans">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;