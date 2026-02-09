// import Layout from "@/components/layout/Layout";
// import TestimonialCard from "@/components/testimonials/TestimonialCard";
// import { testimonials } from "@/lib/testimonials";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Testimonials = () => {
//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="py-16 md:py-24 bg-sky">
//         <div className="container mx-auto px-4 text-center">
//           {/* Updated font to font-serif and font-semibold to match reference style */}
//           <h1 className="text-3xl md:text-5xl font-semibold font-serif text-foreground mb-6">
//             Our Students Testimonials
//           </h1>
//           {/* Decorative line */}
//           <div className="flex items-center justify-center gap-2 mb-8">
//             <div className="w-8 h-1 bg-accent rounded"></div>
//             <div className="w-2 h-2 bg-accent rounded-full"></div>
//             <div className="w-8 h-1 bg-accent rounded"></div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Grid */}
//       <section className="py-12 md:py-20 bg-sky">
//         <div className="container mx-auto px-4">
//           {/* Navigation arrows and grid */}
//           <div className="relative">
//             {/* Left Arrow */}
//             <button className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md items-center justify-center hover:bg-muted transition-colors z-10">
//               <ChevronLeft className="w-6 h-6 text-muted-foreground" />
//             </button>
            
//             {/* Right Arrow */}
//             <button className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md items-center justify-center hover:bg-muted transition-colors z-10">
//               <ChevronRight className="w-6 h-6 text-muted-foreground" />
//             </button>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {testimonials.map((testimonial) => (
//                 <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-secondary to-navy-dark">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { value: "500+", label: "Students Trained" },
//               { value: "100+", label: "Career Transitions" },
//               { value: "95%", label: "Satisfaction Rate" },
//               { value: "50+", label: "Hiring Partners" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
//                   {stat.value}
//                 </div>
//                 <p className="text-primary-foreground/80 text-sm">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Testimonials;


import { useState } from "react";
import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Get the 3 testimonials to display based on the current index
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-sky">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold font-serif text-foreground mb-6">
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

      {/* Testimonials Slider Section */}
      <section className="py-12 md:py-20 bg-sky">
        <div className="container mx-auto px-4">
          <div className="relative max-w-7xl mx-auto px-12">
            
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all z-20 ${
                currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-accent hover:text-white"
              }`}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= testimonials.length}
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all z-20 ${
                currentIndex + itemsPerPage >= testimonials.length ? "opacity-30 cursor-not-allowed" : "hover:bg-accent hover:text-white"
              }`}
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Grid Area - Showing 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
              {visibleTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="animate-fade-in">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            
            {/* Pagination Dots (Optional but helpful) */}
            <div className="flex justify-center mt-10 gap-2">
              {Array.from({ length: testimonials.length - itemsPerPage + 1 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all ${currentIndex === i ? "w-8 bg-accent" : "w-2 bg-slate-300"}`}
                />
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