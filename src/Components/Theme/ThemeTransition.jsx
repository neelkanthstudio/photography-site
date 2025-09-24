import { motion } from "framer-motion";

function ThemeTransition({ isAnimating, theme }) {
  if (!isAnimating) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 100, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`fixed inset-0 flex items-center justify-center z-[9999]`}
    >
      <div
        className={`w-10 h-10 rounded-full ${
          theme === "dark" ? "bg-[#f0f8ff]" : "bg-[#0c1216]"
        }`}
      />
    </motion.div>
  );
}

export default ThemeTransition;
