import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ theme, setTheme, setIsAnimating }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 h-20 z-10 w-full shadow-sm bg-[#f0f8ffde] dark:bg-[#0c121681] dark:shadow-[#282828]">
      <nav className="w-full h-full flex items-center justify-between px-5 sm:px-6 md:px-14">
        <div className="h-12 w-12 rounded-full bg-[url('/Images/Logo.webp')] bg-center bg-cover shadow-sm border"></div>

        <ul
          className={`bg-transparent max-lg:bg-[#f0f8ff] dark:bg-transparent max-lg:dark:bg-[#0c1216] lg:flex lg:items-center max-lg:absolute max-lg:top-22 max-lg:right-20 max-sm:right-12 max-lg:px-6 max-lg:py-1.5 max-lg:rounded-lg max-lg:shadow-lg ${
            menuOpen ? "max-lg:block" : "max-lg:hidden"
          }`}
        >
          <li className="lg:mx-5 my-3 list-none">
            <Link
              to="/"
              className="no-underline text-[#000] dark:text-white text-lg "
            >
              Home
            </Link>
          </li>
          <li className="lg:mx-5 my-3 list-none">
            <Link
              to="/Pages/PInfo"
              className="no-underline text-[#000] dark:text-white text-lg "
            >
              Payment Info
            </Link>
          </li>
          <li className="lg:mx-5 my-3 list-none">
            <Link
              to="/Pages/Contact"
              className="no-underline text-[#000] dark:text-white text-lg"
            >
              Contact us
            </Link>
          </li>
        </ul>

        <div className="h-full w-25 flex items-center justify-center gap-2 sm:gap-5">
          <button
            type="button"
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsAnimating(false);
              }, 1000);
            }}
            className="p-2 cursor-pointer border-0 bg-[#FFC785] dark:bg-[#F2EAD3] shadow-md flex items-center justify-center rounded-full duration-200 hover:scale-110 active:scale-90 "
          >
            {theme === "dark" ? (
              <i className="fa-solid fa-sun text-xl text-[#2f2f2f]"></i>
            ) : (
              <i className="fa-solid fa-moon text-xl text-[#2f2f2f]"></i>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`h-10 w-10 border-0 cursor-pointer relative bg-transparent max-lg:block ${
              menuOpen ? "active" : "lg:hidden"
            }`}
            onClick={toggleMenu}
          >
            <span
              className={`h-[2.5px] absolute w-8 inset-0 m-auto transition duration-200 ease-in-out bg-[#FFC785] dark:bg-[#F2EAD3] rounded-xl transform -translate-y-2 ${
                menuOpen ? "-translate-y-[0] -rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-[2.5px] absolute w-8 inset-0 m-auto transition duration-200 ease-in-out bg-[#FFC785] dark:bg-[#F2EAD3] rounded-xl ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-[2.5px] absolute w-8 inset-0 m-auto transition duration-200 ease-in-out bg-[#FFC785] dark:bg-[#F2EAD3] rounded-xl transform translate-y-2 ${
                menuOpen ? "translate-y-[0] rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
