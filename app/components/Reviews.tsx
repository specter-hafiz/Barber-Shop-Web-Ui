import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Reviews() {
  return (
    <section className="h-auto mb-20 padding" id="reviews">
      <div className="flex flex-col items-center h-full w-full">
        <h1 className="font-judson text-center text-4xl sm:text-5xl md:text-[100px]">
          Customer's reviews
        </h1>
        <div className="flex gap-20 mt-10 items-center justify-between w-full relative">
          <Image
            src="/scissor.png"
            width={150}
            height={150}
            alt="scissor"
            className="absolute right-0 bottom-0"
          />
          <div className="border-2 border-white rounded-[30px] overflow-hidden p-1 w-[500px] h-[500px] relative">
            <Image src="/barber-1.jpg" alt="customer" fill />
          </div>
          <div className="flex flex-col">
            <Link href="">
              <div className="flex justify-center items-center h-14 w-14 bg-white mb-5">
                <ArrowRight className="h-12 w-12 text-black" />
              </div>
            </Link>
            <Link href="">
              <div className="flex justify-center items-center h-14 w-14 bg-golden text-center">
                <ArrowLeft className="h-12 w-12 text-black" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <p className="max-w-xl m-0 p-0">
              I've been to many barbershops, but this one truly stands out. The
              atmosphere is relaxed, stylish, and welcoming from the moment you
              walk in. My barber took the time to listen and delivered exactly
              what I had in mind - even better, actually. The attention to
              detail and care was next level. I left feeling fresh, confident,
              and already looking forward to my next visit. Highly recommend
              this place to anyone who values quality and good vibes
            </p>
            <h3 className="text-4xl">Nike N</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
