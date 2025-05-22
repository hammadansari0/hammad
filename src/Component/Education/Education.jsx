import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const educationData = [
  {
    institution: 'GIET University',
    degree: 'B.Tech CSE',
    duration: '2021 – 2025',
    gpa: 'GPA: 7.82/10.0',
  },
  {
    institution: 'Trinity International College',
    degree: 'High School',
    duration: '2018 – 2020',
    gpa: 'GPA: 2.77/4.0',
  },
];

export default function Education() {
  const { isDarkMode } = useDarkMode();

  const sectionBg = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black';
  const boxBg = isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black';
  const badgeBg = isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600';
  const gpaText = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <section className={`relative bg-[url('/educationexperience.svg')] bg-no-repeat bg-cover bg-center w-full min-h-screen px-4 sm:px-8 md:px-16 py-16 ${sectionBg}`} id="education">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Education
        <span className="block w-20 h-1 bg-indigo-500 mx-auto mt-2 rounded" />
      </motion.h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500" />

        <div className="space-y-16">
          {educationData.map((edu, idx) => {
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
                  <div className={`p-6 rounded-xl shadow-md hover:shadow-xl transform transition hover:-translate-y-1 mx-auto max-w-xl ${boxBg}`}>
                    <div className="flex items-center font-semibold mb-2">
                      <GraduationCap className="mr-2" size={20} />
                      <h1 className="text-lg">{edu.institution}</h1>
                    </div>
                    <h4 className="text-indigo-500 font-bold text-md mb-2">{edu.degree}</h4>
                    <div className={`text-sm inline-block px-3 py-1 rounded-full mb-2 ${badgeBg}`}>
                      {edu.duration}
                    </div>
                    <p className={`text-sm ${gpaText}`}>{edu.gpa}</p>
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
