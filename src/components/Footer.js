import React from "react";
import { logoImg }  from "../constant/index.js"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 flex flex-col items-center">
      {/* Logo */}
      <img
        src={logoImg}
        alt="Logo"
        className="rounded-lg border-[3px] border-gray-500 h-[10rem] mb-2"
      />
      {/* Text */}
      <p className="text-center text-sm">
        Powered by <span className="font-semibold">@Fronchef</span>  
      </p>
      <p className="text-center text-sm mt-1">
        Component Made with ❤️ by <span className="font-semibold"><a href="https://github.com/shyam-jha" className="underline text-blue">Shyam Jha</a></span>
      </p>
    </footer>
  );
};

export default Footer;
