import { useState, useRef } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import DestinationCard from "./Card";
import Property_Data from "../Data/Property_details.json";
import FilterComponent from "./filterData";
function Main() {
  const [guestCount, setGuestCount] = useState(1);
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const [location, setLocation] = useState("");
  const [Property, setProperty] = useState(Property_Data);

  function handleSubmit(e) {
    e.preventDefault();

    let filteredData = Property_Data;

    if (location !== "") {
      filteredData = filteredData.filter((item) => item.city === location);
    }

    filteredData = filteredData.filter((item) => {
      const minPrice = parseInt(minPriceRef.current?.value) || 0;
      const maxPrice = parseInt(maxPriceRef.current?.value) || 0;

      if (maxPrice !== 0) {
        return item.price.rate > minPrice && item.price.rate < maxPrice;
      } else {
        return item.price.rate > minPrice;
      }
    });

    setProperty(filteredData);
  }

  return <div className="w-full px-2 py-1 pb-2 flex gap-2 bg-gray-200"></div>;
}

export default Main;
