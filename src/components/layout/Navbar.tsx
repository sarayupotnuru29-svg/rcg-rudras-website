// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/newlogorcg.png";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Courses", path: "/courses" },
//   { name: "Testimonials", path: "/testimonials" },
//   { name: "Get Started", path: "/get-started" },
//   { name: "Contact Us", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
//         isScrolled || isOpen
//           ? "bg-white dark:bg-slate-900 shadow-lg" 
//           : "bg-transparent"
//       }`}
//     >
//       <nav className="container mx-auto px-4">
//         {/* Main Nav Container */}
//         <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-300">
          
//           {/* Logo Only Section */}
//           <Link to="/" className="flex items-center py-2">
//             <img
//               src={logo}
//               alt="RCG Rudra's Cloud Gurukul"
//               /* h-12 on mobile (48px), h-16 on desktop (64px) ensures it fits perfectly in the 80px/96px header */
//               className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
//                   location.pathname === link.path
//                     ? "bg-yellow-500 text-white shadow-sm"
//                     : "text-foreground hover:bg-muted hover:text-yellow-600"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-lg hover:bg-muted transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <X className="w-7 h-7 text-foreground" />
//               ) : (
//                 <Menu className="w-7 h-7 text-foreground" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Dropdown */}
//         <div
//           className={`lg:hidden absolute left-0 right-0 top-20 bg-white dark:bg-slate-900 border-b shadow-xl transition-all duration-300 ease-in-out ${
//             isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
//           }`}
//         >
//           <div className="flex flex-col p-6 gap-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 ${
//                   location.pathname === link.path
//                     ? "bg-yellow-500 text-white"
//                     : "text-foreground hover:bg-gray-100"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react"; // Added Phone icon
import logo from "@/assets/newlogorcg.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Get Started", path: "/get-started" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-white dark:bg-slate-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-300">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center py-2">
            <img
              src={logo}
              alt="RCG Rudra's Cloud Gurukul"
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-yellow-500 text-white shadow-sm"
                    : isScrolled 
                      ? "text-foreground hover:bg-muted hover:text-yellow-600"
                      : "text-white hover:bg-white/10" // Keeps text visible on dark hero background
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Added Phone Number for Desktop */}
            <a
              href="tel:+918897999766"
              className="ml-4 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current" />
              +91-889-799-9766
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Quick Call Icon for Mobile (Visible before opening menu) */}
            <a href="tel:+918897999766" className="text-yellow-500 p-2 border-2 border-yellow-500 rounded-full">
               <Phone className="w-5 h-5 fill-current" />
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-7 h-7 text-foreground" />
              ) : (
                <Menu className="w-7 h-7 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-20 bg-white dark:bg-slate-900 border-b shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-6 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-yellow-500 text-white"
                    : "text-foreground hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <hr className="my-2 border-gray-100" />
            
            {/* Added Phone Number for Mobile Menu */}
            <a
              href="tel:+918897999766"
              className="flex items-center justify-center gap-3 bg-yellow-500 text-white py-4 rounded-xl text-xl font-black shadow-lg"
            >
              <Phone className="w-6 h-6 fill-current" />
              +91-889-799-9766
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;