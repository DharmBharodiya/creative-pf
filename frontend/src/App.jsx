import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef(null);
  const targetScroll = useRef(0);
  const animationFrame = useRef(null);
  const scrollActivityTimeout = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    targetScroll.current = scrollContainer.scrollLeft;

    const clampScroll = (value) =>
      Math.max(
        0,
        Math.min(
          value,
          scrollContainer.scrollWidth - scrollContainer.clientWidth,
        ),
      );

    const animateScroll = () => {
      const distance = targetScroll.current - scrollContainer.scrollLeft;

      if (Math.abs(distance) < 0.5) {
        scrollContainer.scrollLeft = targetScroll.current;
        animationFrame.current = null;
        return;
      }

      scrollContainer.scrollLeft += distance * 0.22;
      animationFrame.current = requestAnimationFrame(animateScroll);
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      event.preventDefault();
      const multiplier = event.deltaMode === 1 ? 16 : 1;
      targetScroll.current = clampScroll(
        targetScroll.current + event.deltaY * multiplier * 1.35,
      );

      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(animateScroll);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      targetScroll.current = clampScroll(
        targetScroll.current + direction * scrollContainer.clientWidth,
      );

      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(animateScroll);
      }
    };

    const handleAnchorClick = (event) => {
      const link = event.target.closest("a[href^='#']");
      if (!link) return;

      const target = document.getElementById(
        link.getAttribute("href").slice(1),
      );
      if (!target || !scrollContainer.contains(target)) return;

      event.preventDefault();
      targetScroll.current = clampScroll(target.offsetLeft);
      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(animateScroll);
      }
      window.history.replaceState(null, "", link.getAttribute("href"));
    };

    const handleScroll = () => {
      if (!animationFrame.current)
        targetScroll.current = scrollContainer.scrollLeft;

      scrollContainer.classList.add("is-scrolling");
      clearTimeout(scrollActivityTimeout.current);
      scrollActivityTimeout.current = setTimeout(() => {
        scrollContainer.classList.remove("is-scrolling");
      }, 650);
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    scrollContainer.addEventListener("keydown", handleKeyDown);
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleAnchorClick);

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
      scrollContainer.removeEventListener("keydown", handleKeyDown);
      scrollContainer.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      clearTimeout(scrollActivityTimeout.current);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const sections = scrollContainer.querySelectorAll(".horizontal-page");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          const nextIndex = [...sections].indexOf(visibleSection.target);
          setActiveSection(nextIndex);
          visibleSection.target.classList.add("is-active");
          sections.forEach((section) => {
            if (section !== visibleSection.target)
              section.classList.remove("is-active");
          });
        }
      },
      { root: scrollContainer, threshold: [0.5, 0.75, 0.99] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

  const sections = [
    ["home", HomePage],
    ["content", ContentPage],
    ["about", AboutMePage],
    ["philosophy", Philosophy],
    ["work", WorkEx],
    ["concert", Concert],
    ["photographs", Photographs],
    ["photogrid", PhotoGrid],
    ["video", Video],
    ["graphics", Graphics],
    ["contact", ContactPage],
  ];

  return (
    <>
      <Navbar />
      <main
        ref={scrollRef}
        className="horizontal-scroll"
        tabIndex="0"
        aria-label="Portfolio sections"
      >
        <div
          className="scroll-progress"
          style={{
            transform: `scaleX(${(activeSection + 1) / sections.length})`,
          }}
        />
        <div className="horizontal-scroll-track selection:bg-red-800 selection:text-white">
          {sections.map(([id, Page]) => (
            <section key={id} id={id} className="horizontal-page">
              <Page />
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
