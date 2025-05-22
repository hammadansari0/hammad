import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Instagram,
  Send,
  Phone,
} from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

export default function ContactUs() {
  const { isDarkMode } = useDarkMode();

  const sectionBg = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black";
  const formBg = isDarkMode ? "bg-gray-800" : "bg-gray-100";
  const inputBg = isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300";
  const focusRing = isDarkMode ? "focus:ring-indigo-400" : "focus:ring-indigo-500";
  const socialText = isDarkMode ? "text-gray-300" : "text-gray-700";
  const lineColor = isDarkMode ? "bg-indigo-400" : "bg-indigo-500";

  return (
    <section id="contact" className={`relative bg-[url('/src/assets/contactus.svg')] bg-no-repeat bg-cover bg-center min-h-screen px-4 sm:px-8 md:px-16 py-20 ${sectionBg}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Contact Me
        <span className={`block w-20 h-1 mx-auto mt-2 rounded ${lineColor}`} />
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Form */}
        <motion.form
          className={`w-full lg:w-1/2 ${formBg} p-8 rounded-2xl shadow-md space-y-6`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className={`w-full p-3 rounded-md border ${inputBg} focus:outline-none focus:ring-2 ${focusRing}`}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className={`w-full p-3 rounded-md border ${inputBg} focus:outline-none focus:ring-2 ${focusRing}`}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className={`w-full p-3 rounded-md border ${inputBg} focus:outline-none focus:ring-2 ${focusRing}`}
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-sm"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className={`w-full lg:w-1/2 text-center p-8 rounded-2xl shadow-md ${formBg} space-y-8`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className={`text-lg max-w-md mx-auto ${socialText}`}>
            You can also reach me on my social platforms:
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/hammad-ansari001/" target="_blank" rel="noreferrer">
              <Linkedin className="text-indigo-500 hover:scale-110 transition-transform duration-300" size={28} />
            </a>
            <a href="https://github.com/hammadansari0/" target="_blank" rel="noreferrer">
              <Github className="text-gray-500 hover:scale-110 transition-transform duration-300" size={28} />
            </a>
            <a href="https://www.instagram.com/hammad__ansari__/" target="_blank" rel="noreferrer">
              <Instagram className="text-pink-500 hover:scale-110 transition-transform duration-300" size={28} />
            </a>
            <a href="https://wa.me/919122721472" target="_blank" rel="noreferrer">
              <Phone className="text-green-500 hover:scale-110 transition-transform duration-300" size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
