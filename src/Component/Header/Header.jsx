import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

function IconButton({ icon: Icon, href, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full text-gray-600 hover:text-purple-600 transition-transform hover:scale-110 ${className}`}
    >
      <Icon size={20} />
    </a>
  );
}

const navLinks = ["Home", "About", "Experience", "Education", "Projects", "Contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50"
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
          Hammad.
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-purple-600 font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Icons + Menu button */}
        <nav className="flex items-center space-x-4 md:space-x-2">
          <div className="hidden md:flex space-x-2">
            <IconButton icon={Github} href="https://github.com" />
            <IconButton icon={Linkedin} href="https://linkedin.com" />
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-black"
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
            className="md:hidden bg-white px-6 pb-4 pt-2 space-y-3 shadow-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex space-x-3 pt-2">
              <IconButton icon={Github} href="https://github.com" />
              <IconButton icon={Linkedin} href="https://linkedin.com" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

