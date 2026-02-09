import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo2.jpeg";

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
        {/* Main Nav Container */}
        <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-300">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center py-2">
            <img
              src={logo}
              alt="RCG Rudra's Cloud Gurukul"
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation & Contact */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-yellow-500 text-white shadow-sm"
                      : "text-foreground hover:bg-muted hover:text-yellow-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Phone Number */}
            <a 
              href="tel:+918897999766" 
              className="flex items-center gap-2 px-4 py-2 border-l border-gray-200 dark:border-gray-700 text-[#0a192f] dark:text-white font-bold hover:text-yellow-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-yellow-500" />
              <span>+91-889-799-9766</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
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
            {/* Mobile Phone Number */}
            <a 
              href="tel:+918897999766" 
              className="flex items-center gap-3 px-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-lg text-[#0a192f] dark:text-white font-bold mb-2"
            >
              <Phone className="w-5 h-5 text-yellow-500" />
              <span>+91-889-799-9766</span>
            </a>

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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;