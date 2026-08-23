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
          <div className="photo-grid-media w-80 aspect-[4/5] bg-pink-400"></div>
          <p className="photo-grid-caption">Painting</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-80 aspect-[4/5] bg-pink-500"></div>
          <p className="photo-grid-caption">Photography</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-80 aspect-[4/5] bg-pink-600"></div>
          <p className="photo-grid-caption">Sketch</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-80 aspect-[4/5] bg-pink-700"></div>
          <p className="photo-grid-caption">Photography</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoGrid;
