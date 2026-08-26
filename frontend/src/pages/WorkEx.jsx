import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import camel from "../assets/camel.jpeg";

const WorkEx = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-black text-red-800 grid grid-cols-1 lg:grid-cols-[2.5fr_1.5fr] px-10 justify-center items-center">
        <div className="ml-5 lg:ml-20 w-220 h-auto flex flex-col justify-center items-start pt-10">
          {/* main title */}
          <div className="flex justify-start items-center w-full gap-6 tracking-tight">
            <h1 className="font-sloop text-5xl lg:text-8xl">
              W
              <span className="font-times text-3xl lg:text-6xl tracking-tight">
                ork
              </span>
            </h1>
            <h1 className="font-sloop text-5xl lg:text-8xl">
              E
              <span className="font-times text-3xl lg:text-6xl tracking-tight">
                xperience
              </span>
            </h1>
          </div>
          {/*  */}
          <div className="text-white font-quicksand text-xs lg:text-sm w-[40%] lg:w-[90%]">
            <p className="mb-3 lg:mb-6">
              I mostly work as an independent artist, capturing photographs and
              creating artwork. I’ve also collaborated with local businesses,
              creating visual content to help showcase their work and
              identity.{" "}
            </p>
            <p className="mb-3 lg:mb-6">
              During college, I served as an art lead for major technical
              festivals and designed posters and visual material for hackathons
              and other events.
            </p>
            <p className="mb-3 lg:mb-6">
              *I also won a silver medal representing my college in a graffiti
              competition :)
            </p>
          </div>
          {/* third part */}
          <div>
            <div className="font-quicksand tracking-tighter text-white grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
              <div className="border-r-4 border-white/40 pr-4">
                <h1 className="font-semibold mb-3 text-nowrap text-md">
                  ART | DESIGN | GRAPHICS
                </h1>
                <p className="text-sm w-[40%] lg:w-full">
                  Creating illustrations, digital paintings, posters, and
                  graphic work across personal projects, college events, and
                  creative collaborations. My work blends visual experimentation
                  with storytelling and composition.
                </p>
              </div>
              {/* <div className=""></div> */}
              <div className="border-r-4 border-white/40 pr-4">
                <h1 className="font-semibold mb-1 lg:mb-3">PHOTOGRAPHY</h1>
                <p className="text-sm w-[40%] lg:w-full">
                  Exploring everyday moments, people, places, and live events
                  through photography. I primarily shoot on my phone, focusing
                  on composition, light, color, and finding interesting stories
                  in ordinary scenes.
                </p>
              </div>
              {/* <div className=""></div> */}
              <div>
                <h1 className="font-semibold mb-1 lg:mb-3">CINEMATOGRAPHY</h1>
                <p className="text-sm lg:w-[80%] w-[40%]">
                  Turning photographs, everyday moments, and visual ideas into
                  cinematic short-form videos. I focus on mood, pacing, color,
                  and storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-50 lg:w-96 aspect-[4/5] bg-white overflow-hidden">
            <img
              src={camel}
              className="w-full h-full object-cover lg:scale-110 lg:hover:scale-115 duration-350 cursor-pointer"
            />
          </div>
          <p className="text-xs opacity-0 lg:opacity-100  text-white mt-2">
            *shot this at dumas beach, surat
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkEx;
