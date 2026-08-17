import { Link } from "react-router-dom";

const Navbar = () => {
  const list = ["About", "Gallery", "Contact"];

  return (
    <nav className="bg-transparent flex justify-between fixed items-center h-15  selection:bg-red-800 selection:text-white w-full z-2000000">
      <div className="ml-10">
        <h1 className="font-quicksand text-white">Dharm Bharodiya</h1>
      </div>
      <div className="flex mr-10 text-white">
        {list.map((li, idx) => (
          <div key={idx} className="mr-3">
            <Link
              className="mr-5 hover:text-red-700 hover:font-medium duration-150 group flex flex-col w-fit"
              to="/about"
            >
              {li}
              <div className="bg-red-800 h-0.5 w-0 group-hover:w-full duration-150"></div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
