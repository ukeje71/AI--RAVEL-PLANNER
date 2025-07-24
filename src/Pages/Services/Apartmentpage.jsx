import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import Card from "../../components/UI/Card";
import { Products } from "../../data/products";

const Apartmentpage = () => {
  // Filter products by category
  const apartments = Products.filter(
    (product) => product.category === "apartment"
  );
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Go back"
          >
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Centered Text */}
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Homes in Nigeria
            </h3>
            <p className="text-sm text-gray-500">Any weekend · Add guests</p>
          </div>

          {/* Placeholder for balance */}
          <div className="w-10"></div>
        </div>
      </header>

      {/* Apartments display */}
      <main className="px-4 py-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {apartments.map((apartment) => (
            <Card
              key={apartment.id}
              id={apartment.id} 
              imageUrl={apartment.image}
              title={apartment.title}
              location={apartment.location}
              rating={apartment.rating}
              TimeFrame={apartment.TimeFrame}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow  duration-300"
              imageContainerClassName="h-[250px]"
            />
          ))}
        </div>

        {apartments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No apartments found</p>
          </div>
        )}
      </main>

    </div>
  );
};

export default Apartmentpage;
