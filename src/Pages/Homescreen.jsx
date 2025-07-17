import React from "react";
import {
  Bell,
  ChevronRight,
  NotebookPen,
  Plane,
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
} from "lucide-react";
// images
import img1 from "../assets/Images/Plane(1).png";
import img2 from "../assets/Images/Sittings.png";
import img3 from "../assets/Images/Plane(2).png";


const Homescreen = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      {/* Header */}
      <header className="inline-flex justify-between items-center mb-6 w-full gap-4">
        <div className="flex justify-between items-center w-full">
          <button>
            <Search className="h-6 w-6 text-gray-500" />
          </button>
          <button>
            <SlidersHorizontal className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div>
          <Bell className="h-6 w-6 text-gray-500 " />
        </div>
      </header>

      {/* Booking Section */}
      <section className="flex justify-between gap-4 px-4 mb-5">
        <div className="bg-[#D3E0FB] p-3 rounded-md flex-1 flex items-center justify-center gap-2">
          <Plane className="h-5 w-5 text-gray-500" />
          <span className="text-sm">Trip</span>
        </div>
        <div className="bg-[#D3E0FB] p-3 rounded-md flex-1 flex items-center justify-center gap-2">
          <NotebookPen className="h-5 w-5 text-gray-500" />
          <span className="text-sm">Book</span>
        </div>
      </section>

      {/* Available Apartments Section */}
      <div className="mb-10">
        <div className="flex gap-4 items-center mb-4">
          <h2 className="text-xl font-semibold">Available Apartments</h2>
          <ChevronRight className="text-gray-500" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Apartment Card 1 */}
          <div className="relative rounded-lg p-2 w-full">
            <div className="relative">
              <img
                src={img1}
                alt="Victoria Island apartment"
                className="w-full h-48 object-cover rounded-xl"
              />
              <p className="absolute bottom-2 left-2 bg-[#2563EBCC] bg-opacity-70 text-white font-bold px-2 py-1 rounded-md">
                $200 per night
              </p>
            </div>
            <div className="flex items-center mt-2 justify-between">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span className="font-medium text-xs sm:text-sm">
                  Victoria Island
                </span>
              </div>
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-[#C27C1A]" />
                <span className="text-xs sm:text-sm ml-1">4.8K</span>
              </div>
            </div>
          </div>

          {/* Apartment Card 2 */}
          <div className="relative rounded-lg p-2 w-full">
            <div className="relative">
              <img
                src={img2}
                alt="Kubwa, Abuja apartment"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mt-2 justify-between">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span className="font-medium text-xs sm:text-sm">
                  Kubwa, Abuja
                </span>
              </div>
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-[#C27C1A]" />
                <span className="text-xs sm:text-sm ml-1">5.2K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Airlines Section */}
      <div className="mb-10">
        <div className="flex gap-4 items-center mb-4">
          <h2 className="text-xl font-semibold">Airlines</h2>
          <ChevronRight className="text-gray-500" />
        </div>

        <div className="space-y-3 grid grid-cols-2">
          {/* Airline 1 */}
          <div className="relative rounded-lg p-2 w-full">
            <div className="relative">
              <img
                src={img1}
                alt="Kubwa, Abuja apartment"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mt-2 justify-between">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span className="font-medium text-xs sm:text-sm">
                  Air, Nigeria
                </span>
              </div>
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-[#C27C1A]" />
                <span className="text-xs sm:text-sm ml-1">5.2K</span>
              </div>
            </div>
          </div>

          {/* Airline 2 */}
          <div className="relative rounded-lg p-2 w-full">
            <div className="relative">
              <img
                src={img3}
                alt="Kubwa, Abuja apartment"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mt-2 justify-between">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span className="font-medium text-xs sm:text-sm">
                  Emirates
                </span>
              </div>
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-[#C27C1A]" />
                <span className="text-xs sm:text-sm ml-1">2.2K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Places to Tour Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Places to Tour</h2>
          <ChevronRight className="text-gray-500" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Place Card 1 */}
          <div className="relative rounded-lg p-2 w-full">
            <div className="relative">
              <img
                src={img1}
                alt="Kubwa, Abuja apartment"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mt-2 justify-between">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span className="font-medium text-xs sm:text-sm">
                  Air, Nigeria
                </span>
              </div>
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-[#C27C1A]" />
                <span className="text-xs sm:text-sm ml-1">5.2K</span>
              </div>
            </div>
          </div>

          {/* Place Card 2 */}
         <div className="relative rounded-lg p-2 w-full">
            <div className="relative">
              <img
                src={img1}
                alt="Kubwa, Abuja apartment"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mt-2 justify-between">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span className="font-medium text-xs sm:text-sm">
                  Air, Nigeria
                </span>
              </div>
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-[#C27C1A]" />
                <span className="text-xs sm:text-sm ml-1">5.2K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
