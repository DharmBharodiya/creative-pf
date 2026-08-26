import image1 from "../../assets/sketch.jpg";
import image2 from "../../assets/image001.jpg";
import image3 from "../../assets/3.jpg";

const PhotoComp = () => {
  return (
    <div className="relative -top-60 left-[30%] lg:left-[40%] w-full group transition-all duration-200">
      <div className="bg-blue-500 rounded-full px-4 py-1 font-medium text-white absolute z-1000000 text-nowrap top-5 -left-10 opacity-0 lg:group-hover:opacity-0 lg:opacity-100 duration-300 transition-all">
        <p>hover me!</p>
      </div>
      <div className="w-38 lg:w-48 aspect-[4/5] bg-white absolute hover:scale-105 group-hover:10000 hover:z-150000 rotate-[-15deg] lg:group-hover:rotate-[-15deg] transition-all duration-200 z-1000 group-hover:cursor-pointer">
        <img src={image1} alt="" />
      </div>
      <div className="w-38 lg:w-48 aspect-[4/5] bg-yellow-600 group-hover:left-10 hover:scale-105 group-hover:10000 hover:z-150000 rotate-[5deg] lg:group-hover:rotate-[5deg]  transition-all duration-200 absolute z-100 group-hover:cursor-pointer">
        <img src={image2} alt="" />
      </div>
      <div className="w-38 lg:w-48 aspect-[4/5] bg-red-700 group-hover:left-20 hover:scale-105 hover:z-150000 group-hover:10000 rotate-[20deg] group-hover:rotate-[20deg]  transition-all duration-200 absolute z-10 group-hover:cursor-pointer">
        <img src={image3} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default PhotoComp;
