import image1 from "../../../public/images/sketch.jpg";
import image2 from "../../../public/images/image001.jpg";
import image3 from "../../../public/images/3.jpg";

const PhotoComp = () => {
  return (
    <div className="relative -top-60 group transition-all duration-200">
      <div className="bg-blue-500 rounded-full px-4 py-1 font-medium text-white absolute z-1000000 text-nowrap top-5 -left-10 group-hover:opacity-0 opacity-100 duration-300 transition-all">
        <p>hover me!</p>
      </div>
      <div className="w-48 h-60 bg-white absolute hover:scale-105 group-hover:10000 hover:z-150000 group-hover:rotate-[-15deg] transition-all duration-200 z-1000 group-hover:cursor-pointer">
        <img src={image1} alt="" />
      </div>
      <div className="w-48 h-60 bg-yellow-600 group-hover:left-10 hover:scale-105 group-hover:10000 hover:z-150000 group-hover:rotate-[5deg]  transition-all duration-200 absolute z-100 group-hover:cursor-pointer">
        <img src={image2} alt="" />
      </div>
      <div className="w-48 h-60 bg-red-700 group-hover:left-20 hover:scale-105 hover:z-150000 group-hover:10000 group-hover:rotate-[20deg]  transition-all duration-200 absolute z-10 group-hover:cursor-pointer">
        <img src={image3} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default PhotoComp;
