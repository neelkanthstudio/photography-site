function Service() {
  return (
    <section
      id="service"
      className="dark:bg-[#0c1216] w-full sm:py-14 sm:px-6 md:px-14 py-10 transition-colors duration-300"
    >
      <h2 className="dark:text-white text-center font-semibold pt-10 pb-5 mb-3 sm:pb-10 sm:mb-5 text-3xl sm:text-4xl">
        Our Services
      </h2>

      <div className="w-full p-3 flex flex-col md:flex-row gap-5">
        <div className="w-full border rounded-lg p-3 bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] duration-200 cursor-pointer shadow-lg dark:shadow-[#363636]">
          <h2 className="dark:text-black text-center font-semibold pt-10 pb-5 mb-3 sm:pb-10 sm:mb-5 text-3xl sm:text-4xl">
            Services List
          </h2>

          <div className=" p-2 sm:p-5 text-lg flex flex-col gap-3">
            <p>1. Wedding Photoshoot</p>
            <p>2. Wedding Videoshoot</p>
            <p>3. Pre-Wedding Shoot</p>
            <p>4. Drone Shoot</p>
            <p>5. Album Making</p>
            <p>6. Reel Making</p>
            <p>7. Video Editing</p>
          </div>

          <div className="px-5 sm:px-0">
            <p className="text-center dark:text-black py-3 my-5">
              And many more... Contact us for details or check Payment Info.
            </p>
          </div>
        </div>
        <div className="w-full border rounded-lg p-3 dark:border-amber-50 shadow-lg dark:shadow-[#363636] ">
          <h2 className="dark:text-white text-center font-semibold pt-10 pb-5 mb-3 sm:pb-10 sm:mb-5 text-3xl sm:text-4xl">
            Check Demo
          </h2>

          <div className="px-2 sm:px-0">
            <p className="text-center dark:text-white">
              You can check our demo collections of photos and videos by
              clicking the buttons below.
            </p>
          </div>

          <div className="text-center mt-10 mb-20 flex flex-col justify-center items-center sm:gap-5">
            <button className="w-60 text-black dark:text-black text-xl px-7 py-3 rounded-3xl bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] cursor-pointer shadow-lg duration-200 active:scale-95">
              <a href="https://drive.google.com/drive/folders/1_G-rctTWSCqUcDHlWbGFm-oNfc0r-Adl?usp=sharing">
                View Video Collection
              </a>
            </button>

            <button className="w-60 text-black dark:text-black text-xl mt-5 px-7 py-3 rounded-3xl bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] cursor-pointer shadow-lg duration-200 active:scale-95">
              <a href="https://drive.google.com/drive/folders/1f1hwRNBK6vja7TTRNxQapfCepwp_JVE0?usp=sharing">
                View Photo Collection
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 mb-10">
        <div className="w-70 h-36 bg-[#FFC785] dark:bg-[#F2EAD3] rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Wedding Photoshoot</p>
        </div>
        <div className="w-70 h-36 bg-[#FFC785] dark:bg-[#F2EAD3] rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Wedding Videoshoot</p>
        </div>
        <div className="w-70 h-36 bg-[#FFC785] dark:bg-[#F2EAD3] rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Pre-Wedding Shoot</p>
        </div>
        <div className="w-70 h-36 bg-[#FFC785] dark:bg-[#F2EAD3] rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Drone Shoot</p>
        </div>
        <div className="w-70 h-36 bg-[#FFC785] dark:bg-[#F2EAD3] rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Album Making</p>
        </div>
        <div className="w-70 h-36 bg-[#FFC785] dark:bg-[#F2EAD3] rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Reel Making</p>
        </div>
        <div className="w-70 h-36 bg-[#FFC785] dark:bg-[#F2EAD3] rounded-2xl cursor-pointer flex items-center justify-center shadow-lg dark:shadow-[#363636]">
          <p className="font-bold text-xl">Video Editing</p>
        </div>
      </div> */}
    </section>
  );
}
export default Service;
