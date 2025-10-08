import Image from "next/image";
import React from "react";

const TeamCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="border-2 border-white rounded-[30px] overflow-hidden w-[300px] h-[300px] relative">
        <Image src={img} alt="Team Member" className="object-cover" fill />
      </div>
      <h3 className="font-judson text-[30px]">{name}</h3>
      <button className="signup-button">Signup</button>
    </div>
  );
};

export default TeamCard;
