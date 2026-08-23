import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Third from "../../public/images/third.jpg";
import visarjan from "../../public/images/visarjanframe1.jpg";
import soulegs from "../../public/images/soulegs.jpeg";
import ahmedabad from "../../public/images/ahmdbdDiariesThumbnail.jpg";

const Philosophy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black w-full h-screen grid grid-cols-[4fr_3.5fr] text-red-800 selection:bg-red-800 selection:text-white">
        <div className="bg-black w-full h-full flex flex-col justify-center">
          <div className="w-full pl-24 flex items-center gap-8">
            <h1 className="text-9xl font-sloop">
              C<span className="text-7xl font-times">reative</span>
            </h1>
            <p className="w-70 font-quicksand text-sm text-white">
              I believe that every design should tell a story — not just through
              visuals, but through meaning and intent.{" "}
            </p>
          </div>
          <div className="bg-black w-full max-h-50 overflow-hidden grid grid-cols-[8fr_2.6fr]">
            <div className="bg-amber-400 overflow-hidden">
              <img
                src={soulegs}
                className="w-full h-full object-cover object-[center_right] hover:scale-105 cursor-pointer transition-all duration-350"
              />
            </div>
            <div className="bg-amber-900">
              <img
                src={Third}
                className="w-full h-full object-cover hover:scale-105 cursor-pointer transition-all duration-350"
              />
            </div>
          </div>
          <div className="w-full pl-24 pt-6 flex items-center h-auto gap-8">
            <h1 className="text-9xl font-sloop">
              P<span className="text-7xl font-times">hilosophy</span>
            </h1>
            <div className="w-70 h-full"></div>
          </div>
        </div>
        <div className="bg-black flex flex-col justify-between">
          <div className="bg-blue-800 w-full h-90 overflow-hidden">
            <img
              src={ahmedabad}
              className="w-full h-full object-cover hover:scale-105 cursor-pointer transition-all duration-350"
            />
          </div>
          <div className="bg-pink-400 w-full h-90 overflow-hidden">
            <img
              src={visarjan}
              className="w-full h-full object-cover object-[50%_19.5%] hover:scale-105 cursor-pointer transition-all duration-350"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Philosophy;
