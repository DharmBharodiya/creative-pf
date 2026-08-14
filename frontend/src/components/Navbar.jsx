import { Link } from "react-router-dom";

const Navbar = () => {
  const list = ["About", "Gallery", "Contact"];

  return (
    <nav className="bg-transparent flex justify-between fixed items-center h-15 w-full">
      <div className="ml-10">
        <h1 className="font-quicksand text-white">Dharm Bharodiya</h1>
      </div>
      <div className="flex mr-10 text-white">
        {list.map((li, idx) => (
          <Link className="mr-5" key={idx}>
            {li}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
