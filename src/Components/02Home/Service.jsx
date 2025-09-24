function Service() {
  return (
    <section
      id="service"
      className="dark:bg-[#0c1216] w-full sm:py-14 sm:px-6 md:px-14 transition-colors duration-300"
    >
      <h2 className="dark:text-white text-center font-semibold pt-10 pb-5 mb-3 sm:pb-10 sm:mb-5 text-3xl sm:text-4xl">
        Our Services
      </h2>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 mb-10">
        <div className="w-70 h-36 bg-[url('./Images/service-bg.webp')] bg-cover bg-center rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Wedding Photoshoot</p>
        </div>
        <div className="w-70 h-36 bg-[url('./Images/service-bg.webp')] bg-cover bg-center rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Wedding Videoshoot</p>
        </div>
        <div className="w-70 h-36 bg-[url('./Images/service-bg.webp')] bg-cover bg-center rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Pre-Wedding Shoot</p>
        </div>
        <div className="w-70 h-36 bg-[url('./Images/service-bg.webp')] bg-cover bg-center rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Drone Shoot</p>
        </div>
        <div className="w-70 h-36 bg-[url('./Images/service-bg.webp')] bg-cover bg-center rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Album Making</p>
        </div>
        <div className="w-70 h-36 bg-[url('./Images/service-bg.webp')] bg-cover bg-center rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Reel Making</p>
        </div>
        <div className="w-70 h-36 bg-[url('./Images/service-bg.webp')] bg-cover bg-center rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Video Editing</p>
        </div>
      </div>

      <div className="px-5 sm:px-0">
        <p className="text-center dark:text-white pb-20 sm:mb-10">
          And many more... Contact us for details or check Payment Info.
        </p>
      </div>
    </section>
  );
}
export default Service;
