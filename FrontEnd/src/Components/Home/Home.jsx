import CarCanvas from "./CarCanvas/CarCanvas";
import Brands from "./Brands/Brands";
import CarTabs from "./CarTabs/CarTabs";

const Home = ({ Carlogo, Database }) => {
  return (
    <>
      <CarCanvas />
      <Brands Carlogo={Carlogo} Database={Database} />
      <CarTabs Carlogo={Carlogo} Database={Database} />
    </>
  );
};

export default Home;
