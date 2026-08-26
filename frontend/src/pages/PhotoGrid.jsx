import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import eyeSketch from "../assets/eye1.jpeg";
import makingoffairy from "../assets/TheMakingOfAFairy.jpg";
import balloons from "../assets/balloons.JPG";
import trainfeet from "../assets/trainfeet.jpg";

const PhotoGrid = () => {
  return (
    <>
      <Navbar />
      <div className="lg:photo-grid w-full h-screen bg-black grid grid-cols-2 lg:grid-cols-4 items-center justify-items-center text-white">
        <div className="lg:photo-grid-item">
          <div className="lg:photo-grid-media w-50 lg:w-80 lg:h-auto aspect-4/5 bg-pink-400 overflow-hidden">
            <img
              src={makingoffairy}
              className="w-full h-full object-cover lg:hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="lg:photo-grid-caption">Painting</p>
        </div>
        <div className="lg:photo-grid-item">
          <div className="lg:photo-grid-media w-50 lg:w-80 lg:h-auto aspect-4/5 bg-pink-500 overflow-hidden">
            <img
              src={trainfeet}
              className="w-full h-full object-cover lg:scale-130 lg:hover:scale-135 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="lg:photo-grid-caption">Photography</p>
        </div>
        <div className="lg:photo-grid-item">
          <div className="lg:photo-grid-media w-50 lg:w-80 lg:h-auto aspect-4/5 bg-pink-600 overflow-hidden">
            <img
              src={eyeSketch}
              className="w-full h-full object-cover lg:hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="lg:photo-grid-caption">Sketch</p>
        </div>
        <div className="lg:photo-grid-item">
          <div className="lg:photo-grid-media w-50 lg:w-80 lg:h-auto aspect-4/5 bg-pink-700 overflow-hidden">
            <img
              src={balloons}
              className="w-full h-full object-cover lg:hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="lg:photo-grid-caption">Photography</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoGrid;
