import React from "react";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { BsBoxArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:py-4 py-2 justify-between items-center px-2  bg-gray-100 w-full mt-8">
      <div className="flex flex-col sm:mb-0 sm:mt-0 mt-4 mb-6 pl-4">
        <div className="flex items-center gap-2">
          <AiFillMail />
          <p>pingalekalpesha@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <AiFillPhone />
          <p>+917744806524</p>
        </div>
      </div>
      <div className="flex items-center sm:gap-2 gap-8 sm:text-lg text-xl sm:mb-0 mb-2 pr-4">
        <a
          href="https://github.com/Kalpesha2000"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        
        <a
          rel="noreferrer"
          href="https://www.crio.do/learn/portfolio/pingalekalpesha"
          target="_blank"
        >
          <img
            src="https://formwebdesign.ca/wp-content/uploads/2018/09/web-design-portfolio-icon.png"
            alt="portfolio"
            className="w-4 h-4 object-cover cursor-pointer"
          />
        </a>
       
      </div>
    </div>
  );
};

export default Footer;
