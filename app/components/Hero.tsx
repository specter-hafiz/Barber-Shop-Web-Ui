import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-[url('/man.jpg')] bg-cover bg-center flex px-4 padding"
    >
      <div className="hero flex flex-col gap-10 md:gap-20 justify-end pb-20 sm:justify-center md:lg:justify-center ">
        <div className="sm:pt-[80px]">
          <p className="max-w-xs md:max-w-lg text-sm sm:text-xl md:text-2xl  mt-0">
            Step into a place where precision meets personality. Whether it's a
            fresh fade, a clean shave, or a bold new style -- this is where
            confidence begins
          </p>
          <h1 className="font-judson text-4xl sm:text-5xl md:text-[100px] ">
            BARBERSHOP
          </h1>
          <button className="signup-button max-w-[200px] mt-5">Sign Up</button>
        </div>
        <div className="flex items-center justify-start">
          <MapPin size={20} />
          <span className="ml-2 text-[16px]">123 Main St, City, Country</span>
        </div>
      </div>
    </section>
  );
}
