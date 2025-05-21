import { motion } from "framer-motion";
// import { ArrowRight, Github } from "lucide-react";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Experience from "./Component/Experience/Experience";
import Education from "./Component/Education/Education";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Home />
      <About />
      <Experience />
      <Education />
      {/* <div className="p-6"> */}
      {/* <motion.div
        className="bg-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      > */}
        
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome 👋</h1>
        <p className="text-gray-600 mb-6">This card uses Tailwind, Lucide Icons, and Framer Motion.</p>

        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://github.com" target="_blank" className="text-gray-700 hover:text-black transition">
            <Github size={28} />
          </a>
          <ArrowRight size={28} className="text-purple-600" />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-md"
        >
          Get Started
        </motion.button> */}
      {/* </motion.div> */}
    {/* </div> */}
    </div>
    
  );
}

export default App;
