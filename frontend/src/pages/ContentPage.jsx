import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../assets/bestpaintingever.jpg";

const ContentPage = () => {
  let contentList = [
    ["about me", "01", "about"],
    ["creative", "02", "philosophy"],
    ["experience", "03", "work"],
    ["photographs", "04", "photographs"],
    ["collections", "05", "photogrid"],
    ["concert photography", "06", "concert"],
    ["cinematography", "07", "video"],
    ["graphic design", "08", "graphics"],
    ["contact", "09", "contact"],
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-screen flex justify-center items-center selection:bg-red-800 selection:text-white bg-black overflow-hidden">
        <div className="w-full h-[80%] grid grid-cols-3">
          <div className="text-white w-full h-full flex flex-col justify-between items-center">
            <p className="font-quicksand w-55 text-sm text-justify">
              I’ve been making art since I was a kid. Over time, I found my way
              into the digital world through illustration, photography, and
              cinematography.
            </p>
            <h1 className="font-times text-7xl text-red-500">
              <span className="font-sloop text-9xl">C</span>ontent
            </h1>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            {contentList.map(([name, number, sectionId]) => (
              <a
                key={number}
                href={`#${sectionId}`}
                className="text-white block w-full text-4xl hover:text-5xl cursor-pointer transition-all duration-200"
              >
                <div className="flex justify-between mb-4">
                  <span>{name.toUpperCase()}</span>
                  <span>{number}</span>
                </div>
                <div className="w-full h-0.5 bg-white"></div>
              </a>
            ))}
          </div>
          <div className="w-full h-full flex justify-center items-center flex-col hover:scale-105 hover:cursor-pointer transition-all duration-350">
            {/* photo */}
            <div className="w-80 h-96 bg-white">
              <img src={image1} className="w-full h-full object-cover" />
            </div>
            {/* caption */}
            <p className="w-80 text-xs mt-4 text-white">
              my artwork — displayed at one of India’s largest NFT exhibitions
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ContentPage;
