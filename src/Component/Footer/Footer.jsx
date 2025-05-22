import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <footer
      className={`py-12 px-6 md:px-16 border-t ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 text-gray-200"
          : "bg-white border-gray-200 text-black"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Hammad.
          </h1>
          <p
            className={`mt-2 max-w-xs ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Passionate developer crafting sleek and elegant web experiences with modern tech.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-lg font-semibold">Links</h2>
          <ul
            className={`space-y-1 text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {["Home", "About", "Experience", "Education", "Projects", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer hover:text-indigo-500 transition`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-lg font-semibold mb-2">Connect</h2>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                } transition`}
                size={22}
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-indigo-400"
                    : "text-gray-600 hover:text-indigo-600"
                } transition`}
                size={22}
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom note */}
      <div
        className={`mt-10 text-center text-sm ${
          isDarkMode ? "text-gray-500" : "text-gray-500"
        }`}
      >
        &copy; {new Date().getFullYear()} Hammad. All rights reserved.
      </div>
    </footer>
  );
}
