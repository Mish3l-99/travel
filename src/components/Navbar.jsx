import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [mobnav, setmobnav] = useState(false);
  const handleNav = () => {
    setmobnav(!mobnav);
  };

  return (
    <div className="w-full flex justify-between items-center px-4 py-1 absolute z-10 text-white">
      <div className="z-10">
        <h1 className={mobnav ? "text-black" : ""}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="z-10 md:hidden">
        {mobnav ? (
          <AiOutlineClose size={20} />
        ) : (
          <HiOutlineMenuAlt1 size={20} />
        )}
      </div>

      {/* Mobile nav */}
      <div className={mobnav ? "mob-nav" : "absolute left-[-100%]"}>
        <ul className="mt-5">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
          <div className="flex flex-col">
            <button className="my-2">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between mt-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
