import Prices from "../../Prices/Prices";
import Service from "../../Service/Service";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import PricesCard from "../PricesCard/PricesCard";
import ServicesCards from "../ServicesCards/ServicesCards";
import TeamSkill from "../TeamSkill/TeamSkill";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Service></Service>
      <ServicesCards></ServicesCards>
      <Prices></Prices>
      <PricesCard></PricesCard>
      <TeamSkill></TeamSkill>
      <h2 className="text-6xl">Footer</h2>
    </div>
  );
};

export default Home;
