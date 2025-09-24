function About() {
  return (
    <section
      id="about"
      className="dark:bg-[#0c1216] w-full md:px-14 sm:py-14 transition-colors duration-300"
    >
      <h2 className="dark:text-white text-center font-semibold pt-10 mb-3 sm:pb-10 sm:mb-5 text-3xl sm:text-4xl">
        About us
      </h2>
      <div className="p-2 flex flex-col gap-7">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 p-7">
          <div className="flex flex-col items-center hover:scale-115 duration-200 cursor-pointer">
            <img
              src="./Images/Maulik.webp"
              alt="Partner 1"
              className="w-full max-w-xs rounded-full shadow-md dark:shadow-[#858585] object-cover "
            />
            <p className="mt-3 text-lg dark:text-white">Maulik Prajapati</p>
          </div>

          <div className="flex flex-col items-center hover:scale-115 duration-200 cursor-pointer">
            <img
              src="./Images/Logo.webp"
              alt="Logo"
              className="w-full max-w-xs rounded-full shadow-md dark:shadow-[#858585] object-cover"
            />
          </div>

          <div className="flex flex-col items-center hover:scale-115 duration-200 cursor-pointer">
            <img
              src="./Images/Komit.webp"
              alt="Partner 2"
              className="w-full max-w-xs rounded-full shadow-md dark:shadow-[#858585] object-cover"
            />
            <p className="mt-3 text-lg dark:text-white">Komit Prajapati</p>
          </div>
        </div>

        <div className="p-5 flex items-center justify-center w-full">
          <p className="dark:text-white w-2xl text-center">
            <span className="text-[#ec0405] dark:bg-amber-50 pl-1 rounded-tl-md rounded-bl-md font-bold">
              N
            </span>
            <span className="text-[#001c6d] dark:bg-amber-50 pr-1 rounded-br-md rounded-tr-md font-bold">
              EELKANTH
            </span>
            CINEMETIC is where tradition meets creativity. Our photography
            blends cinematic vision with real emotions, giving you pictures that
            speak louder than words.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
