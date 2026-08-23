import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import Philosophy from "./pages/Philosophy";
import Graphics from "./pages/Graphics";
import WorkEx from "./pages/WorkEx";
import Concert from "./pages/Concert";
import Photographs from "./pages/Photographs";
import PhotoGrid from "./pages/PhotoGrid";
import Video from "./pages/Video";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-4 font-sloop text-4xl text-red-700">
            Mobile version under process.
          </h1>
          <p className="text-lg">
            Please try opening it through a desktop or laptop.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/workex" element={<WorkEx />} />
        <Route path="/concert" element={<Concert />} />
        <Route path="/photographs" element={<Photographs />} />
        <Route path="/photogrid" element={<PhotoGrid />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
