import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

function IconButton({ icon: Icon, href, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full hover:text-purple-600 hover:scale-110 transition-transform ${
        className
      }`}
    >
      <Icon size={20} />
    </a>
  );
}

const navLinks = ["Home", "About", "Experience", "Education", "Projects", "Contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const bgColor = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800";
  const hoverText = isDarkMode ? "hover:text-purple-400" : "hover:text-purple-600";

  return (
    <div className={`${bgColor} shadow-sm sticky top-0 z-50 transition-colors`}>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.h1
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hammad 
          </motion.h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-medium transition ${hoverText}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Icons + Toggle + Menu */}
          <nav className="flex items-center space-x-3 md:space-x-2">
            <div className="hidden md:flex space-x-2">
              <IconButton icon={Github} href="https://github.com" className={hoverText} />
              <IconButton icon={Linkedin} href="https://linkedin.com" className={hoverText} />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition hover:scale-110 ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className={`md:hidden p-2 rounded-lg ${hoverText} ${
                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`md:hidden px-6 pb-4 pt-2 space-y-3 shadow-sm ${bgColor}`}
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`block font-medium transition ${hoverText}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="flex space-x-3 pt-2">
                <IconButton icon={Github} href="https://github.com" className={hoverText} />
                <IconButton icon={Linkedin} href="https://linkedin.com" className={hoverText} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
