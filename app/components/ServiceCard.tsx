// Example ServiceCard - share yours for specific feedback
interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
}

const ServiceCard = ({ title, description, price }: ServiceCardProps) => {
  return (
    <div className="border-2 border-white rounded-2xl p-6 hover:border-golden transition-colors">
      <h3 className="text-2xl font-judson mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-golden text-3xl font-bold">${price}</span>
        <button className="px-4 py-2 bg-golden text-white rounded-full hover:bg-golden/90 transition-colors">
          Book
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
