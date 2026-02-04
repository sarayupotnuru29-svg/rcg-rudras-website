import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-secondary to-navy-dark">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of
            the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Phone
              </h3>
              <a
                href="tel:+918897999766"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                +91-889-799-9766
              </a>
            </div>

            {/* Email */}
            <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Email
              </h3>
              <a
                href="mailto:rudrascloudgurukul@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors break-all"
              >
                rudrascloudgurukul@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Address
              </h3>
              <p className="text-muted-foreground">
                Villa No 263, Jal Vayu Vihar,
                <br />
                KPHB Colony, Hyderabad – 500085
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="max-w-md mx-auto bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">
                Business Hours
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday – Friday</span>
                <span className="text-foreground font-medium">
                  9:00 AM – 6:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-foreground font-medium">
                  10:00 AM – 4:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground font-medium">
                  10:00 AM – 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.6893584754453!2d78.39098897516784!3d17.489759983422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f8b5b0b4c5%3A0x8c8c8c8c8c8c8c8c!2sKPHB%20Colony%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RCG Location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
