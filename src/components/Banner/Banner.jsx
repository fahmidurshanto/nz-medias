import { TypeAnimation } from "react-type-animation";
import BannerBody from "../BannerBody/BannerBody";

// Designed by using AOS  library, the website is divided into three sections:
const Banner = () => {
  return (
    <div data-aos="zoom-in" className="bg-[rgb(225,224,245)] container mx-auto">
      {/* className="p-10 text-7xl text-center bg-[#C4C1EB] */}
      <h3 className="p-10 text-6xl text-center bg-[#C4C1EB]">
        WELCOME TO <br />
        <TypeAnimation
          className="text-red-400 font-semibold"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            ` NZ MEDIA`,
            5000, // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h3>
      <BannerBody />
    </div>
  );
};

export default Banner;
