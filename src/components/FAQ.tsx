import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SFAQAnswer, SFAQContainer, SFAQItem } from "../styles/styled";
import { FaqItem } from "../types/types";
import { faqData } from "../data/FaqData";
import { renderFeaturesList } from "./FAQItems";

const faqs: FaqItem[] = faqData.FaqData;

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SFAQContainer>
      {faqs.map((faq, index) => (
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
            <SFAQAnswer>
              {faq.answer.info && <p>{faq.answer.info}</p>}
              {faq.answer.info_2 && <p>{faq.answer.info_2}</p>}
              {faq.answer.info_3 && <p>{faq.answer.info_3}</p>}
              {faq.answer.info_4 && <p>{faq.answer.info_4}</p>}
              {faq.answer.features && renderFeaturesList(faq.answer.features)}
            </SFAQAnswer>
          </div>
        </SFAQItem>
      ))}
    </SFAQContainer>
  );
};

export default FAQ;
