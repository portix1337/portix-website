import { Bot, Zap, Shield, Headphones, Code, Users } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import FeatureCard from "@/components/FeatureCard";
import FAQItem from "@/components/FAQItem";

export default function DiscordBotHosting() {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "24/7 Bot Uptime",
      description: "Keep your Discord bot online around the clock with our reliable hosting infrastructure."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Deployment",
      description: "Deploy your bot in seconds with our one-click deployment system and auto-scaling features."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with SSL encryption, DDoS protection, and secure token management."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Host bots written in Python, JavaScript, Java, C#, and more with pre-configured environments."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Join our active Discord community with 10,000+ developers and bot creators."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Expert Help",
      description: "Get assistance from our bot hosting specialists who understand Discord development."
    }
  ];

  const plans = [
    {
      title: "Starter Bot",
      price: "$2.99",
      duration: "month",
      features: [
        "1 Discord Bot",
        "512MB RAM",
        "24/7 Uptime",
        "1GB Storage",
        "Basic Support",
        "Auto-restart on crashes"
      ],
      buttonText: "Start Free Trial"
    },
    {
      title: "Pro Bot",
      price: "$7.99",
      duration: "month",
      features: [
        "3 Discord Bots",
        "1GB RAM",
        "24/7 Uptime",
        "5GB Storage",
        "Priority Support",
        "Custom domains",
        "Database hosting",
        "Scheduled tasks"
      ],
      isPopular: true,
      buttonText: "Start Free Trial"
    },
    {
      title: "Enterprise Bot",
      price: "$19.99",
      duration: "month",
      features: [
        "Unlimited Bots",
        "4GB RAM",
        "99.9% SLA",
        "25GB Storage",
        "24/7 Phone Support",
        "White-label hosting",
        "Advanced monitoring",
        "API access",
        "Custom integrations"
      ],
      buttonText: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get my Discord bot online?",
      answer: "Your bot can be live in under 5 minutes! Simply upload your code, configure your bot token, and we'll handle the rest. Our automated deployment system gets your bot running instantly."
    },
    {
      question: "What programming languages are supported?",
      answer: "We support all major Discord bot frameworks including discord.py (Python), discord.js (Node.js), JDA (Java), Discord.NET (C#), and more. Our platform automatically detects your language and sets up the environment."
    },
    {
      question: "How do you ensure my bot stays online 24/7?",
      answer: "Our infrastructure includes automatic restarts, health monitoring, and redundant servers. If your bot crashes or goes offline, it's automatically restarted within seconds."
    },
    {
      question: "Can I host multiple bots on one plan?",
      answer: "Yes! Our Pro and Enterprise plans support multiple bots. You can manage all your bots from a single dashboard and monitor their performance in real-time."
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

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-24 lg:py-32" data-testid="discord-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
                <i className="fab fa-discord text-white"></i>
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
                <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300 transform hover:scale-105" data-testid="button-start-hosting">
                  Start Bot Hosting
                </button>
                <button className="border-2 border-accent hover:bg-accent/10 text-accent hover:text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300" data-testid="button-view-docs">
                  View Documentation
                </button>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-3xl p-8 border border-custom">
              <div className="text-center">
                <div className="w-32 h-32 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <i className="fab fa-discord text-accent text-6xl"></i>
                </div>
                <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">
                    Ready in Minutes
                  </h3>
                  <p className="text-secondary font-tech-mono">
                    Upload your bot code and get it running instantly with our automated deployment system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="discord-features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-cogs text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Features
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="discord-features-title">
              Everything Your <span className="text-accent">Bot Needs</span>
            </h2>
            <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono" data-testid="discord-features-subtitle">
              Specialized hosting features designed specifically for Discord bot developers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
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
      <section className="py-24 lg:py-32 bg-secondary" data-testid="discord-pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-tags text-white"></i>
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32" data-testid="discord-how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-rocket text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="how-it-works-title">
              Deploy in <span className="text-accent">3 Simple Steps</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Upload Your Bot",
                description: "Drag and drop your bot files or connect your GitHub repository. We support all popular Discord bot frameworks.",
                icon: "fas fa-upload"
              },
              {
                step: "2",
                title: "Configure Settings",
                description: "Add your bot token, set environment variables, and configure any databases your bot needs.",
                icon: "fas fa-cog"
              },
              {
                step: "3",
                title: "Deploy & Monitor",
                description: "Hit deploy and watch your bot come online instantly. Monitor performance from your dashboard.",
                icon: "fas fa-chart-line"
              }
            ].map((item, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <i className={`${item.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary border-2 border-accent rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold font-orbitron text-sm">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-4" data-testid={`step-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-secondary font-tech-mono leading-relaxed" data-testid={`step-description-${index}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="discord-faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-question-circle text-white"></i>
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-orbitron" data-testid="discord-cta-title">
              Ready to Host Your <span className="text-accent">Discord Bot</span>?
            </h2>
            <p className="text-secondary text-xl leading-relaxed font-tech-mono mb-8" data-testid="discord-cta-subtitle">
              Join thousands of developers who trust Portix Host for their Discord bot hosting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300 transform hover:scale-105" data-testid="button-get-started">
                Get Started Now
              </button>
              <button className="border-2 border-accent hover:bg-accent/10 text-accent hover:text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300" data-testid="button-contact-sales">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}