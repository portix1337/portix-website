import { MessageCircle, Zap, Shield, Globe, Code, Users } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import FeatureCard from "@/components/FeatureCard";
import FAQItem from "@/components/FAQItem";

export default function TelegramBotHosting() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Telegram Bot API",
      description: "Full support for Telegram Bot API with webhook and long polling methods for reliable message handling."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Ultra-low latency hosting ensures your Telegram bots respond instantly to user messages."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Hosting",
      description: "Enterprise-grade security with encrypted token storage and secure webhook endpoints."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Multi-Framework",
      description: "Support for Python-telegram-bot, node-telegram-bot-api, Telegraf, and more popular frameworks."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global CDN",
      description: "Deploy your bots across multiple regions for optimal performance worldwide."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scalable",
      description: "Auto-scaling infrastructure handles millions of messages without breaking a sweat."
    }
  ];

  const plans = [
    {
      title: "Basic Bot",
      price: "$3.99",
      duration: "month",
      features: [
        "1 Telegram Bot",
        "512MB RAM",
        "10K messages/month",
        "1GB Storage",
        "Basic Support",
        "Webhook support"
      ],
      buttonText: "Start Free Trial"
    },
    {
      title: "Pro Bot",
      price: "$9.99",
      duration: "month",
      features: [
        "5 Telegram Bots",
        "2GB RAM",
        "100K messages/month",
        "10GB Storage",
        "Priority Support",
        "Custom domains",
        "Database hosting",
        "Analytics dashboard"
      ],
      isPopular: true,
      buttonText: "Start Free Trial"
    },
    {
      title: "Enterprise Bot",
      price: "$24.99",
      duration: "month",
      features: [
        "Unlimited Bots",
        "8GB RAM",
        "Unlimited messages",
        "100GB Storage",
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
      question: "How do I deploy my Telegram bot?",
      answer: "Simply upload your bot code, add your bot token from @BotFather, and we'll deploy it instantly. We support all major Telegram bot frameworks and provide automated deployment."
    },
    {
      question: "What programming languages are supported?",
      answer: "We support Python (python-telegram-bot), Node.js (telegraf, node-telegram-bot-api), PHP, Go, Java, and more. Our platform automatically detects and configures the environment."
    },
    {
      question: "How do webhooks work with your hosting?",
      answer: "We provide secure HTTPS endpoints for webhooks with SSL certificates. Your bot receives real-time updates from Telegram without polling, ensuring faster response times."
    },
    {
      question: "Can I handle high-volume Telegram bots?",
      answer: "Absolutely! Our infrastructure auto-scales to handle millions of messages. We've hosted bots serving 500K+ users with sub-second response times."
    },
    {
      question: "Do you provide analytics for my Telegram bot?",
      answer: "Yes! Our Pro and Enterprise plans include detailed analytics showing message volumes, user engagement, response times, and error rates with beautiful dashboards."
    },
    {
      question: "What about data storage for my bot?",
      answer: "We provide PostgreSQL, MySQL, and Redis databases. Your bot data is automatically backed up daily and can be accessed securely from your hosted application."
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-24 lg:py-32" data-testid="telegram-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
                <i className="fab fa-telegram text-white"></i>
                <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                  Telegram Bot Hosting
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight font-orbitron" data-testid="telegram-title">
                Scale Your <span className="text-accent">Telegram Bots</span> Globally
              </h1>
              <p className="text-secondary text-xl leading-relaxed font-tech-mono mb-8" data-testid="telegram-subtitle">
                Deploy and scale Telegram bots with our optimized hosting platform. Perfect for customer service bots, notification systems, and interactive Telegram applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300 transform hover:scale-105" data-testid="button-deploy-bot">
                  Deploy Your Bot
                </button>
                <button className="border-2 border-accent hover:bg-accent/10 text-accent hover:text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300" data-testid="button-view-examples">
                  View Examples
                </button>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-3xl p-8 border border-custom">
              <div className="text-center">
                <div className="w-32 h-32 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <i className="fab fa-telegram text-accent text-6xl"></i>
                </div>
                <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
                  <h3 className="text-xl font-bold text-white font-orbitron mb-4">
                    Instant Deployment
                  </h3>
                  <p className="text-secondary font-tech-mono">
                    Get your Telegram bot live in seconds with our automated deployment pipeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="telegram-features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-rocket text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Features
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="telegram-features-title">
              Powerful <span className="text-accent">Bot Hosting</span>
            </h2>
            <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono" data-testid="telegram-features-subtitle">
              Everything you need to build and scale successful Telegram bots.
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
      <section className="py-16" data-testid="telegram-stats">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-messages">
              <div className="text-4xl font-bold text-accent font-orbitron mb-2">10M+</div>
              <div className="text-secondary font-tech-mono">Messages Processed</div>
            </div>
            <div data-testid="stat-bots">
              <div className="text-4xl font-bold text-accent font-orbitron mb-2">25K+</div>
              <div className="text-secondary font-tech-mono">Bots Hosted</div>
            </div>
            <div data-testid="stat-uptime">
              <div className="text-4xl font-bold text-accent font-orbitron mb-2">99.9%</div>
              <div className="text-secondary font-tech-mono">Uptime SLA</div>
            </div>
            <div data-testid="stat-response">
              <div className="text-4xl font-bold text-accent font-orbitron mb-2">&lt;100ms</div>
              <div className="text-secondary font-tech-mono">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 lg:py-32" data-testid="telegram-use-cases">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-lightbulb text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Use Cases
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="use-cases-title">
              What You Can <span className="text-accent">Build</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-headset",
                title: "Customer Support",
                description: "Automated customer service with AI integration and human handoff capabilities."
              },
              {
                icon: "fas fa-bell",
                title: "Notification System",
                description: "Send alerts, updates, and notifications to users or groups automatically."
              },
              {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Bot",
                description: "Product catalogs, order management, and payment processing through Telegram."
              },
              {
                icon: "fas fa-chart-line",
                title: "Analytics Bot",
                description: "Real-time dashboards and reports delivered directly to your Telegram."
              },
              {
                icon: "fas fa-calendar",
                title: "Booking System",
                description: "Appointment scheduling and calendar management through conversational interface."
              },
              {
                icon: "fas fa-gamepad",
                title: "Gaming Bot",
                description: "Interactive games, quizzes, and entertainment for your Telegram community."
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-secondary/50 rounded-2xl p-8 border border-custom hover:border-accent/50 transition-colors text-center" data-testid={`use-case-${index}`}>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${useCase.icon} text-accent text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-4" data-testid={`use-case-title-${index}`}>
                  {useCase.title}
                </h3>
                <p className="text-secondary font-tech-mono leading-relaxed" data-testid={`use-case-description-${index}`}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="telegram-pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-tags text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Pricing
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="telegram-pricing-title">
              Telegram Bot <span className="text-accent">Hosting Plans</span>
            </h2>
            <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono" data-testid="telegram-pricing-subtitle">
              Scale from hobby projects to enterprise solutions.
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
      <section className="py-24 lg:py-32" data-testid="telegram-how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-cogs text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="how-it-works-title">
              Deploy in <span className="text-accent">4 Easy Steps</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Create Bot",
                description: "Create your bot with @BotFather on Telegram and get your bot token.",
                icon: "fab fa-telegram"
              },
              {
                step: "2",
                title: "Upload Code",
                description: "Upload your bot code or connect your GitHub repository to our platform.",
                icon: "fas fa-upload"
              },
              {
                step: "3",
                title: "Configure",
                description: "Set your bot token, environment variables, and webhook endpoints.",
                icon: "fas fa-cog"
              },
              {
                step: "4",
                title: "Go Live",
                description: "Deploy instantly and start receiving messages from your Telegram bot.",
                icon: "fas fa-rocket"
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
      <section className="py-24 lg:py-32 bg-secondary" data-testid="telegram-faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-question-circle text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="telegram-faq-title">
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
      <section className="py-24 lg:py-32" data-testid="telegram-cta">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-orbitron" data-testid="telegram-cta-title">
              Ready to Launch Your <span className="text-accent">Telegram Bot</span>?
            </h2>
            <p className="text-secondary text-xl leading-relaxed font-tech-mono mb-8" data-testid="telegram-cta-subtitle">
              Join thousands of developers building amazing Telegram experiences with Portix Host.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300 transform hover:scale-105" data-testid="button-start-now">
                Start Hosting Now
              </button>
              <button className="border-2 border-accent hover:bg-accent/10 text-accent hover:text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300" data-testid="button-talk-to-expert">
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}