export const siteConfig = {
  name: "Portix Host",
  description: "Powerful Hosting for Bots, Websites, and Games",
  
  // Typography
  fonts: {
    heading: "'Orbitron', sans-serif",
    body: "'Share Tech Mono', monospace",
    headingSizes: {
      hero: "text-5xl lg:text-7xl",
      section: "text-3xl lg:text-5xl",
      card: "text-xl lg:text-2xl"
    }
  },
  
  // Discount banner
  discountBanner: {
    enabled: true,
    text: "🎉 Limited Time: Get 50% off your first month! Use code: WELCOME50"
  },
  
  // Hero section
  hero: {
    title: "Powerful Hosting for Bots, Websites, and Games",
    subtitle: "Portix Host delivers reliable and budget-friendly hosting solutions with unmatched uptime.",
    image: "/api/placeholder/600/400", // Discord illustration
    ctaButtons: {
      primary: "Get Started",
      secondary: "Learn More"
    }
  },
  
  // Section tags
  sectionTags: {
    services: {
      icon: "⭐",
      text: "What We Offer"
    },
    features: {
      icon: "✨",
      text: "We Won't Disappoint"
    },
    why: {
      icon: "🚀",
      text: "Why Choose Us"
    },
    testimonials: {
      icon: "💬",
      text: "Customer Love"
    },
    faq: {
      icon: "❓",
      text: "Got Questions?"
    }
  },

  // Navigation
  navigation: {
    items: [
      {
        name: "HOME",
        href: "/",
        type: "link"
      },
      {
        name: "Bot Hosting",
        type: "dropdown",
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
        items: [
          {
            name: "WordPress Hosting",
            href: "/wordpress-hosting", 
            icon: "fab fa-wordpress"
          },
          {
            name: "Shared Hosting",
            href: "/shared-hosting",
            icon: "fas fa-server"
          }
        ]
      },
      {
        name: "Game Hosting",
        type: "dropdown",
        items: [
          {
            name: "Minecraft Hosting",
            href: "#minecraft",
            icon: "fas fa-cube"
          }
        ]
      },
      {
        name: "LEARN",
        type: "dropdown",
        items: [
          {
            name: "FAQ",
            href: "/faq",
            icon: "fas fa-question-circle"
          },
          {
            name: "About Us",
            href: "/about-us",
            icon: "fas fa-users"
          },
          {
            name: "Blog",
            href: "/blog",
            icon: "fas fa-blog"
          }
        ]
      }
    ],
    clientArea: {
      items: [
        {
          name: "Billing",
          href: "#billing",
          icon: "fas fa-credit-card"
        },
        {
          name: "Panel",
          href: "#panel", 
          icon: "fas fa-tachometer-alt"
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
      id: "bot-hosting",
      name: "Bot Hosting",
      description: "Deploy and manage Discord and Telegram bots with 24/7 uptime, instant deployment, and scalable resources.",
      icon: "fas fa-robot"
    },
    {
      id: "web-hosting", 
      name: "Web Hosting",
      description: "Fast and secure hosting for WordPress sites, applications, and static websites with free SSL certificates.",
      icon: "fas fa-globe"
    },
    {
      id: "game-hosting",
      name: "Game Hosting", 
      description: "Low-latency game servers for Minecraft and other popular games with DDoS protection and instant setup.",
      icon: "fas fa-gamepad"
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
  
  // Testimonials
  testimonials: [
    {
      name: "Alex Johnson",
      role: "Discord Bot Developer",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Portix Host has been incredible for my Discord bot hosting needs. The deployment is instant and the uptime is exactly as promised. Best hosting service I've used!",
      featured: true
    },
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer", 
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The performance and reliability are outstanding. My web applications run smoothly and the support team is always helpful. Highly recommended!",
      featured: false
    },
    {
      name: "Mike Rodriguez",
      role: "Gaming Community Owner",
      avatar: "/api/placeholder/64/64", 
      rating: 5,
      text: "Running multiple game servers has never been easier. The control panel is intuitive and the server performance is excellent for our community.",
      featured: false
    }
  ],

  // Team members
  team: [
    {
      name: "David Smith",
      role: "Founder & Lead Developer",
      title: "Chief Technology Officer",
      avatar: "/api/placeholder/300/300",
      description: "David founded Portix Host with over 8 years of experience in cloud infrastructure and web development. He oversees our technical architecture and ensures we deliver cutting-edge hosting solutions that scale with our customers' needs.",
      featured: true
    }
  ],

  // FAQ
  faqs: [
    {
      question: "How quickly can I deploy my bot?",
      answer: "Your bot can be deployed within seconds of completing your order. Our automated deployment system instantly provisions your resources and starts your bot.",
      icon: "fas fa-rocket"
    },
    {
      question: "What happens if my bot goes down?",
      answer: "We provide automatic restart functionality and 24/7 monitoring. If your bot encounters any issues, our system will automatically attempt to restart it and notify our support team.",
      icon: "fas fa-shield-alt"
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time from your client area. Changes take effect immediately with no downtime.",
      icon: "fas fa-arrow-up"
    },
    {
      question: "Do you provide technical support?",
      answer: "Absolutely! Our expert support team is available 24/7 to help with any hosting-related questions or issues. We provide both technical and billing support.",
      icon: "fas fa-headphones"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and various cryptocurrency payments. All transactions are processed securely through our encrypted payment system.",
      icon: "fas fa-credit-card"
    }
  ],
  
  // Blog posts
  blog: [
    {
      id: 1,
      title: "Setting up Discord Bots with Pterodactyl Panel",
      slug: "discord-bots-pterodactyl-setup", 
      excerpt: "Complete guide to deploying and managing Discord bots using Pterodactyl panel with Node.js and Python environments.",
      content: `# Setting up Discord Bots with Pterodactyl Panel

## Prerequisites
- Basic knowledge of Discord bot development
- Node.js or Python bot code ready for deployment
- Portix Host account with bot hosting plan

## Step 1: Creating Your Server
Navigate to your Portix Host control panel and create a new server instance...

## Step 2: Uploading Your Bot Files
Use SFTP or the web file manager to upload your bot files...

## Step 3: Configuration
Configure your environment variables and bot token...`,
      author: "Portix Team",
      date: "January 15, 2025",
      category: "Tutorial",
      featured: true
    },
    {
      id: 2,
      title: "Web Hosting with Node.js Applications",
      slug: "nodejs-web-hosting-guide",
      excerpt: "Deploy and scale Node.js web applications with our comprehensive hosting guide covering Express.js, databases, and SSL.",
      content: `# Node.js Web Hosting Guide

Learn how to deploy production-ready Node.js applications...`,
      author: "Portix Team",
      date: "January 10, 2025", 
      category: "Web Hosting",
      featured: false
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
    categories: [
      {
        name: "Services",
        icon: "fas fa-server",
        links: [
          { name: "Discord Bot Hosting", href: "/discord-bot-hosting", icon: "fab fa-discord" },
          { name: "Telegram Bot Hosting", href: "/telegram-bot-hosting", icon: "fab fa-telegram" },
          { name: "WordPress Hosting", href: "/wordpress-hosting", icon: "fab fa-wordpress" },
          { name: "Shared Hosting", href: "/shared-hosting", icon: "fas fa-server" },
          { name: "Game Hosting", href: "#game-hosting", icon: "fas fa-gamepad" }
        ]
      },
      {
        name: "Learn",
        icon: "fas fa-graduation-cap",
        links: [
          { name: "FAQ", href: "/faq", icon: "fas fa-question-circle" },
          { name: "About Us", href: "/about-us", icon: "fas fa-users" },
          { name: "Blog", href: "/blog", icon: "fas fa-blog" }
        ]
      },
      {
        name: "Legal",
        icon: "fas fa-balance-scale",
        links: [
          { name: "Terms of Service", href: "#terms", icon: "fas fa-file-contract" },
          { name: "Privacy Policy", href: "#privacy", icon: "fas fa-shield-alt" }
        ]
      },
      {
        name: "Connect", 
        icon: "fas fa-share-alt",
        links: [
          { name: "Discord", href: "#discord", icon: "fab fa-discord" },
          { name: "GitHub", href: "#github", icon: "fab fa-github" },
          { name: "Twitter", href: "#twitter", icon: "fab fa-twitter" }
        ]
      }
    ],
    copyright: "© 2025 Portix Host. All rights reserved.",
    madeBy: "Made with ❤️ By Portix.online"
  }
};
