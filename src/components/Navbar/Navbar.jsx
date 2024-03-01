import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="  flex lg:flex-row flex-row-reverse  justify-between items-center bg-[rgb(251,255,157)] p-5">
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
            <button className="bg-white border w-full mb-2">Home</button>
          </NavLink>
          <NavLink to="/about">
            <button className="bg-white border w-full mb-2">About</button>
          </NavLink>
          <NavLink to="/contact">
            <button className="bg-white border w-full mb-2">Contact Us</button>
          </NavLink>
          <NavLink to="/reviews">
            <button className="bg-white border w-full mb-2">Reviews</button>
          </NavLink>
          <NavLink to="/recent-projects">
            <button className="bg-white border w-full mb-2">
              Recent Projects
            </button>
          </NavLink>
          <button className="p-2 bg-green-600 text-white border rounded-full">
            Get Quote
          </button>
        </div>
      </details>
      <div className="hidden lg:flex">
        <NavLink to="/">
          <button className="mr-4 border-0 bg-transparent">Home</button>
        </NavLink>
        <NavLink to="/about">
          <button className="mr-4 border-0 bg-transparent">About</button>
        </NavLink>
        <NavLink to="/contact">
          <button className=" mr-4 border-0 bg-transparent">Contact Us</button>
        </NavLink>
        <NavLink to="/reviews">
          <button className=" mr-4 border-0 bg-transparent">Reviews</button>
        </NavLink>
        <NavLink to="/recent-projects">
          <button className=" mr-4 border-0 bg-transparent">
            Recent Projects
          </button>
        </NavLink>
        <button className="p-2 bg-green-600  text-white border-0 rounded-full">
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
