import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Cars from "./Components/Cars/Cars";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Compare from "./Components/Compare/Compare";
import CarDetail from "./Components/CarDetail/CarDetail";

function App() {
  const [Carlogo, setCarLogo] = useState([]);
  const [Database, setDatabase] = useState([]);

  const API_URL =
    import.meta.env.REACT_APP_API_URL || "http://localhost:3000/api";

  useEffect(() => {
    fetch(`${API_URL}?type=brands`)
      .then((response) => response.json())
      .then((data) => {
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

    fetch(`${API_URL}?type=all`)
      .then((response) => response.json())
      .then((data) => {
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
  }, [API_URL]);
  return (
    <>
      <Navbar Carlogo={Carlogo} Database={Database} />
      <Routes>
        <Route
          path="/"
          element={<Home Carlogo={Carlogo} Database={Database} />}
        />
        <Route path="/cars" element={<Cars Database={Database} />} />
        <Route path="/compare" element={<Compare Database={Database} />} />
        <Route
          path="/car/:modelName"
          element={<CarDetail Database={Database} />}
        />
      </Routes>
    </>
  );
}

export default App;
