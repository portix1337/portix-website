export const siteConfig = {
  name: "Portix Host",
  description: "Powerful Hosting for Bots, Websites, and Games",
  
  // Discount banner
  discountBanner: {
    enabled: true,
    text: "🎉 Limited Time: Get 50% off your first month! Use code: WELCOME50"
  },
  
  // Hero section
  hero: {
    title: "Powerful Hosting for Bots, Websites, and Games",
    subtitle: "Portix Host delivers reliable and budget-friendly hosting solutions with unmatched uptime.",
    ctaButtons: {
      primary: "Get Started",
      secondary: "Learn More"
    }
  },
  
  // Services
  services: [
    {
      id: "bot-hosting",
      name: "Bot Hosting",
      description: "Deploy and manage Discord and Telegram bots with 24/7 uptime, instant deployment, and scalable resources.",
      icon: "bot"
    },
    {
      id: "web-hosting", 
      name: "Web Hosting",
      description: "Fast and secure hosting for WordPress sites, applications, and static websites with free SSL certificates.",
      icon: "web"
    },
    {
      id: "game-hosting",
      name: "Game Hosting", 
      description: "Low-latency game servers for Minecraft and other popular games with DDoS protection and instant setup.",
      icon: "game"
    }
  ],
  
  // Features
  features: [
    {
      name: "99.9% Uptime",
      description: "Guaranteed uptime with our redundant infrastructure and monitoring systems.",
      icon: "check"
    },
    {
      name: "Instant Deployment",
      description: "Get your services online in seconds with our automated deployment system.",
      icon: "zap"
    },
    {
      name: "24/7 Support",
      description: "Expert support team available around the clock to help you succeed.",
      icon: "headphones"
    },
    {
      name: "DDoS Protection",
      description: "Advanced protection against attacks to keep your services running smoothly.",
      icon: "shield"
    },
    {
      name: "SSD Storage",
      description: "Fast NVMe SSD storage for optimal performance and quick data access.",
      icon: "server"
    },
    {
      name: "Free SSL",
      description: "Automatic SSL certificates for all your domains at no extra cost.",
      icon: "lock"
    }
  ],
  
  // Bot hosting plans
  botHostingPlans: [
    {
      name: "Basic",
      price: "$0.75",
      period: "/month",
      description: "Perfect for small Discord bots",
      features: [
        "512 MB RAM",
        "1 GB SSD Storage", 
        "Unmetered Bandwidth",
        "Instant Deployment",
        "99.9% Uptime"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$1.75", 
      period: "/month",
      description: "Great for growing Discord bots",
      features: [
        "1 GB RAM",
        "2 GB SSD Storage",
        "Unmetered Bandwidth", 
        "Instant Deployment",
        "99.9% Uptime"
      ],
      popular: true
    },
    {
      name: "Ultimate",
      price: "$2.75",
      period: "/month", 
      description: "For high-traffic Discord bots",
      features: [
        "2 GB RAM",
        "4 GB SSD Storage",
        "Unmetered Bandwidth",
        "Instant Deployment", 
        "99.9% Uptime"
      ],
      popular: false
    }
  ],
  
  // Web hosting plans
  webHostingPlans: [
    {
      name: "Basic",
      price: "$0.75",
      period: "/month",
      description: "Perfect for personal websites",
      features: [
        "1 Website",
        "1 GB SSD Storage",
        "10 GB Bandwidth",
        "Free SSL",
        "99.9% Uptime"
      ],
      popular: false
    },
    {
      name: "Standard", 
      price: "$1.75",
      period: "/month",
      description: "Great for small businesses",
      features: [
        "5 Websites",
        "5 GB SSD Storage", 
        "50 GB Bandwidth",
        "Free SSL + Email",
        "99.9% Uptime"
      ],
      popular: true
    },
    {
      name: "Ultimate",
      price: "$2.75",
      period: "/month",
      description: "For growing businesses", 
      features: [
        "Unlimited Websites",
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL + Email + Subdomains",
        "99.9% Uptime"
      ],
      popular: false
    }
  ],
  
  // FAQ
  faqs: [
    {
      question: "How quickly can I deploy my bot?",
      answer: "Your bot can be deployed within seconds of completing your order. Our automated deployment system instantly provisions your resources and starts your bot."
    },
    {
      question: "What happens if my bot goes down?",
      answer: "We provide automatic restart functionality and 24/7 monitoring. If your bot encounters any issues, our system will automatically attempt to restart it and notify our support team."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time from your client area. Changes take effect immediately with no downtime."
    },
    {
      question: "Do you provide technical support?",
      answer: "Absolutely! Our expert support team is available 24/7 to help with any hosting-related questions or issues. We provide both technical and billing support."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and various cryptocurrency payments. All transactions are processed securely through our encrypted payment system."
    }
  ],
  
  // Social links
  social: {
    discord: "#discord",
    github: "#github", 
    twitter: "#twitter"
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Portix Host. All rights reserved.",
    madeBy: "Made with ❤️ By Portix.online"
  }
};
