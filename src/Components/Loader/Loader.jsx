const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f0f8ff] dark:bg-[#0c1216] z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#001c6d] to-[#ec0405] animate-ping"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#001c6d] to-[#ec0405] animate-ping delay-150"></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-[#001c6d] to-[#ec0405]"></div>
      </div>
    </div>
  );
};

export default Loader;
