import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import thumb1 from "../../public/images/thumb1.jpg";
import thumb2 from "../../public/images/thumb2.jpg";
import thumb3 from "../../public/images/thumb3.jpg";

const Video = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-h-screen bg-black grid grid-cols-[2.5fr_2fr] gap-0 overflow-hidden">
        {/* left side */}
        <div className="grid grid-cols-2 max-h-screen gap-3 ml-30">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="w-75 aspect-[9/16] bg-white overflow-hidden">
              <img
                src={thumb2}
                className="w-full h-full object-cover hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
          </div>
          <div className="w-full  max-h-screen h-full flex flex-col justify-center items-center gap-15">
            <div className="w-75 aspect-[9/16] bg-amber-500 overflow-hidden">
              <img
                src={thumb1}
                className="w-full h-full object-cover object-top scale-[1.2] origin-top hover:scale-125 cursor-pointer duration-350 transition-all"
              />
            </div>
            <div className="w-75 aspect-[9/16] bg-blue-500 overflow-hidden">
              <img
                src={thumb3}
                className="w-full h-full object-cover hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="relative flex flex-col justify-center items-center">
          {/* heading */}
          <div className="relative w-full tracking-tight text-red-800 ml-50">
            <h1 className="font-sloop text-8xl relative left-25">
              V<span className="font-times text-6xl tracking-tight">ideo</span>
            </h1>
            <h1 className="font-sloop text-8xl absolute top-10">
              C
              <span className="font-times text-6xl tracking-tight">
                inematography
              </span>
            </h1>
          </div>

          <div className="font-quicksand w-[60%] text-white text-sm tracking-tight pt-10">
            <p className="pb-6">
              I like bringing together my love for art, photography, and
              storytelling through video. I take moments that catch my eye and
              turn them into cinematic stories.
            </p>
            <p className="pb-6">
              I’m drawn to videos that feel peaceful, relatable, and visually
              immersive — the kind of moments people want to stop and watch.
            </p>
            <p className="pb-6">
              Some of my videos have reached 22.5M+ views on Instagram. All my
              videos are available to view on my instagram pages... → More of my
              videos can be found on Instagram: @dharm_bharodiya · @456dharm
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Video;
