import React from "react";

const ServiceCard = ({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="border-2 border-white rounded-[30px] py-10 px-5 flex flex-col items-center">
      <h2 className="font-judson text-4xl mb-6">{title}</h2>
      <p className="text-sm mb-6">{description}</p>
      <p className="font-judson text-3xl">{price} $</p>
    </div>
  );
};

export default ServiceCard;
