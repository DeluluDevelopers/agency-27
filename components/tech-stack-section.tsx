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
  Shield,
} from "lucide-react";

const techCategories = [
  {
    name: "Frontend",
    icon: Globe,
    color: "#61dafb",
    technologies: [
      {
        name: "React",
        description: "Modern component-based UI library",
        icon: "⚛️",
      },
      { name: "Next.js", description: "Full-stack React framework", icon: "▲" },
      { name: "TypeScript", description: "Type-safe JavaScript", icon: "📘" },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        icon: "🎨",
      },
    ],
  },
  {
    name: "Backend",
    icon: Code,
    color: "#68a063",
    technologies: [
      {
        name: "Node.js",
        description: "JavaScript runtime environment",
        icon: "🟢",
      },
      {
        name: "Spring Boot",
        description: "Java enterprise framework",
        icon: "🍃",
      },
      { name: "Express.js", description: "Minimal web framework", icon: "🚀" },
      { name: "GraphQL", description: "Query language for APIs", icon: "🔗" },
    ],
  },
  {
    name: "Database",
    icon: Database,
    color: "#4db33d",
    technologies: [
      { name: "MongoDB", description: "NoSQL document database", icon: "🍃" },
      {
        name: "PostgreSQL",
        description: "Advanced relational database",
        icon: "🐘",
      },
      {
        name: "Redis",
        description: "In-memory data structure store",
        icon: "🔴",
      },
      { name: "Prisma", description: "Next-generation ORM", icon: "⚡" },
    ],
  },
  {
    name: "AI/ML",
    icon: Brain,
    color: "#ff6f00",
    technologies: [
      {
        name: "TensorFlow",
        description: "Machine learning platform",
        icon: "🧠",
      },
      { name: "OpenAI API", description: "GPT integration", icon: "🤖" },
      { name: "Python", description: "AI/ML programming language", icon: "🐍" },
      {
        name: "Langchain",
        description: "LLM application framework",
        icon: "🔗",
      },
    ],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    color: "#a855f7",
    technologies: [
      {
        name: "React Native",
        description: "Cross-platform mobile apps",
        icon: "📱",
      },
      { name: "Flutter", description: "Google's UI toolkit", icon: "🦋" },
      { name: "Swift", description: "iOS native development", icon: "🍎" },
      { name: "Kotlin", description: "Android native development", icon: "🤖" },
    ],
  },
  {
    name: "DevOps",
    icon: Cloud,
    color: "#06b6d4",
    technologies: [
      { name: "Docker", description: "Containerization platform", icon: "🐳" },
      { name: "AWS", description: "Cloud computing services", icon: "☁️" },
      {
        name: "Vercel",
        description: "Frontend deployment platform",
        icon: "▲",
      },
      { name: "GitHub Actions", description: "CI/CD automation", icon: "⚙️" },
    ],
  },
];

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <section
      id='tech'
      className='py-20 bg-gradient-to-r from-blue-950 via-black to-violet-950'
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
            <span className='bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent'>
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
                  ? "glass neon-blue text-white border border-blue-500/30"
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
                  className='w-2 h-2 bg-blue-400 rounded-full'
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
          {techCategories[activeCategory].technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredTech(index)}
              onHoverEnd={() => setHoveredTech(null)}
              className='glass rounded-3xl p-6 hover:neon-blue transition-all duration-300 group cursor-pointer border border-gray-800/50 hover:border-blue-500/30 relative overflow-hidden'
            >
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <span className='text-2xl'>{tech.icon}</span>
                  <h3 className='text-lg font-bold text-white'>{tech.name}</h3>
                </div>
                <motion.div
                  animate={{
                    rotate: hoveredTech === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Zap className='w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity' />
                </motion.div>
              </div>

              <p className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed'>
                {tech.description}
              </p>

              {/* Animated Background - Synchronized with Zap rotation */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                animate={{
                  scale: hoveredTech === index ? [1, 1.08, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />

              {/* Corner Accent */}
              <div className='absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
