import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import letter from "../assets/letter0.png";
import panic from "../assets/panic.webp";
import wearmask from "../assets/wearmask.png";
import invite from "../assets/invite.jpeg";
import euphoria from "../assets/euphoria.png";
import redman from "../assets/fg.jpg";
import architecture from "../assets/architecture.png";

const Graphics = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen overflow-hidden bg-black flex flex-col selection:bg-red-800 selection:text-white">
        <div className="text-red-800 flex w-full justify-center items-center gap-4 pt-16 pb-4 flex-row">
          <h1 className="font-sloop text-6xl lg:text-9xl">
            G<span className="font-times text-3xl lg:text-7xl">raphic</span>
          </h1>
          <h1 className="font-sloop text-6xl lg:text-9xl">
            D<span className="font-times text-3xl lg:text-7xl">esign</span>
          </h1>
        </div>
        <div className="text-white font-quicksand text-xs lg:text-sm flex justify-between items-center w-full px-10">
          <p className="w-60 lg:w-70">
            A collection of graphic experiments, event designs, and visual work
            created for organizations and personal projects.
          </p>
          <p className="w-60">
            Exploring design through typography, composition, color, and
            storytelling.
          </p>
        </div>
        {/*  lower deck */}
        <div className="w-full flex-1 min-h-0 bg-red-500 mt-8 grid grid-cols-1 lg:grid-cols-3">
          <div className="w-full min-w-0 min-h-0 h-full bg-amber-500 overflow-hidden">
            <img
              src={panic}
              className="block object-cover w-full h-full lg:hover:scale-105 cursor-pointer duration-350 transition-all"
            />
          </div>
          <div className="w-full min-w-0 min-h-0 h-full bg-green-800 grid grid-cols-3 grid-rows-3">
            <div className="bg-black w-full h-full"></div>
            <div className="bg-red-600 w-full h-full overflow-hidden">
              <img
                src={redman}
                className="block object-cover w-full h-full lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
            <div className="bg-red-800 w-full h-full overflow-hidden">
              <img
                src={euphoria}
                className="block lg:scale-102 object-cover object-[50%_10%] w-full h-full lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
            <div className="bg-yellow-400 w-full h-full overflow-hidden">
              <img
                src={wearmask}
                className="block object-cover w-full h-full lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
            <div className="bg-black w-full h-full"></div>
            <div className="bg-yellow-800 w-full h-full row-span-2 overflow-hidden">
              <img
                src={architecture}
                className="block object-cover w-full h-full lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
            <div className="bg-black w-full h-full col-span-2 overflow-hidden">
              <img
                src={invite}
                className="block object-cover w-full h-full object-[50%_90%] lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
            {/* <div className="bg-purple-800 w-full h-full"></div> */}
          </div>
          <div className="w-full min-w-0 min-h-0 h-full bg-blue-900 overflow-hidden">
            <img
              src={letter}
              className="block object-cover w-full h-full lg:hover:scale-105 cursor-pointer duration-350 transition-all"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Graphics;
