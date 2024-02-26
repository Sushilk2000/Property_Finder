import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
function FilterComponent({
  guestCount,
  setGuestCount,
  minPriceRef,
  maxPriceRef,
  location,
  setLocation,
  Property_Data,
  setProperty,
}) {
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
  return (
    <div className="w-[20vw] h-max border-black border rounded-xl bg-gray-700 py-2 text-white sticky top-[90px] right-4">
      <form className="flex items-center flex-col font-medium gap-4 py-2">
        <div className="flex w-3/4 flex-col text-base">
          <label htmlFor="Destination">Destination</label>
          <select
            name="Destination"
            id="Destination"
            className="text-black w-full h-8"
            onChange={(e) => {
              setLocation(e.currentTarget.value);
            }}
          >
            <option value="">All</option>
            <option value="Paris">Paris</option>
            <option value="Strasbourg">Strasbourg</option>
            <option value="Toulouse">Toulouse</option>
          </select>
        </div>
        <div className="flex w-3/4 flex-col">
          <label htmlFor="Destination">Min Price</label>
          <input
            type="number"
            className="w-full h-8 px-2 rounded text-black"
            ref={minPriceRef}
            placeholder="In USD"
          />
        </div>
        <div className="flex w-3/4 flex-col">
          <label htmlFor="Destination">Max Price</label>
          <input
            type="number"
            className="text-black w-full h-8 px-2 rounded"
            placeholder="In USD"
            ref={maxPriceRef}
          />
        </div>
        <div className="flex w-2/3 flex-col">
          <label htmlFor="Destination">Guests</label>
          <div className="flex gap-4 items-center text-3xl justify-center">
            <FaCircleMinus
              className="btn btn-circle text-white bg-black border-none hover:bg-error hover:text-black"
              onClick={(e) => {
                e.preventDefault();
                if (guestCount > 1) {
                  setGuestCount(guestCount - 1);
                }
              }}
            />
            <p>{guestCount}</p>
            <FaCirclePlus
              className="btn btn-circle text-white bg-black border-none  hover:btn-success"
              onClick={(e) => {
                e.preventDefault();
                setGuestCount(guestCount + 1);
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center my-4">
          <button
            className="btn btn-success px-6 text-white font-semibold text-l"
            onClick={(e) => handleSubmit(e)}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default FilterComponent;
