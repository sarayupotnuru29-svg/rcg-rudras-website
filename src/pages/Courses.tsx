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
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-navy-dark">
        <div className="container mx-auto px-4 text-center">
          {/* Increased text size to 3xl/5xl and made it bold */}
          <span className="inline-block px-8 py-4 bg-accent/20 text-accent rounded-full text-3xl md:text-5xl font-bold mb-8">
            Our Courses
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Transform Your Career with{" "}
            <span className="text-gradient-gold">Industry-Ready Skills</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground shadow-gold"
                    : "bg-card text-foreground hover:bg-accent/10 border border-border"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No courses found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Courses?
            </h2>
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
                className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;