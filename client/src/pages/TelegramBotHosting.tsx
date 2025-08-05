import { siteConfig } from "@/lib/config";
import PricingCard from "@/components/PricingCard";

export default function TelegramBotHosting() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="telegram-hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="telegram-hero-title">
              Telegram Bot Hosting
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto" data-testid="telegram-hero-subtitle">
              Host your Telegram bots with reliable infrastructure, instant deployment, and scalable resources for seamless automation.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 lg:py-24" data-testid="telegram-plans-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="telegram-plans-title">
              Choose Your Plan
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto" data-testid="telegram-plans-subtitle">
              All plans include 24/7 support, 99.9% uptime guarantee, and instant deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.botHostingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
