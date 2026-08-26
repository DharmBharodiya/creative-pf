import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";

const VideoNew = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-full bg-black grid grid-cols-1 lg:grid-cols-[2.5fr_2fr] overflow-hidden">
        {/* left side */}
        <div className="block lg:hidden relative w-full tracking-tight text-white">
          <h1 className="font-sloop text-5xl lg:text-8xl absolute top-30 left-17 lg:left-24">
            V
            <span className="font-times text-3xl lg:text-6xl tracking-tight">
              ideo
            </span>
          </h1>
          <h1 className="font-sloop text-5xl lg:text-8xl absolute top-36 left-5 lg:top-10">
            C
            <span className="font-times text-3xl lg:text-6xl tracking-tight">
              inematography
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-screen lg:gap-3 lg:ml-30">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="w-40 lg:w-75 aspect-[9/16] bg-white overflow-hidden">
              <img
                src={thumb2}
                className="w-full h-full object-cover lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center lg:gap-15">
            <div className="w-40 lg:w-75 aspect-[9/16] bg-amber-500 overflow-hidden">
              <img
                src={thumb1}
                className="w-full h-full object-cover lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
            <div className="w-40 lg:w-75 aspect-[9/16] bg-blue-500 overflow-hidden">
              <img
                src={thumb3}
                className="w-full h-full object-cover lg:hover:scale-105 cursor-pointer duration-350 transition-all"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="relative flex flex-col justify-center items-center">
          {/* heading */}
          <div className="opacity-0 lg:opacity-100 lg:relative w-full tracking-tight text-white lg:text-red-800 lg:ml-50">
            <h1 className="font-sloop text-5xl lg:text-8xl relative lg:left-25">
              V
              <span className="font-times text-3xl lg:text-6xl tracking-tight">
                ideo
              </span>
            </h1>
            <h1 className="font-sloop text-5xl lg:text-8xl absolute lg:top-10">
              C
              <span className="font-times text-3xl lg:text-6xl tracking-tight">
                inematography
              </span>
            </h1>
          </div>

          <div className="hidden lg:block font-quicksand w-[60%] text-white text-sm tracking-tight pt-10">
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
            <p className="pb-2 lg:pb-6 text-blue-500">
              *click on any image to watch the video 😃
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VideoNew;
