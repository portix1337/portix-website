import { Users, Award, Shield, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="about-hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="about-hero-title">
              About Portix Host
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto" data-testid="about-hero-subtitle">
              We're passionate about providing reliable, affordable hosting solutions for developers, businesses, and gaming communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24" data-testid="about-story-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="about-story-title">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-secondary leading-relaxed mb-6" data-testid="about-story-text-1">
                Founded in 2024, Portix Host was born from a simple idea: hosting shouldn't be complicated or expensive. 
                Our team of experienced developers and system administrators came together with a shared vision of making 
                premium hosting accessible to everyone.
              </p>
              
              <p className="text-secondary leading-relaxed mb-6" data-testid="about-story-text-2">
                We started by focusing on bot hosting, recognizing the growing need for reliable infrastructure to run 
                Discord and Telegram bots. As our community grew, we expanded our offerings to include web hosting and 
                game servers, always maintaining our commitment to simplicity, reliability, and affordability.
              </p>
              
              <p className="text-secondary leading-relaxed" data-testid="about-story-text-3">
                Today, we're proud to serve thousands of developers, businesses, and gaming communities worldwide, 
                helping them bring their digital projects to life with confidence and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-secondary/30" data-testid="about-values-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="about-values-title">
              Our Values
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto" data-testid="about-values-subtitle">
              These core principles guide everything we do at Portix Host.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center" data-testid="value-reliability">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-secondary">
                We guarantee 99.9% uptime with our robust infrastructure and proactive monitoring.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-affordability">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordability</h3>
              <p className="text-secondary">
                Premium hosting shouldn't cost a fortune. We offer competitive pricing without compromising quality.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-support">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-secondary">
                Our expert team is available 24/7 to help you succeed with personalized assistance.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-innovation">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-secondary">
                We continuously improve our services with the latest technologies and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24" data-testid="about-team-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="about-team-title">
              Built by Portix.online
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto" data-testid="about-team-subtitle">
              Portix Host is proudly developed and maintained by the Portix.online team, bringing years of 
              experience in hosting, development, and customer service to deliver the best possible experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
