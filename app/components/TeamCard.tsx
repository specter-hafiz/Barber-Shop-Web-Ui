import Image from "next/image";
import React from "react";

interface TeamCardProps {
  img: string;
  name: string;
  role?: string;
}

const TeamCard = ({ img, name, role }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[300px] group">
      <div className="border-2 border-white rounded-[30px] overflow-hidden w-full aspect-square relative hover:border-golden transition-colors shadow-lg hover:shadow-xl">
        <Image
          src={img}
          alt={`${name} - ${role || "Team Member"}`}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
        />
      </div>
      <div className="text-center">
        <h3 className="font-judson text-2xl sm:text-[30px] mb-1">{name}</h3>
        {role && <p className="text-gray-400 text-sm sm:text-base">{role}</p>}
      </div>
      <button
        className="px-6 py-2 bg-golden text-white rounded-full hover:bg-golden/90 transition-all hover:scale-105 font-medium shadow-md"
        aria-label={`Book appointment with ${name}`}
      >
        Book Now
      </button>
    </div>
  );
};

export default TeamCard;
