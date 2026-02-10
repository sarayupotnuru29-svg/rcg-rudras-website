// import { useState } from "react";
// import Layout from "@/components/layout/Layout";
// import CourseCard from "@/components/courses/CourseCard";
// import { courses, courseCategories } from "@/lib/courses";

// const Courses = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredCourses =
//     activeCategory === "all"
//       ? courses
//       : courses.filter((course) => course.category === activeCategory);

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-navy-dark">
//         <div className="container mx-auto px-4 text-center">
//           {/* Label Font Size */}
//           <span className="inline-block px-6 py-2 bg-accent/30 text-accent rounded-full text-xl md:text-2xl font-bold mb-6 font-sans drop-shadow-md">
//             Our Courses
//           </span>
          
//           {/* Main Heading: Entire line set to yellow (text-accent) */}
//           <h1 className="text-2xl md:text-4xl font-semibold font-serif text-accent mb-6">
//             Transform Your Career with Industry-Ready Skills
//           </h1>

//           <p className="text-base md:text-lg font-sans text-white max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
//             Choose from our comprehensive range of courses designed by industry
//             experts. Each course includes hands-on projects, mentorship, and
//             placement support.
//           </p>
//         </div>
//       </section>

//       {/* Course Filters */}
//       <section className="py-8 bg-muted sticky top-16 md:top-20 z-30 border-b border-border">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-2">
//             {courseCategories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 font-sans ${
//                   activeCategory === category.id
//                     ? "bg-accent text-accent-foreground shadow-gold scale-105"
//                     : "bg-card text-foreground hover:bg-accent hover:text-white border border-border"
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Courses Grid */}
//       <section className="py-12 md:py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCourses.map((course) => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>

//           {filteredCourses.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-foreground font-sans font-medium">
//                 No courses found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Why Choose Our Courses */}
//       <section className="py-16 md:py-24 bg-muted">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-semibold font-serif text-foreground mb-4">
//               Why Choose Our Courses?
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "Industry Experts",
//                 description: "Learn from certified professionals with 10+ years of experience",
//               },
//               {
//                 title: "Hands-on Projects",
//                 description: "Work on 50+ real-world projects to build your portfolio",
//               },
//               {
//                 title: "Placement Support",
//                 description: "100% placement assistance with interview preparation",
//               },
//               {
//                 title: "Flexible Learning",
//                 description: "Choose between classroom and live online training options",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-xl hover:border-accent transition-all duration-300"
//               >
//                 <h3 className="text-lg font-black font-sans text-foreground mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm font-sans text-foreground font-bold leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Courses;


import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/courses/CourseCard";
import { courses, courseCategories } from "@/lib/courses";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-navy-dark">
        <div className="container mx-auto px-4 text-center">
          {/* Label Font Size */}
          <span className="inline-block px-6 py-2 bg-accent/30 text-accent rounded-full text-xl md:text-2xl font-bold mb-6 font-sans drop-shadow-md">
            Our Courses
          </span>
          
          {/* Main Heading: Entire line set to yellow (text-accent) */}
          <h1 className="text-2xl md:text-4xl font-semibold font-serif text-accent mb-6">
            Transform Your Career with Industry-Ready Skills
          </h1>

          <p className="text-base md:text-lg font-sans text-white max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Choose from our comprehensive range of courses designed by industry
            experts. Each course includes hands-on projects, mentorship, and
            placement support.
          </p>
        </div>
      </section>

      {/* Course Filters */}
      <section className="py-8 bg-muted sticky top-16 md:top-20 z-30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 font-sans ${
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground shadow-gold scale-105"
                    : "bg-card text-foreground hover:bg-accent hover:text-white border border-border"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground font-sans font-medium">
                No courses found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses - Updated Heading with Dual Shade */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-foreground mb-4">
              Why Choose Our <span className="text-accent">Courses</span>?
            </h2>
            {/* Optional decorative line to match other sections */}
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-accent/30" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Industry Experts",
                description: "Learn from certified professionals with 10+ years of experience",
              },
              {
                title: "Hands-on Projects",
                description: "Work on 50+ real-world projects to build your portfolio",
              },
              {
                title: "Placement Support",
                description: "100% placement assistance with interview preparation",
              },
              {
                title: "Flexible Learning",
                description: "Choose between classroom and live online training options",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-xl hover:border-accent transition-all duration-300"
              >
                <h3 className="text-lg font-black font-sans text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-foreground font-bold leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;