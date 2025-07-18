import { MapPin, Star } from "lucide-react";

const Card = ({
  imageUrl,
  title,
  location,
  price,
  rating,
  TimeFrame,
  className = "",
}) => {
  return (
    <div className={`relative rounded-lg p-2 w-full h-full ${className}`}>
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[250px] object-cover rounded-xl"
        />
        <p className="absolute bottom-2 left-2 bg-[#2563EBCC] bg-opacity-70 text-white font-bold px-2 py-1 rounded-md">
          {price}
        </p>
      </div>
      <div className="flex items-center mt-2 justify-between font-bold">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
          <span className="font-medium text-xs sm:text-sm">{location}</span>
        </div>
        <div className="flex items-center">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-[#C27C1A]" />
          <span className="text-xs sm:text-sm ml-1">{rating}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{TimeFrame}</p>
      </div>
    </div>
  );
};

export default Card;
