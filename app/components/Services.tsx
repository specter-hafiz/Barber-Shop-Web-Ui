import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Classic Haircut",
    description:
      "A tailored haircut that matches your style and personality. Clean lines, sharp fades, and professional precision.",
    price: 50,
  },
  {
    id: 2,
    title: "Beard Trim & Shape",
    description:
      "Get your beard tamed and shaped to perfection. Includes trimming, detailing, and optional beard oil finish.",
    price: 40,
  },
  {
    id: 3,
    title: "Hot Towel Shave",
    description:
      "Experience the old-school luxury of a traditional straight razor shave with hot towels and soothing aftercare.",
    price: 50,
  },
  {
    id: 4,
    title: "Hair & Beard Combo",
    description:
      "Complete grooming in one session. A stylish haircut paired with a perfectly sculpted beard trim.",
    price: 70,
  },
  {
    id: 5,
    title: "Head Shave",
    description:
      "Smooth, clean, and bold. A full head shave with straight razor and hot towel treatment.",
    price: 50,
  },
  {
    id: 6,
    title: "Kid's Cut",
    description:
      "Stylish and comfortable haircuts for young gentlemen. Quick, fun, and parent-approved.",
    price: 40,
  },
];

export default function Services() {
  return (
    <section className="h-auto padding" id="services">
      <div className="my-20 items-center flex flex-col">
        <h1 className="font-judson mb-10 sm:mb-16 text-center text-4xl sm:text-5xl md:text-[100px]">
          Our Services & Prices
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pb-10 w-full">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
        <a
          href="#bookings"
          className="px-8 py-3 bg-golden text-white rounded-full hover:bg-golden/90 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
