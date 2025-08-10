import { useState, useEffect } from "react";
import { 
  Check, 
  Zap, 
  Headphones, 
  Shield, 
  Server, 
  Lock, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  DollarSign, // Added icon for "Why Portix Host" section
  TrendingUp, // Added icon for "Why Portix Host" section
  Code, // Added icon for "Why Portix Host" section
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import FeatureCard from "@/components/FeatureCard";
import FAQItem from "@/components/FAQItem";

// Add custom CSS for the levitating, pulse, and new enhanced magic spell animations
const customStyles = `
  @keyframes levitate {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.02); }
    100% { transform: translateY(0) scale(1); }
  }
  .animate-levitate {
    animation: levitate 4s ease-in-out infinite;
  }
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }

  /* Magic Spell Effect Animations - Enhanced */
  @keyframes sparkle-pink {
    0%, 100% {
      transform: translate(0, 0) scale(0.8);
      opacity: 0;
    }
    50% {
      transform: translate(25px, -20px) scale(1.5);
      opacity: 1;
    }
  }

  @keyframes sparkle-purple {
    0%, 100% {
      transform: translate(0, 0) scale(0.9);
      opacity: 0;
    }
    50% {
      transform: translate(-30px, 15px) scale(1.3);
      opacity: 1;
    }
  }

  @keyframes sparkle-white {
    0%, 100% {
      transform: translate(0, 0) scale(0.7);
      opacity: 0;
    }
    50% {
      transform: translate(15px, 30px) scale(1.4);
      opacity: 1;
    }
  }

  @keyframes sparkle-fade {
    0%, 100% {
      transform: translate(0, 0) scale(0.6);
      opacity: 0;
    }
    50% {
      transform: translate(-25px, -10px) scale(1.2);
      opacity: 1;
    }
  }

  /*
    Create the magic spell particles using pseudo-elements and child divs.
    A wrapper div with 'relative' position is needed to anchor the 'absolute' elements.
  */
  .magic-effect-wrapper {
    position: relative;
    z-index: 10;
  }

  .magic-effect-wrapper::before,
  .magic-effect-wrapper::after,
  .magic-effect-wrapper > .sparkle-1,
  .magic-effect-wrapper > .sparkle-2,
  .magic-effect-wrapper > .sparkle-3,
  .magic-effect-wrapper > .sparkle-4,
  .magic-effect-wrapper > .sparkle-5,
  .magic-effect-wrapper > .sparkle-6 {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0;
  }

  .magic-effect-wrapper > .sparkle-1 {
    width: 10px;
    height: 10px;
    top: 10%;
    left: 20%;
    background-color: #ff69b4; /* Pinkish */
    animation: sparkle-pink 3s ease-in-out infinite;
  }

  .magic-effect-wrapper > .sparkle-2 {
    width: 12px;
    height: 12px;
    bottom: 25%;
    right: 15%;
    background-color: #9333ea; /* Purplish */
    animation: sparkle-purple 4s ease-in-out infinite 0.5s; /* Delay for variety */
  }
  
  .magic-effect-wrapper > .sparkle-3 {
    width: 8px;
    height: 8px;
    top: 40%;
    right: 5%;
    background-color: #ffffff; /* Whitish */
    animation: sparkle-fade 3.2s ease-in-out infinite 0.8s;
  }

  .magic-effect-wrapper > .sparkle-4 {
    width: 9px;
    height: 9px;
    bottom: 50%;
    left: 5%;
    background-color: #9333ea;
    animation: sparkle-purple 3.5s ease-in-out infinite 1.2s;
  }

  .magic-effect-wrapper > .sparkle-5 {
    width: 11px;
    height: 11px;
    top: 25%;
    right: 30%;
    background-color: #ffffff;
    animation: sparkle-white 3.8s ease-in-out infinite 1.5s;
  }

  .magic-effect-wrapper > .sparkle-6 {
    width: 7px;
    height: 7px;
    bottom: 10%;
    left: 45%;
    background-color: #ff69b4;
    animation: sparkle-pink 4s ease-in-out infinite 2s;
  }
`;

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Define a new map for service icon colors
  const serviceIconColors = [
    'text-blue-500',
    'text-purple-500',
    'text-yellow-500',
    'text-green-500',
    'text-red-500',
    'text-indigo-500'
  ];

  const iconMap = {
    check: <Check className="w-6 h-6 text-green-500" />,
    zap: <Zap className="w-6 h-6 text-yellow-500" />,
    headphones: <Headphones className="w-6 h-6 text-blue-500" />,
    shield: <Shield className="w-6 h-6 text-red-500" />,
    server: <Server className="w-6 h-6 text-purple-500" />,
    lock: <Lock className="w-6 h-6 text-green-500" />
  };

  const whyIcons = {
    "Budget-Friendly Pricing": <DollarSign className="w-6 h-6 text-accent" />,
    "Lightning-Fast Performance": <Zap className="w-6 h-6 text-accent" />,
    "Developer-Focused": <Code className="w-6 h-6 text-accent" />,
    "Scalable Solutions": <TrendingUp className="w-6 h-6 text-accent" />
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % siteConfig.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + siteConfig.testimonials.length) % siteConfig.testimonials.length);
  };

  return (
    <div>
      {/* Inject custom styles into the head */}
      <style>{customStyles}</style>

      {/* Hero Section - Fullscreen */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/20"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="max-w-2xl">
              <h1
                className={`${siteConfig.fonts.headingSizes.hero} font-bold mb-8 leading-tight font-orbitron`}
                style={{ fontFamily: siteConfig.fonts.heading }}
                data-testid="hero-title"
              >
                Powerful Hosting for{" "}
                <span className="text-accent">
                  Bots
                </span>
                ,{" "}
                <span className="text-accent">
                  Websites
                </span>
                , and{" "}
                <span className="text-accent">
                  Games
                </span>
              </h1>

              <p
                className="text-xl lg:text-2xl text-secondary mb-12 leading-relaxed font-tech-mono"
                style={{ fontFamily: siteConfig.fonts.body }}
                data-testid="hero-subtitle"
              >
                {siteConfig.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
                  data-testid="button-get-started"
                >
                  {siteConfig.hero.ctaButtons.primary}
                </button>
                <button
                  className="border-2 border-custom hover:bg-secondary text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-all duration-300"
                  data-testid="button-learn-more"
                >
                  {siteConfig.hero.ctaButtons.secondary}
                </button>
              </div>
            </div>

            {/* Right Side - Discord Illustration */}
            <div className="relative">
              <div className="w-full max-w-sm mx-auto">
                <div className="relative p-8 bg-secondary/20 backdrop-blur-sm rounded-3xl">
                  <img
                    src={siteConfig.hero.image}
                    alt="Discord Hosting Illustration"
                    className="w-full h-auto rounded-2xl shadow-2xl animate-levitate"
                    data-testid="hero-image"
                  />
                  {/* Replaced the lucide-react Star component with a 4-point SVG */}
                  <div className="absolute right-[-2rem] top-[5%] text-white animate-pulse-slow">
                    <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
                    </svg>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="services-section">
        <div className="container mx-auto px-4">
          {/* Removed Section Tag */}
          <div className="text-center mb-16">
            <h2
              className={`${siteConfig.fonts.headingSizes.section} font-bold mb-6 font-orbit-ron`}
              style={{ fontFamily: siteConfig.fonts.heading }}
              data-testid="services-title"
            >
              What We <span className="text-accent">Provide</span>
            </h2>
            <p
              className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono"
              style={{ fontFamily: siteConfig.fonts.body }}
              data-testid="services-subtitle"
            >
              Choose from our comprehensive hosting solutions designed for developers, businesses, and gaming communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {siteConfig.services.map((service, index) => (
              <div
                key={service.id}
                className="bg-primary/50 backdrop-blur-sm rounded-2xl p-10 text-center border border-custom/50 hover:border-accent/50 hover:bg-primary/70 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl"
                data-testid={`service-card-${service.id}`}
              >
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <i className={`${service.icon} text-3xl ${serviceIconColors[index % serviceIconColors.length]}`}></i>
                </div>
                <h3
                  className={`${siteConfig.fonts.headingSizes.card} font-bold mb-6 font-orbitron text-white group-hover:text-accent transition-colors duration-300`}
                  style={{ fontFamily: siteConfig.fonts.heading }}
                  data-testid={`service-name-${service.id}`}
                >
                  {service.name}
                </h3>
                <p
                  className="text-secondary leading-relaxed text-lg font-tech-mono"
                  style={{ fontFamily: siteConfig.fonts.body }}
                  data-testid={`service-description-${service.id}`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-primary" data-testid="features-section">
        <div className="container mx-auto px-4">
          {/* Removed Section Tag */}
          <div className="text-center mb-16">
            <h2
              className={`${siteConfig.fonts.headingSizes.section} font-bold mb-6 font-orbitron`}
              style={{ fontFamily: siteConfig.fonts.heading }}
              data-testid="features-title"
            >
              Our <span className="text-accent">Features</span>
            </h2>
            <p
              className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono"
              style={{ fontFamily: siteConfig.fonts.body }}
              data-testid="features-subtitle"
            >
              Everything you need to run your projects with confidence and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      <section className="py-24 lg:py-32 bg-secondary" data-testid="why-section">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Removed Section Tag */}
            <div className="text-center mb-16">
              <h2
                className={`${siteConfig.fonts.headingSizes.section} font-bold mb-6 font-orbitron`}
                style={{ fontFamily: siteConfig.fonts.heading }}
                data-testid="why-title"
              >
                Why Portix <span className="text-accent">Host</span>?
              </h2>
              <p
                className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono"
                style={{ fontFamily: siteConfig.fonts.body }}
                data-testid="why-subtitle"
              >
                Join thousands of developers and businesses who trust us with their hosting needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left column - Image with new magic effect */}
              <div className="order-2 lg:order-1 flex justify-center relative">
                <div className="magic-effect-wrapper">
                  <img
                    src="https://raw.githubusercontent.com/portix1337/assets/main/y_portix.png"
                    alt="Server Infrastructure Illustration"
                    className="h-80 max-w-80"
                    data-testid="why-illustration-image"
                  />
                  {/* Magic spell particles */}
                  <div className="sparkle-1"></div>
                  <div className="sparkle-2"></div>
                  <div className="sparkle-3"></div>
                  <div className="sparkle-4"></div>
                  <div className="sparkle-5"></div>
                  <div className="sparkle-6"></div>
                </div>
              </div>

              {/* Right column - Features list */}
              <div className="order-1 lg:order-2 space-y-8">
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
                  <div key={index} className="flex items-start space-x-6 p-6 bg-primary/30 rounded-2xl border border-custom/30 hover:border-accent/30 transition-colors" data-testid={`why-feature-${index}`}>
                    {/* Replaced the check icon with a dynamic icon based on the feature title */}
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {whyIcons[feature.title as keyof typeof whyIcons]}
                    </div>
                    <div>
                      <h4
                        className="text-xl font-bold mb-3 font-orbitron"
                        style={{ fontFamily: siteConfig.fonts.heading }}
                        data-testid={`why-feature-title-${index}`}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className="text-secondary text-lg leading-relaxed font-tech-mono"
                        style={{ fontFamily: siteConfig.fonts.body }}
                        data-testid={`why-feature-description-${index}`}
                      >
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

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-primary" data-testid="testimonials-section">
        <div className="container mx-auto px-4">
          {/* Removed Section Tag */}
          <div className="text-center mb-16">
            <h2
              className={`${siteConfig.fonts.headingSizes.section} font-bold mb-6 font-orbitron`}
              style={{ fontFamily: siteConfig.fonts.heading }}
              data-testid="testimonials-title"
            >
              What Our Customers Say
            </h2>
            <p
              className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono"
              style={{ fontFamily: siteConfig.fonts.body }}
              data-testid="testimonials-subtitle"
            >
              Join thousands of satisfied customers who trust Portix Host for their hosting needs.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-secondary/50 backdrop-blur-sm rounded-3xl p-12 border border-custom/50 shadow-2xl">
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors"
                data-testid="testimonial-prev"
              >
                <ChevronLeft className="w-6 h-6 text-accent" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors"
                data-testid="testimonial-next"
              >
                <ChevronRight className="w-6 h-6 text-accent" />
              </button>

              {/* Testimonial Content */}
              <div className="text-center px-16">
                <div className="flex justify-center mb-6">
                  {[...Array(siteConfig.testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote
                  className="text-xl lg:text-2xl text-white mb-8 leading-relaxed font-tech-mono"
                  style={{ fontFamily: siteConfig.fonts.body }}
                  data-testid={`testimonial-text-${currentTestimonial}`}
                >
                  "{siteConfig.testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={siteConfig.testimonials[currentTestimonial].avatar}
                    alt={siteConfig.testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-accent"
                    data-testid={`testimonial-avatar-${currentTestimonial}`}
                  />
                  <div className="text-left">
                    <div
                      className="font-bold text-lg font-orbitron"
                      style={{ fontFamily: siteConfig.fonts.heading }}
                      data-testid={`testimonial-name-${currentTestimonial}`}
                    >
                      {siteConfig.testimonials[currentTestimonial].name}
                    </div>
                    <div
                      className="text-secondary font-tech-mono"
                      style={{ fontFamily: siteConfig.fonts.body }}
                      data-testid={`testimonial-role-${currentTestimonial}`}
                    >
                      {siteConfig.testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {siteConfig.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-accent' : 'bg-custom'
                    }`}
                    data-testid={`testimonial-indicator-${index}`}
                  />
                ))}
              </div>
            </div>

            {/* Trustpilot Button */}
            <div className="text-center mt-12">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-colors shadow-lg flex items-center justify-center space-x-2 mx-auto">
                <Star className="w-5 h-5 text-white" fill="currentColor" />
                <span>Read more reviews on Trustpilot</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="faq-section">
        <div className="container mx-auto px-4">
          {/* Removed Section Tag */}
          <div className="text-center mb-16">
            <h2
              className={`${siteConfig.fonts.headingSizes.section} font-bold mb-6 font-orbitron`}
              style={{ fontFamily: siteConfig.fonts.heading }}
              data-testid="faq-title"
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono"
              style={{ fontFamily: siteConfig.fonts.body }}
              data-testid="faq-subtitle"
            >
              Get answers to common questions about our hosting services and support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
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
