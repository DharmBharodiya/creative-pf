import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import cig1 from "../assets/cig1.JPG";
import bdaypic from "../assets/bdaypic.jpeg";
import leo from "../assets/leo11.png";
import onelayerart from "../assets/oneLayerArtManStanding.jpg";

const PaintingGrid = () => {
  return (
    <>
      <Navbar />
      <div className="photo-grid w-full h-screen bg-black grid grid-cols-2 lg:grid-cols-4 items-center justify-items-center text-white">
        <div className="photo-grid-item">
          <div className="photo-grid-media w-60 lg:w-80 aspect-[4/5] bg-pink-400 overflow-hidden">
            <img
              src={cig1}
              className="w-full h-full object-cover lg:hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="photo-grid-caption">Illustration</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-60 lg:w-80 aspect-[4/5] bg-pink-500 overflow-hidden">
            <img
              src={bdaypic}
              className="w-full h-full object-cover object-[50%_20%] lg:hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="photo-grid-caption">Digital Painting</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-60 lg:w-80 aspect-[4/5] bg-pink-600 overflow-hidden">
            <img
              src={leo}
              className="w-full h-full object-cover lg:hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="photo-grid-caption">Vector Illustration</p>
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-60 lg:w-80 aspect-[4/5] bg-pink-700 overflow-hidden">
            <img
              src={onelayerart}
              className="w-full h-full object-cover lg:hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          <p className="photo-grid-caption">Artwork</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaintingGrid;
