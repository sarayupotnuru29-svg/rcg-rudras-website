// import Layout from "@/components/layout/Layout";
// import { Phone, MapPin, Instagram, MessageCircle, Linkedin, Facebook } from "lucide-react";

// const Contact = () => {
//   const contactInfo = [
//     {
//       title: "Visit Us",
//       icon: <MapPin className="w-6 h-6 text-black" />,
//       iconBg: "bg-[#F4B41A]",
//       content: (
//         <p className="text-xs leading-tight">
//           Villa No 263, Jal Vayu Vihar,
//           <br />
//           KPHB Colony, Hyderabad – 500085
//         </p>
//       ),
//       linkText: "Open Maps →",
//       link: "https://share.google/LSUhcq8WCqeJ9UA9T",
//     },
//     {
//       title: "Call Us",
//       icon: <Phone className="w-6 h-6 text-black" />,
//       iconBg: "bg-[#F4B41A]",
//       content: (
//         <div className="space-y-1">
//           <p className="font-semibold text-base">+91 88979 99766</p>
//           <p className="text-[10px] opacity-70">Mon - Sat: 9 AM - 6 PM</p>
//         </div>
//       ),
//       linkText: "Call Now →",
//       link: "tel:+918897999766",
//     },
//     {
//       title: "WhatsApp",
//       icon: <MessageCircle className="w-6 h-6 text-white" />,
//       iconBg: "bg-[#25D366]",
//       content: (
//         <p className="text-xs leading-tight">
//           Direct course <br /> inquiries!
//         </p>
//       ),
//       linkText: "Chat Now →",
//       link: "https://wa.me/918897999766",
//     },
//     {
//       title: "Facebook",
//       icon: <Facebook className="w-6 h-6 text-white" />,
//       iconBg: "bg-[#1877F2]",
//       content: (
//         <p className="text-xs leading-tight">
//           Join our <br /> community!
//         </p>
//       ),
//       linkText: "View Profile →",
//       link: "https://www.facebook.com/share/1AAaJ116wm/",
//     },
//     {
//       title: "Instagram",
//       icon: <Instagram className="w-6 h-6 text-white" />,
//       iconBg: "bg-gradient-to-tr from-[#FFB300] via-[#FF005C] to-[#9C27B0]",
//       content: <p className="font-semibold text-base">@rudrascloud</p>,
//       linkText: "Open App →",
//       link: "https://www.instagram.com/rudrascloud",
//     },
//     {
//       title: "LinkedIn",
//       icon: <Linkedin className="w-6 h-6 text-white" />,
//       iconBg: "bg-[#0077B5]",
//       content: (
//         <p className="text-xs leading-tight">
//           Professional <br /> updates!
//         </p>
//       ),
//       linkText: "Connect →",
//       link: "https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa",
//     },
//   ];

//   return (
//     <Layout>
//       {/* Contact Section */}
//       <section className="min-h-screen bg-[#112240] text-white py-16 px-4">
//         <div className="container mx-auto max-w-7xl">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <span className="uppercase tracking-widest text-[#F4B41A] font-bold text-sm mb-2 block">
//               GET IN TOUCH
//             </span>
//             <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
//               Contact <span className="text-gradient-gold">Us</span>
//             </h1>
//             <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
//               Have questions or want to enroll? Reach out through any of our channels.
//             </p>
//           </div>

//           {/* Square Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
//             {contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1a2f50] border border-white/5 rounded-xl p-4 flex flex-col items-center justify-between text-center hover:bg-[#1e355a] hover:-translate-y-1 transition-all duration-300 aspect-square shadow-xl"
//               >
//                 <div
//                   className={`${info.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-lg flex-shrink-0`}
//                 >
//                   {info.icon}
//                 </div>

//                 <div className="flex-grow flex flex-col justify-center">
//                   <h3 className="text-sm font-serif font-bold mb-1">{info.title}</h3>
//                   <div className="text-blue-100/90">
//                     {info.content}
//                   </div>
//                 </div>

//                 <a
//                   href={info.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#F4B41A] text-[11px] font-bold hover:text-white transition-colors mt-2"
//                 >
//                   {info.linkText}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="bg-white py-12">
//         <div className="container mx-auto px-4">
//           <a 
//             href="https://share.google/LSUhcq8WCqeJ9UA9T" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="block rounded-3xl overflow-hidden shadow-2xl border-4 border-[#112240]/10 transition-transform hover:scale-[1.01]"
//           >
//             {/* The iframe below is configured to point exactly to Rudra's Cloud Gurukul coordinates */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.282806655866!2d78.39705257593258!3d17.4940026997126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f464800001%3A0xe213076a0c0b34d9!2sRudra&#39;s%20Cloud%20Gurukul!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//               width="100%"
//               height="450"
//               style={{ border: 0, pointerEvents: 'none' }} 
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Rudra's Cloud Gurukul Location"
//             />
//           </a>
//           <p className="text-center mt-4 text-sm text-gray-500 font-sans">
//             Click the map to view the exact location in Google Maps
//           </p>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Contact;

import Layout from "@/components/layout/Layout";
import { Phone, MapPin, Instagram, MessageCircle, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      title: "Visit Us",
      icon: <MapPin className="w-6 h-6 text-black" />,
      iconBg: "bg-[#F4B41A]",
      content: (
        <p className="text-xs leading-tight">
          Villa No 263, Jal Vayu Vihar,
          <br />
          KPHB Colony, Hyderabad – 500085
        </p>
      ),
      linkText: "Open Maps →",
      link: "https://share.google/LSUhcq8WCqeJ9UA9T",
    },
    {
      title: "Call Us",
      icon: <Phone className="w-6 h-6 text-black" />,
      iconBg: "bg-[#F4B41A]",
      content: (
        <div className="space-y-1">
          <p className="font-semibold text-base">+91 88979 99766</p>
          <p className="text-[10px] opacity-70">Mon - Sat: 9 AM - 6 PM</p>
        </div>
      ),
      linkText: "Call Now →",
      link: "tel:+918897999766",
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      iconBg: "bg-[#25D366]",
      content: (
        <p className="text-xs leading-tight">
          Direct course <br /> inquiries!
        </p>
      ),
      linkText: "Chat Now →",
      link: "https://wa.me/918897999766",
    },
    {
      title: "Facebook",
      icon: <Facebook className="w-6 h-6 text-white" />,
      iconBg: "bg-[#1877F2]",
      content: (
        <p className="text-xs leading-tight">Join our community!</p>
      ),
      linkText: "View Profile →",
      link: "https://www.facebook.com/share/1AAaJ116wm/",
    },
    {
      title: "Instagram",
      icon: <Instagram className="w-6 h-6 text-white" />,
      iconBg: "bg-gradient-to-tr from-[#FFB300] via-[#FF005C] to-[#9C27B0]",
      content: <p className="font-semibold text-base">@rudrascloud</p>,
      linkText: "Open App →",
      link: "https://www.instagram.com/rudrascloud",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-6 h-6 text-white" />,
      iconBg: "bg-[#0077B5]",
      content: (
        <p className="text-xs leading-tight">Professional updates!</p>
      ),
      linkText: "Connect →",
      link: "https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa",
    },
  ];

  return (
    <Layout>
      {/* Contact Section */}
      <section className="min-h-screen bg-[#112240] text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-[#F4B41A] font-bold text-sm mb-2 block">
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
              Have questions or want to enroll? Reach out through any of our channels.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#1a2f50] border border-white/5 rounded-xl p-4 flex flex-col items-center justify-between text-center hover:bg-[#1e355a] hover:-translate-y-1 transition-all duration-300 aspect-square shadow-xl"
              >
                <div className={`${info.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-lg flex-shrink-0`}>
                  {info.icon}
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-sm font-serif font-bold mb-1">{info.title}</h3>
                  <div className="text-blue-100/90">{info.content}</div>
                </div>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4B41A] text-[11px] font-bold hover:text-white transition-colors mt-2"
                >
                  {info.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section with Info Side Panel */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row">
            
            {/* Side Info Panel */}
            <div className="md:w-1/3 bg-[#112240] p-8 text-white flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-bold mb-4 text-[#F4B41A]">Visit Our Office</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#F4B41A] shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-blue-200">Address</h4>
                    <p className="text-sm leading-relaxed mt-1">
                      Villa No 263, Jal Vayu Vihar,<br />
                      KPHB Colony, Hyderabad – 500085
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#F4B41A] shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-blue-200">Call Us</h4>
                    <p className="text-sm mt-1">+91 88979 99766</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://share.google/LSUhcq8WCqeJ9UA9T" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 bg-[#F4B41A] text-black text-center py-3 rounded-lg font-bold hover:bg-white transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* Map Area */}
            <div className="md:w-2/3 relative">
              <a 
                href="https://share.google/LSUhcq8WCqeJ9UA9T" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-[450px] w-full"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.352425484556!2d78.3917178!3d17.490666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f37e1b525f%3A0xc3f75743452f1e62!2sRudra&#39;s%20Cloud%20Gurukul!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rudra's Cloud Gurukul Location"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;