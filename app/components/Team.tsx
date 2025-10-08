import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <section className="h-auto padding my-20 bg-red-300" id="team">
      <div>
        <h2 className="font-judson text-center text-4xl sm:text-5xl md:text-[100px] mb-10">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          <TeamCard img="/barb1.jpg" name="Nike" />
          <TeamCard img="/barb2.jpg" name="Pol" />
          <TeamCard img="/barb3.jpg" name="Thomas" />
          <TeamCard img="/barb4.jpg" name="Victor" />
        </div>
      </div>
    </section>
  );
}
