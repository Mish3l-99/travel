import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      {/* just an overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40"></div>

      {/* Content-wrapper */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <div className="px-2">
          <form
            action=""
            className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90"
          >
            <div>
              <input
                type="text"
                className="bg-transparent w-[220px] sm:w-[400px] focus:outline-none px-3"
                placeholder="Search destination .."
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch size={20} style={{ color: "#ffffff" }} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
