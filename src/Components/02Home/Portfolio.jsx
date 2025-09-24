import { useState, useEffect } from "react";

function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedVideo]);

  const portfolioItems = [
    { type: "image", src: "./Images/portfolio-1.webp" },
    { type: "image", src: "./Images/portfolio-2.webp" },
    { type: "image", src: "./Images/portfolio-3.webp" },
    { type: "video", src: "./Images/video-1.mp4" },
    { type: "image", src: "./Images/portfolio-4.webp" },
    { type: "image", src: "./Images/portfolio-5.webp" },
    { type: "image", src: "./Images/portfolio-6.webp" },
    { type: "video", src: "./Images/video-2.mp4" },
    { type: "image", src: "./Images/portfolio-7.webp" },
    { type: "image", src: "./Images/portfolio-8.webp" },
    { type: "video", src: "./Images/video-3.mp4" },
  ];

  return (
    <section
      id="portfolio"
      className="dark:bg-[#0c1216] w-full px-3 pb-5 sm:py-14 sm:px-6 md:px-14 transition-colors duration-300"
    >
      <h2 className="dark:text-white text-center font-semibold pt-10 sm:mb-5 text-3xl sm:text-4xl">
        Our Portfolio
      </h2>
      <p className="text-center dark:text-white sm:mb-20">
        Check out some of our best works below. For more, contact us directly.
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 mt-12">
        {portfolioItems.map((item, i) =>
          item.type === "image" ? (
            <img
              key={i}
              src={item.src}
              alt={`Portfolio ${i}`}
              className="w-full mb-5 rounded-lg object-cover shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 break-inside-avoid border border-black dark:border-amber-50"
            />
          ) : (
            <div
              key={i}
              className="relative mb-5 cursor-pointer break-inside-avoid group"
              onClick={() => setSelectedVideo(item.src)}
            >
              <video
                src={item.src}
                muted
                className="w-full rounded-lg object-cover shadow-md border border-black dark:border-amber-50"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 p-4 rounded-full opacity-80 group-hover:opacity-100 transition">
                  <i className="fas fa-play text-white text-2xl"></i>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-80">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 sm:-right-50 text-white hover:text-gray-300 text-3xl cursor-pointer"
            >
              <i className="fas fa-times"></i>
            </button>

            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <div className="text-center mt-10 mb-20 flex flex-col sm:flex-row justify-center items-center sm:gap-5">
        <button className="w-60 text-black dark:text-black text-2xl mt-16 px-7 py-3 rounded-3xl bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] cursor-pointer shadow-lg duration-200 active:scale-95">
          <a href="https://drive.google.com/drive/folders/1_G-rctTWSCqUcDHlWbGFm-oNfc0r-Adl?usp=sharing">
            View Video Collection
          </a>
        </button>

        <button className="w-60 text-black dark:text-black text-2xl mt-5 sm:mt-16 px-7 py-3 rounded-3xl bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] cursor-pointer shadow-lg duration-200 active:scale-95">
          <a href="https://drive.google.com/drive/folders/1f1hwRNBK6vja7TTRNxQapfCepwp_JVE0?usp=sharing">
            View Photo Collection
          </a>
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
