import "./Navbar.css";
import logo from "./voltvitrinLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b-2  ">
      <div className="max-w-screen-xl flex  items-center  mx-auto p-4">
        <ul className="flex  p-0   font-medium space-x-52  flex-row mt-0 border-0 text-3xl items-center ">
          <li>
            <img src={logo} className="h-12 " alt="VoltVitrin" />
          </li>
          <li>
            <Link to={"/"} className="block py-2 px-3 rounded lg:p-0">
              Home
            </Link>
          </li>
          <li className="">
            <Link to={"/cars"} className="block py-2 px-3 lg:p-0">
              Cars
            </Link>
          </li>
          <li>
            <Link to={"/compare"} className="block py-2 px-3 lg:p-0">
              Compare
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
