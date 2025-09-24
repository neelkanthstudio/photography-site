import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center relative bg-center bg-cover transition-colors duration-300 w-full h-dvh"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          src="Images/video-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="text-center z-2 text-white px-2.5">
        <h3 className="text-2xl my-2 mt-10 sm:text-3xl">Welcome to</h3>
        <div className="my-2 sm:mt-5 flex flex-col sm:flex-row items-center justify-center w-fit m-auto px-3 py-1 rounded-md font-bold text-4xl sm:text-5xl">
          <div className="bg-amber-50 rounded-tl-xl rounded-tr-xl sm:rounded-bl-xl sm:rounded-tr-none px-3 py-2">
            <span className="text-[#ec0405]">N</span>
            <span className="text-[#001c6d]">EELKANTH</span>
          </div>
          <span className="text-black bg-amber-50 rounded-bl-xl rounded-br-xl sm:rounded-bl-none sm:rounded-tr-xl px-3 py-2 w-full">
            Studio
          </span>
        </div>
        <h1 className="mt-10 text-4xl leading-12 sm:text-5xl sm:mt-20">
          Photography & Videography
        </h1>
        <h2 className="mt-5 sm:text-xl sm:mt-6">
          Capturing Your Special Moments
        </h2>
        <div className="mt-10 flex items-center justify-center gap-5 flex-wrap py-2">
          <button className="w-50 px-7 py-2.5 rounded-3xl text-xl bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] dark:text-black duration-200 text-black cursor-pointer">
            <Link to="/Pages/Contact">Contact us</Link>
          </button>
          <button className="border w-50 px-7 py-2.5 text-xl rounded-3xl cursor-pointer hover:scale-105 duration-200">
            <a href="#portfolio">View Portfolio</a>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Home;
