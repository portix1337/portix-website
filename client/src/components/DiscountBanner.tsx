import { useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(siteConfig.discountBanner.enabled);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-white py-2 text-center text-sm font-medium" data-testid="discount-banner">
      {siteConfig.discountBanner.text}
      <button 
        onClick={() => setIsVisible(false)}
        className="ml-4 text-white hover:text-gray-200 transition-colors"
        data-testid="button-close-banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
