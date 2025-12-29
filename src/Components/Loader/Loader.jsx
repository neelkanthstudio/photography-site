const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="relative w-16 h-16 animate-spin">
        <div className="absolute w-3 h-3 bg-red-500 rounded-full top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-3 h-3 bg-green-500 rounded-full left-0 top-1/2 -translate-y-1/2"></div>
        <div className="absolute w-3 h-3 bg-yellow-500 rounded-full right-0 top-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Loader;
