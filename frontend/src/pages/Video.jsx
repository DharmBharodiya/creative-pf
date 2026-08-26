import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";

const Video = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-black grid grid-cols-1 lg:grid-cols-[2.5fr_2fr] gap-0 overflow-hidden">
        {/* left side */}
        <div className="block lg:hidden relative w-full h-full tracking-tight text-red-500">
          <h1 className="font-sloop text-5xl lg:text-8xl absolute top-15 left-17 lg:left-24">
            V
            <span className="font-times text-3xl lg:text-6xl tracking-tight">
              ideo
            </span>
          </h1>
          <h1 className="font-sloop text-5xl lg:text-8xl absolute top-21 left-5 lg:top-10">
            C
            <span className="font-times text-3xl lg:text-6xl tracking-tight">
              inematography
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full lg:gap-3 lg:ml-30">
          <div className="h-full lg:h-screen flex lg:flex-col justify-center items-center">
            <div className="w-40 lg:w-75 aspect-[9/16] bg-white overflow-hidden">
              <a
                href="https://www.instagram.com/reel/DcUVUPZOm-_/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={thumb2}
                  className="w-full h-full object-cover hover:scale-105 cursor-pointer duration-350 transition-all"
                />
              </a>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center lg:gap-15">
            <div className="w-40 lg:w-75 aspect-[9/16] bg-amber-500 overflow-hidden">
              <a
                href="https://www.instagram.com/reel/DbuBNqAuSJD/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={thumb1}
                  className="w-full h-full object-cover object-top scale-[1.2] origin-top hover:scale-125 cursor-pointer duration-350 transition-all"
                />
              </a>
            </div>
            <div className="w-40 lg:w-75 aspect-[9/16] bg-blue-500 overflow-hidden">
              <a
                href="https://www.instagram.com/reel/DO3tTyYDAx4/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={thumb3}
                  className="w-full h-full object-cover hover:scale-105 cursor-pointer duration-350 transition-all"
                />
              </a>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="relative h-screen flex flex-col justify-center items-center">
          {/* heading */}
          <div className="relative hidden lg:block w-full tracking-tight text-red-800 ml-50">
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

          <p className="text-white block lg:hidden text-xs absolute left-[50%] mt-4 translate-x-[-50%] top-0">
            *tap on any of these to watch the video
          </p>

          <div className="hidden lg:block font-quicksand w-[60%] text-white text-xs lg:text-sm tracking-tight pt-10">
            <p className="pb-2 lg:pb-6">
              I like bringing together my love for art, photography, and
              storytelling through video. I take moments that catch my eye and
              turn them into cinematic stories.
            </p>
            <p className="pb-2 lg:pb-6">
              I’m drawn to videos that feel peaceful, relatable, and visually
              immersive — the kind of moments people want to stop and watch.
            </p>
            <p className="pb-2 lg:pb-6">
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

export default Video;
