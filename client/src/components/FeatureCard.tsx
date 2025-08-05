import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start space-x-4" data-testid={`feature-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2" data-testid={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-secondary" data-testid={`feature-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
