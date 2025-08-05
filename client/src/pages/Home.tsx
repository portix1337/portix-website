import { useState } from "react";
import { Check, Zap, Headphones, Shield, Server, Lock, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { siteConfig } from "@/lib/config";
import FeatureCard from "@/components/FeatureCard";
import FAQItem from "@/components/FAQItem";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const iconMap = {
    check: <Check className="w-6 h-6 text-green-500" />,
    zap: <Zap className="w-6 h-6 text-yellow-500" />,
    headphones: <Headphones className="w-6 h-6 text-blue-500" />,
    shield: <Shield className="w-6 h-6 text-red-500" />,
    server: <Server className="w-6 h-6 text-purple-500" />,
    lock: <Lock className="w-6 h-6 text-green-500" />
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % siteConfig.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + siteConfig.testimonials.length) % siteConfig.testimonials.length);
  };

  return (
    <div>
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
              <div className="w-full max-w-lg mx-auto">
                <div className="relative p-8 bg-secondary/20 backdrop-blur-sm rounded-3xl border border-custom/30">
                  <img 
                    src={siteConfig.hero.image} 
                    alt="Discord Hosting Illustration" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    data-testid="hero-image"
                  />
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
          {/* Section Tag */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className={`${siteConfig.sectionTags.services.icon} text-white`}></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                {siteConfig.sectionTags.services.text}
              </span>
            </div>
            <h2 
              className={`${siteConfig.fonts.headingSizes.section} font-bold mb-6 font-orbitron`} 
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
                  <i className={`${service.icon} text-3xl text-accent`}></i>
                </div>
                <h3 
                  className={`${siteConfig.fonts.headingSizes.card} font-bold mb-6 font-orbitron`} 
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
          {/* Section Tag */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className={`${siteConfig.sectionTags.features.icon} text-white`}></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                {siteConfig.sectionTags.features.text}
              </span>
            </div>
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
            {/* Section Tag */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
                <i className={`${siteConfig.sectionTags.why.icon} text-white`}></i>
                <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                  {siteConfig.sectionTags.why.text}
                </span>
              </div>
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
              {/* Left column - Image */}
              <div className="order-2 lg:order-1">
                <div className="bg-primary/50 backdrop-blur-sm rounded-3xl p-12 text-center border border-custom/50 shadow-2xl">
                  <div className="w-40 h-40 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <Server className="w-20 h-20 text-accent" />
                  </div>
                  <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
                    <p 
                      className="text-lg font-tech-mono font-medium leading-relaxed" 
                      style={{ fontFamily: siteConfig.fonts.body }}
                      data-testid="why-image-caption"
                    >
                      Enterprise-grade infrastructure trusted by developers worldwide
                    </p>
                  </div>
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
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
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
          {/* Section Tag */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="text-2xl">{siteConfig.sectionTags.testimonials.icon}</span>
              <span className="text-accent font-tech-mono font-medium uppercase tracking-wider">
                {siteConfig.sectionTags.testimonials.text}
              </span>
            </div>
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
                  className="text-xl lg:text-2xl text-white mb-8 leading-relaxed font-tech-mono italic" 
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
              <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-colors shadow-lg">
                Read more reviews on Trustpilot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="faq-section">
        <div className="container mx-auto px-4">
          {/* Section Tag */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="text-2xl">{siteConfig.sectionTags.faq.icon}</span>
              <span className="text-accent font-tech-mono font-medium uppercase tracking-wider">
                {siteConfig.sectionTags.faq.text}
              </span>
            </div>
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
