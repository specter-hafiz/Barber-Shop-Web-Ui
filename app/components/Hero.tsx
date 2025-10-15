import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex padding overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/man.jpg"
          alt="Professional barbershop interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-10 md:gap-16 lg:gap-20 justify-end pb-16 sm:pb-20 lg:justify-center w-full max-w-4xl">
        <div>
          <p className="max-w-md lg:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-gray-100 leading-relaxed">
            Step into a place where precision meets personality. Whether it's a
            fresh fade, a clean shave, or a bold new style—this is where
            confidence begins.
          </p>
          <h1 className="font-judson text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 leading-tight">
            BARBERSHOP
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#bookings"
              className="inline-block px-8 py-3 bg-golden text-white rounded-full hover:bg-golden/90 transition-all hover:scale-105 font-semibold text-lg shadow-lg text-center"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-full hover:border-golden hover:text-golden transition-all font-semibold text-lg text-center"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center">
          <MapPin size={24} className="flex-shrink-0 text-golden" />
          <span className="ml-3 text-base sm:text-lg text-gray-100">
            Kyiv, Lesi Ukrainky, 5
          </span>
        </div>
      </div>
    </section>
  );
}
