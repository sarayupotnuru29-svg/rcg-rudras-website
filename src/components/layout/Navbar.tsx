// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/apple-touch-icon.png";

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

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <nav className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <img
//               src={logo}
//               alt="RCG Rudra's Cloud Gurukul"
//               className="h-12 md:h-14 w-auto"
//             />
//             <div className="hidden sm:flex flex-col">
//               <span className="text-sm md:text-base font-bold text-foreground leading-tight">RCG</span>
//               <span className="text-xs md:text-sm font-medium text-accent leading-tight">Rudra's Cloud Gurukul</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   location.pathname === link.path
//                     ? "bg-accent text-accent-foreground"
//                     : "text-foreground hover:bg-muted hover:text-accent"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <X className="w-6 h-6 text-foreground" />
//             ) : (
//               <Menu className="w-6 h-6 text-foreground" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${
//             isOpen ? "max-h-96 pb-4" : "max-h-0"
//           }`}
//         >
//           <div className="flex flex-col gap-1 pt-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   location.pathname === link.path
//                     ? "bg-accent text-accent-foreground"
//                     : "text-foreground hover:bg-muted"
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
import { Menu, X } from "lucide-react";
import logo from "@/assets/apple-touch-icon.png";

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

  // Close mobile menu when route changes
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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="RCG Rudra's Cloud Gurukul"
              className="h-10 md:h-14 w-auto"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-sm md:text-base font-bold text-foreground leading-tight">RCG</span>
              <span className="text-xs md:text-sm font-medium text-accent leading-tight">Rudra's Cloud Gurukul</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-yellow-500 text-white"
                    : "text-foreground hover:bg-muted hover:text-yellow-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-16 bg-white dark:bg-slate-900 border-b shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-yellow-500 text-white"
                    : "text-foreground hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;