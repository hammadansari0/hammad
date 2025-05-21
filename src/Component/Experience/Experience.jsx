import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

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
    return (
        <section
            className="w-full min-h-screen px-4 sm:px-8 md:px-16 py-16 bg-gray-80"
            id="experience"
        >
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-black text-center mb-16 relative"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                Work Experience
                <span className="block w-20 h-1 bg-indigo-500 mx-auto mt-2 rounded" />
            </motion.h2>

            <div className="relative">
                {/* Center Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500" />

                <div className="space-y-16">
                    {experiences.map((exp, idx) => {
                        const isLeft = idx % 2 === 0;

                        return (
                            <motion.div
                                key={idx}
                                className={`relative flex flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.4 }}
                                viewport={{ once: false }}
                            >
                                <div
                                    className={`w-full md:w-1/2 p-4 md:p-0 ${isLeft ? 'md:pr-8' : 'md:pl-8'
                                        }`}
                                >
                                    <div className="bg-white p-6 rounded-xl shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1 mx-auto max-w-xl">
                                        <div className="flex items-center text-black font-semibold mb-2">
                                            <Briefcase className="mr-2" size={18} />
                                            <h3 className="text-black text-lg">{exp.company}</h3>
                                        </div>
                                        <h4 className="text-indigo-600 font-bold text-md mb-2">{exp.role}</h4>
                                        <div className="text-sm bg-gray-100 inline-block px-3 py-1 rounded-full text-gray-600 mb-3">
                                            {exp.duration}
                                        </div>
                                        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
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
