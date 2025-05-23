import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";
import profilePic from "../../assets/hammad.png";

const socialIcons = [
  { icon: Github, href: "https://github.com/hammadansari0/", color: "text-gray-500" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hammad-ansari001/", color: "text-indigo-500" },
  { icon: Mail, href: "mailto:official.hammadansari@gmail.com", color: "text-red-500" },
  { icon: Phone, href: "tel:+919122721472", color: "text-green-500" },
];

export default function Home() {
  const { isDarkMode } = useDarkMode();
  const bgColor = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800";
  const textMuted = isDarkMode ? "text-gray-300" : "text-gray-600";
  const iconbg = isDarkMode ? "bg-gray-800" : "bg-white";
  const buttonBg = isDarkMode ? "bg-purple-700 hover:bg-purple-800" : "bg-purple-600 hover:bg-purple-700";

  // ✨ Typewriter effect state
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello, I'm ";

  useEffect(() => {
    let i = 0;
    let direction = 1;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));

      i += direction;

      if (i > fullText.length) {
        direction = -1;
        i = fullText.length;
      } else if (i < 0) {
        direction = 1;
        i = 0;
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`relative bg-[url('/src/assets/background.svg')] bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center px-6 py-12 ${bgColor}`}
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* ✨ Animated typewriter heading */}
          <motion.h2
            className="text-2xl font-semibold mb-2 text-center md:text-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {typedText}
            <span className="border-r-2 border-white ml-1 animate-pulse"></span>
          </motion.h2>

          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
            Hammad Ansari
          </h1>
          <p className={`font-poppins mb-6 ${textMuted}`}>
            A passionate Web Developer specializing in creating beautiful and functional websites in MERN Stack.
          </p>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className={`px-6 py-2 rounded-full text-white shadow-lg font-medium mb-6 transition ${buttonBg}`}
          >
            Get In Touch
          </button>

          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, href, color }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center ${iconbg} rounded-full shadow-md transition-transform hover:scale-110 ${color}`}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-80 h-80 rounded-full border-6 border-purple-500 shadow-xl overflow-hidden">
            <img
              src={profilePic}
              alt="Hammad Ansari"
              className="w-76 h-80 rounded-full border-purple-500 shadow-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
