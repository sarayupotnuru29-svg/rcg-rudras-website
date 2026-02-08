// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";
// import logo from "@/assets/newlogorcg.png";
// import { openWhatsApp } from "@/lib/whatsapp";

// const Footer = () => {
//   // Helper function for the "Home" link specifically if already on Home page
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container mx-auto px-4 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="space-y-4">
//             <img
//               src={logo}
//               alt="RCG Rudra's Cloud Gurukul"
//               className="h-16 w-auto"
//             />
//             <p className="text-sm text-primary-foreground/80 leading-relaxed">
//               Rudra's Cloud Gurukul is a leading software training institute in
//               Hyderabad, offering high-quality classroom and live online training
//               with real-time projects.
//             </p>
//             <div className="flex gap-3">
//               {/* WhatsApp Redirection */}
//               <button
//                 onClick={openWhatsApp}
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
//                 aria-label="WhatsApp"
//               >
//                 <MessageCircle className="w-5 h-5" />
//               </button>
              
//               {/* Instagram Redirection */}
//               <a
//                 href="https://www.instagram.com/rudrascloud"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>

//               {/* LinkedIn Redirection */}
//               <a
//                 href="https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
//             <ul className="space-y-2">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "Courses", path: "/courses" },
//                 { name: "Testimonials", path: "/testimonials" },
//                 { name: "Get Started", path: "/get-started" },
//                 { name: "Contact Us", path: "/contact" },
//               ].map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     onClick={scrollToTop} // Ensures smooth scroll if already on the page
//                     className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Popular Courses */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-accent">
//               Popular Courses
//             </h3>
//             <ul className="space-y-2">
//               {[
//                 "GCP DevOps",
//                 "AWS DevOps",
//                 "Azure DevOps",
//                 "Multi Cloud DevOps",
//                 "Data Science",
//                 "Full Stack Development",
//               ].map((course) => (
//                 <li key={course}>
//                   <Link
//                     to="/courses"
//                     onClick={scrollToTop}
//                     className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
//                   >
//                     {course}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3">
//                 <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                 <a
//                   href="tel:+918897999766"
//                   className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
//                 >
//                   +91-889-799-9766
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                 <a
//                   href="mailto:rudrascloudgurukul@gmail.com"
//                   className="text-sm text-primary-foreground/80 hover:text-accent transition-colors break-all"
//                 >
//                   rudrascloudgurukul@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                 <span className="text-sm text-primary-foreground/80">
//                   Villa No 263, Jal Vayu Vihar,
//                   <br />
//                   KPHB Colony, Hyderabad – 500085
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
//           <p className="text-sm text-primary-foreground/60">
//             © {new Date().getFullYear()} RCG Rudra's Cloud Gurukul. All rights
//             reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle, Heart } from "lucide-react";
// import logo from "@/assets/newlogorcg.png";
// import { openWhatsApp } from "@/lib/whatsapp";

// const Footer = () => {
//   // Helper function for the "Home" link specifically if already on Home page
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container mx-auto px-4 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="space-y-4">
//             <img
//               src={logo}
//               alt="RCG Rudra's Cloud Gurukul"
//               className="h-16 w-auto"
//             />
//             <p className="text-sm text-primary-foreground/80 leading-relaxed">
//               Rudra's Cloud Gurukul is a leading software training institute in
//               Hyderabad, offering high-quality classroom and live online training
//               with real-time projects.
//             </p>
//             <div className="flex gap-3">
//               {/* WhatsApp Redirection */}
//               <button
//                 onClick={openWhatsApp}
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
//                 aria-label="WhatsApp"
//               >
//                 <MessageCircle className="w-5 h-5" />
//               </button>
              
//               {/* Instagram Redirection */}
//               <a
//                 href="https://www.instagram.com/rudrascloud"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>

//               {/* LinkedIn Redirection */}
//               <a
//                 href="https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
//             <ul className="space-y-2">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "Courses", path: "/courses" },
//                 { name: "Testimonials", path: "/testimonials" },
//                 { name: "Get Started", path: "/get-started" },
//                 { name: "Contact Us", path: "/contact" },
//               ].map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     onClick={scrollToTop}
//                     className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Popular Courses */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-accent">
//               Popular Courses
//             </h3>
//             <ul className="space-y-2">
//               {[
//                 "GCP DevOps",
//                 "AWS DevOps",
//                 "Azure DevOps",
//                 "Multi Cloud DevOps",
//                 "Data Science",
//                 "Full Stack Development",
//               ].map((course) => (
//                 <li key={course}>
//                   <Link
//                     to="/courses"
//                     onClick={scrollToTop}
//                     className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
//                   >
//                     {course}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3">
//                 <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                 <a
//                   href="tel:+918897999766"
//                   className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
//                 >
//                   +91-889-799-9766
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                 <a
//                   href="mailto:rudrascloudgurukul@gmail.com"
//                   className="text-sm text-primary-foreground/80 hover:text-accent transition-colors break-all"
//                 >
//                   rudrascloudgurukul@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                 <span className="text-sm text-primary-foreground/80">
//                   Villa No 263, Jal Vayu Vihar,
//                   <br />
//                   KPHB Colony, Hyderabad – 500085
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright and Attribution */}
//         <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center space-y-4">
//           <p className="text-sm text-primary-foreground/60">
//             © {new Date().getFullYear()} RCG Rudra's Cloud Gurukul. All rights
//             reserved.
//           </p>
          
//           {/* StaffArc Attribution */}
//           <div className="flex justify-center items-center gap-1 text-sm text-primary-foreground/60">
//             Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
//             <a
//               href="https://staffarc.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 text-orange-500 hover:underline font-medium"
//             >
//               <img
//                 src="https://www.staffarc.in/images/Staffarc-logo.png"
//                 alt="StaffArc logo"
//                 className="h-5 w-5 object-contain"
//               />
//               StaffArc
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import { Link } from "react-router-dom";
// import { Instagram, Linkedin, MessageCircle, Heart, Youtube } from "lucide-react";
// import logo from "@/assets/newlogorcg.png";
// import { openWhatsApp } from "@/lib/whatsapp";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
//       <div className="container mx-auto px-4 py-12">
//         {/* Main Footer Row: Logo | Quick Links | Socials */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
//           {/* Brand/Logo Section */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]">
//             <img
//               src={logo}
//               alt="RCG Rudra's Cloud Gurukul"
//               className="h-14 w-auto mb-2"
//             />
//             <p className="text-xs italic text-primary-foreground/70">
//               Your Cloud Journey Starts Here...
//             </p>
//           </div>

//           {/* Centered Quick Links Section */}
//           <div className="flex flex-col items-center">
//             <h3 className="text-lg font-bold mb-4 font-serif">Quick Links</h3>
//             <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "About Us", path: "/about" },
//                 { name: "Courses", path: "/courses" },
//                 { name: "Contact", path: "/contact" },
//                 { name: "Testimonials", path: "/testimonials" },
//               ].map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     onClick={scrollToTop}
//                     className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors underline-offset-4 hover:underline"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Icons Section */}
//           <div className="flex items-center gap-4 min-w-[200px] justify-center md:justify-end">
//             {/* YouTube - Matching Reference Style */}
//             <a
//               href="#"
//               target="_blank"
//               className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
//               aria-label="YouTube"
//             >
//               <Youtube className="w-5 h-5" />
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/rudrascloud"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
//               aria-label="Instagram"
//             >
//               <Instagram className="w-5 h-5" />
//             </a>

//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa"
//               target="_blank"
//               className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* Divider Line */}
//         <hr className="my-8 border-primary-foreground/10" />

//         {/* Copyright and Attribution */}
//         <div className="flex flex-col items-center space-y-2 text-primary-foreground/60 text-sm">
//           <p>
//             © {new Date().getFullYear()} RCG Rudra's Cloud Gurukul. All rights reserved.
//           </p>
          
//           <div className="flex items-center gap-1">
//             Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
//             <a
//               href="https://staffarc.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 font-bold text-white hover:text-accent transition-colors"
//             >
//               StaffArc
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageCircle, Heart, Youtube } from "lucide-react";
import logo from "@/assets/newlogorcg.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Row: Logo | Quick Links | Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]">
            <img
              src={logo}
              alt="RCG Rudra's Cloud Gurukul"
              className="h-14 w-auto mb-2"
            />
            <p className="text-xs italic text-primary-foreground/70">
              Your Cloud Journey Starts Here...
            </p>
          </div>

          {/* Centered Quick Links Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4 font-serif">Quick Links</h3>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Contact", path: "/contact" },
                { name: "Testimonials", path: "/testimonials" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors underline-offset-4 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center gap-4 min-w-[200px] justify-center md:justify-end">
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/rudrascloud"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa"
              target="_blank"
              className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-8 border-primary-foreground/10" />

        {/* Copyright and Attribution */}
        <div className="flex flex-col items-center space-y-4 text-primary-foreground/60 text-sm">
          <p>
            © {new Date().getFullYear()} RCG Rudra's Cloud Gurukul. All rights reserved.
          </p>
          
          {/* Reference Image Styled Attribution with Logo */}
          <div className="flex items-center justify-center text-base font-medium">
            <span className="text-white/80">Made with</span>
            <Heart className="inline h-5 w-5 text-[#FF4D4D] mx-2 fill-[#FF4D4D]" />
            <span className="text-white/80 mr-2">by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group transition-opacity hover:opacity-80"
            >
              {/* StaffArc Logo Implementation */}
              <img 
                src="src/assets/Staffarc-logo.png" // REPLACE WITH YOUR LOCAL LOGO PATH
                alt="StaffArc Logo" 
                className="h-6 w-auto"
              />
              <span className="font-bold text-[#FF7A00] text-lg">StaffArc</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;