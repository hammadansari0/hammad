import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext";

const technicalSkills = [
  "React JS", "Node JS", "JavaScript", "Data Structures",
  "API Integration", "SQL", "MySQL", "GitHub", "MongoDB", "Web Development",
];

const softSkills = [
  "Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"
];

export default function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      id="about"
      className={`min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className={`w-16 sm:w-24 h-1 mx-auto ${isDarkMode ? "bg-purple-400" : "bg-purple-500"} mb-6`} />

        <motion.h3
          className="text-xl sm:text-2xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Web Developer & Quality Assurance Specialist
        </motion.h3>

        <motion.p
          className="text-base sm:text-lg mb-3 text-center sm:text-justify"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I am a passionate web developer with expertise in creating responsive and interactive web applications.
          Currently pursuing B.Tech in Computer Science Engineering, I combine my academic knowledge with practical
          experience to deliver high-quality solutions.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg mb-8 text-center sm:text-justify"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          With experience in both development and quality assurance, I have a comprehensive understanding of the software
          development lifecycle and a keen eye for detail.
        </motion.p>

        <motion.div
          className="text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="text-lg sm:text-xl font-semibold mb-3">Technical Skills</h4>
          <div className="flex flex-wrap gap-3 mb-6">
            {technicalSkills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 text-sm font-medium rounded-full shadow-sm transition ${
                  isDarkMode ? "bg-gray-800 hover:bg-purple-800" : "bg-gray-100 hover:bg-purple-100"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

          <h4 className="text-lg sm:text-xl font-semibold mb-3">Soft Skills</h4>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 text-sm font-medium rounded-full shadow-sm transition ${
                  isDarkMode ? "bg-gray-800 hover:bg-purple-800" : "bg-gray-100 hover:bg-purple-100"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
