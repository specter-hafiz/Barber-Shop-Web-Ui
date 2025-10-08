import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="h-screen padding" id="services">
      <div className="my-20 items-center flex flex-col ">
        <h1 className="font-judson mb-10 text-center text-4xl sm:text-5xl md:text-[100px]">
          Our services and prices
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10  w-full">
          <ServiceCard
            title="1. Classic Haircut"
            description="A tailored haircut matches your style and personality. Clean lines, sharp fades, and professional precision"
            price={50}
          />
          <ServiceCard
            title="2. Beard Trim & Shape"
            description="Get beard tamed and shaped to perfection. Includes trimming, detailing, and optional beard oil finish"
            price={40}
          />
          <ServiceCard
            title="3. Hot Towel Shave"
            description="Experience the old-school luxury of a traditional straight razor shave with hot towels and soothing aftercare"
            price={50}
          />
          <ServiceCard
            title="4. Hair & Beard Combo"
            description="Complete grooming in one session. A stylish haircut paired with a perfectly sculpted beard trim"
            price={70}
          />
          <ServiceCard
            title="5. Head Shave"
            description="Smooth, clean, and bold. A full head shave with straight razor and hot towel treatment"
            price={50}
          />
          <ServiceCard
            title="6. Kid's Cut"
            description="Stylish and comfortable haircuts for young gentlemen. Quick, fun, and parent-approved"
            price={40}
          />
        </div>
        <button className="signup-button mb-10">Signup</button>
      </div>
    </section>
  );
}
