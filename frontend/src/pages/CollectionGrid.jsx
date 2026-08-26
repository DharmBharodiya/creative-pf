import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import adm from "../assets/admWIthoutDhrm.jpg";
import image004 from "../assets/image004.jpg";
import creativeAnimals from "../assets/creativeAnimals.jpg";
import daman1 from "../assets/damanframe1.jpg";

const CollectionGrid = () => {
  return (
    <>
      <Navbar />
      <div className="photo-grid w-full h-screen bg-black grid grid-cols-2 lg:grid-cols-4 items-center justify-items-center text-white">
        <div className="photo-grid-item">
          <div className="photo-grid-media w-50 lg:w-80 aspect-[9/16] bg-pink-400 overflow-hidden">
            <img
              src={adm}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          {/* <p className="photo-grid-caption">Painting</p> */}
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-50 lg:w-80 aspect-[9/16] bg-pink-500 overflow-hidden">
            <img
              src={image004}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          {/* <p className="photo-grid-caption">Photography</p> */}
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-50 lg:w-80 aspect-[9/16] bg-pink-600 overflow-hidden">
            <img
              src={creativeAnimals}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          {/* <p className="photo-grid-caption">Sketch</p> */}
        </div>
        <div className="photo-grid-item">
          <div className="photo-grid-media w-50 lg:w-80 aspect-[9/16] bg-pink-700 overflow-hidden">
            <img
              src={daman1}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-350 cursor-pointer"
            />
          </div>
          {/* <p className="photo-grid-caption">Photography</p> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollectionGrid;
