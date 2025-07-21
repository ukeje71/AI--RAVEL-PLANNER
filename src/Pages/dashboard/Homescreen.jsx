import React from "react";
import {
  Bell,
  ArrowRightIcon,
  NotebookPen,
  Plane,
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
} from "lucide-react";
import BottomNavigation from "../../components/UI/BottomNavigation";
import Card from "../../components/UI/Card";
import { Products } from "../../data/Product";
import { useNavigate } from "react-router";

const Homescreen = () => {
  // Filter products by category
  const apartments = Products.filter(
    (product) => product.category === "apartment"
  );
  const airlines = Products.filter((product) => product.category === "airline");
  const TourPlaces = Products.filter((product) => product.category === "Tour");
  // Routing function for clicking on the card
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen p-6 pb-20">
      {/* Header */}
      <header className="inline-flex justify-between items-center mb-6 w-full gap-4">
        <div className="flex justify-between items-center bg-[#F7F7F7] h-[54px] rounded-[20px] p-2 w-full">
          <button>
            <Search className="h-6 w-6 text-black" />
          </button>
          <button>
            <SlidersHorizontal className="h-6 w-6 text-black" />
          </button>
        </div>
        <div>
          <Bell className="h-6 w-6 text-black " />
        </div>
      </header>
      {/* Booking Section */}
      <section className="flex justify-between gap-4 px-4 mb-5 text-[#082C78]">
        <div className="bg-[#D3E0FB] p-3 rounded-md flex-1 flex items-center justify-center gap-2">
          <Plane className="h-5 w-5" />
          <span className="text-sm">Trip</span>
        </div>
        <div className="bg-[#D3E0FB] p-3 rounded-md flex-1 flex items-center justify-center gap-2">
          <NotebookPen className="h-5 w-5" />
          <span className="text-sm">Book</span>
        </div>
      </section>
      {/* Available Apartments Section */}
      <div className="mb-10">
        <div
          onClick={() => navigate("/apartment")}
          className="flex gap-4 items-center cursor-pointer mb-4"
        >
          <h2 className="text-xl font-semibold">Available Apartments</h2>
          <ArrowRightIcon className="text-black" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {apartments.slice(0, 2).map((apartment) => (
            <Card
              key={apartment.id}
              id={apartment.id}
              imageUrl={apartment.image}
              title={apartment.title}
              location={apartment.location}
              price={apartment.Price}
              rating={apartment.ra2ting}
              className="border border-gray-200"
              imageContainerClassName="h-45"
            />
          ))}
        </div>
      </div>
      {/* Airlines Section */}
      <div className="mb-10">
        <div
          onClick={() => navigate("/airline")}
          className="flex gap-4 items-center mb-4 cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Airlines</h2>
          <ArrowRightIcon className="text-black" />
        </div>

        <div className="flex gap-4 items-center cursor-pointer mb-4">
          {airlines.slice(0, 2).map((airline) => (
            <Card
              key={airline.id}
              id={airline.id}
              imageUrl={airline.image}
              title={airline.title}
              location={airline.location}
              rating={airline.rating}
              className="border border-gray-200"
              imageContainerClassName="h-45"
            />
          ))}
        </div>
      </div>
      {/* Places to Tour Section */}
      <div>
        <div
          onClick={() => navigate("/tour")}
          className="flex gap-4 items-center mb-4 cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Places to Tour</h2>
          <ArrowRightIcon className="text-black" />
        </div>

        <div className="flex gap-4 items-center cursor-pointer mb-4">
          {TourPlaces.slice(0, 2).map((place) => (
            <Card
              key={place.id}
              id={place.id}
              imageUrl={place.image}
              title={place.title}
              location={place.location}
              rating={place.rating}
              className="border border-gray-200"
              imageContainerClassName="h-45"
            />
          ))}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Homescreen;
