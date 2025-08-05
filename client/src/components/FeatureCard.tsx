import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-primary/50 rounded-2xl p-8 border border-custom hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-accent/10" data-testid="feature-card">
      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <div className="text-2xl text-accent">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 font-orbitron text-white group-hover:text-accent transition-colors" data-testid="feature-title">
        {title}
      </h3>
      <p className="text-secondary leading-relaxed font-tech-mono" data-testid="feature-description">
        {description}
      </p>
    </div>
  );
}