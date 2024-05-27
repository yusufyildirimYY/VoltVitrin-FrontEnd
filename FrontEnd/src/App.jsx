import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Cars from "./Components/Cars/Cars";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
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
      <Navbar Carlogo={Carlogo} Database={Database} />
      <Routes>
        <Route
          path="/"
          element={<Home Carlogo={Carlogo} Database={Database} />}
        />
        <Route path="/cars" element={<Cars Database={Database} />} />
      </Routes>
    </>
  );
}

export default App;
