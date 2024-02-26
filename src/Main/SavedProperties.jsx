import { useState } from "react";
import DestinationCard from "./Card";

function SavedProperties({ guestCount }) {
  const [favProperties, setFavProperties] = useState(
    JSON.parse(localStorage.getItem("favProperties")) || []
  );

  return (
    <div className="w-[80vw] min-h-screen h-full rounded-xl gap-6 pl-4 text-gray-400">
      <div className="flex flex-wrap gap-4 gap-y-8 pt-2 h-full mx-auto">
        {favProperties.map((item, index) => (
          <DestinationCard key={index} Property={item} guests={guestCount} />
        ))}
      </div>
    </div>
  );
}

export default SavedProperties;
