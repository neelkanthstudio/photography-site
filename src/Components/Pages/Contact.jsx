import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Navbar from "../01Navbar/Navbar";
import ContactForm from "../04Contact/ContactForm";
import Footer from "../03Footer/Footer";
import ThemeTransition from "../Theme/ThemeTransition";

function getInitialTheme() {
  if (typeof localStorage !== "undefined" && localStorage.theme) {
    return localStorage.theme;
  }
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = Math.random() * 2000 + 2000;

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative overflow-hidden min-h-screen">
          <ThemeTransition isAnimating={isAnimating} theme={theme} />
          <Navbar
            theme={theme}
            setTheme={setTheme}
            setIsAnimating={setIsAnimating}
          />
          <ContactForm />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Contact;
