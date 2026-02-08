// import { Button } from "@/components/ui/button";
// import { Course } from "@/lib/courses";
// import { redirectToWhatsAppCourse } from "@/lib/whatsapp";

// interface CourseCardProps {
//   course: Course;
// }

// const CourseCard = ({ course }: CourseCardProps) => {
//   const Icon = course.icon;

//   return (
//     <div className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
//       {/* Image Header */}
//       <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-border">
//         {course.image ? (
//           <img 
//             src={course.image} 
//             alt={course.title}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center">
//             <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
//               <Icon className="w-8 h-8 text-accent" />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Content Area */}
//       <div className="p-6 pt-5 bg-white">
//         <div className="mb-4">
//           {/* THE SUBTITLE: Yellow lettering on Dark Background */}
//           <span className="inline-block px-3 py-1.5 text-[11px] font-bold bg-slate-950 text-yellow-400 rounded-md mb-3 uppercase tracking-wider shadow-sm">
//             {course.subtitle}
//           </span>
          
//           <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors leading-tight">
//             {course.title}
//           </h3>
//         </div>

//         {/* Course Description */}
//         <p className="text-sm text-slate-600 font-medium mb-6 line-clamp-3 leading-relaxed">
//           {course.description}
//         </p>

//         {/* Action Button */}
//         <Button
//           onClick={() => redirectToWhatsAppCourse(course.title)}
//           className="w-full bg-slate-900 text-white hover:bg-yellow-500 hover:text-black font-bold h-12 rounded-lg transition-all duration-300 shadow-md"
//         >
//           Get Started
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;




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
      <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-border">
        {course.image ? (
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
              <Icon className="w-8 h-8 text-accent" />
            </div>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 pt-5 bg-white text-center flex flex-col items-center">
        <div className="mb-4">
          {/* SUBTITLE: Yellow lettering on White Background bubble */}
          <span className="inline-block px-5 py-2 text-[13px] font-black bg-white text-[#f59e0b] rounded-full mb-3 uppercase tracking-widest shadow-sm border-2 border-[#fef3c7]">
            {course.subtitle}
          </span>
          
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors leading-tight">
            {course.title}
          </h3>
        </div>

        {/* Course Description */}
        <p className="text-sm text-slate-600 font-medium mb-6 line-clamp-3 leading-relaxed">
          {course.description}
        </p>

        {/* BUTTON: Kept as Dark Background with Yellow Text for high visibility */}
        <Button
          onClick={() => redirectToWhatsAppCourse(course.title)}
          className="w-full bg-[#0f172a] text-[#fbbf24] hover:bg-slate-800 hover:scale-[1.02] font-black h-12 rounded-xl transition-all duration-300 shadow-lg uppercase tracking-wider border border-slate-700"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;