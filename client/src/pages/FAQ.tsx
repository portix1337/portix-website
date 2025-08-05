import { siteConfig } from "@/lib/config";
import FAQItem from "@/components/FAQItem";

export default function FAQ() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="faq-hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="faq-hero-title">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto" data-testid="faq-hero-subtitle">
              Find answers to common questions about our hosting services, support, and billing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24" data-testid="faq-content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {siteConfig.faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
