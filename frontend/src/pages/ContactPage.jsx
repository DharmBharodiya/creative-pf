import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  let contactList = [
    "+ 201-736-7419",
    "dharmbharodiya@gmail.com",
    "instagram - Art: @dharm_bharodiya",
    "instagram - Photography:@456dharm",
    "https://dharmpf.vercel.app",
  ];

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-black relative">
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
                {contactList.map((contact, idxx) => (
                  <p key={idxx}>{contact}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="h-full w-full"></div>
          <div className="w-213 h-120 bg-white absolute translate-y-[-50%] top-[50%] left-[35%]"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
