import { Check } from "lucide-react";

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
  };
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div 
      className={`bg-secondary rounded-xl p-8 relative ${
        plan.popular ? 'border-2 border-accent' : 'border border-custom hover:border-accent'
      } transition-colors`}
      data-testid={`pricing-card-${plan.name.toLowerCase()}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold" data-testid="popular-badge">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2" data-testid={`plan-name-${plan.name.toLowerCase()}`}>
          {plan.name}
        </h3>
        <div className="text-3xl font-bold mb-4" data-testid={`plan-price-${plan.name.toLowerCase()}`}>
          {plan.price}
          <span className="text-sm text-secondary font-normal">{plan.period}</span>
        </div>
        <p className="text-secondary" data-testid={`plan-description-${plan.name.toLowerCase()}`}>
          {plan.description}
        </p>
      </div>
      
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3" data-testid={`feature-${index}`}>
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className="w-full bg-accent hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
        data-testid={`button-get-started-${plan.name.toLowerCase()}`}
      >
        Get Started
      </button>
    </div>
  );
}
