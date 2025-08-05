import { Check, Zap, Headphones, Shield, Server, Lock } from "lucide-react";
import { FaRocket, FaGlobe, FaGamepad } from "react-icons/fa";
import { siteConfig } from "@/lib/config";
import PricingCard from "@/components/PricingCard";
import FeatureCard from "@/components/FeatureCard";
import FAQItem from "@/components/FAQItem";

export default function Home() {
  const iconMap = {
    check: <Check className="w-6 h-6 text-green-500" />,
    zap: <Zap className="w-6 h-6 text-yellow-500" />,
    headphones: <Headphones className="w-6 h-6 text-blue-500" />,
    shield: <Shield className="w-6 h-6 text-red-500" />,
    server: <Server className="w-6 h-6 text-purple-500" />,
    lock: <Lock className="w-6 h-6 text-green-500" />
  };

  const serviceIconMap = {
    bot: <FaRocket className="w-8 h-8 text-accent" />,
    web: <FaGlobe className="w-8 h-8 text-accent" />,
    game: <FaGamepad className="w-8 h-8 text-accent" />
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Powerful Hosting for{" "}
              <span className="text-accent">Bots</span>,{" "}
              <span className="text-accent">Websites</span>, and{" "}
              <span className="text-accent">Games</span>
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto" data-testid="hero-subtitle">
              {siteConfig.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105" data-testid="button-get-started">
                {siteConfig.hero.ctaButtons.primary}
              </button>
              <button className="border border-custom hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all" data-testid="button-learn-more">
                {siteConfig.hero.ctaButtons.secondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-16 lg:py-24" data-testid="services-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="services-title">
              What We Provide
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto" data-testid="services-subtitle">
              Choose from our comprehensive hosting solutions designed for developers, businesses, and gaming communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-secondary rounded-xl p-8 text-center hover:bg-border transition-colors group"
                data-testid={`service-card-${service.id}`}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  {serviceIconMap[service.icon as keyof typeof serviceIconMap]}
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`service-name-${service.id}`}>
                  {service.name}
                </h3>
                <p className="text-secondary leading-relaxed" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-secondary/30" data-testid="features-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="features-title">
              Our Features
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto" data-testid="features-subtitle">
              Everything you need to run your projects with confidence and peace of mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={iconMap[feature.icon as keyof typeof iconMap]}
                title={feature.name}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Portix Host Section */}
      <section className="py-16 lg:py-24" data-testid="why-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="why-title">
                Why Portix Host?
              </h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto" data-testid="why-subtitle">
                Join thousands of developers and businesses who trust us with their hosting needs.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left column - Image */}
              <div className="order-2 lg:order-1">
                <div className="bg-secondary rounded-xl p-8 text-center">
                  <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Server className="w-16 h-16 text-accent" />
                  </div>
                  <p className="text-secondary" data-testid="why-image-caption">
                    Enterprise-grade infrastructure trusted by developers worldwide
                  </p>
                </div>
              </div>
              
              {/* Right column - Features list */}
              <div className="order-1 lg:order-2 space-y-6">
                {[
                  {
                    title: "Budget-Friendly Pricing",
                    description: "Premium hosting solutions at prices that won't break the bank. Starting from just $0.75/month."
                  },
                  {
                    title: "Lightning-Fast Performance",
                    description: "NVMe SSD storage and optimized infrastructure ensure your applications load faster than ever."
                  },
                  {
                    title: "Developer-Focused",
                    description: "Built by developers, for developers. Advanced tools and APIs to streamline your workflow."
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Start small and scale up as you grow. Seamless upgrades with zero downtime migrations."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`why-feature-${index}`}>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" data-testid={`why-feature-title-${index}`}>
                        {feature.title}
                      </h4>
                      <p className="text-secondary" data-testid={`why-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-secondary/30" data-testid="pricing-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="pricing-title">
              Discord Bot Hosting Plans
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto" data-testid="pricing-subtitle">
              Choose the perfect plan for your Discord bot. All plans include 24/7 support and 99.9% uptime guarantee.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.botHostingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24" data-testid="faq-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto" data-testid="faq-subtitle">
              Get answers to common questions about our hosting services and support.
            </p>
          </div>
          
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
