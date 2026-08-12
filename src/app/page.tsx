"use client";

import { ThemeToggle } from "../components/themeToggle"; // Adjust case if your file is named differently
import { portfolioData } from "../data/data"; // Adjust if you named it data.ts
import { Mail, Download, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// --- Custom SVGs for Socials ---
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// --- Animation Configurations ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Portfolio() {
  const { personal, socials, skills, experience, projects } = portfolioData;

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans transition-colors duration-300 overflow-hidden">
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer}
        className="min-h-[80vh] flex flex-col justify-center items-start max-w-5xl mx-auto px-6 py-20"
      >
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          {personal?.name || "Welcome"}
        </motion.h1>
        
        <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6">
          {personal?.role || "Freelance Developer"}
        </motion.h2>
        
        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {personal?.tagline}
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          <a 
            href={`mailto:${personal?.email}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-500/25"
          >
            <Mail size={20} /> Let's Connect
          </a>
          <a 
            href={personal?.resumeUrl} 
            download
            className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-medium transition-all shadow-sm"
          >
            <Download size={20} /> Download CV
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-6 mt-12">
          {socials?.github && (
            <Link href={socials.github} target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-transform hover:scale-110">
              <GithubIcon size={28} />
            </Link>
          )}
          {socials?.linkedin && (
            <Link href={socials.linkedin} target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
              <LinkedinIcon size={28} />
            </Link>
          )}
        </motion.div>
      </motion.section>

      {/* --- ABOUT & SKILLS SECTION --- */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-20 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">About Me</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line text-lg">
              {personal?.about}
            </p>
            <div className="mt-8 flex gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30 flex-1 hover:border-blue-300 transition-colors">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-1">Current</p>
                <p className="font-medium text-slate-800 dark:text-slate-200">M.E. Computer Science & Engineering</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 flex-1 hover:border-slate-300 transition-colors">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Previous</p>
                <p className="font-medium text-slate-800 dark:text-slate-200">M.Sc. Computer Science</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold mb-6">Technical Arsenal</h3>
            <div className="space-y-6">
              {Object.entries(skills || {}).map(([category, items], i) => (
                <div key={category}>
                  <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(items) && items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- EXPERIENCE SECTION --- */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 max-w-5xl mx-auto px-6"
      >
        <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-10">Experience</motion.h3>
        <div className="space-y-8">
          {Array.isArray(experience) && experience.map((job) => (
            <motion.div variants={fadeInUp} key={job.id} className="border-l-2 border-blue-200 dark:border-blue-900 pl-6 relative hover:border-blue-500 transition-colors group">
              <div className="absolute w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full -left-[7px] top-2 group-hover:scale-125 transition-transform"></div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{job.company} <span className="text-slate-400 font-normal">| {job.duration}</span></p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                {job.highlights?.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- PROJECTS SECTION --- */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-20 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Projects</motion.h3>
          <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 mb-10">Web development and research-level implementations.</motion.p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Array.isArray(projects) && projects.map((project) => (
              <motion.div 
                variants={fadeInUp}
                key={project.id} 
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:-translate-y-1 flex flex-col h-full shadow-md hover:shadow-xl dark:shadow-none"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack?.map((tech, idx) => (
                    <span key={idx} className="bg-slate-100 dark:bg-black text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                  {project.demoLink && project.demoLink !== "#" && (
                    <Link href={project.demoLink} target="_blank" className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                  )}
                  {project.repoLink && (
                    <Link href={project.repoLink} target="_blank" className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Code2 size={16} /> Repository
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- FOOTER / CONTACT --- */}
      <motion.footer 
        id="contact"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-slate-200 dark:bg-black text-slate-600 dark:text-slate-400 py-16 text-center transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Ready to collaborate?</motion.h3>
          <motion.p variants={fadeInUp} className="mb-10 text-slate-600 dark:text-slate-400">Feel free to reach out via email.</motion.p>
          
          <motion.div variants={fadeInUp}>
            <a 
              href={`mailto:${personal?.email}`} 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/25"
            >
              <Mail size={20} /> Email Me Directly
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-slate-300 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              © {new Date().getFullYear()} {personal?.name}. Built with Next.js, Tailwind & Framer Motion.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}