import { Bed, Briefcase, Camera, Plane } from "lucide-react";
import React from "react";
import BottomNavigation from "../../components/UI/BottomNavigation";

const Saved = () => {
  const icons = [
    { name: Briefcase, text: "Trips" },
    { name: Camera, text: "Tours" },
    { name: Bed, text: "Apartment" },
    { name: Plane, text: "Flights" },
  ];

  return (
    <section className="flex items-center justify-center h-[90vh]">
      <div className="grid grid-cols-2 gap-4 p-4">
        {icons.map((item, index) => (
          <div
            key={index}
            className="bg-[#D3E0FB] w-[128px] h-[128px] rounded-lg p-4 flex flex-col items-center justify-center text-[#2563EB] text-2xl"
          >
            <item.name size={50} />
            <span className="mt-2 text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Saved;