interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export default function PricingCard({ title, price, duration, features, isPopular = false, buttonText }: PricingCardProps) {
  return (
    <div className={`group relative bg-secondary/50 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
      isPopular 
        ? 'border-accent bg-accent/5 hover:bg-accent/10 shadow-lg shadow-accent/20' 
        : 'border-custom hover:border-accent/50 hover:shadow-accent/10'
    }`} data-testid="pricing-card">
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-6 py-2 rounded-full text-sm font-tech-mono font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 font-orbitron text-white" data-testid="pricing-title">
          {title}
        </h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-accent font-orbitron" data-testid="pricing-price">
            {price}
          </span>
          <span className="text-secondary font-tech-mono" data-testid="pricing-duration">
            /{duration}
          </span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-secondary font-tech-mono" data-testid={`pricing-feature-${index}`}>
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <i className="fas fa-check text-white text-xs"></i>
            </div>
            {feature}
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-4 rounded-xl font-tech-mono font-medium transition-all duration-300 transform hover:scale-105 ${
        isPopular
          ? 'bg-accent hover:bg-blue-600 text-white shadow-lg'
          : 'border-2 border-accent hover:bg-accent/10 text-accent hover:text-white'
      }`} data-testid="pricing-button">
        {buttonText}
      </button>
    </div>
  );
}