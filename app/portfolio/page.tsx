"use client";

import { motion } from "framer-motion";
import {
  FolderOpen,
  ExternalLink,
  Github,
  ArrowLeft,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  Globe,
  Smartphone,
  BookOpen,
  Palette,
  Monitor,
  Code,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navigation } from "@/components/navigation";

const projects = [
  {
    title: "WeddingTroop",
    description:
      "A comprehensive wedding planning platform that helps couples organize their special day with vendor management, timeline tracking, and budget planning features.",
    liveUrl: "https://weddingtroop.in/",
    githubUrl: "https://github.com/DeluluDevelopers/landingdiversity",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: Monitor,
    color: "from-white to-gray-300",
    gradient: "from-white/10 to-gray-300/10",
    category: "Web Platform",
  },
  {
    title: "SkillShift Landing Page",
    description:
      "A modern landing page for skill development platform featuring interactive animations, responsive design, and seamless user experience for educational content.",
    liveUrl: "https://skill-shift-landing.vercel.app/",
    githubUrl: "https://github.com/SafalBhandari12/skillShift_landing",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    icon: TrendingUp,
    color: "from-gray-200 to-gray-400",
    gradient: "from-gray-200/10 to-gray-400/10",
    category: "Landing Page",
  },
  {
    title: "English Learning Platform",
    description:
      "An interactive English learning application with personalized lessons, progress tracking, and AI-powered language assessment tools for students.",
    liveUrl: "https://english-learning-client.vercel.app/",
    githubUrl: "https://github.com/SafalBhandari12/englishLearningServer",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: BookOpen,
    color: "from-gray-300 to-gray-500",
    gradient: "from-gray-300/10 to-gray-500/10",
    category: "Educational App",
  },
  {
    title: "LandingDiversity",
    description:
      "A showcase of diverse landing page designs and templates, demonstrating modern web development techniques and creative UI/UX solutions.",
    liveUrl: "https://landingdiversity.vercel.app/",
    githubUrl: "https://github.com/DeluluDevelopers/landingdiversity",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: Palette,
    color: "from-gray-400 to-gray-600",
    gradient: "from-gray-400/10 to-gray-600/10",
    category: "Landing Page",
  },
];

export default function PortfolioPage() {
  return (
    <main className='min-h-screen bg-black overflow-hidden'>
      <Navigation />
      {/* Background Elements - Monochrome */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-white/10 to-gray-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-500/10 to-white/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-white/5 to-gray-400/5 rounded-full blur-3xl' />

        {/* Animated grid pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className='flex items-center justify-center mb-6'>
            <Link href='/'>
              <Button
                variant='ghost'
                className='mr-4 text-gray-300 hover:text-white transition-colors'
              >
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Home
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-gray-700/50 backdrop-blur-sm'
          >
            <Sparkles className='w-5 h-5 text-white' />
            <span className='text-sm font-medium text-gray-300'>Portfolio</span>
          </motion.div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
            Our{" "}
            <span className='bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent animate-gradient'>
              Gen Z
            </span>{" "}
            Projects
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Explore our latest projects built for the next generation. Each app
            is crafted with modern tech, viral potential, and Gen Z aesthetics
            in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mb-20'
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-3xl font-bold text-white text-center mb-12'
          >
            Featured Projects
          </motion.h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className='group relative'
              >
                <div className='relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105 overflow-hidden h-full'>
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className='relative z-10'>
                    <div className='flex items-center justify-between mb-6'>
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <project.icon className='w-8 h-8 text-black' />
                      </div>
                      <div className='text-right'>
                        <span className='text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full'>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <h3 className='text-2xl font-bold text-white mb-3'>
                      {project.title}
                    </h3>
                    <p className='text-gray-300 leading-relaxed mb-6'>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className='text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-3'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1'
                      >
                        <Button
                          size='sm'
                          className='w-full bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 text-black rounded-xl transition-all duration-300'
                        >
                          <Globe className='w-4 h-4 mr-2' />
                          Live Demo
                        </Button>
                      </a>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1'
                      >
                        <Button
                          variant='outline'
                          size='sm'
                          className='w-full border-gray-600 text-gray-300 hover:border-white hover:text-white rounded-xl transition-all duration-300 bg-transparent'
                        >
                          <Github className='w-4 h-4 mr-2' />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className='mt-20'
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='text-3xl font-bold text-white text-center mb-12'
          >
            What We're Building
          </motion.h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: "Mobile Apps",
                description:
                  "Native and cross-platform mobile solutions that Gen Z can't put down. We build apps that users love to use and can't stop using.",
                icon: Smartphone,
                color: "from-white to-gray-300",
                gradient: "from-white/10 to-gray-300/10",
                features: [
                  "Cross-Platform",
                  "Native Performance",
                  "App Store Ready",
                ],
              },
              {
                title: "Web Sites",
                description:
                  "Modern, responsive websites that load fast and look stunning on every device. We create web experiences that convert visitors into customers.",
                icon: Globe,
                color: "from-gray-200 to-gray-400",
                gradient: "from-gray-200/10 to-gray-400/10",
                features: [
                  "Responsive Design",
                  "SEO Optimized",
                  "Performance Focused",
                ],
              },
              {
                title: "Custom Software",
                description:
                  "Tailored solutions that solve your unique business challenges and scale with you. We build software that grows with your business.",
                icon: Settings,
                color: "from-gray-300 to-gray-500",
                gradient: "from-gray-300/10 to-gray-500/10",
                features: [
                  "Scalable Architecture",
                  "Cloud Native",
                  "Enterprise Ready",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className='group relative'
              >
                <div className='relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105 overflow-hidden'>
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className='relative z-10'>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <category.icon className='w-8 h-8 text-black' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-3'>
                      {category.title}
                    </h3>
                    <p className='text-gray-300 leading-relaxed mb-6'>
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className='space-y-2'>
                      {category.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className='flex items-center space-x-2'
                        >
                          <div className='w-1.5 h-1.5 bg-white rounded-full'></div>
                          <span className='text-sm text-gray-300'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}