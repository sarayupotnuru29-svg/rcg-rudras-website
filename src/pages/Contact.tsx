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
//       link: "https://maps.google.com/?q=Villa+No+263,Jal+Vayu+Vihar,KPHB+Colony,Hyderabad",
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
//               Contact Us
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
//                 {/* Icon Circle */}
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
//           <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#112240]/10">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.275084920404!2d78.39708687516515!3d17.494389983410712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9160533036c1%3A0xc3c9428c067e2a9!2sJal%20Vayu%20Vihar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1700000000000"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               title="RCG Location"
//             />
//           </div>
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
      link: "https://maps.app.goo.gl/LSUhcq8WCqeJ9UA9T",
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
        <p className="text-xs leading-tight">
          Join our <br /> community!
        </p>
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
        <p className="text-xs leading-tight">
          Professional <br /> updates!
        </p>
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
          {/* Header */}
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-[#F4B41A] font-bold text-sm mb-2 block">
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
              Have questions or want to enroll? Reach out through any of our channels.
            </p>
          </div>

          {/* Square Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#1a2f50] border border-white/5 rounded-xl p-4 flex flex-col items-center justify-between text-center hover:bg-[#1e355a] hover:-translate-y-1 transition-all duration-300 aspect-square shadow-xl"
              >
                {/* Icon Circle */}
                <div
                  className={`${info.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-lg flex-shrink-0`}
                >
                  {info.icon}
                </div>

                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-sm font-serif font-bold mb-1">{info.title}</h3>
                  <div className="text-blue-100/90">
                    {info.content}
                  </div>
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

      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#112240]/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2751460331086!2d78.39414087595305!3d17.4943890834117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f618843997%3A0xc994e45d58611831!2sJal%20Vayu%20Vihar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1709191000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="RCG Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;