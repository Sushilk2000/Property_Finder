import DestinationCard from "./Card";

function AllProperties({ Properties, guestCount }) {
  return (
    <div className="w-[80vw] h-full rounded-xl gap-6 pl-4 text-gray-400">
      <div className="text-gray-900 text-5xl font-semibold py-4 w-full flex justify-between items-center px-10">
        <p> Search properties to rent</p>
      </div>
      <div className="flex flex-wrap gap-4 gap-y-8 pt-2 h-full mx-auto">
        {Properties.map((item) => (
          <DestinationCard
            Property={item}
            guests={guestCount}
            isLiked={
              localStorage.getItem("Liked_Properties") &&
              localStorage.getItem("Liked_Properties")[item.id]
            }
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProperties;
