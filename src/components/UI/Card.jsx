import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router";
import useDetailsStore from "../Store/details";

const Card = ({
  id, // REQUIRED - must match product IDs in your store
  imageUrl,
  title,
  location,
  price,
  rating,
  TimeFrame,
  className = "",
  imageContainerClassName = "",
  imageClassName = "",
}) => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useDetailsStore();

  const handleImageClick = () => {
    console.log("Attempting to select product ID:", id); // Debug
    setSelectedProduct(id);
    navigate(`/productdetails/${id}`);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* Clickable image area */}
      <div
        className={`relative w-full ${imageContainerClassName}`}
        onClick={handleImageClick}
      >
        <img
          src={imageUrl || "/default-property.jpg"}
          alt={title}
          className={`w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform ${imageClassName}`}
        />
        <p className="absolute bottom-2 left-2 bg-[#2563EBCC] bg-opacity-70 text-white font-bold px-2 py-1 rounded-md">
          {price}
        </p>
      </div>

      {/* Details */}
      <div className="p-3">
        <div className="flex items-center justify-between font-bold">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-gray-500 mr-1" />
            <span className="font-medium text-xs sm:text-sm">{location}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-[#C27C1A]" />
            <span className="text-xs sm:text-sm ml-1">{rating}</span>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <p className="font-bold line-clamp-1">{title}</p>
          <p className="text-sm text-gray-500">{TimeFrame}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
