import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import dhrmImage from "../../public/images/dharm.jpeg";
import sunsetImage from "../../public/images/sunset01.jpg";

const AboutMePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-black flex justify-center items-center selection:bg-red-800 selection:text-white">
        <div className="w-[93%] h-full grid grid-cols-[2fr_3fr] justify-center">
          <div className="flex ml-15 flex-col justify-center items-start text-red-800">
            <div className="flex gap-3 justify-start">
              <h1 className="font-sloop text-8xl">
                A<span className="font-times text-6xl">bout</span>
              </h1>
              <h1 className="font-sloop text-8xl">
                M<span className="font-times text-6xl">e</span>
              </h1>
            </div>
            <div className="w-[60%] text-white text-sm font-quicksand">
              <p>
                I grew up in India, surrounded by centuries of art, color, and
                creativity. Art was everywhere — on walls, clothes, festivals,
                and in everyday life. Growing up around it shaped the way I see
                the world and sparked my passion for painting, photography, and
                cinematography.
              </p>
              <br />
              <p>
                I’m drawn to the beauty in ordinary things. I like finding
                moments that might otherwise go unnoticed and turning them into
                something worth remembering — whether through a photograph, a
                painting, or a cinematic frame.
              </p>
              <br />
              <p>
                I’m good with photoshop, procreate, illustrator, canva, video &
                photo editing and related jobs.
              </p>
            </div>
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex bg-blue-600 w-fit">
              <div className="w-96 h-120 flex justify-center items-center">
                <img src={dhrmImage} className="w-full h-full object-cover" />
              </div>
              <div className="w-96 h-120 bg-red-900 flex justify-center items-center">
                <img
                  src={sunsetImage}
                  className="w-80 h-100 object-cover hover:w-96 hover:h-120 transition-all duration-400 cursor-pointer"
                />
              </div>
            </div>
            <div>
              <p className="text-white w-[92%] font-quicksand text-sm ml-12 mt-2 tracking-tight">
                I try finding beauty in the most ordinary things in the
                surrounding. I try capturing beauty in the mundane and try
                painting my version of anything beautiful that I come
                across.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMePage;
