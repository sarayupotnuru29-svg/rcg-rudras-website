import { MessageCircle, Instagram, Linkedin } from "lucide-react";

const FloatingSocial = () => {
  return (
    <div className="fixed right-4 bottom-24 md:bottom-8 z-40 flex flex-col gap-3">
      {/* WhatsApp / Phone Redirect */}
      <a
        href="https://wa.me/918897999766"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/rudrascloud"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Follow on Instagram"
      >
        <Instagram className="w-6 h-6 md:w-7 md:h-7" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Connect on LinkedIn"
      >
        <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
      </a>
    </div>
  );
};

export default FloatingSocial;