import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center py-4 px-4 lg:px-20 sticky top-0 z-50 shadow-md bg-black">
      {/* <a href="/" className="text-3xl lg:text-4xl font-extrabold tracking-[0.25em] m-0">
        PB
      </a> */}

      <Link
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="text-3xl lg:text-4xl font-extrabold tracking-[0.25em] m-0"
        to="/"
      >
        PB
      </Link>

      <nav className="hidden md:flex items-center gap-12 ml-auto">
        <Link
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200"
          className="text-base tracking-wider transaction-colors hover:text-grey-600 z-50"
          to="/about"
        >
          About
        </Link>

        <Link
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1400"
          className="text-base tracking-wider transaction-colors hover:text-grey-600 z-50"
          to="/projects"
        >
          Projects
        </Link>

        <Link
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1600"
          className="text-base tracking-wider transaction-colors hover:text-grey-600 z-50"
          to="/contact"
        >
          Contact
        </Link>
        {/* <button className="hidden md:block bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all duration-all hover:bg-white cursor-pointer z-50">
          Github
        </button> */}
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1800"
          className="hidden md:block bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all duration-all hover:bg-white cursor-pointer z-50"
          href="https://github.com/Priyanksu28"
          target="_blank"
        >
          Github
        </a>
      </nav>

      {/* navbar-mobile respomnsive */}
      <button
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      <div
        id="mobileMenu"
        className={`fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col md:hidden items-center gap-6 ml-auto">
          <Link
            className="text-base tracking-wider transaction-colors hover:text-grey-600 z-50"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-base tracking-wider transaction-colors hover:text-grey-600 z-50"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-base tracking-wider transaction-colors hover:text-grey-600 z-50"
            to="/contact"
          >
            Contact
          </Link>
          <a
          className="bg-[#a7a7a7] text-black py-2 px-8 rounded-full border-none font-medium transition-all duration-all hover:bg-white cursor-pointer z-50"
          href="https://github.com/Priyanksu28"
          target="_blank"
        >
          Github
        </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
