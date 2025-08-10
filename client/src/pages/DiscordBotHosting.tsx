import React, { useState, useRef } from 'react';

// Mock PricingCard component to make the example runnable
const PricingCard = ({ title, price, duration, features, isPopular, buttonText, onOrderClick }) => {
  return (
    <div className={`relative bg-surface rounded-3xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 ${isPopular ? 'border-4 border-accent' : ''}`}>
      {isPopular && (
        <span className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl uppercase">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold font-orbitron mb-4 text-white">{title}</h3>
      <p className="text-5xl font-bold font-orbitron mb-2 text-accent">{price}</p>
      <p className="text-secondary mb-8">{duration}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3 text-secondary">
            <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {/* The button now uses the onOrderClick prop */}
      <button
        onClick={onOrderClick}
        className="w-full bg-accent hover:bg-blue-600 text-white font-tech-mono font-medium py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
      >
        {buttonText}
      </button>
    </div>
  );
};

// Collapsible FAQItem component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-surface rounded-2xl shadow-md overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-6 text-left text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg">{question}</h3>
        <svg
          className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ transitionProperty: 'max-height' }}
      >
        {isOpen && (
          <p className="px-6 pb-6 text-secondary">{answer}</p>
        )}
      </div>
    </div>
  );
};

export default function DiscordBotHosting() {
  const pricingRef = useRef(null);

  const plans = [
    {
      title: "Starter Plan",
      price: "$0.99",
      duration: "month",
      features: [
        "512MB RAM",
        "24/7 Uptime",
        "1GB Storage",
        "Unmetered Bandwith",
        "1 Database",
        "1 Included Backups",
      ],
      buttonText: "Order Now",
      checkoutUrl: "https://billing.portix.online/products/discord-bot/discord-bot"
    },
    {
      title: "Standard Plan",
      price: "$1.99",
      duration: "month",
      features: [
        "1GB RAM",
        "24/7 Uptime",
        "1GB Storage",
        "Unmetered Bandwith",
        "2 Database",
        "2 Included Backups",
      ],
      isPopular: true,
      buttonText: "Order Now",
      checkoutUrl: "https://billing.portix.online/products/discord-bot/discord-bot-2"
    },
    {
      title: "Advanced Plan",
      price: "$2.99",
      duration: "month",
      features: [
        "2GB RAM",
        "24/7 Uptime",
        "3GB Storage",
        "Unmetered Bandwith",
        "3 Database",
        "3 Included Backups",
      ],
      buttonText: "Order Now",
      checkoutUrl: "https://billing.portix.online/products/discord-bot/discord-bot-3"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get my Discord bot online?",
      answer: "Your bot can be live in under 5 minutes! Simply upload your code, configure your bot token, and we'll handle the rest. Our automated deployment system gets your bot running instantly."
    },
    {
      question: "What programming languages are supported?",
      answer: "We support all major Discord bot frameworks including discord.py (Python), discord.js (Node.js), JDA (Java), Discord.NET (C#), and more."
    },
    {
      question: "How do you ensure my bot stays online 24/7?",
      answer: "Our infrastructure includes automatic restarts, health monitoring, and redundant servers. If your bot crashes or goes offline, it's automatically restarted within seconds."
    },
    
    {
      question: "Do you provide database hosting for bots?",
      answer: "Absolutely! We offer PostgreSQL, MySQL, and MongoDB databases. Your bot data is automatically backed up and can be accessed securely from your hosted bot."
    },
    {
      question: "What kind of support do you offer for Discord bots?",
      answer: "We provide specialized Discord bot support including code debugging, performance optimization, and Discord API assistance. Our team includes experienced bot developers who can help with any issues."
    }
  ];

  // Function to handle the redirection for ordering a plan
  const handleOrderClick = (url) => {
    window.location.href = url;
  };

  // Function to scroll to the pricing section
  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to handle the documentation link
  const goToDocs = () => {
    window.location.href = "https://docs.portix.online";
  };

  return (
    <div className="min-h-screen bg-primary">
      <style jsx global>{`
        @keyframes fade-and-float {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.5);
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="py-24 lg:py-32" data-testid="discord-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
                <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                  Discord Bot Hosting
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight font-orbitron" data-testid="discord-title">
                Host Your <span className="text-accent">Discord Bots</span> with Confidence
              </h1>
              <p className="text-secondary text-xl leading-relaxed font-tech-mono mb-8" data-testid="discord-subtitle">
                Keep your Discord bots online 24/7 with our specialized hosting platform. Perfect for moderation bots, music bots, gaming bots, and custom Discord applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={scrollToPricing}
                  className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300 transform hover:scale-105"
                  data-testid="button-start-hosting"
                >
                  Start Bot Hosting
                </button>
                <button
                  onClick={goToDocs}
                  className="border-2 border-accent hover:bg-accent/10 text-accent hover:text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300"
                  data-testid="button-view-docs"
                >
                  View Documentation
                </button>
              </div>
            </div>
            {/* The illustration is replaced with a fading icon system */}
            <div className="relative h-96 flex items-center justify-center">
              <i className="fab fa-discord text-5xl text-blue-400 absolute top-1/4 left-1/4 animate-pulse opacity-0" style={{ animation: 'fade-and-float 5s infinite' }}></i>
              <i className="fab fa-discord text-4xl text-purple-400 absolute bottom-1/4 right-1/4 animate-pulse opacity-0" style={{ animation: 'fade-and-float 5s infinite 1s' }}></i>
              <i className="fab fa-discord text-6xl text-indigo-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-0" style={{ animation: 'fade-and-float 5s infinite 2s' }}></i>
              <i className="fab fa-discord text-3xl text-cyan-400 absolute top-1/3 right-1/3 animate-pulse opacity-0" style={{ animation: 'fade-and-float 5s infinite 3s' }}></i>
              <i className="fab fa-discord text-xl text-violet-400 absolute bottom-1/3 left-1/3 animate-pulse opacity-0" style={{ animation: 'fade-and-float 5s infinite 4s' }}></i>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" data-testid="discord-stats">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-bots">
              <div className="text-4xl font-bold text-accent font-orbitron mb-2">50K+</div>
              <div className="text-secondary font-tech-mono">Bots Hosted</div>
            </div>
            <div data-testid="stat-uptime">
              <div className="text-4xl font-bold text-accent font-orbitron mb-2">99.9%</div>
              <div className="text-secondary font-tech-mono">Uptime SLA</div>
            </div>
            <div data-testid="stat-servers">
              <div className="text-4xl font-bold text-accent font-orbitron mb-2">1M+</div>
              <div className="text-secondary font-tech-mono">Discord Servers</div>
            </div>
            <div data-testid="stat-support">
              <div className="text-4xl font-bold text-accent font-orbitron mb-2">24/7</div>
              <div className="text-secondary font-tech-mono">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-24 lg:py-32 bg-secondary" data-testid="discord-pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Pricing
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="discord-pricing-title">
              Affordable <span className="text-accent">Bot Hosting</span>
            </h2>
            <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono" data-testid="discord-pricing-subtitle">
              Choose the perfect plan for your Discord bot hosting needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                duration={plan.duration}
                features={plan.features}
                isPopular={plan.isPopular}
                buttonText={plan.buttonText}
                onOrderClick={() => handleOrderClick(plan.checkoutUrl)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="discord-faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="discord-faq-title">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32" data-testid="discord-cta">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-orbitbon" data-testid="discord-cta-title">
              Ready to Host Your <span className="text-accent">Discord Bot</span>?
            </h2>
            <p className="text-secondary text-xl leading-relaxed font-tech-mono mb-8" data-testid="discord-cta-subtitle">
              Join thousands of developers who trust Portix Host for their Discord bot hosting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={scrollToPricing}
                className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300 transform hover:scale-105"
                data-testid="button-get-started"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
