"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Database,
  Brain,
  Cloud,
  Smartphone,
  Globe,
  Zap,
  Code2,
  Layers,
  FileCode,
  Server,
  Cpu,
  Box,
  Link,
  GitBranch,
} from "lucide-react";

const techCategories = [
  {
    name: "Frontend",
    icon: Globe,
    color: "#ffffff",
    technologies: [
      {
        name: "React",
        description: "Modern component-based UI library",
        icon: Code2,
      },
      { name: "Next.js", description: "Full-stack React framework", icon: Layers },
      { name: "TypeScript", description: "Type-safe JavaScript", icon: FileCode },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        icon: Layers,
      },
    ],
  },
  {
    name: "Backend",
    icon: Code,
    color: "#cccccc",
    technologies: [
      {
        name: "Node.js",
        description: "JavaScript runtime environment",
        icon: Server,
      },
      {
        name: "Spring Boot",
        description: "Java enterprise framework",
        icon: Layers,
      },
      { name: "Express.js", description: "Minimal web framework", icon: Zap },
      { name: "GraphQL", description: "Query language for APIs", icon: Link },
    ],
  },
  {
    name: "Database",
    icon: Database,
    color: "#aaaaaa",
    technologies: [
      { name: "MongoDB", description: "NoSQL document database", icon: Database },
      {
        name: "PostgreSQL",
        description: "Advanced relational database",
        icon: Database,
      },
      {
        name: "Redis",
        description: "In-memory data structure store",
        icon: Cpu,
      },
      { name: "Prisma", description: "Next-generation ORM", icon: Zap },
    ],
  },
  {
    name: "AI/ML",
    icon: Brain,
    color: "#999999",
    technologies: [
      {
        name: "TensorFlow",
        description: "Machine learning platform",
        icon: Brain,
      },
      { name: "OpenAI API", description: "GPT integration", icon: Cpu },
      { name: "Python", description: "AI/ML programming language", icon: Code },
      {
        name: "Langchain",
        description: "LLM application framework",
        icon: Link,
      },
    ],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    color: "#888888",
    technologies: [
      {
        name: "React Native",
        description: "Cross-platform mobile apps",
        icon: Smartphone,
      },
      { name: "Flutter", description: "Google's UI toolkit", icon: Layers },
      { name: "Swift", description: "iOS native development", icon: Code2 },
      { name: "Kotlin", description: "Android native development", icon: Code },
    ],
  },
  {
    name: "DevOps",
    icon: Cloud,
    color: "#777777",
    technologies: [
      { name: "Docker", description: "Containerization platform", icon: Box },
      { name: "AWS", description: "Cloud computing services", icon: Cloud },
      {
        name: "Vercel",
        description: "Frontend deployment platform",
        icon: Zap,
      },
      { name: "GitHub Actions", description: "CI/CD automation", icon: GitBranch },
    ],
  },
];

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <section
      id='tech'
      className='py-20 bg-gradient-to-r from-[#0a0a0a] via-black to-[#1a1a1a]'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Our{" "}
            <span className='bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
              Tech Arsenal
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Cutting-edge technologies that power the future. Explore our
            comprehensive tech ecosystem.
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {techCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                activeCategory === index
                  ? "glass neon-white text-white border border-white/30"
                  : "bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-gray-700/30"
              }`}
            >
              <category.icon
                className='w-5 h-5'
                style={{ color: category.color }}
              />
              <span className='font-semibold'>{category.name}</span>
              {activeCategory === index && (
                <motion.div
                  layoutId='activeIndicator'
                  className='w-2 h-2 bg-white rounded-full'
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {techCategories[activeCategory].technologies.map((tech, index) => {
            const TechIcon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredTech(index)}
                onHoverEnd={() => setHoveredTech(null)}
                className='glass rounded-3xl p-6 hover:neon-white transition-all duration-300 group cursor-pointer border border-gray-800/50 hover:border-white/30 relative overflow-hidden'
              >
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center space-x-3'>
                    <TechIcon className='w-6 h-6 text-white' />
                    <h3 className='text-lg font-bold text-white'>{tech.name}</h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: hoveredTech === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Zap className='w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity' />
                  </motion.div>
                </div>

                <p className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed'>
                  {tech.description}
                </p>

                {/* Animated Background */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-white/5 to-gray-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  animate={{
                    scale: hoveredTech === index ? [1, 1.08, 1] : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    repeat: hoveredTech === index ? Infinity : 0,
                  }}
                />

                {/* Corner Accent */}
                <div className='absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}