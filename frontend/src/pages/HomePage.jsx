import Footer from "../components/Footer";
import PhotoComp from "../components/home/PhotoComp";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-screen h-screen flex justify-center items-center bg-black">
        <PhotoComp />
        <h1 className="text-7xl relative left-[-10%] z-100000 text-red-800 font-medium font-times [-webkit-text-stroke:1px_black] scale-195">
          <h1 className="relative">
            <span className="font-sloop text-9xl">D</span>HARM'S{" "}
          </h1>
          <h1 className="absolute top-[50%] right-[-40%] text-8xl">
            <span className="font-sloop text-9xl">P</span>ortfolio
          </h1>
        </h1>
        <div className="absolute bottom-40 opacity-50">
          <h1 className="text-white">please scroll horizontally ➔</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
