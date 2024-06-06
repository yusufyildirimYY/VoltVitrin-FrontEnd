import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import FlashOnIcon from "@mui/icons-material/FlashOn";
function Navbar() {
  const location = useLocation();
  const isCarRoute = location.pathname === "/cars";
  const isCompareRoute = location.pathname === "/compare";

  const navLinkColor =
    isCarRoute || isCompareRoute ? "text-black" : "text-white";

  const LinkBg =
    isCarRoute || isCompareRoute ? "hover:bg-gray-200" : "hover:bg-gray-800";

  const Shadow = isCarRoute || isCompareRoute ? "" : "Shadow";

  const svgShadow = isCarRoute || isCompareRoute ? "" : "SvgShadow";
  return (
    <nav className="w-full">
      <div className="w-full flex items-center justify-center">
        <ul
          className={`flex relative p-0 font-medium space-x-10  flex-row border-0  mt-2 w-full items-center text-center justify-center ${navLinkColor}`}
        >
          <li
            className={`flex logo absolute left-5 text-center items-center ${Shadow} cursor-default`}
          >
            <FlashOnIcon className={`scale-125 ${svgShadow}`} />
            <p className="text-3xl ">VoltVitrin</p>
          </li>
          <li
            className={`link  rounded-md transition duration-700 ease-in-out   shadow-black ${Shadow}  ${LinkBg}`}
          >
            <Link to={"/"} className="block py-2 px-3 rounded lg:p-0">
              Home
            </Link>
          </li>
          <li
            className={`link rounded-md transition duration-700 ease-in-out ${Shadow} ${LinkBg}`}
          >
            <Link to={"/cars"} className="block py-2 px-3 lg:p-0">
              Cars
            </Link>
          </li>
          <li
            className={`link rounded-md transition duration-700 ease-in-out ${Shadow} ${LinkBg}`}
          >
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
