import { useEffect, useState } from "react";
import CarCanvas from "./CarCanvas/CarCanvas";
import Brands from "./Brands/Brands";
import CarTabs from "./CarTabs/CarTabs";

const Home = ({ Carlogo, Database }) => {
  return (
    <>
      <CarCanvas />
      <Brands Carlogo={Carlogo} />
      <CarTabs Database={Database} />
    </>
  );
};

export default Home;
