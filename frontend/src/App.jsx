import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
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
import PaintingGrid from "./pages/PaintingGrid";
import CollectionGrid from "./pages/CollectionGrid";

function App() {
  // const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : true,
  );
  const scrollRef = useRef(null);
  const targetScroll = useRef(0);
  const scrollAnimation = useRef(null);
  const scrollEase = useRef(0.22);
  const scrollActivityTimeout = useRef(null);

  // useEffect(() => {
  //   const checkMobile = () => setIsMobile(window.innerWidth <= 1024);

  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);

  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleViewportChange = (event) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const getScrollPosition = () =>
      isDesktop ? scrollContainer.scrollLeft : scrollContainer.scrollTop;
    const setScrollPosition = (value) => {
      if (isDesktop) scrollContainer.scrollLeft = value;
      else scrollContainer.scrollTop = value;
    };

    targetScroll.current = getScrollPosition();

    const clampScroll = (value) =>
      Math.max(
        0,
        Math.min(
          value,
          isDesktop
            ? scrollContainer.scrollWidth - scrollContainer.clientWidth
            : scrollContainer.scrollHeight - scrollContainer.clientHeight,
        ),
      );

    const animateScroll = () => {
      scrollAnimation.current?.stop();
      scrollAnimation.current = animate(
        getScrollPosition(),
        targetScroll.current,
        {
          duration: scrollEase.current === 0.14 ? 0.8 : 0.65,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => {
            setScrollPosition(value);
          },
          onComplete: () => {
            scrollAnimation.current = null;
          },
        },
      );
    };

    const handleWheel = (event) => {
      if (!isDesktop) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      event.preventDefault();
      scrollEase.current = 0.22;
      const multiplier = event.deltaMode === 1 ? 16 : 1;
      targetScroll.current = clampScroll(
        targetScroll.current + event.deltaY * multiplier * 1.35,
      );

      animateScroll();
    };

    const handleKeyDown = (event) => {
      if (!isDesktop) return;
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

      event.preventDefault();
      scrollEase.current = 0.18;
      const direction = event.key === "ArrowRight" ? 1 : -1;
      targetScroll.current = clampScroll(
        targetScroll.current + direction * scrollContainer.clientWidth,
      );

      animateScroll();
    };

    const handleAnchorClick = (event) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href^='#']");
      if (!link) return;

      const target = document.getElementById(
        link.getAttribute("href").slice(1),
      );
      if (!target || !scrollContainer.contains(target)) return;

      event.preventDefault();
      scrollEase.current = 0.14;
      const targetPosition = isDesktop ? target.offsetLeft : target.offsetTop;
      targetScroll.current = clampScroll(targetPosition);
      animateScroll();
      window.history.replaceState(null, "", link.getAttribute("href"));
    };

    const handleScroll = () => {
      if (!scrollAnimation.current) targetScroll.current = getScrollPosition();

      scrollContainer.classList.add("is-scrolling");
      clearTimeout(scrollActivityTimeout.current);
      scrollActivityTimeout.current = setTimeout(() => {
        scrollContainer.classList.remove("is-scrolling");
      }, 650);
    };

    if (isDesktop) {
      scrollContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
      scrollContainer.addEventListener("keydown", handleKeyDown);
    }
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      if (isDesktop) {
        scrollContainer.removeEventListener("wheel", handleWheel);
        scrollContainer.removeEventListener("keydown", handleKeyDown);
      }
      scrollContainer.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick, true);
      scrollAnimation.current?.stop();
      clearTimeout(scrollActivityTimeout.current);
    };
  }, [isDesktop]);

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

  // if (isMobile) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
  //       <div className="max-w-md flex flex-col justify-center items-center">
  //         <h1 className="mb-4 font-quicksand text-3xl text-red-700">
  //           Mobile version under process.
  //         </h1>
  //         <p className="text-lg">
  //           Please try opening it through a desktop or laptop. Thank you.
  //         </p>
  //         {/* <a href="">
  //           <h1 className="bg-red-600 hover:bg-red-800 cursor-pointer px-4 py-1 rounded-md w-fit mt-5">
  //             visit this instead
  //           </h1>
  //         </a> */}
  //         <a
  //           href="https://drive.google.com/file/d/1KT_FpX49OhDedFfxHmiZ_dyuXG0xggqx/view?usp=sharing"
  //           target="_blank"
  //         >
  //           <h1 className="bg-red-600 px-4 py-1 rounded-md w-fit mt-5 cursor-pointer hover:bg-red-900">
  //             pdf version of this
  //           </h1>
  //         </a>
  //         <div className="flex flex-col gap-3 mt-4">
  //           <a href="https://www.instagram.com/dharm_bharodiya" target="_blank">
  //             01. instagram(art)
  //           </a>
  //           <a href="https://www.instagram.com/456dharm" target="_blank">
  //             02. instagram(photo)
  //           </a>
  //         </div>
  //         <p className="mt-10">by Dharm Bharodiya</p>
  //       </div>
  //     </div>
  //   );
  // }

  const sections = [
    ["home", HomePage],
    ["content", ContentPage],
    ["about", AboutMePage],
    ["philosophy", Philosophy],
    ["work", WorkEx],
    ["concert", Concert],
    ["photographs", Photographs],
    ["photogrid", PhotoGrid],
    ["collectiongrid", CollectionGrid],
    ["video", Video],
    ["graphics", Graphics],
    ["paintings", PaintingGrid],
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
