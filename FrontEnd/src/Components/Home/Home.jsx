import { useEffect, useState } from "react";
import CarCanvas from "./CarCanvas/CarCanvas";
import Navbar from "./Navbar/Navbar";
import Brands from "./Brands/Brands";
import CarTabs from "./CarTabs/CarTabs";

const Home = () => {
  const [Carlogo, setCarLogo] = useState([]);
  const [Database, setDatabase] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/?type=brands")
      .then((response) => response.json())
      .then((data) => {
        // Veriyi alfabetik olarak sıralayın
        const sortedData = data.sort((a, b) => {
          if (a.Brand < b.Brand) {
            return -1;
          }
          if (a.Brand > b.Brand) {
            return 1;
          }
          return 0;
        });
        setCarLogo(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/?type=all")
      .then((response) => response.json())
      .then((data) => {
        // Veriyi alfabetik olarak sıralayın
        const sortedData = data.sort((a, b) => {
          if (a.Brand < b.Brand) {
            return -1;
          }
          if (a.Brand > b.Brand) {
            return 1;
          }
          return 0;
        });
        setDatabase(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar Carlogo={Carlogo} />
      <CarCanvas />
      <Brands Carlogo={Carlogo} />
      <CarTabs Database={Database} />
    </>
  );
};

export default Home;
