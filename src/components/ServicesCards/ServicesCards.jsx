import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div data-aos="zoom-in" className="text-center bg-[#C5C0EB] p-20">
      <h2 className="text-5xl font-semibold pt-6">
        Our Services: {cards.length}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <ServiceCard key={card.id} card={card}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
