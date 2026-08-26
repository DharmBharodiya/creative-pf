import Footer from "../components/Footer";
import PhotoComp from "../components/home/PhotoComp";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-screen h-screen flex justify-center items-center bg-black">
        <PhotoComp />
        <h1 className="text-4xl lg:text-7xl relative left-[-30%] lg:left-[-40%] z-100000 text-red-800 font-medium font-times [-webkit-text-stroke:1px_black] scale-195">
          <h1 className="relative">
            <span className="font-sloop text-6xl lg:text-9xl">D</span>
            HARM'S{" "}
          </h1>
          <h1 className="absolute lg:top-[50%] lg:right-[-40%] top-[50%] left-[5%] text-5xl lg:text-8xl">
            <span className="font-sloop text-7xl lg:text-9xl">P</span>ortfolio
          </h1>
        </h1>
        <div className="absolute bottom-40 opacity-50">
          <h1 className="opacity-0 lg:opacity-100 text-white">
            please scroll horizontally ➔
          </h1>
          <h1 className="opacity-100 lg:opacity-0 text-white">
            please scroll to explore ↓
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
