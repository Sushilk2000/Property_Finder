import { useState } from "react";
import { MdFavorite } from "react-icons/md";

function DestinationCard({ Property, guests, isLiked }) {
  const [rerender, setRerender] = useState(false);
  const forceRerender = () => {
    setRerender((prev) => !prev);
  };
  const [liked, setLiked] = useState(() => {
    const arr = JSON.parse(localStorage.getItem("favProperties")) || [];
    return arr.some((item) => item.id === Property.id);
  });
  localStorage.getItem("Liked_Destinations");

  const handleLikeClick = () => {
    const arr = JSON.parse(localStorage.getItem("favProperties")) || [];
    if (liked) {
      const updatedArr = arr.filter((item) => item.id !== Property.id);
      localStorage.setItem("favProperties", JSON.stringify(updatedArr));
    } else {
      const updatedArr = [...arr, Property];
      localStorage.setItem("favProperties", JSON.stringify(updatedArr));
    }
    setLiked((prev) => !prev);
    forceRerender();
  };
  return (
    <div className="w-[280px] rounded-md">
      <div className="rounded-lg">
        <img
          src={Property.images[0]}
          alt=""
          className="h-[300px] w-[280px] rounded-xl object-cover"
        />
      </div>
      <div className="pl-2 pr-2">
        <div className="flex justify-between py-1 items-start">
          <p className="font-semibold text-black text-l w-3/4">
            {Property.name}
          </p>
          <div className="w-1/4 flex justify-end items-start">
            <MdFavorite
              className={`text-gray-600 text-opacity-70 cursor-pointer hover:text-opacity-80 ${
                liked ? "text-red-600" : "text-gray-600"
              }`}
              size={28}
              onClick={handleLikeClick}
            />
          </div>
        </div>
        <p className="line-clamp-1 font-light text-gray-600">
          {Property.address}
        </p>
      </div>
      <div>
        <p className="text-black pl-2">
          <span className="font-semibold">
            $
            {guests > 1
              ? `${Property.price.rate * guests * 0.75} `
              : `${Property.price.rate} `}
          </span>
          night
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;
