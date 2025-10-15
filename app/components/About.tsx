import Image from "next/image";

export default function About() {
  return (
    <section className="h-auto" id="about">
      <div className="relative flex flex-col padding">
        <h1 className="font-judson text-4xl sm:text-5xl md:text-[100px] my-10 text-center">
          About Us
        </h1>

        {/* Decorative Scissor - Responsive sizing */}
        <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 absolute top-0 right-0 opacity-50 pointer-events-none">
          <Image
            src="/scissor.png"
            alt="Decorative scissors icon"
            fill
            className="object-contain"
          />
        </div>

        {/* First Section - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 mb-16">
          {/* Image container */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] border-2 border-white rounded-[10px] overflow-hidden shadow-lg hover:border-golden transition-colors">
            <Image
              src="/barber-1.jpg"
              alt="Professional barber providing quality service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              At our barbershop, we believe a great haircut is more than a
              style—
              <span className="text-golden font-semibold">
                it's a statement
              </span>
              . Every visit is a chance to recharge, reconnect, and walk out
              feeling your absolute best. Our team of skilled barbers takes
              pride in precision, creativity, and the perfect blend of classic
              and modern techniques. We've created a space where men can relax,
              laugh, and enjoy real craftsmanship. It's not just grooming—it's a
              ritual.
            </p>
          </div>
        </div>

        {/* Second Section - Text Left, Image Right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-10 relative">
          {/* Decorative Moustache - Responsive sizing */}
          <div className="hidden lg:block w-24 h-24 xl:w-32 xl:h-32 absolute -left-4 -bottom-8 opacity-50 pointer-events-none">
            <Image
              src="/moustache.png"
              alt="Decorative moustache icon"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              From the first warm towel to the final touch of product,
              <span className="text-golden font-semibold">
                {" "}
                every detail matters
              </span>
              . We value quality over speed and connection over routine. Whether
              you're preparing for something big or just treating yourself,
              we're here to make you look and feel sharp. Our barbers take time
              to understand your style and deliver results you'll love. This is
              more than a cut—it's your confidence, redefined.
            </p>
          </div>

          {/* Image container */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] border-2 border-white rounded-[10px] overflow-hidden shadow-lg hover:border-golden transition-colors">
            <Image
              src="/barber-2.jpg"
              alt="Experienced barber at work in modern barbershop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
