import TeamCard from "./TeamCard";

const teamMembers = [
  { img: "/barb1.jpg", name: "Nike", role: "Master Barber" },
  { img: "/barb2.jpg", name: "Pol", role: "Senior Stylist" },
  { img: "/barb3.jpg", name: "Thomas", role: "Beard Specialist" },
  { img: "/barb4.jpg", name: "Victor", role: "Hair Artist" },
];

export default function Team() {
  return (
    <section className="h-auto padding my-20" id="team">
      <h2 className="font-judson text-center text-4xl sm:text-5xl md:text-[100px] mb-10 sm:mb-16">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 place-items-center">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            img={member.img}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
}
