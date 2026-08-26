import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Third from "../assets/third.jpg";
import visarjan from "../assets/visarjanframe1.jpg";
import soulegs from "../assets/soulegs.jpeg";
import ahmedabad from "../assets/ahmdbdDiariesThumbnail.jpg";

const Philosophy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black w-full h-screen grid grid-cols-1 lg:grid-cols-[4fr_3.5fr] text-red-800 selection:bg-red-800 selection:text-white">
        <div className="bg-black w-full lg:h-full flex flex-col justify-center">
          <div className="w-full pl-14 lg:pl-24 flex flex-col lg:flex lg:items-center lg:gap-8">
            <div className="flex gap-4">
              <h1 className="text-5xl lg:text-9xl font-sloop">
                C
                <span className="text-3xl lg:text-7xl font-times">reative</span>
              </h1>
              <h1 className="text-5xl lg:text-9xl font-sloop block lg:hidden">
                P
                <span className="text-3xl lg:text-7xl font-times">
                  hilosophy
                </span>
              </h1>
            </div>
            <p className="w-80 mb-5 lg:mb-0 lg:w-70 font-quicksand text-xs lg:text-sm text-white">
              I believe that every design should tell a story — not just through
              visuals, but through meaning and intent.{" "}
            </p>
          </div>
          <div className="bg-black w-full max-h-50 overflow-hidden grid grid-cols-[8fr_2.6fr]">
            <div className="bg-amber-400 overflow-hidden">
              <img
                src={soulegs}
                className="w-full h-full object-cover object-[center_right] lg:hover:scale-105 cursor-pointer transition-all duration-350"
              />
            </div>
            <div className="bg-amber-900">
              <img
                src={Third}
                className="w-full h-full object-cover lg:hover:scale-105 cursor-pointer transition-all duration-350"
              />
            </div>
          </div>
          <div className="w-full lg:flex pl-24 lg:pt-6 hidden lg:items-center h-auto gap-8">
            <h1 className="text-6xl lg:text-9xl font-sloop">
              P
              <span className="text-4xl lg:text-7xl font-times">hilosophy</span>
            </h1>
          </div>
        </div>
        <div className="bg-black flex flex-col lg:justify-between">
          <div className="bg-blue-800 w-full h-50 lg:h-90 overflow-hidden">
            <img
              src={ahmedabad}
              className="w-full h-full object-cover lg:hover:scale-105 cursor-pointer transition-all duration-350"
            />
          </div>
          <div className="bg-pink-400 w-full h-50 lg:h-90 overflow-hidden">
            <img
              src={visarjan}
              className="w-full h-full object-cover object-[50%_19.5%] lg:hover:scale-105 cursor-pointer transition-all duration-350"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Philosophy;
