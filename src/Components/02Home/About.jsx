function About() {
  return (
    <section
      id="about"
      className="dark:bg-[#0c1216] w-full md:px-14 py-16 sm:py-14 transition-colors duration-300"
    >
      <h2 className="dark:text-white text-center font-semibold pt-10 mb-3 sm:pb-10 sm:mb-5 text-3xl sm:text-4xl">
        About us
      </h2>
      <div className="w-full p-3">
        <div className="w-full flex flex-col gap-8 lg:flex-row items-center justify-around">
          <div className="w-full lg:w-xl flex items-center justify-center p-2 my-5">
            <img
              src="/Images/Logo.webp"
              className="rounded-full bg-center bg-cover w-80 sm:w-80 md:w-100 shadow-md dark:shadow-[#858585]"
            />
          </div>

          <div className="w-full lg:w-xl sm:p-5">
            <p className="dark:text-white">
              <span className="text-[#ec0405] dark:bg-amber-50 pl-1 rounded-tl-md rounded-bl-md font-bold">
                N
              </span>
              <span className="text-[#001c6d] dark:bg-amber-50 pr-1 rounded-br-md rounded-tr-md font-bold">
                EELKANTH
              </span>
              CINEMETIC is where tradition meets creativity. Our photography
              blends cinematic vision with real emotions, giving you pictures
              that speak louder than words.
            </p>
            <hr className="border-0 h-px m-auto mt-5 bg-black dark:bg-white" />
            <div className="flex flex-col items-start">
              <h3 className="dark:text-white text-center font-semibold mt-5 text-lg">
                Name of Owners:
              </h3>
              <p className="dark:text-white text-center my-3 text-lg">
                1. Maulik Prajapati
              </p>
              <p className="dark:text-white text-center text-lg">
                2. Komit Prajapati
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
