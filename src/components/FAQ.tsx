import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../data/data";
import { SFAQContainer, SFAQItem } from "../styles/styled";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SFAQContainer>
      {faqData.map((faq, index) => (
        <SFAQItem key={index} className="transition-all duration-300">
          <button onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <ChevronDown
              className={` transition-transform duration-300 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? "py-4" : "max-h-0"
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </SFAQItem>
      ))}
    </SFAQContainer>
  );
};

export default FAQ;
