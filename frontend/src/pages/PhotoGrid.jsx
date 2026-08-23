import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import eyeSketch from "../../public/images/eye1.jpeg";
import makingoffairy from "../../public/images/TheMakingOfAFairy.jpg";
import balloons from "../../public/images/balloons.JPG";
import trainfeet from "../../public/images/trainfeet.jpg";

const PhotoGrid = () => {
  return (
    <>
      <Navbar />
      <div className="photo-grid w-full h-screen bg-black grid grid-cols-4 items-center justify-items-center text-white">
        <div className="photo-grid-item">
          <div className="photo-grid-media w-80 aspect-[4/5] bg-pink-400 overflow-hidden">
            <img
              src={makingoffairy}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="photo-grid-caption">Painting</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-80 aspect-[4/5] bg-pink-500 overflow-hidden">
            <img
              src={trainfeet}
              className="w-full h-full object-cover scale-130 hover:scale-135 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="photo-grid-caption">Photography</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-80 aspect-[4/5] bg-pink-600 overflow-hidden">
            <img
              src={eyeSketch}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="photo-grid-caption">Sketch</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-80 aspect-[4/5] bg-pink-700 overflow-hidden">
            <img
              src={balloons}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="photo-grid-caption">Photography</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoGrid;
