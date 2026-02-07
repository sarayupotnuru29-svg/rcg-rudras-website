// import { Link } from "react-router-dom";
// import { MessageCircle, Instagram, Linkedin, Users, Trophy, Briefcase, GraduationCap, Clock, TrendingUp, Building2, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Layout from "@/components/layout/Layout";
// import DemoForm from "@/components/forms/DemoForm";
// import CourseCard from "@/components/courses/CourseCard";
// import TestimonialCard from "@/components/testimonials/TestimonialCard";
// import { courses } from "@/lib/courses";
// import { testimonials } from "@/lib/testimonials";
// import { companies } from "@/lib/companies";
// import { openWhatsApp } from "@/lib/whatsapp";

// const highlights = [
//   { icon: Users, label: "Interactive live virtual classes by industry professionals" },
//   { icon: Clock, label: "150+ hours of comprehensive learning modules" },
//   { icon: GraduationCap, label: "Personalized 1:1 mentorship from experts" },
//   { icon: Briefcase, label: "50+ real-world industry projects" },
//   { icon: Trophy, label: "100% job placement assistance" },
//   { icon: Building2, label: "Round-the-clock learner support" },
// ];

// const careerStats = [
//   { value: "72%", label: "Average Salary Hike" },
//   { value: "38 LPA", label: "Highest Package" },
//   { value: "12 LPA", label: "Average Package" },
//   { value: "100+", label: "Career Transitions" },
// ];

// const Home = () => {
//   const featuredCourses = courses.filter((c) => c.featured).slice(0, 6);
//   const featuredTestimonials = testimonials;

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-navy-dark">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
//         </div>

//         <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-center lg:text-left order-2 lg:order-1">
//               <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 animate-fade-in">
//                 #1 DevOps Training Institute in Hyderabad
//               </span>
              
//               {/* Headline adjusted to stay on one line */}
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in whitespace-nowrap" style={{ animationDelay: "0.1s" }}>
//                 Learn, Grow and <span className="text-gradient-gold">Succeed</span>
//               </h1>

//               {/* Updated Long Description */}
//               <div className="text-base md:text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in space-y-4" style={{ animationDelay: "0.2s" }}>
//                 <p>
//                   Rudra’s Cloud Gurukul is a leading software training institute in Hyderabad, offering high-quality classroom and live online training with real-time projects at affordable prices. Our industry expert trainers, mentor students and professionals to master the latest technologies and achieve strong placement outcomes.
//                 </p>
//                 <p>
//                   Recognized as one of the best DevOps training institutes in Hyderabad, Rudra’s Cloud Gurukul delivers a well-structured DevOps course with hands-on experience, real-time scenarios, and personalized one-to-one guidance. Our training is suitable for beginners and experienced IT professionals alike.
//                 </p>
//               </div>

//               {/* Hero Social Icons - UPDATED LINKS */}
//               <div className="flex gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
//                 <button
//                   onClick={openWhatsApp}
//                   className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform"
//                   aria-label="WhatsApp"
//                 >
//                   <MessageCircle className="w-6 h-6" />
//                 </button>
//                 <a
//                   href="https://www.instagram.com/rudrascloud"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex items-center justify-center hover:scale-110 transition-transform"
//                   aria-label="Instagram"
//                 >
//                   <Instagram className="w-6 h-6" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin className="w-6 h-6" />
//                 </a>
//               </div>

//               <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
//                 <Link to="/courses">
//                   <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-gold">
//                     Explore Courses
//                   </Button>
//                 </Link>
//               </div>
//             </div>

//             {/* Right Form - Rectangular Shape */}
//             <div className="order-1 lg:order-2 animate-slide-in-right flex justify-center lg:justify-end">
//               <div className="w-full max-w-[400px]">
//                 <DemoForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
//               About Us
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//               Why Choose <span className="text-accent">Rudra's Cloud Gurukul?</span>
//             </h2>
//             <p className="text-muted-foreground leading-relaxed">
//               Rudra's Cloud Gurukul offers industry-focused training in cutting-edge
//               technologies such as DevOps with GCP, AWS and Azure, Power BI, Full Stack
//               Development, Data Science, GenAI and more. All training programs are
//               designed and delivered by certified professionals with real-time industry
//               experience.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Key Highlights */}
//       <section className="py-16 md:py-24 bg-muted">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
//               Key Highlights
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               What Makes Us Different
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {highlights.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
//                   <item.icon className="w-6 h-6 text-accent" />
//                 </div>
//                 <p className="text-foreground font-medium">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Career Transition Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-navy-dark relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
//           <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-12">
//             <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
//               Career Transformation
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
//               Cloud & DevOps Career Transition
//             </h2>
//             <p className="text-primary-foreground/80 max-w-2xl mx-auto">
//               Join 100+ successful professionals who transformed their careers with our
//               comprehensive DevOps and Cloud training programs.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//             {careerStats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10"
//               >
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <TrendingUp className="w-6 h-6 text-accent" />
//                   <span className="text-3xl md:text-4xl font-bold text-accent">
//                     {stat.value}
//                   </span>
//                 </div>
//                 <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link to="/get-started">
//               <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-gold">
//                 Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Featured Courses */}
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
//               Our Courses
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Featured Courses
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Industry-focused training programs designed for both beginners and
//               experienced professionals.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {featuredCourses.map((course) => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>

//           <div className="text-center">
//             <Link to="/courses">
//               <Button size="lg" variant="outline" className="font-semibold">
//                 View All Courses <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Students Work At */}
//       <section className="py-16 md:py-20 bg-muted">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
//               Our Alumni
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Our Students Work At
//             </h2>
//             <p className="text-muted-foreground">
//               Our alumni work at reputed tech organizations and promising startups
//             </p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {companies.map((company, index) => (
//               <div
//                 key={index}
//                 className="bg-card rounded-lg p-4 h-20 flex items-center justify-center border border-border hover:shadow-md transition-all duration-300"
//               >
//                 <img
//                   src={company.logo}
//                   alt={company.name}
//                   className="max-h-12 max-w-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Preview */}
//       <section className="py-16 md:py-24 bg-sky">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
//               Testimonials
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               What Our Students Say
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {featuredTestimonials.map((testimonial) => (
//               <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//             ))}
//           </div>

//           <div className="text-center">
//             <Link to="/testimonials">
//               <Button size="lg" variant="outline" className="font-semibold">
//                 Read More Reviews <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-accent to-gold-dark">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
//             Ready to Start Your Career Journey?
//           </h2>
//           <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
//             Join thousands of successful professionals who transformed their careers
//             with Rudra's Cloud Gurukul.
//           </p>
//           <Link to="/get-started">
//             <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-navy">
//               Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Home;


import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Linkedin, Users, Trophy, Briefcase, GraduationCap, Clock, TrendingUp, Building2, ArrowRight } from "lucide-react";
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
  { icon: Users, label: "Interactive live virtual classes by industry professionals" },
  { icon: Clock, label: "150+ hours of comprehensive learning modules" },
  { icon: GraduationCap, label: "Personalized 1:1 mentorship from experts" },
  { icon: Briefcase, label: "50+ real-world industry projects" },
  { icon: Trophy, label: "100% job placement assistance" },
  { icon: Building2, label: "Round-the-clock learner support" },
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
                  Rudra’s Cloud Gurukul is a leading software training institute in Hyderabad, offering high-quality classroom and live online training with real-time projects at affordable prices. Our industry expert trainers, mentor students and professionals to master the latest technologies and achieve strong placement outcomes.
                </p>
                <p>
                  Recognized as one of the best DevOps training institutes in Hyderabad, Rudra’s Cloud Gurukul delivers a well-structured DevOps course with hands-on experience, real-time scenarios, and personalized one-to-one guidance.
                </p>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <button
                  onClick={openWhatsApp}
                  className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
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

      {/* About Section - UPDATED WITH NEW TEXT */}
      <section className="py-16 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-8 py-3 bg-accent/10 text-accent rounded-full text-lg md:text-xl font-bold mb-8">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight">
              Why Choose <span className="text-accent">Rudra's Cloud Gurukul?</span>
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Rudra’s Cloud Gurukul offers industry-focused training in cutting-edge technologies 
                such as DevOps with GCP, AWS and Azure, Power BI, Full Stack Development, Data Science, 
                GenAI and more. All training programs are designed and delivered by certified 
                professionals with real-time industry experience, helping learners gain strong 
                conceptual knowledge and accelerate their career growth.
              </p>
              <p>
                With an updated, skill-driven, role-based curriculum and hands-on learning approach, 
                our programs are ideal for both students and working professionals looking to upskill 
                and achieve their career goals. Rudra’s Cloud Gurukul is committed to delivering a 
                high-quality classroom and live online training experience that prepares learners 
                for real-world challenges.
              </p>
              <p>
                The DevOps course covers core concepts, GCP DevOps, AWS DevOps and popular tools 
                such as Jenkins, Docker, Kubernetes, Git, Maven, Ansible, and Chef. With 
                comprehensive online and classroom options, Rudra’s Cloud Gurukul helps you gain 
                job-ready skills and succeed in today’s competitive IT market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-8 py-3 bg-accent/10 text-accent rounded-full text-lg md:text-xl font-bold mb-8">
              Key Highlights
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-8 bg-card rounded-2xl border border-border hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-white" />
                </div>
                <p className="text-lg md:text-xl text-foreground font-semibold leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Transition Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-navy-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              Career Transformation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Cloud & DevOps Career Transition
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Join 100+ successful professionals who transformed their careers with our
              comprehensive DevOps and Cloud training programs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {careerStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <span className="text-3xl md:text-4xl font-bold text-accent">
                    {stat.value}
                  </span>
                </div>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/get-started">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-gold">
                Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Courses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="font-semibold">
                View All Courses <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Students Work At */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Alumni
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Students Work At
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 h-20 flex items-center justify-center border border-border hover:shadow-md transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-sky">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials">
              <Button size="lg" variant="outline" className="font-semibold">
                Read More Reviews <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent to-gold-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who transformed their careers
            with Rudra's Cloud Gurukul.
          </p>
          <Link to="/get-started">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-navy">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;