import Layout from "@/components/layout/Layout";
import { Phone, MapPin, Instagram, MessageCircle, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      title: "Visit Us",
      icon: <MapPin className="w-6 h-6 text-black" />,
      iconBg: "bg-[#F4B41A]",
      content: (
        <p className="text-sm leading-relaxed">
          Villa No 263, Jal Vayu Vihar,
          <br />
          KPHB Colony, Hyderabad – 500085
        </p>
      ),
      linkText: "Open in Google Maps →",
      link: "https://maps.google.com/?q=Villa+No+263,Jal+Vayu+Vihar,KPHB+Colony,Hyderabad",
    },
    {
      title: "Call Us",
      icon: <Phone className="w-6 h-6 text-black" />,
      iconBg: "bg-[#F4B41A]",
      content: (
        <div className="space-y-1">
          <p className="font-semibold text-lg">+91 88979 99766</p>
          <p className="text-xs opacity-70">Mon - Sat: 9 AM - 6 PM</p>
        </div>
      ),
      linkText: "Call Now →",
      link: "tel:+918897999766",
    },
    {
      title: "Instagram",
      icon: <Instagram className="w-6 h-6 text-white" />,
      iconBg: "bg-gradient-to-tr from-[#FFB300] via-[#FF005C] to-[#9C27B0]",
      content: <p className="font-semibold text-lg">@rudrascloud</p>,
      linkText: "Open Instagram →",
      link: "https://www.instagram.com/rudrascloud",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-6 h-6 text-white" />,
      iconBg: "bg-[#0077B5]",
      content: (
        <p className="text-sm leading-relaxed">
          Follow us for <br /> industry updates!
        </p>
      ),
      linkText: "Connect Now →",
      link: "https://www.linkedin.com/in/rudra-s-cloud-gurukul-5b54243aa",
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      iconBg: "bg-[#25D366]",
      content: (
        <p className="text-sm leading-relaxed">
          Message us directly for quick <br /> course inquiries!
        </p>
      ),
      linkText: "Chat on WhatsApp →",
      link: "https://wa.me/918897999766",
    },
  ];

  return (
    <Layout>
      {/* Contact Section with Navy Background */}
      <section className="min-h-screen bg-[#112240] text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-[#F4B41A] font-bold text-sm mb-2 block">
              GET IN TOUCH
            </span>
            {/* Main Heading: Contact Us (Applied font-serif and semibold weight) */}
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
              Have questions or want to enroll in our courses? Reach out to us through any of these channels.
            </p>
          </div>

          {/* Contact Grid - Updated to 5 columns for large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#1a2f50] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div
                  className={`${info.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg`}
                >
                  {info.icon}
                </div>

                {/* Grid Headings: Visit Us, WhatsApp, Instagram, etc. (Applied font-serif and semibold) */}
                <h3 className="text-xl font-serif font-semibold mb-4">{info.title}</h3>

                <div className="mb-8 min-h-[60px] flex items-center justify-center text-blue-100/90">
                  {info.content}
                </div>

                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-[#F4B41A] font-bold hover:text-white transition-colors"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2750625455855!2d78.39707927501977!3d17.4943963834139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91629864275f%3A0x6a05342c4c8e762b!2sKPHB%20Colony%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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