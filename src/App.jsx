import { motion } from "framer-motion";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Experience from "./Component/Experience/Experience";
import Education from "./Component/Education/Education";
import Projects from "./Component/Projects/Projects";
import ContactUs from "./Component/Contactus/Contactus";
import Footer from "./Component/Footer/Footer";
import { useDarkMode } from "./context/DarkModeContext";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function App() {
  const { isDarkMode } = useDarkMode();
  return (
    
    <div className={isDarkMode ? "dark bg-gray-900 text-white":"min-h-screen bg-gray-100 text-gray-900 scroll-smooth"}>
      <Header />
      
      <motion.section
        id="home"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Home />
      </motion.section>

      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.section>

      <motion.section
        id="experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Experience />
      </motion.section>

      <motion.section
        id="education"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Education />
      </motion.section>

      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Projects />
      </motion.section>
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactUs />
      </motion.section>
      <Footer />
    </div>

  );
}

export default App;
