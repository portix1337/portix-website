import { Users, Award, Shield, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function AboutUs() {
  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Clock },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "5+", label: "Years Experience", icon: Award }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "10+ years in hosting industry, former AWS engineer",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      bio: "Expert in cloud infrastructure and security",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Mike Johnson",
      role: "Head of Support",
      bio: "Dedicated to providing exceptional customer service",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-24 lg:py-32" data-testid="about-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-users text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight font-orbitron" data-testid="about-title">
              Building the <span className="text-accent">Future</span> of Hosting
            </h1>
            <p className="text-secondary text-xl leading-relaxed font-tech-mono max-w-3xl mx-auto" data-testid="about-subtitle">
              Since 2019, Portix Host has been dedicated to providing reliable, affordable, and scalable hosting solutions for developers, businesses, and gamers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary" data-testid="stats-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent font-orbitron mb-2" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </div>
                <div className="text-secondary font-tech-mono" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32" data-testid="mission-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
                <i className="fas fa-rocket text-white"></i>
                <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="mission-title">
                Empowering Your <span className="text-accent">Digital Dreams</span>
              </h2>
              <p className="text-secondary text-lg leading-relaxed font-tech-mono mb-8" data-testid="mission-description">
                We believe that everyone deserves access to reliable, high-performance hosting without breaking the bank. Our mission is to democratize web hosting by providing enterprise-grade infrastructure at affordable prices.
              </p>
              <div className="space-y-4">
                {[
                  "Reliable 99.9% uptime guarantee",
                  "24/7 expert technical support",
                  "Transparent pricing with no hidden fees",
                  "Cutting-edge security and performance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center" data-testid={`mission-point-${index}`}>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-secondary font-tech-mono">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary/50 rounded-3xl p-12 border border-custom">
              <div className="text-center">
                <div className="w-32 h-32 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <i className="fas fa-server text-accent text-5xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white font-orbitron mb-4">
                  Enterprise Infrastructure
                </h3>
                <p className="text-secondary font-tech-mono">
                  Powered by state-of-the-art data centers with redundant power, cooling, and network connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="team-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-users text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="team-title">
              Meet the <span className="text-accent">Experts</span>
            </h2>
            <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed font-tech-mono" data-testid="team-subtitle">
              Our passionate team of hosting experts is dedicated to your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-primary/50 rounded-2xl p-8 border border-custom text-center hover:border-accent/50 transition-colors" data-testid={`team-member-${index}`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-accent/20"
                  data-testid={`team-image-${index}`}
                />
                <h3 className="text-xl font-bold text-white font-orbitron mb-2" data-testid={`team-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-accent font-tech-mono mb-4" data-testid={`team-role-${index}`}>
                  {member.role}
                </p>
                <p className="text-secondary font-tech-mono leading-relaxed" data-testid={`team-bio-${index}`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32" data-testid="values-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-heart text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-orbitron" data-testid="values-title">
              What Drives <span className="text-accent">Us</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-handshake",
                title: "Transparency",
                description: "Clear pricing, honest communication, and no hidden surprises."
              },
              {
                icon: "fas fa-shield-alt",
                title: "Security",
                description: "Your data and applications are protected with enterprise-grade security."
              },
              {
                icon: "fas fa-bolt",
                title: "Performance",
                description: "Lightning-fast loading times and optimized infrastructure."
              },
              {
                icon: "fas fa-headset",
                title: "Support",
                description: "24/7 expert support whenever you need assistance."
              }
            ].map((value, index) => (
              <div key={index} className="text-center group" data-testid={`value-${index}`}>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <i className={`${value.icon} text-accent text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-4" data-testid={`value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-secondary font-tech-mono leading-relaxed" data-testid={`value-description-${index}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}