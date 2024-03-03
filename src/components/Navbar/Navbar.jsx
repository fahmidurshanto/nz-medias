import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import Aos from "aos";
// ..
AOS.init();

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative top-4  flex lg:flex-row flex-row-reverse  justify-between items-center bg-[rgb(251,255,157)] p-5 shadow-2xl">
      <img
        className="w-20 p-5"
        src="https://nzmedias.com/wp-content/uploads/2024/02/cropped-loho-768x535.png"
        alt="NZ MEDIA LOGO"
      />
      <details className="dropdown lg:hidden  text-black">
        <summary className="m-1 btn ">
          <GiHamburgerMenu />
        </summary>
        <div className="dropdown grid grid-cols-1 ">
          <NavLink to="/">
            <button
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="bg-white border w-full mb-2 cursor-pointer"
            >
              Home
            </button>
          </NavLink>
          <NavLink to="/about">
            <button
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="bg-white border w-full mb-2 cursor-pointer"
            >
              About
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="bg-white border w-full mb-2 cursor-pointer"
            >
              Contact Us
            </button>
          </NavLink>
          <NavLink to="/reviews">
            <button
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="bg-white border w-full mb-2 cursor-pointer"
            >
              Reviews
            </button>
          </NavLink>
          <NavLink to="/recent-projects">
            <button
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="bg-white border w-full mb-2 cursor-pointer"
            >
              Recent Projects
            </button>
          </NavLink>
          <button
            data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="5000"
            className="p-2 bg-green-600 text-white border rounded-full cursor-pointer"
          >
            Get Quote
          </button>
        </div>
      </details>
      <div className="hidden lg:flex items-center">
        <NavLink to="/">
          <button className="text-xl font-semibold mr-4 border-0 bg-transparent cursor-pointer">
            Home
          </button>
        </NavLink>
        <NavLink to="/about">
          <button className="text-xl font-semibold mr-4 border-0 bg-transparent cursor-pointer">
            About
          </button>
        </NavLink>
        <NavLink to="/contact">
          <button className="text-xl font-semibold mr-4 border-0 bg-transparent cursor-pointer">
            Contact Us
          </button>
        </NavLink>
        <NavLink to="/reviews">
          <button className="text-xl font-semibold mr-4 border-0 bg-transparent cursor-pointer">
            Reviews
          </button>
        </NavLink>
        <NavLink to="/recent-projects">
          <button className="text-xl font-semibold mr-4 border-0 bg-transparent cursor-pointer">
            Recent Projects
          </button>
        </NavLink>
        <NavLink to="/quote">
          <button className="p-2 bg-green-600 text-xl font-semibold  text-white border-0 cursor-pointer rounded-full">
            Get Quote
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
