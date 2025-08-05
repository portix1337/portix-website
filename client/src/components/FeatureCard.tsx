import { ReactNode } from "react";
import { siteConfig } from "@/lib/config";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-2xl border border-custom/50 hover:border-accent/30 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl" data-testid={`feature-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 
          className={`${siteConfig.fonts.headingSizes.card} font-bold mb-4 font-orbitron`} 
          style={{ fontFamily: siteConfig.fonts.heading }}
          data-testid={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {title}
        </h3>
        <p 
          className="text-secondary text-lg leading-relaxed font-tech-mono" 
          style={{ fontFamily: siteConfig.fonts.body }}
          data-testid={`feature-description-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
