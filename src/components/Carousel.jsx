import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];

const Carousel = () => {
  const [Slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevslide = () => {
    setSlide(Slide === length - 1 ? 0 : Slide + 1);
  };
  const nextslide = () => {
    setSlide(Slide === 0 ? length - 1 : Slide - 1);
  };

  return (
    <div className="max-w-[1240px] max-h-[540px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevslide}
        className="absolute top-[50%] text-xl md:text-3xl text-white cursor-pointer left-8 z-10"
      />
      <BsArrowRightSquareFill
        onClick={nextslide}
        className="absolute top-[50%] text-xl md:text-3xl text-white cursor-pointer right-8 z-10"
      />
      <div className="w-full">
        {sliderData.map((item, index) => (
          <div
            className={
              index === Slide ? "opacity-100 duration-500" : "opacity-0"
            }
          >
            {index === Slide && (
              <img
                src={item.url}
                alt="/"
                className="w-full h-[240px] md:h-[540px] object-center object-cover rounded-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
