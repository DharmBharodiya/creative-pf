const Navbar = () => {
  const list = ["About", "Gallery", "Contact"];
  const links = ["#about", "#photogrid", "#contact"];

  return (
    <nav className="bg-transparent flex justify-between fixed items-center h-15  selection:bg-red-800 selection:text-white w-full z-2000000">
      <div className="ml-5 lg:ml-10">
        <a href="#home">
          <h1
            className="font-quicksand text-white text-sm lg:text-md"
            aria-label="Home"
          >
            Dharm Bharodiya
          </h1>
        </a>
      </div>
      <div className="flex mr-2 lg:mr-10 text-white">
        {list.map((li, idx) => (
          <div key={idx} className="mr-3">
            <a
              className="lg:mr-5 text-sm lg:text-md hover:text-white hover:font-medium duration-150 group flex flex-col w-fit"
              href={links[idx]}
            >
              {li}
              <div className="bg-white h-0.5 w-0 group-hover:w-full duration-150"></div>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
