import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";
// import Image from "next/image";
import profilePic from "../../assets/hammad.png"; // replace with your image path

const socialIcons = [
  { icon: Github, href: "https://github.com", color: "text-gray-500" },
  { icon: Linkedin, href: "https://linkedin.com", color: "text-indigo-500" },
  { icon: Mail, href: "mailto:email@example.com", color: "text-red-500" },
  { icon: Phone, href: "tel:+1234567890", color: "text-green-500" },
];

export default function Home() {
  const { isDarkMode } = useDarkMode();

  const bgColor = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800";
  const textMuted = isDarkMode ? "text-gray-300" : "text-gray-600";
  const iconbg = isDarkMode ? "bg-gray-800" : "bg-white";
  const buttonBg = isDarkMode ? "bg-purple-700 hover:bg-purple-800" : "bg-purple-600 hover:bg-purple-700";

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
          <h2 className="text-2xl font-semibold mb-2">Hello, I'm</h2>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
            Hammad Ansari
          </h1>
          <p className={`font-poppins mb-6 ${textMuted}`}>
            A passionate Web Developer specializing in creating beautiful and functional websites.
          </p>

          <button className={`px-6 py-2 rounded-full text-white shadow-lg font-medium mb-6 transition ${buttonBg}`}>
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
