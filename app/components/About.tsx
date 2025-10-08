import Image from "next/image";

export default function About() {
  return (
    <section className="h-auto padding" id="about">
      <div className="relative  flex flex-col">
        <h1 className="font-judson text-4xl sm:text-5xl md:text-[100px] my-10 text-center">
          About Us
        </h1>

        <div className="w-40 h-40 absolute top-0 right-0">
          <Image src="/scissor.png" alt="Scissor Icon" fill />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-10">
          {/* Image container */}
          <div className="relative w-full sm:w-1/2 aspect-[4/3] border-2 border-white rounded-[10px] overflow-hidden">
            <Image
              src="/barber-1.jpg"
              alt="Barber 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <p className="w-full sm:w-1/2 text-[16px] md:text-[18px] leading-relaxed space-y-4">
            At our barbershop, we believe a great haircut is more than a
            style—it's a statement. Every visit is a chance to recharge,
            reconnect, and walk out feeling your absolute best. Our team of
            skilled barbers takes pride in precision, creativity, and the
            perfect blend of classic and modern techniques. We've created a
            space where men can relax, laugh, and enjoy real craftsmanship. It's
            not just grooming—it's a ritual.
          </p>
        </div>

        <div className="flex items-end gap-10 mt-10 relative">
          <div className="w-40 h-40 absolute left-0 top-0">
            <Image
              src="/moustache.png"
              alt="Moustache Icon"
              fill
              className="absolute bottom-0 left-0"
            />
          </div>
          <p className="flex-1 w-1/2 space-y-4 text-[18px] ">
            From the first warm towel to the final touch of product, every
            detail matters. We value quality over speed and connection over
            routine. Whether you're preparing for something big or just treating
            yourself, we're here to make you look and feel sharp. Our barbers
            take time to understand your style and deliver results you'll love.
            This is more than a cut-it's your confidence, redefined.
          </p>
          <div className="flex-1 border-2 border-white rounded-[10px] overflow-hidden relative bottom-0 right-0 z-0 w-[380px] h-[360px] ">
            <Image
              src="/barber-2.jpg"
              alt="Barber 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
