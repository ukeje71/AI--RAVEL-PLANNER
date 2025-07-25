import { Bed, Briefcase, Camera, Plane } from "lucide-react";
import React from "react";
import { Link } from "react-router"; 

const Saved = () => {
  const icons = [
    { name: Briefcase, text: "Trips", route: "/triplist" },
    { name: Camera, text: "Tours", route: "/tourlist" },
    { name: Bed, text: "Apartment", route: "/apartmentlist" },
    { name: Plane, text: "Flights", route: "/airlinelist" },
  ];

  return (
    <section className="flex items-center justify-center h-[90vh]">
      <div className="grid grid-cols-2 gap-4 p-4">
        {icons.map((item, index) => (
          <Link 
            to={item.route} 
            key={index}
            className="no-underline"
          >
            <div className="bg-[#D3E0FB] w-[128px] h-[128px] rounded-lg p-4 flex flex-col items-center justify-center text-[#2563EB] text-2xl hover:bg-[#BBD0FF] transition-colors">
              <item.name size={50} />
              <span className="mt-2 text-sm">{item.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Saved;