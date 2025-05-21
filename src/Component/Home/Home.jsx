import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
// import Image from "next/image";
import profilePic from "../../assets/hammad.png"; // replace with your image path

const socialIcons = [
    { icon: Github, href: "https://github.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Mail, href: "mailto:email@example.com" },
    { icon: Phone, href: "tel:+1234567890" },
];

export default function Home() {
    return (
        <section className="min-h-screen flex items-center font-poppins justify-center bg-gray-80 px-6 py-12" id="home">
            <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hello, I'm</h2>
                    <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
                        Hammad Ansari
                    </h1>
                    <p className="text-gray-600 font-poppins mb-6">
                        A passionate Web Developer specializing in creating beautiful and functional websites.
                    </p>

                    <button className="px-6 py-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 shadow-lg font-medium mb-6 transition">
                        Get In Touch
                    </button>

                    <div className="flex gap-4">
                        {socialIcons.map(({ icon: Icon, href }, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-gray-600 hover:text-purple-600 transition-transform hover:scale-110"
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative w-80 h-80 rounded-full border-6 border-purple-500 shadow-xl overflow-hidden">
                        <img
                            src={profilePic}
                            alt="Hammad Ansari"
                            className="w-76 h-80 rounded-full border-purple-500 shadow-xl object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
