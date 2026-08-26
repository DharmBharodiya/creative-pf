import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import sunsetWalk from "../assets/sunsetwalk.JPG";
import damanframe1 from "../assets/damanframe1.jpg";
import damanframe2 from "../assets/damanframe2.jpg";
import beachStand from "../assets/sunsetstand.jpg";
import sounew from "../assets/sounew.PNG";
import dwarkaguy from "../assets/dwarkaguy.jpg";
import palace from "../assets/palace.jpg";
import suratbridge from "../assets/suratbridge.jpeg";
import nyc from "../assets/nyc.jpeg";

const Photographs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen mt-5  bg-black flex flex-col gap-6 justify-center items-center">
        {/* heading */}
        <div className="w-full lg:ml-80">
          <h1 className="font-sloop ml-10 lg:ml-0 text-6xl lg:text-8xl text-red-800 leading-1">
            P<span className="font-times text-3xl lg:text-6xl">hotographs</span>
          </h1>
          <p className="text-white lg:text-md text-sm w-[80%] lg:w-full ml-10 lg:ml-5">
            A collection of moments, places, people, and light — captured as I
            see them.
          </p>
        </div>
        {/* first row */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-5 lg:gap-6 lg:h-26">
          <div className="bg-amber-100 overflow-hidden">
            <img
              src={sunsetWalk}
              className="w-full h-22 lg:h-full object-cover hover:cursor-pointer hover:scale-105 transition-all duration-150    "
            />
          </div>
          <div className="bg-amber-100 overflow-hidden">
            <img
              src={damanframe1}
              className="w-full h-22 lg:h-full object-cover hover:cursor-pointer scale-103 hover:scale-105 transition-all duration-150    "
            />
          </div>
          <div className="bg-amber-100 overflow-hidden">
            <img
              src={damanframe2}
              className="w-full h-22 lg:h-full object-cover hover:cursor-pointer scale-103 hover:scale-105 transition-all duration-150    "
            />
          </div>
          <div className="bg-amber-100 overflow-hidden">
            <img
              src={beachStand}
              className="w-full h-22 lg:h-full object-cover object-[50%_67%] lg:object-[50%_70%] hover:cursor-pointer hover:scale-105 transition-all duration-150    "
            />
          </div>
          <div className="bg-amber-100 overflow-hidden">
            <img
              src={sounew}
              className="w-full h-22 lg:h-full object-cover object-[50%_70%] hover:cursor-pointer scale-122 hover:scale-125 transition-all duration-150    "
            />
          </div>
        </div>
        {/* second row */}
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:w-[85%]">
            <div className="w-40 lg:w-70 aspect-[4/5] bg-blue-400 overflow-hidden">
              <img
                src={dwarkaguy}
                className="w-full h-full object-cover object-[50%_70%] hover:cursor-pointer scale-138 hover:scale-142 transition-all duration-150    "
              />
            </div>
            <div className="w-40 lg:w-70 aspect-[4/5] bg-blue-500 overflow-hidden">
              <img
                src={palace}
                className="w-full h-full object-cover object-[50%_70%] hover:cursor-pointer scale-112 hover:scale-116 transition-all duration-150    "
              />
            </div>
            <div className="w-40 lg:w-70 aspect-[4/5] bg-blue-600 overflow-hidden">
              <img
                src={suratbridge}
                className="w-full h-full object-cover object-[50%_70%] hover:cursor-pointer scale-124 hover:scale-125 transition-all duration-150    "
              />
            </div>
            <div className="w-40 lg:w-70 aspect-[4/5] bg-blue-700 overflow-hidden">
              <img
                src={nyc}
                className="w-full h-full object-cover object-[50%_70%] hover:cursor-pointer scale-122 hover:scale-125 transition-all duration-150    "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Photographs;
