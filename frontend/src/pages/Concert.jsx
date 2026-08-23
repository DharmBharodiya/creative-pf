import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import jigra from "../../public/images/jigra.jpeg";
import jigra2 from "../../public/images/jigra2.jpeg";
import sanam from "../../public/images/sanam.jpeg";

const Concert = () => {
  return (
    <>
      <Navbar />

      <div className="w-full max-h-screen bg-black grid grid-cols-[2.5fr_2fr] gap-0 overflow-hidden">
        {/* left side */}
        <div className="grid grid-cols-2 max-h-screen gap-3 ml-30">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="w-75 aspect-[9/16] bg-white overflow-hidden">
              <img
                src={jigra}
                className="w-full h-full object-cover hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
          </div>
          <div className="w-full  max-h-screen h-full flex flex-col justify-center items-center gap-15">
            <div className="w-75 aspect-[9/16] bg-amber-500 overflow-hidden">
              <img
                src={jigra2}
                className="w-full h-full object-cover hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
            <div className="w-75 aspect-[9/16] bg-blue-500 overflow-hidden">
              <img
                src={sanam}
                className="w-full h-full object-cover hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="relative flex flex-col justify-center items-center">
          {/* heading */}
          <div className="relative w-full tracking-tight text-red-800 ml-50">
            <h1 className="font-sloop text-8xl relative left-25">
              C
              <span className="font-times text-6xl tracking-tight">oncert</span>
            </h1>
            <h1 className="font-sloop text-8xl absolute top-10">
              P
              <span className="font-times text-6xl tracking-tight">
                hotography
              </span>
            </h1>
          </div>

          <div className="font-quicksand w-[60%] text-white text-sm tracking-tight pt-10">
            <p className="pb-6">
              I’ve had the opportunity to photograph live concerts, capturing
              the energy, movement, and atmosphere of the stage and crowd. Some
              of these photographs have received strong engagement online.
            </p>
            <p className="pb-6">
              *All photographs on this page were shot on my phone.
            </p>
            <p className="pb-6">
              Concert photography has taught me to work with unpredictable
              light, fast movement, and constantly changing compositions — all
              while trying to capture a moment that feels alive.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Concert;
