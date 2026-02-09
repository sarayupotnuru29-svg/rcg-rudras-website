import Layout from "@/components/layout/Layout";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { CheckCircle } from "lucide-react";

const GetStarted = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-navy-dark py-16 md:py-24">
        {/* Decorative background blurs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-20 top-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Heading Label */}
              <span className="mb-4 inline-block rounded-full bg-accent/20 px-6 py-2 font-serif text-base font-semibold text-accent md:text-lg">
                Get Started Today
              </span>
              
              {/* Main Hero Heading: Font size reduced to text-4xl on large screens */}
              <h1 className="mb-6 font-serif text-2xl font-semibold leading-tight text-primary-foreground md:text-3xl lg:text-4xl whitespace-nowrap">
                Begin Your Journey to{" "}
                <span className="text-gradient-gold">Success</span>
              </h1>

              {/* Informational Paragraph */}
              <p className="mb-8 font-sans text-lg leading-relaxed text-primary-foreground/80 max-w-md mx-auto lg:mx-0">
                Fill out the form and take the first step towards transforming
                your career. Our team will get back to you within 24 hours.
              </p>

              {/* Checkbox List Items */}
              <div className="space-y-4">
                {[
                  "Free career counseling session",
                  "Personalized learning path",
                  "Access to demo classes",
                  "Placement assistance guaranteed",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-3 lg:justify-start"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="font-sans font-medium text-primary-foreground/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form - Positioned slightly more to the left on large screens */}
            <div className="flex justify-center lg:justify-start lg:pl-8">
              <div className="w-full max-w-lg">
                <EnquiryForm />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-accent/30" />
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
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
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="mb-2 font-sans text-lg font-bold text-foreground">
                  {faq.q}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;