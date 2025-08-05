import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-secondary rounded-lg border border-custom" data-testid={`faq-item-${index}`}>
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-border transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        data-testid={`button-faq-${index}`}
      >
        <span className="font-semibold" data-testid={`faq-question-${index}`}>
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4" data-testid={`faq-answer-${index}`}>
          <p className="text-secondary">{answer}</p>
        </div>
      )}
    </div>
  );
}
