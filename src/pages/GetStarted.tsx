import Layout from "@/components/layout/Layout";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { CheckCircle } from "lucide-react";

const GetStarted = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                Get Started
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Begin Your Journey to{" "}
                <span className="text-gradient-gold">Success</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Fill out the form and take the first step towards transforming
                your career. Our team will get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                {[
                  "Free career counseling session",
                  "Personalized learning path",
                  "Access to demo classes",
                  "Placement assistance guaranteed",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is the duration of the courses?",
                a: "Course duration varies from 2 to 6 months depending on the program. All courses include flexible weekend and weekday batches.",
              },
              {
                q: "Do you provide placement assistance?",
                a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and direct connections with hiring partners.",
              },
              {
                q: "Can I attend a demo class before enrolling?",
                a: "Absolutely! We encourage all students to attend a free demo class to experience our teaching methodology before making a decision.",
              },
              {
                q: "What are the payment options available?",
                a: "We offer flexible payment options including EMI facilities. Contact our team for more details on payment plans.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-6"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
