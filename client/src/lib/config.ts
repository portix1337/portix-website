export const siteConfig = {
  // Brand Information
  brand: {
    name: {
      first: "Portix", // White text
      second: "Host"   // Blue text (#0195f4)
    },
    logo: "https://raw.githubusercontent.com/portix1337/assets/main/logo.png",

    tagline: "Built for developers who demand power and simplicity."
  },

  // Color Configuration
  colors: {
    primary: "#060201",
    secondary: "#0F1014", 
    accent: "#0195f4", // Main blue color
    text: {
      primary: "#ffffff",
      secondary: "#9ca3af"
    },
    background: {
      primary: "#060201",
      secondary: "#0F1014"
    }
  },

  // Typography Configuration (Reduced size for clean look)
  fonts: {
    heading: "'Orbitron', sans-serif",
    body: "'Share Tech Mono', monospace",
    headingSizes: {
      hero: "text-4xl lg:text-6xl",
      section: "text-2xl lg:text-4xl", 
      card: "text-lg lg:text-xl"
    }
  },
  
 
  
  // Hero section
  hero: {
    title: "Powerful Hosting for Bots, Websites, and Games",
    subtitle: "Portix Host delivers reliable and budget-friendly hosting solutions with unmatched uptime.",
image: "https://raw.githubusercontent.com/portix1337/assets/main/hero.png",
    ctaButtons: {
      primary: "Get Started",
      secondary: "Learn More"
    }
  },
  
  // Section tags (with icons instead of emojis)
  sectionTags: {
    services: {
      icon: "fas fa-rocket",
      text: "What We Offer"
    },
    features: {
      icon: "fas fa-sparkles", 
      text: "We Won't Disappoint"
    },
    why: {
      icon: "fas fa-rocket",
      text: "Why Choose Us"
    },
    testimonials: {
      icon: "fas fa-rocket",
      text: "Customer Love"
    },
    faq: {
      icon: "fas fa-rocket",
      text: "Got Questions?"
    }
  },

  // Navigation with icons
  navigation: {
    items: [
      {
        name: "Home",
        href: "/",
        type: "link",
        icon: "fas fa-home"
      },
      {
        name: "Bot Hosting",
        type: "dropdown",
        icon: "fas fa-robot",
        items: [
          {
            name: "Discord Bot Hosting",
            href: "/discord-bot-hosting",
            icon: "fab fa-discord"
          },
          {
            name: "Telegram Bot Hosting",
            href: "/telegram-bot-hosting",
            icon: "fab fa-telegram"
          }
        ]
      },
      {
        name: "Web Hosting",
        type: "dropdown", 
        icon: "fas fa-globe",
        items: [
          {
            name: "WordPress Hosting",
            href: "/wordpress-hosting",
            icon: "fab fa-wordpress"
          },
          {
            name: "Shared Hosting",
            href: "/shared-hosting",
            icon: "fas fa-share-nodes"
          }
        ]
      },
      {
        name: "Game Hosting",
        href: "/game-hosting",
        type: "link",
        icon: "fas fa-gamepad"
      },
      {
        name: "Learn",
        href: "/docs",
        type: "link",
        icon: "fas fa-book"
      }
    ],
    clientArea: {
      name: "Client Area",
      icon: "fas fa-user",
      items: [
        {
          name: "Panel",
          href: "#panel",
          icon: "fas fa-tachometer-alt"
        },
        {
          name: "Billing",
          href: "billing.portix.online", 
          icon: "fas fa-credit-card"
        },
        {
          name: "Login",
          href: "#login",
          icon: "fas fa-sign-in-alt"
        }
      ]
    }
  },

  // Services
  services: [
    {
      id: "bot",
      name: "Bot Hosting",
      description: "Host your Discord and Telegram bots with 99.9% uptime and powerful infrastructure.",
      icon: "fas fa-robot"
    },
    {
      id: "web", 
      name: "Web Hosting",
      description: "Fast and reliable hosting for your websites and web applications with SSD storage.",
      icon: "fas fa-globe"
    },
    {
      id: "game",
      name: "Game Hosting", 
      description: "Low-latency game servers optimized for the best gaming experience.",
      icon: "fas fa-gamepad"
    }
  ],

  // Features
  features: [
    {
      name: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support team.",
      icon: "headphones"
    },
    {
      name: "99.9% Uptime",
      description: "Reliable infrastructure ensures your projects stay online when it matters most.",
      icon: "zap"
    },
    {
      name: "DDoS Protection",
      description: "Advanced security measures protect your applications from malicious attacks.",
      icon: "shield"
    },
    {
      name: "Easy Setup",
      description: "Get your hosting up and running in minutes with our intuitive control panel.",
      icon: "check"
    },
    {
      name: "Global Network",
      description: "Servers worldwide ensure fast loading times for your global audience.",
      icon: "server"
    },
    {
      name: "Secure Hosting",
      description: "SSL certificates and security monitoring keep your data safe and protected.",
      icon: "lock"
    }
  ],

  // Testimonials
  testimonials: [
    {
      text: "Portix Host has been incredible for hosting my Discord bot. The uptime is fantastic and support is always helpful when I need assistance.",
      name: "Ahmed ",
      role: "",
      rating: 4,
      avatar: "https://raw.githubusercontent.com/portix1337/assets/refs/heads/main/a%20logo.jpg"
    },
    {
      text: "I've been hosting my gaming community's website here for over a year. The performance is consistently excellent and the prices are unbeatable.",
      name: "Saad Khan", 
      role: "",
      rating: 5,
      avatar: "https://raw.githubusercontent.com/portix1337/assets/refs/heads/main/m%20logo.jpg"
    },
    {
      text: "As a developer, I appreciate the technical features and API access. Portix Host makes it easy to deploy and manage my applications.",
      name: "Mohid Ali",
      role: "",
      rating: 4,
      avatar: "https://raw.githubusercontent.com/portix1337/assets/refs/heads/main/s%20logo.jpg"
    }
  ],

  // Discord Bot Hosting Plans
  botHostingPlans: [
    {
      name: "Startup",
      price: "$0.75",
      period: "/month",
      features: [
        "512 MB DDR5 RAM",
        "1 GB NVMe SSD", 
        "10 GBit/s Connection",
        "24/7 Support",
        "99.9% Uptime Guarantee"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$2.99",
      period: "/month", 
      features: [
        "2 GB DDR5 RAM",
        "5 GB NVMe SSD",
        "10 GBit/s Connection",
        "Priority Support",
        "99.9% Uptime Guarantee",
        "Custom Domain"
      ],
      popular: true
    },
    {
      name: "Ultimate",
      price: "$7.99",
      period: "/month",
      features: [
        "4 GB DDR5 RAM",
        "10 GB NVMe SSD",
        "10 GBit/s Connection",
        "VIP Support",
        "99.9% Uptime Guarantee",
        "Custom Domain",
        "Advanced Analytics"
      ],
      popular: false
    }
  ],

  // WordPress Hosting Plans
  wordpressPlans: [
    {
      name: "Startup",
      price: "$0.75",
      period: "/month",
      features: [
        "512 MB DDR5 RAM",
        "1 GB NVMe SSD",
        "10 GBit/s Connection",
        "2 Databases",
        "1 Allocation",
        "1 Included Backup",
        "Create 1 Additional Server"
      ],
      popular: false
    },
    {
      name: "Standard", 
      price: "$2.99",
      period: "/month",
      features: [
        "2 GB DDR5 RAM",
        "2 GB NVMe SSD",
        "10 GBit/s Connection",
        "3 Databases",
        "2 Allocations", 
        "2 Included Backups",
        "Create 1 Additional Server"
      ],
      popular: true
    },
    {
      name: "Ultimate",
      price: "$7.99",
      period: "/month",
      features: [
        "4 GB DDR5 RAM",
        "4 GB NVMe SSD", 
        "10 GBit/s Connection",
        "4 Databases",
        "3 Allocations",
        "3 Included Backups",
        "Create 1 Additional Server"
      ],
      popular: false
    }
  ],

  // Shared Hosting Plans (same as WordPress)
  sharedPlans: [
    {
      name: "Startup",
      price: "$0.75",
      period: "/month",
      features: [
        "512 MB DDR5 RAM",
        "1 GB NVMe SSD",
        "10 GBit/s Connection",
        "2 Databases",
        "1 Allocation",
        "1 Included Backup",
        "Create 1 Additional Server"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$2.99", 
      period: "/month",
      features: [
        "2 GB DDR5 RAM",
        "2 GB NVMe SSD",
        "10 GBit/s Connection",
        "3 Databases",
        "2 Allocations",
        "2 Included Backups", 
        "Create 1 Additional Server"
      ],
      popular: true
    },
    {
      name: "Ultimate",
      price: "$7.99",
      period: "/month", 
      features: [
        "4 GB DDR5 RAM",
        "4 GB NVMe SSD",
        "10 GBit/s Connection",
        "4 Databases",
        "3 Allocations",
        "3 Included Backups",
        "Create 1 Additional Server"
      ],
      popular: false
    }
  ],

  // FAQ
  faqs: [
    {
      question: "What types of hosting do you offer?",
      answer: "We offer Discord bot hosting, Telegram bot hosting, WordPress hosting, shared hosting, and game server hosting. All plans include 24/7 support and 99.9% uptime guarantee.",
      icon: "fas fa-server"
    },
    {
      question: "How quickly can I get my hosting set up?",
      answer: "Most hosting services are activated within 5-10 minutes after payment confirmation. Our automated system ensures rapid deployment so you can get started immediately.",
      icon: "fas fa-clock"
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee for all new customers. If you're not satisfied with our service, we'll provide a full refund within the first week.",
      icon: "fas fa-money-bill-wave"
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your hosting plan at any time through your client panel. Upgrades are processed instantly and you'll only pay the prorated difference.",
      icon: "fas fa-arrow-up"
    },
    {
      question: "What kind of support do you provide?", 
      answer: "We provide 24/7 technical support through live chat and ticket system. Our experienced team can help with setup, troubleshooting, and optimization of your hosting environment.",
      icon: "fas fa-headset"
    }
  ],

  // Footer
  footer: {
    logo: "https://raw.githubusercontent.com/portix1337/assets/main/logo.png",
    tagline: "Built for developers who demand power and simplicity.",
    links: {
      hosting: [
        { name: "Discord Bot Hosting", href: "/discord-bot-hosting" },
        { name: "Telegram Bot Hosting", href: "/telegram-bot-hosting" },
      
      ],
      support: [
        { name: "Documentation", href: "/docs" },
        { name: "Contact Us", href: "/contact" },
        { name: "Status Page", href: "/status" },
        { name: "Community", href: "/community" }
      ],
      legal: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "DMCA", href: "/dmca" }
      ]
    },
    bottom: {
      text: "Made with ❤️ by",
      link: {
        text: "Portix.online",
        href: "https://portix.online"
      }
    }
  },

  // Docs Configuration
  docs: {
    title: "Documentation",
    subtitle: "Everything you need to know about using Portix Host",
    sections: [
      {
        title: "Getting Started",
        icon: "fas fa-rocket",
        articles: [
          {
            title: "Quick Start Guide",
            description: "Get up and running in minutes",
            href: "/docs/quick-start"
          },
          {
            title: "Account Setup",
            description: "Setting up your Portix Host account",
            href: "/docs/account-setup"
          },
          {
            title: "First Deployment", 
            description: "Deploy your first project",
            href: "/docs/first-deployment"
          }
        ]
      },
      {
        title: "Bot Hosting",
        icon: "fas fa-robot",
        articles: [
          {
            title: "Discord Bot Setup",
            description: "Host your Discord bot with ease",
            href: "/docs/discord-setup"
          },
          {
            title: "Telegram Bot Setup",
            description: "Deploy Telegram bots quickly",
            href: "/docs/telegram-setup"
          },
          {
            title: "Bot Monitoring",
            description: "Monitor your bot's performance",
            href: "/docs/bot-monitoring"
          }
        ]
      },
      {
        title: "Web Hosting",
        icon: "fas fa-globe",
        articles: [
          {
            title: "WordPress Installation",
            description: "Install WordPress in one click",
            href: "/docs/wordpress-install"
          },
          {
            title: "Domain Configuration",
            description: "Connect your custom domain",
            href: "/docs/domain-config"
          },
          {
            title: "SSL Certificates",
            description: "Secure your site with SSL",
            href: "/docs/ssl-setup"
          }
        ]
      },
      {
        title: "Troubleshooting",
        icon: "fas fa-tools",
        articles: [
          {
            title: "Common Issues",
            description: "Solutions to frequent problems",
            href: "/docs/common-issues"
          },
          {
            title: "Performance Optimization", 
            description: "Optimize your hosting performance",
            href: "/docs/optimization"
          },
          {
            title: "Error Codes",
            description: "Understanding error messages",
            href: "/docs/error-codes"
          }
        ]
      }
    ]
  },

  // SEO Configuration
  seo: {
    defaultTitle: "Portix Host - Powerful Hosting for Bots, Websites, and Games",
    defaultDescription: "Reliable and budget-friendly hosting solutions with 99.9% uptime. Host Discord bots, Telegram bots, websites, and game servers starting from $0.75/month.",
    keywords: "hosting, discord bot hosting, telegram bot hosting, web hosting, game hosting, cheap hosting, reliable hosting",
    ogImage: "/api/placeholder/1200/630"
  }
};