import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VenkyImage from "../assets/bandContact.jpeg";

const ContactPage = () => {
  let contactList = [
    { label: "+1 201-736-7419", href: "tel:+12017367419" },
    {
      label: "dharmbharodiya@gmail.com",
      href: "mailto:dharmbharodiya@gmail.com",
    },
    {
      label: "instagram - Art: @dharm_bharodiya",
      href: "https://www.instagram.com/dharm_bharodiya/",
    },
    {
      label: "instagram - Photography:@456dharm",
      href: "https://www.instagram.com/456dharm/",
    },
    {
      label: "https://dharmpf.vercel.app",
      href: "https://dharmpf.vercel.app",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-black relative selection:bg-red-800 selection:text-white">
        <div className="w-full h-screen grid grid-cols-[2.5fr_3.5fr] absolute inset-0">
          {/* the back div */}
          <div className="bg-black"></div>
          <div className="bg-red-900"></div>
        </div>
        <div className="w-full h-screen grid grid-cols-[3fr_4fr] absolute inset-0">
          {/* the main content div */}
          <div className="h-full w-full flex justify-center items-center flex-col">
            <div>
              <h1 className="font-sloop text-8xl text-red-800 leading-1">
                C<span className="font-times text-6xl">ontact</span>
              </h1>
              <p className="w-70 text-white">
                Thanks for taking the time to explore my work.
              </p>
            </div>
            <div className="w-auto h-auto flex mt-10">
              <div className="h-auto w-0.5 mr-8 bg-white"></div>
              <div className="text-white">
                {contactList.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="block cursor-pointer hover:text-red-800"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="h-full w-full"></div>
          <div className="w-213 h-120 bg-white absolute group overflow-hidden translate-y-[-50%] top-[50%] left-[35%]">
            <img
              src={VenkyImage}
              className="w-full h-full object-cover group-hover:scale-105 duration-350"
            />
            <p className="text-white text-xs">* shot this at a concert</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
