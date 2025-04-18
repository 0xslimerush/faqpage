import React, { useState } from "react";
import {
  SFAQAnswer,
  SFAQWrapper,
  SFAQItem,
  SFAQContainer,
  SChevronDown,
} from "../styles/styled";
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
    <SFAQWrapper>
      {faqs.map((faq, index) => (
        <SFAQItem key={index}>
          <button onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <SChevronDown isOpen={openIndex === index} />
          </button>
          <SFAQContainer isOpen={openIndex === index}>
            <SFAQAnswer>
              {faq.answer.info && <p>{faq.answer.info}</p>}
              {faq.answer.info_2 && <p>{faq.answer.info_2}</p>}
              {faq.answer.info_3 && <p>{faq.answer.info_3}</p>}
              {faq.answer.info_4 && <p>{faq.answer.info_4}</p>}
              {faq.answer.features && renderFeaturesList(faq.answer.features)}
              {faq.answer.bottom_info && <p>{faq.answer.bottom_info}</p>}
            </SFAQAnswer>
          </SFAQContainer>
        </SFAQItem>
      ))}
    </SFAQWrapper>
  );
};

export default FAQ;
