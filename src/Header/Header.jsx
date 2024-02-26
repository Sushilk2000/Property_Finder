import { useLocation, useNavigate, Link } from "react-router-dom";
function Header() {
  const location = useLocation();
  const path = location.pathname;
  const nav = useNavigate();

  return (
    <div className="h-[10vh] w-full px-2 sticky top-0 z-50  bg-gray-200">
      <div className="h-full w-full shadow-gray-600 shadow-md bg-gray-700 rounded-xl text-white flex justify-between items-center px-8 font-bold">
        <div className="h-full">
          <Link to={"/"}>
            {" "}
            <img
              src="/Designer-removebg-preview.png"
              className="h-full invert"
            />
          </Link>
        </div>
        <div className="text-4xl text-green-600">WELCOME TO NEST</div>
        <div
          className="btn btn-success text-white font-bold p-0 min-h-8 h-10 w-20 hover:bg-white hover:text-success"
          onClick={() => {
            if (path == "/") {
              if (
                JSON.parse(localStorage.getItem("favProperties")).length == 0
              ) {
                alert("You dont have any favorite Properties");
              } else {
                nav("/Saved_Properties");
              }
            } else {
              nav("/");
            }
          }}
        >
          {path == "/" ? "Liked Properties" : "All Properties"}
        </div>
      </div>
    </div>
  );
}

export default Header;
