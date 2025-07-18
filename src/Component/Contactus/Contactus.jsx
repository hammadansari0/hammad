import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Instagram,
  Send,
  Phone,
  Loader2,
} from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";
import { useState } from "react";

export default function ContactUs() {
  const { isDarkMode } = useDarkMode();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sectionBg = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black";
  const formBg = isDarkMode ? "bg-gray-800" : "bg-gray-100";
  const inputBg = isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300";
  const focusRing = isDarkMode ? "focus:ring-indigo-400" : "focus:ring-indigo-500";
  const socialText = isDarkMode ? "text-gray-300" : "text-gray-700";
  const lineColor = isDarkMode ? "bg-indigo-400" : "bg-indigo-500";

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    const formattedMsg = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/919122721472?text=${formattedMsg}`;

    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.open(whatsappURL, "_blank");
      setLoading(false);
    } else {
      const newTab = window.open(whatsappURL, "_blank");
      setTimeout(() => {
        if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
          const mailtoURL = `mailto:official.hammadansari@gmail.com?subject=Contact%20Form&body=${formattedMsg}`;
          window.location.href = mailtoURL;
        }
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <section
      id="contact"
      className={`relative bg-[url('/src/assets/contactus.svg')] bg-no-repeat bg-cover bg-center min-h-screen px-4 sm:px-8 md:px-16 py-20 ${sectionBg}`}
    >
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
          onSubmit={handleSubmit}
          className={`w-full lg:w-1/2 ${formBg} p-8 rounded-2xl shadow-md space-y-6`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              className={`w-full p-3 rounded-md border ${inputBg} focus:outline-none focus:ring-2 ${focusRing}`}
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              className={`w-full p-3 rounded-md border ${inputBg} focus:outline-none focus:ring-2 ${focusRing}`}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              className={`w-full p-3 rounded-md border ${inputBg} focus:outline-none focus:ring-2 ${focusRing}`}
              placeholder="Type your message..."
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm -mt-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition duration-300 shadow-sm font-medium ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
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
