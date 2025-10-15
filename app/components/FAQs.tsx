"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes, we recommend booking an appointment in advance to ensure availability.",
  },
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Shipping fees vary by region.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-auto padding my-10" id="faqs">
      <div className="flex flex-col items-center relative">
        <h2 className="font-judson text-4xl sm:text-5xl md:text-[100px] text-center mb-10">
          F.A.Q.
        </h2>
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <Image
            src="/scissor.png"
            alt="Decorative scissors icon"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full justify-between mt-5">
          <div className="flex-1 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-700 pb-4 hover:border-golden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-start w-full text-left group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="font-roboto text-lg sm:text-xl md:text-2xl pr-4 group-hover:text-golden transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={32}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-golden"
                        : "text-white"
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 relative w-full aspect-[4/3] border-2 border-white rounded-[10px] overflow-hidden">
            <Image
              src="/barb2.jpg"
              alt="Professional barber at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
