/* eslint-disable react/prop-types */
const ServiceCard = ({ card }) => {
  const { img, name } = card;
  return (
    <div data-aos="zoom-out" data-aos-duration="3000">
      <img className="w-full md:w-72" src={img} alt="" />
      <h3 className="text-3xl font-semibold">{name}</h3>
      <button className="bg-green-600 text-white border-0 p-2 rounded-lg mb-20 hover:bg-green-800 cursor-pointer">
        Buy Now
      </button>
    </div>
  );
};

export default ServiceCard;
