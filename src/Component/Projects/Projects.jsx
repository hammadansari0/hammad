import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';
import sampleImg from '../../assets/sample.jpg'

const projects = [
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio site to showcase my projects, experience, and skills.',
    link: 'https://your-portfolio-link.com',
    image: sampleImg,
  },
  {
    name: 'E-commerce App',
    description: 'A full-stack e-commerce app with cart, payment, and admin dashboard.',
    link: 'https://your-ecommerce-app.com',
    image: sampleImg,
  },
  {
    name: 'Blog Platform',
    description: 'A Markdown-based blog platform with authentication and CMS.',
    link: 'https://your-blog-platform.com',
    image: sampleImg,
  },
];

export default function Projects() {
  const { isDarkMode } = useDarkMode();

  const sectionBg = isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black';
  const cardBg = isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black';
  const descText = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const linkColor = isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500';

  return (
    <section className={`relative bg-[url('/src/assets/background1.svg')] bg-no-repeat bg-cover bg-center w-full min-h-screen px-4 sm:px-8 md:px-16 py-16 ${sectionBg}`} id="projects">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Projects
        <span className="block w-20 h-1 bg-indigo-500 mx-auto mt-2 rounded" />
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`w-full sm:w-[300px] md:w-[340px] h-[50vh] rounded-xl shadow-md hover:shadow-xl transform transition hover:-translate-y-1 flex flex-col overflow-hidden ${cardBg}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: false }}
          >
            <img src={project.image} alt={project.name} className="w-full h-1/2 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <FolderGit2 className="text-indigo-500 mr-2" />
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                </div>
                <p className={`text-sm mb-4 ${descText}`}>{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center font-medium text-sm hover:underline ${linkColor}`}
              >
                Visit Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
