"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    text: "I've been to many barbershops, but this one truly stands out. The atmosphere is relaxed, stylish, and welcoming from the moment you walk in. My barber took the time to listen and delivered exactly what I had in mind - even better, actually. The attention to detail and care was next level. I left feeling fresh, confident, and already looking forward to my next visit. Highly recommend this place to anyone who values quality and good vibes.",
    author: "Nike N",
    image: "/barber-1.jpg",
  },
  {
    id: 2,
    text: "Best haircut I've had in years! The barbers here are true professionals who really know their craft. Clean shop, friendly staff, and reasonable prices. Will definitely be coming back.",
    author: "James M",
    image: "/barber-2.jpg",
  },
  {
    id: 3,
    text: "Amazing experience from start to finish. The consultation was thorough, and the final result exceeded my expectations. The shop has a great vibe and the team is incredibly skilled.",
    author: "David K",
    image: "/barber-3.jpg",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="h-auto mb-20 padding" id="reviews">
      <div className="flex flex-col items-center h-full w-full">
        <h1 className="font-judson text-center text-4xl sm:text-5xl md:text-[100px] mb-10">
          Customer Reviews
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 items-center justify-between w-full relative">
          {/* Decorative Scissor - Hidden on mobile */}
          <div className="hidden lg:block absolute right-0 -bottom-10 w-32 h-32 xl:w-40 xl:h-40 opacity-50">
            <Image
              src="/scissor.png"
              alt="Decorative scissors"
              fill
              className="object-contain"
            />
          </div>

          {/* Customer Image */}
          <div className="relative w-full lg:w-[45%] aspect-[4/3] border-2 border-white rounded-[10px] overflow-hidden shadow-lg">
            <Image
              src={currentReview.image}
              alt={`${currentReview.author} - satisfied customer`}
              fill
              className="object-cover transition-opacity duration-500"
              key={currentReview.id}
            />
          </div>

          {/* Navigation Arrows */}
          <div className="flex flex-row lg:flex-col gap-4 order-3 lg:order-2">
            <button
              onClick={goToPrevious}
              aria-label="Previous review"
              className="flex justify-center items-center h-14 w-14 bg-white hover:bg-golden transition-colors group rounded-md"
            >
              <ArrowLeft className="h-8 w-8 text-black group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next review"
              className="flex justify-center items-center h-14 w-14 bg-golden hover:bg-white transition-colors group rounded-md"
            >
              <ArrowRight className="h-8 w-8 text-black group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Review Content */}
          <div className="flex flex-col gap-5 w-full lg:w-[40%] order-2 lg:order-3">
            <p
              className="text-gray-300 leading-relaxed transition-opacity duration-500"
              key={`text-${currentReview.id}`}
            >
              {currentReview.text}
            </p>
            <h3
              className="text-3xl sm:text-4xl font-judson text-golden"
              key={`author-${currentReview.id}`}
            >
              {currentReview.author}
            </h3>

            {/* Dots Indicator */}
            <div className="flex gap-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-golden"
                      : "w-2 bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
