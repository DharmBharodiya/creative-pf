import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import jigra from "../assets/jigra.jpeg";
import jigra2 from "../assets/jigra2.jpeg";
import sanam from "../assets/sanam.jpeg";

const Concert = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-full lg:max-h-screen bg-black grid grid-cols-1 lg:grid-cols-[2.5fr_2fr] overflow-hidden">
        {/* left side */}
        <div className="relative w-full tracking-tight text-white">
          <h1 className="font-sloop text-5xl lg:text-8xl absolute top-30 left-17 lg:left-24">
            C
            <span className="font-times text-3xl lg:text-6xl tracking-tight">
              oncert
            </span>
          </h1>
          <h1 className="font-sloop text-5xl lg:text-8xl absolute top-36 left-5 lg:top-10">
            P
            <span className="font-times text-3xl lg:text-6xl tracking-tight">
              hotography
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-screen lg:gap-3 lg:ml-30">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="w-45 lg:w-75 aspect-[9/16] bg-white overflow-hidden">
              <img
                src={jigra}
                className="w-full h-full object-cover lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
          </div>
          <div className="w-full max-h-screen flex flex-col justify-center items-center lg:gap-15">
            <div className="w-45 lg:w-75 aspect-[9/16] bg-amber-500 overflow-hidden">
              <img
                src={jigra2}
                className="w-full h-full object-cover lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
            <div className="w-45 lg:w-75 aspect-[9/16] bg-blue-500 overflow-hidden">
              <img
                src={sanam}
                className="w-full h-full object-cover lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="relative flex flex-col justify-center items-center">
          {/* heading */}
          <div className="opacity-0 lg:opacity-100 lg:relative w-full tracking-tight text-white lg:text-red-800 lg:ml-50">
            <h1 className="font-sloop text-5xl lg:text-8xl relative lg:left-25">
              C
              <span className="font-times text-3xl lg:text-6xl tracking-tight">
                oncert
              </span>
            </h1>
            <h1 className="font-sloop text-5xl lg:text-8xl absolute lg:top-10">
              P
              <span className="font-times text-3xl lg:text-6xl tracking-tight">
                hotography
              </span>
            </h1>
          </div>

          <div className="hidden lg:block font-quicksand w-[60%] text-white text-sm tracking-tight pt-10">
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
