import { Link } from "react-router-dom";
import { 
  MessageCircle, Instagram, Linkedin, Users, Trophy, Briefcase, 
  GraduationCap, Clock, TrendingUp, Building2, ArrowRight, 
  BookOpen, Target, Laptop, Headphones, UserCheck, Search, 
  Calendar, Award, Star, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import DemoForm from "@/components/forms/DemoForm";
import CourseCard from "@/components/courses/CourseCard";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { courses } from "@/lib/courses";
import { testimonials } from "@/lib/testimonials";
import { companies } from "@/lib/companies";
import { openWhatsApp } from "@/lib/whatsapp";

const highlights = [
  { icon: Users, label: "Interactive live virtual classes conducted by industry/working professionals" },
  { icon: Clock, label: "Over 150+ hours of comprehensive self-paced learning modules" },
  { icon: BookOpen, label: "Well-structured and systematically designed curriculum" },
  { icon: TrendingUp, label: "Dedicated assistance for career transition and job switch" },
  { icon: GraduationCap, label: "Personalized 1:1 mentorship from experienced industry experts" },
  { icon: Briefcase, label: "Access to 50+ real-world industry projects and case studies" },
  { icon: Laptop, label: "Complimentary access to integrated hands-on lab environments" },
  { icon: Target, label: "Exclusive career guidance sessions and placement support services" },
  { icon: Headphones, label: "Round-the-clock (24/7) learner support" },
  { icon: UserCheck, label: "Designed for both technical and non-technical graduates" },
  { icon: Star, label: "Dedicated learning management and student success team" },
  { icon: Calendar, label: "Regular revision and doubt-clearing sessions on weekdays and weekends" },
  { icon: Search, label: "Comprehensive mock interview preparation sessions" },
  { icon: Award, label: "Core soft skills and professional development training" },
  { icon: Trophy, label: "100% job placement assistance support" },
  { icon: ShieldCheck, label: "Flexible learning schedule with continued placement support" },
];

const careerStats = [
  { value: "72%", label: "Average Salary Hike" },
  { value: "38 LPA", label: "Highest Package" },
  { value: "12 LPA", label: "Average Package" },
  { value: "100+", label: "Career Transitions" },
];

const Home = () => {
  const featuredCourses = courses.filter((c) => c.featured).slice(0, 6);
  const featuredTestimonials = testimonials;

  // Heading Badge Component for consistency
  const SectionBadge = ({ children }) => (
    <span className="inline-block px-10 py-4 bg-[#fff8e1] text-[#ffc107] rounded-full text-xl md:text-2xl font-black mb-10 shadow-sm border border-[#ffecb3]">
      {children}
    </span>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-navy-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 animate-fade-in">
                #1 DevOps Training Institute in Hyderabad
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in whitespace-nowrap" style={{ animationDelay: "0.1s" }}>
                Learn, Grow and <span className="text-gradient-gold">Succeed</span>
              </h1>

              <div className="text-base md:text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in space-y-4" style={{ animationDelay: "0.2s" }}>
                <p>
                  Rudra’s Cloud Gurukul is a leading software training institute in Hyderabad, offering high-quality classroom and live online training with real-time projects at affordable prices.
                </p>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <button onClick={openWhatsApp} className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </button>
                <a href="https://www.instagram.com/rudrascloud" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/courses">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-gold">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-in-right flex justify-center lg:justify-end">
              <div className="w-full max-w-[400px]">
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-28 bg-background">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>About Us</SectionBadge>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 tracking-tight">
            Why Choose <span className="text-accent">Rudra's Cloud Gurukul?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
             Rudra’s Cloud Gurukul offers industry-focused training in cutting-edge technologies. All training programs are designed by professionals with real-time experience.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 md:py-28 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Key Highlights</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-16">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-6 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <item.icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <p className="text-base md:text-lg text-foreground font-semibold leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Our Alumni</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Students Work At
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 h-20 flex items-center justify-center border border-border shadow-sm">
                <img src={company.logo} alt={company.name} className="max-h-12 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Our Courses</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-sky/10">
        <div className="container mx-auto px-4 text-center">
          <SectionBadge>Testimonials</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#fab400]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-bold drop-shadow-sm">
            Join thousands of successful professionals who transformed their careers
            with Rudra's Cloud Gurukul.
          </p>
          <Link to="/get-started">
            <Button size="lg" className="bg-[#0a192f] text-white hover:bg-[#0a192f]/90 font-bold px-10 py-6 text-lg rounded-xl">
              Get Started Now <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;