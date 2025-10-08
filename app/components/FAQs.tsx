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
        <h2 className="font-judson text-4xl sm:text-5xl md:text-[100px] text-center">
          F.A.Q.
        </h2>
        <div className="absolute top-0 right-0 w-40 h-40">
          <Image src="/scissor.png" alt="scissor" fill />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full justify-between mt-5">
          <div className="flex-1 flex flex-col">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mt-10">
                  <h3 className="font-roboto text-2sm mb-5">{faq.question}</h3>
                  <button onClick={() => toggleFAQ(index)}>
                    <ChevronDown size={32} color="white" />
                  </button>
                </div>
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col w-[300px] h-[400px] relative border-2 border-white p-10 rounded-2xl overflow-hidden">
            <Image src="/barb2.jpg" alt="barber" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
