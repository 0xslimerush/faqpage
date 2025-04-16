import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../data/data";


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-800 rounded-lg overflow-hidden bg-[#13141A] transition-all duration-300 hover:border-[#FF3366]"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#FF3366] transition-transform duration-300 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`px-6 transition-all duration-300 ease-in-out ${
              openIndex === index ? "py-4" : "max-h-0"
            } overflow-hidden`}
          >
            <p className="text-gray-400 whitespace-pre-line">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
