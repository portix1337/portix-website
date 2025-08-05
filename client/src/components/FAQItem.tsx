import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const faq = siteConfig.faqs[index];

  return (
    <div 
      className="bg-primary/50 backdrop-blur-sm rounded-2xl border border-custom/50 hover:border-accent/30 transition-all duration-300 shadow-lg" 
      data-testid={`faq-item-${index}`}
    >
      <button 
        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-primary/70 rounded-2xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        data-testid={`button-faq-${index}`}
      >
        <div className="flex items-center space-x-4">
          {faq?.icon && (
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
              <i className={`${faq.icon} text-accent`}></i>
            </div>
          )}
          <span 
            className="font-bold text-lg font-orbitron" 
            style={{ fontFamily: siteConfig.fonts.heading }}
            data-testid={`faq-question-${index}`}
          >
            {question}
          </span>
        </div>
        <ChevronDown 
          className={`w-6 h-6 text-accent transform transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-8 pb-8" data-testid={`faq-answer-${index}`}>
          <div className="pl-14">
            <p 
              className="text-secondary text-lg leading-relaxed font-tech-mono" 
              style={{ fontFamily: siteConfig.fonts.body }}
            >
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
