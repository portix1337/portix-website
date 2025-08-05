import FAQItem from "@/components/FAQItem";

export default function FAQ() {
  const faqCategories = [
    {
      category: "General Hosting",
      icon: "fas fa-server",
      questions: [
        {
          question: "What makes Portix Host different from other hosting providers?",
          answer: "Portix Host specializes in bot hosting and developer-friendly solutions with 99.9% uptime, automated deployments, and 24/7 expert support. Our infrastructure is optimized for Discord bots, Telegram bots, web applications, and game servers with competitive pricing starting from $0.75/month."
        },
        {
          question: "Do you offer a money-back guarantee?",
          answer: "Yes! We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied with our service within the first 30 days, we'll provide a full refund, no questions asked."
        },
        {
          question: "What is your uptime guarantee?",
          answer: "We guarantee 99.9% uptime across all our hosting services. Our infrastructure includes redundant servers, automatic failover, and 24/7 monitoring to ensure your applications stay online."
        },
        {
          question: "Can I upgrade or downgrade my hosting plan?",
          answer: "Absolutely! You can upgrade or downgrade your hosting plan at any time from your dashboard. Changes take effect immediately, and billing is prorated automatically."
        }
      ]
    },
    {
      category: "Bot Hosting",
      icon: "fas fa-robot",
      questions: [
        {
          question: "Which bot platforms do you support?",
          answer: "We support Discord bots, Telegram bots, and custom API bots. Our platform works with all major bot frameworks including discord.py, discord.js, python-telegram-bot, telegraf, and more."
        },
        {
          question: "How do I deploy my bot?",
          answer: "Simply upload your bot code, add your bot token, and we'll handle the deployment automatically. You can also connect your GitHub repository for continuous deployment. Your bot will be live in under 5 minutes."
        },
        {
          question: "Do you provide databases for bots?",
          answer: "Yes! We offer PostgreSQL, MySQL, and MongoDB databases with automatic backups. Your bot can securely connect to the database, and we handle all maintenance and updates."
        },
        {
          question: "What happens if my bot crashes?",
          answer: "Our system automatically detects crashes and restarts your bot within seconds. We also provide detailed logs and error monitoring to help you debug any issues."
        }
      ]
    },
    {
      category: "Web Hosting",
      icon: "fas fa-globe",
      questions: [
        {
          question: "What web technologies do you support?",
          answer: "We support all major web technologies including Node.js, Python (Django, Flask), PHP, Ruby on Rails, static sites, and more. Our platform automatically detects your technology stack and configures the environment."
        },
        {
          question: "Do you provide SSL certificates?",
          answer: "Yes! All hosting plans include free SSL certificates with automatic renewal. Your websites are secured with HTTPS by default, and we support custom domain SSL as well."
        },
        {
          question: "Can I host multiple websites on one plan?",
          answer: "Yes, our Pro and Enterprise plans support multiple websites. You can manage all your sites from a single dashboard and monitor their performance in real-time."
        },
        {
          question: "Do you offer CDN and caching?",
          answer: "Our Pro and Enterprise plans include global CDN with edge caching for faster load times worldwide. We also provide Redis caching and database query optimization."
        }
      ]
    },
    {
      category: "Game Server Hosting",
      icon: "fas fa-gamepad",
      questions: [
        {
          question: "Which games do you support?",
          answer: "We support Minecraft (Java & Bedrock), CS:GO, Garry's Mod, Rust, ARK, and many more. Our game hosting includes one-click installers, automatic updates, and mod support."
        },
        {
          question: "Can I install custom mods and plugins?",
          answer: "Absolutely! You have full FTP access to install mods, plugins, and custom configurations. We also provide one-click installers for popular mods and plugin managers."
        },
        {
          question: "How do I manage my game server?",
          answer: "Our intuitive control panel lets you start/stop servers, manage players, install mods, view logs, and configure settings. You also get console access for advanced management."
        },
        {
          question: "Do you provide DDoS protection for game servers?",
          answer: "Yes! All game servers include enterprise-grade DDoS protection to keep your server online during attacks. Our network can handle multi-gigabit attacks automatically."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: "fas fa-headset",
      questions: [
        {
          question: "What support channels do you offer?",
          answer: "We provide 24/7 support through live chat, email tickets, Discord community, and phone support (Enterprise plans). Our average response time is under 15 minutes for urgent issues."
        },
        {
          question: "Do you help with code debugging?",
          answer: "Yes! Our technical team can help debug bot code, optimize performance, and resolve deployment issues. We have experts in Discord.py, Discord.js, Python, Node.js, and more."
        },
        {
          question: "Can you help migrate from another hosting provider?",
          answer: "Absolutely! Our migration team will help transfer your bots, websites, and databases from any hosting provider for free. We handle the technical details so you don't experience downtime."
        },
        {
          question: "Do you provide server management?",
          answer: "Our Pro and Enterprise plans include managed hosting where we handle server updates, security patches, and optimization. You focus on your application while we manage the infrastructure."
        }
      ]
    },
    {
      category: "Billing & Payments",
      icon: "fas fa-credit-card",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, cryptocurrencies (Bitcoin, Ethereum), and bank transfers for enterprise customers."
        },
        {
          question: "How does billing work?",
          answer: "All plans are billed monthly with automatic renewal. You can cancel anytime, and billing is prorated for upgrades/downgrades. No setup fees or hidden charges."
        },
        {
          question: "Do you offer discounts for annual payments?",
          answer: "Yes! Save 20% when you pay annually. Student discounts and nonprofit discounts are also available - contact our sales team for special pricing."
        },
        {
          question: "Can I get a refund if I cancel?",
          answer: "We offer prorated refunds for unused time on annual plans. Monthly plans are not refundable, but you can use the service until the end of your billing period."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-24 lg:py-32" data-testid="faq-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-question-circle text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Help Center
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight font-orbitron" data-testid="faq-title">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-secondary text-xl leading-relaxed font-tech-mono max-w-3xl mx-auto" data-testid="faq-subtitle">
              Get instant answers to common questions about hosting, billing, technical support, and more. Can't find what you're looking for? Contact our support team 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-secondary" data-testid="faq-search">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search frequently asked questions..."
                className="w-full px-6 py-4 bg-primary border border-custom rounded-xl text-white placeholder-secondary font-tech-mono focus:border-accent focus:outline-none"
                data-testid="search-input"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-accent hover:text-blue-400 transition-colors" data-testid="search-button">
                <i className="fas fa-search text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 lg:py-32" data-testid="faq-categories">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="max-w-4xl mx-auto" data-testid={`category-${categoryIndex}`}>
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <i className={`${category.icon} text-accent text-xl`}></i>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold font-orbitron text-white" data-testid={`category-title-${categoryIndex}`}>
                      {category.category}
                    </h2>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-6">
                  {category.questions.map((faq, questionIndex) => (
                    <FAQItem
                      key={questionIndex}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="faq-contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-orbitron" data-testid="contact-title">
              Still Need <span className="text-accent">Help</span>?
            </h2>
            <p className="text-secondary text-xl leading-relaxed font-tech-mono mb-12" data-testid="contact-subtitle">
              Our expert support team is available 24/7 to help with any questions or technical issues.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-primary/50 rounded-2xl p-8 border border-custom text-center" data-testid="contact-chat">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-comments text-accent text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">Live Chat</h3>
                <p className="text-secondary font-tech-mono mb-6">Get instant help from our support team</p>
                <button className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-tech-mono font-medium transition-colors" data-testid="button-live-chat">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-primary/50 rounded-2xl p-8 border border-custom text-center" data-testid="contact-email">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-envelope text-accent text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">Email Support</h3>
                <p className="text-secondary font-tech-mono mb-6">Send us a detailed message</p>
                <button className="border-2 border-accent hover:bg-accent/10 text-accent hover:text-white px-6 py-3 rounded-xl font-tech-mono font-medium transition-colors" data-testid="button-email-support">
                  Send Email
                </button>
              </div>
              
              <div className="bg-primary/50 rounded-2xl p-8 border border-custom text-center" data-testid="contact-discord">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className="fab fa-discord text-accent text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">Discord Community</h3>
                <p className="text-secondary font-tech-mono mb-6">Join our developer community</p>
                <button className="border-2 border-accent hover:bg-accent/10 text-accent hover:text-white px-6 py-3 rounded-xl font-tech-mono font-medium transition-colors" data-testid="button-join-discord">
                  Join Discord
                </button>
              </div>
            </div>

            <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-xl font-bold text-white font-orbitron mb-4">Enterprise Support</h3>
              <p className="text-secondary font-tech-mono mb-6">
                Need dedicated support? Our Enterprise plans include priority phone support, dedicated account managers, and custom SLA agreements.
              </p>
              <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-colors" data-testid="button-enterprise-support">
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}