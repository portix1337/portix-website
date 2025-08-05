import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-custom rounded-xl bg-secondary/50" data-testid="faq-item">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors rounded-xl"
        data-testid="faq-question-button"
      >
        <span className="text-lg font-medium text-white font-orbitron pr-4" data-testid="faq-question">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-accent transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t border-custom/50 pt-4" data-testid="faq-answer">
          <p className="text-secondary leading-relaxed font-tech-mono">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}