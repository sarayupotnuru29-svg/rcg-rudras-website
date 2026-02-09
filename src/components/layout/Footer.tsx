// import { Link } from "react-router-dom";
// import { 
//   Phone, MapPin, Instagram, MessageCircle, Linkedin, 
//   Heart, Youtube 
// } from "lucide-react";
// import staffArcLogo from "@/assets/Staffarc-logo.png";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const footerContactCards = [
//     {
//       title: "Visit Us",
//       icon: <MapPin className="w-5 h-5 text-black" />,
//       iconBg: "bg-[#F4B41A]",
//       content: "KPHB Colony, Hyderabad",
//       link: "https://maps.google.com",
//     },
//     {
//       title: "Call Us",
//       icon: <Phone className="w-5 h-5 text-black" />,
//       iconBg: "bg-[#F4B41A]",
//       content: "+91 88979 99766",
//       link: "tel:+918897999766",
//     },
//     {
//       title: "WhatsApp",
//       icon: <MessageCircle className="w-5 h-5 text-white" />,
//       iconBg: "bg-[#25D366]",
//       content: "Quick Inquiries",
//       link: "https://wa.me/918897999766",
//     },
//     {
//       title: "Instagram",
//       icon: <Instagram className="w-5 h-5 text-white" />,
//       iconBg: "bg-gradient-to-tr from-[#FFB300] via-[#FF005C] to-[#9C27B0]",
//       content: "@rudrascloud",
//       link: "https://www.instagram.com/rudrascloud",
//     },
//     {
//       title: "LinkedIn",
//       icon: <Linkedin className="w-5 h-5 text-white" />,
//       iconBg: "bg-[#0077B5]",
//       content: "Connect Now",
//       link: "https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa",
//     },
//   ];

//   return (
//     <footer className="bg-[#112240] text-white pt-16 pb-8 border-t border-white/5">
//       <div className="container mx-auto px-4 max-w-7xl">
        
//         {/* Remodeled Contact Pattern Grid - Now at the Top */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
//           {footerContactCards.map((info, index) => (
//             <a
//               key={index}
//               href={info.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#1a2f50] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-[#1e355a] transition-all duration-300 group"
//             >
//               <div className={`${info.iconBg} w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
//                 {info.icon}
//               </div>
//               <h4 className="text-sm font-serif font-semibold mb-1">{info.title}</h4>
//               <p className="text-xs text-blue-100/70 font-sans">{info.content}</p>
//             </a>
//           ))}
//         </div>

//         {/* Quick Links Row */}
//         <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 py-6 border-y border-white/5">
//           {[
//             { name: "Home", path: "/" },
//             { name: "About Us", path: "/about" },
//             { name: "Courses", path: "/courses" },
//             { name: "Contact", path: "/contact" },
//             { name: "Testimonials", path: "/testimonials" },
//           ].map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               onClick={scrollToTop}
//               className="text-sm font-medium font-sans text-blue-100/80 hover:text-[#F4B41A] transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Copyright and Attribution */}
//         <div className="flex flex-col items-center space-y-6">
//           <p className="font-sans text-xs opacity-60">
//             © {new Date().getFullYear()} RCG Rudra's Cloud Gurukul. All rights reserved.
//           </p>
          
//           <div className="flex items-center justify-center text-sm">
//             <span className="text-white/80 font-sans">Made with</span>
//             <Heart className="inline h-4 w-4 text-[#FF4D4D] mx-2 fill-[#FF4D4D]" />
//             <span className="text-white/80 font-sans mr-3">by</span>
//             <a
//               href="https://staffarc.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 group transition-all"
//             >
//               <img 
//                 src={staffArcLogo} 
//                 alt="StaffArc Logo" 
//                 className="h-5 w-auto brightness-110 group-hover:contrast-125 transition-all"
//               />
//               <span className="font-black text-[#FF7A00] text-lg font-sans drop-shadow-sm">StaffArc</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { 
  Phone, MapPin, Instagram, MessageCircle, Linkedin, 
  Heart, Youtube, Facebook 
} from "lucide-react";
import staffArcLogo from "@/assets/Staffarc-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerContactCards = [
    {
      title: "Visit Us",
      icon: <MapPin className="w-5 h-5 text-black" />,
      iconBg: "bg-[#F4B41A]",
      content: "KPHB Colony, Hyderabad",
      link: "https://maps.google.com",
    },
    {
      title: "Call Us",
      icon: <Phone className="w-5 h-5 text-black" />,
      iconBg: "bg-[#F4B41A]",
      content: "+91 88979 99766",
      link: "tel:+918897999766",
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5 text-white" />,
      iconBg: "bg-[#25D366]",
      content: "Quick Inquiries",
      link: "https://wa.me/918897999766",
    },
    {
      title: "Facebook",
      icon: <Facebook className="w-5 h-5 text-white" />,
      iconBg: "bg-[#1877F2]",
      content: "Join Community",
      link: "https://www.facebook.com/share/1AAaJ116wm/",
    },
    {
      title: "Instagram",
      icon: <Instagram className="w-5 h-5 text-white" />,
      iconBg: "bg-gradient-to-tr from-[#FFB300] via-[#FF005C] to-[#9C27B0]",
      content: "@rudrascloud",
      link: "https://www.instagram.com/rudrascloud",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 text-white" />,
      iconBg: "bg-[#0077B5]",
      content: "Connect Now",
      link: "https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa",
    },
  ];

  return (
    <footer className="bg-[#112240] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Remodeled Contact Pattern Grid - Updated to 6 columns for desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {footerContactCards.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a2f50] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-[#1e355a] transition-all duration-300 group"
            >
              <div className={`${info.iconBg} w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {info.icon}
              </div>
              <h4 className="text-sm font-serif font-semibold mb-1">{info.title}</h4>
              <p className="text-xs text-blue-100/70 font-sans">{info.content}</p>
            </a>
          ))}
        </div>

        {/* Quick Links Row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 py-6 border-y border-white/5">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Courses", path: "/courses" },
            { name: "Contact", path: "/contact" },
            { name: "Testimonials", path: "/testimonials" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={scrollToTop}
              className="text-sm font-medium font-sans text-blue-100/80 hover:text-[#F4B41A] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright and Attribution */}
        <div className="flex flex-col items-center space-y-6">
          <p className="font-sans text-xs opacity-60">
            © {new Date().getFullYear()} RCG Rudra's Cloud Gurukul. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center text-sm">
            <span className="text-white/80 font-sans">Made with</span>
            <Heart className="inline h-4 w-4 text-[#FF4D4D] mx-2 fill-[#FF4D4D]" />
            <span className="text-white/80 font-sans mr-3">by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transition-all"
            >
              <img 
                src={staffArcLogo} 
                alt="StaffArc Logo" 
                className="h-5 w-auto brightness-110 group-hover:contrast-125 transition-all"
              />
              <span className="font-black text-[#FF7A00] text-lg font-sans drop-shadow-sm">StaffArc</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;