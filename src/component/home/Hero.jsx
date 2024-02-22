import illustration from "../../assets/illustration.svg";
import store from "../../assets/Iconly/Bold/Video.svg";

const Hero = () => {
  return (
    <div className="flex-row flex w-full justify-between items-center mt-[5%]">
      <div className="flex items-center w-1/2">
        <div className="felx flex-col">
          <h1 className="text-4xl mb-5">
            Skip the stress,
            <span className="text-[#E57B6C]"> Track your happiness</span>{" "}
            everywhere
          </h1>
          <p className="w-5/6">
            sign up for our app and track your orders in every single step and
            avoid delays and common problems
          </p>
          <div className="flex-row mt-16 flex gap-10">
            <button className="bg-custom-blue text-white rounded-lg  px-14 flex-shrink font-bold ">
              Find suppliers
            </button>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full shadow-black drop-shadow-xl h-20 w-20 flex items-center justify-center">
                <img src={store} alt="store icon" className="w-16" />
              </div>
              <h1 className="font-bold text-[#2C2D58] text-xl">Join us</h1>
            </div>
          </div>
        </div>
      </div>
      <img src={illustration} alt="illustration" className="" />
    </div>
  );
};

export default Hero;
