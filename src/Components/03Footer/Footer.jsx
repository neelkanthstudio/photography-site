import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="h-100 w-full bg-[#030111] dark:bg-[#0b0f15] transition-colors duration-300">
      <div className="flex flex-col items-center justify-center py-20 gap-5">
        <div className="flex items-center gap-6 sm:gap-8 text-white">
          <a
            href="https://www.instagram.com/neelkanth_cinematic/"
            className="decoration-none"
          >
            <i className="fa-brands fa-instagram text-3xl sm:text-4xl text-[#FFC785] dark:text-[#F2EAD3] cursor-pointer hover:-translate-y-2 duration-200"></i>
          </a>
          <a href="https://www.youtube.com/@KooMuuu">
            <i className="fa-brands fa-youtube text-3xl sm:text-4xl text-[#FFC785] dark:text-[#F2EAD3] cursor-pointer hover:-translate-y-2 duration-200"></i>
          </a>
          <a href="https://www.facebook.com/prajapati.Maulik.360">
            <i className="fa-brands fa-facebook text-3xl sm:text-4xl text-[#FFC785] dark:text-[#F2EAD3] cursor-pointer hover:-translate-y-2 duration-200"></i>
          </a>
        </div>
        <p className="mt-5 px-1.5 text-center text-sm sm:text-base text-white leading-6">
          © 2025
          <span className="text-[#ec0405] bg-amber-50 pl-1 ml-1 rounded-tl-md rounded-bl-md font-bold">
            N
          </span>
          <span className="text-[#001c6d] bg-amber-50 pr-1 mr-1 rounded-br-md rounded-tr-md font-bold">
            EELKANTH
          </span>
          Studio. All rights reserved.
        </p>
      </div>
      <hr className="w-[90%] border-0 h-px m-auto bg-gray-300" />

      <div className="flex items-center justify-between sm:px-10 py-5 w-[90%] m-auto text-white">
        <Link to="/Pages/Privacy" className="text-sm sm:text-base">
          Privacy Policy
        </Link>
        <Link to={"/Pages/Terms"} className="text-sm sm:text-base">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
}
export default Footer;
