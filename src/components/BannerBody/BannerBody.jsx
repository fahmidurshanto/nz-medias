import Carousel from "../../Carousel/Carousel";

/* eslint-disable react/no-unescaped-entities */
const BannerBody = () => {
  return (
    <div className="md:flex justify-between items-center container mx-auto border-2 border-black   gap-8 ">
      <div className="w-full">
        <p className="exo tracking-widest md:pl-28 container mx-auto">
          NZ Media is a dynamic digital marketing agency specializing in helping
          businesses reach their target audience effectively. With a diverse
          range of services including Facebook ads, Google ads, video editing,
          and graphic design, we craft compelling campaigns tailored to your
          unique needs. Our team of experts is dedicated to driving results and
          maximizing your online presence. Whether you're looking to boost brand
          awareness, increase website traffic, or generate leads, NZ Media has
          the tools and expertise to elevate your digital marketing strategy to
          the next level.
        </p>
      </div>

      <div className="text-center p-10">
        <Carousel></Carousel>
        <button className="bg-green-600 font-bold text-white  text-center p-3 border-0 cursor-pointer rounded-full mt-10 md:absolute  md:bottom-0 md:left-1/2">
          Request a free quote
        </button>
      </div>
    </div>
  );
};

export default BannerBody;
