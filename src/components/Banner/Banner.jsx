import BannerBody from "../BannerBody/BannerBody";

// Designed by using AOS  library, the website is divided into three sections:
const Banner = () => {
  return (
    <div data-aos="zoom-in" className="bg-[rgb(225,224,245)]">
      <h3 className="p-10 text-7xl text-center bg-[#C4C1EB]">
        Welcome to{" "}
        <span
          data-aos="zoom-in-down"
          data-aos-duration="5000"
          className="text-red-500"
        >
          N
        </span>
        <span
          className="text-red-500"
          data-aos="zoom-in-down"
          data-aos-duration="5000"
        >
          Z
        </span>
        <span
          className="text-red-500"
          data-aos="zoom-in-down"
          data-aos-duration="5000"
        >
          {" "}
          M
        </span>
        <span
          className="text-red-500"
          data-aos="zoom-in-down"
          data-aos-duration="5000"
        >
          E
        </span>
        <span
          className="text-red-500"
          data-aos="zoom-in-down"
          data-aos-duration="5000"
        >
          D
        </span>
        <span
          className="text-red-500"
          data-aos="zoom-in-down"
          data-aos-duration="5000"
        >
          I
        </span>
        <span
          className="text-red-500"
          data-aos="zoom-in-down"
          data-aos-duration="5000"
        >
          A
        </span>
      </h3>
      <BannerBody />
    </div>
  );
};

export default Banner;
