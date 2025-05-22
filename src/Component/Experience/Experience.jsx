import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

const experiences = [
  {
    company: 'Ultimate Coder',
    role: 'Junior Web Developer',
    duration: 'Apr 2025 – May 2025',
    details: [
      'Collaborated effectively with team to develop and optimize software solutions.',
      'Integrated RESTful API in frontend of the projects as per requirements.',
      'Validated Transactions of Frontend using Bearer Tokens.',
    ],
  },
  {
    company: 'Skill Step Academy',
    role: 'Quality Assurance',
    duration: 'Oct 2023 – Aug 2024',
    details: [
      'Validated Content For Brainly platform.',
      'Maintained Sheets for invalid response on the platform.',
      'Generated and Tested content from Brainly tool for errors.',
    ],
  },
];

export default function Experience() {
  const { isDarkMode } = useDarkMode();

  const sectionBg = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black";
  const boxBg = isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black";
  const badgeBg = isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600";
  const listText = isDarkMode ? "text-gray-300" : "text-gray-700";
  const roleColor = isDarkMode ? "text-indigo-300" : "text-indigo-600";
  const lineColor = isDarkMode ? "bg-indigo-400" : "bg-indigo-500";

  return (
    <section id="experience" className={`relative bg-[url('/src/assets/educationexperience.svg')] bg-no-repeat bg-contain bg-center w-full min-h-screen px-4 sm:px-8 md:px-16 py-16 ${sectionBg}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Work Experience
        <span className={`block w-20 h-1 mx-auto mt-2 rounded ${lineColor}`} />
      </motion.h2>

      <div className="relative">
        <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${lineColor}`} />

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className={`relative flex flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.4 }}
                viewport={{ once: false }}
              >
                <div className={`w-full md:w-1/2 p-4 md:p-0 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 mx-auto max-w-xl ${boxBg}`}>
                    <div className="flex items-center font-semibold mb-2">
                      <Briefcase className="mr-2" size={18} />
                      <h3 className="text-lg">{exp.company}</h3>
                    </div>
                    <h4 className={`font-bold text-md mb-2 ${roleColor}`}>{exp.role}</h4>
                    <div className={`text-sm inline-block px-3 py-1 rounded-full mb-3 ${badgeBg}`}>
                      {exp.duration}
                    </div>
                    <ul className={`list-disc ml-5 text-sm space-y-1 ${listText}`}>
                      {exp.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
