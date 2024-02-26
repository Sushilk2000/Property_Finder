import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Main from "./Main/Main";
import SavedProperties from "./Main/SavedProperties";
import FilterComponent from "./Main/filterData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProperties from "./Main/AllProperties";
import { useRef, useState } from "react";
import Property_Data from "./Data/Property_details.json";
function App() {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  const [guestCount, setGuestCount] = useState(1);
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const [location, setLocation] = useState("");
  const [Property, setProperty] = useState(Property_Data);
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Router>
        <Header></Header>
        <div className="w-full px-2 py-1 pb-2 flex gap-2 bg-gray-200">
          <Routes>
            <Route
              path="/"
              element={
                <AllProperties Properties={Property} guestCount={guestCount} />
              }
            ></Route>
            <Route
              path="/Saved_Properties"
              element={<SavedProperties guestCount={guestCount} />}
            ></Route>
          </Routes>
          <FilterComponent
            guestCount={guestCount}
            setGuestCount={setGuestCount}
            minPriceRef={minPriceRef}
            maxPriceRef={maxPriceRef}
            location={location}
            setLocation={setLocation}
            Property_Data={Property_Data}
            setProperty={setProperty}
          ></FilterComponent>
        </div>
      </Router>
    </div>
  );
}

export default App;
