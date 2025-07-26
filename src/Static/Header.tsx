import { useState } from "react";
import Gnologo from "../assets/GNOlogo.png"
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuHovering, setIsMobileMenuHovering] = useState(false);
  const [isDemoHovering, setIsDemoHovering] = useState(false);
  
  const navigate = useNavigate()
      
       const isLoggedIn:boolean = true 
       const handleLogin = () => {
        if (!isLoggedIn) {
          navigate("/signup")
        } else{
          navigate ("/")
        }
       }

  return (
    <header className="bg-white px-4 sm:px-20 py-6 flex justify-between items-center">
      <div>
        <img src={Gnologo} className="h-[40px]" alt="GNO Logo" />
      </div>

      {/* Mobile Menu Button */}
      <div
        className="h-[40px] w-[40px] lg:hidden bg-[#47c494] flex justify-center items-center cursor-pointer rounded-[5px] relative"
        onMouseEnter={() => setIsMobileMenuHovering(true)}
        onMouseLeave={() => setIsMobileMenuHovering(false)}
      >
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>

        {isMobileMenuHovering && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white cursor-pointer"
            >
              HOME
            </Link>

            <Link
              to="/Demo"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white  cursor-pointer"
            >
              DEMO
            </Link>

            <Link
              to="/Support"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white  cursor-pointer"
            >
              SUPPORT
            </Link>

            <Link
              to="/Themes"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white  cursor-pointer"
            >
              THEMES
            </Link>

            <Link
              to="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white  cursor-pointer"
            >
              ABOUT
            </Link>

            <Link
              to="/Dashbord"
              className="block px-4 py-2 text-sm text-white bg-[#24a3a4] rounded mx-2 my-1 text-center  cursor-pointer"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="lg:flex gap-6 justify-center items-center mr-8 hidden">
        <nav className="flex items-center">
          <ul className="flex gap-6 text-black text-[14px]">
            <li className="text-[#8e709c]">HOME</li>

            <li
              className="text-[rgb(94, 94, 94)] relative"
              onMouseEnter={() => setIsDemoHovering(true)}
              onMouseLeave={() => setIsDemoHovering(false)}
            >
              <span className="cursor-pointer">DEMO</span>
              {isDemoHovering && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white  cursor-pointer"
                  >
                    Demo Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white  cursor-pointer"
                  >
                    Demo Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#47c494] hover:text-white  cursor-pointer"
                  >
                    Demo Option 3
                  </a>
                </div>
              )}
            </li>

            <li className=" cursor-pointer">SUPPORT</li>
            <li className=" cursor-pointer">THEMES</li>
            <li className=" cursor-pointer">ABOUT</li>
          </ul>
        </nav>

        <button className="px-[28px] py-[10px] flex rounded-md justify-center items-center text-white bg-[#24a3a4] hover:bg-[#1d8a8b] transition-colors  cursor-pointer">
          Dashboard
        </button>
        <button
          onClick={handleLogin}
          className="px-[28px] py-[10px] flex rounded-md justify-center items-center text-white bg-[#24a3a4] hover:bg-[#1d8a8b] transition-colors  cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
