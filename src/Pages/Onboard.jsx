import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronRightIcon } from "lucide-react";


// Images
import img1 from "../assets/Images/Slide(1).png";
import img2 from "../assets/Images/Slide(2).png";
import img3 from "../assets/Images/Slide(3).png";
import { useNavigate } from "react-router";

// Placeholder images (replace with your own)
const destinations = [
  {
    id: 1,
    title: "AI TRIP PLANNING",
    description:
      "“Just tell us your destinations, we will build the perfect itinerary for you”",
    image: img1,
  },
  {
    id: 2,
    title: "EXPERIENCE DISCOVERY",
    description:
      "“Discover top- rated experience tailored to your Interest and Budget”",
    image: img2,
  },
  {
    id: 3,
    title: "SMART BOOKING",
    description:
      "“Plan, book, and manage all your trips from one place stress free”",
    image: img3,
  },
];

const OnboardPage = () => {
    const navigate = useNavigate(); 
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content Area (will grow to fill space) */}
      <div className="flex-1 py-12 px-4">
        <h2 className="text-sm font-bold text-right text-[#2563EB] mb-20">
          Skip
        </h2>
        
        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="max-w-6xl mx-auto"
        >
          {destinations.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl overflow-hidden mb-10 transition duration-300 h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 rounded-2xl object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="mt-10 flex flex-row justify-center text-center bg-gradient-to-r from-[#2563EB] to-[#5182EF] w-full text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition">
          <p className="mr-2">Next</p>
          <ChevronRightIcon />
        </button>
      </div>

      {/* Login Text (stays at bottom) */}
      <div className="py-4 bg-white border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?
          <span onClick={() => navigate("/signup")} className="text-[#2563EB] font-medium">Login Here</span>
        </p>
      </div>
    </div>
  );
};

export default OnboardPage;