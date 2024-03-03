import Service from "../../Service/Service";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Service></Service>
      <h2 className="text-6xl">Footer</h2>
    </div>
  );
};

export default Home;
