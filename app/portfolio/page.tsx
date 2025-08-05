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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className='min-h-screen bg-black overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-violet-500/30 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-violet-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-violet-500/15 rounded-full blur-3xl' />

        {/* Animated grid pattern */}
        <div className='absolute inset-0 opacity-20'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
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
                className='mr-4 text-gray-300 hover:text-blue-400 transition-colors'
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
            <Sparkles className='w-5 h-5 text-blue-400' />
            <span className='text-sm font-medium text-gray-300'>Portfolio</span>
          </motion.div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
            Our{" "}
            <span className='bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient'>
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

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center py-20'
        >
          <div className='max-w-2xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='w-32 h-32 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-blue-500/30 backdrop-blur-sm'
            >
              <Clock className='w-16 h-16 text-blue-400' />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='text-3xl font-bold text-white mb-4'
            >
              Coming Soon
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='text-lg text-gray-300 mb-8 leading-relaxed'
            >
              Our portfolio of Gen Z projects is being carefully crafted. We're
              working on some amazing apps that will redefine what's possible
              for the next generation.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'
            >
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <div className='flex items-center justify-center mb-3'>
                  <TrendingUp className='w-8 h-8 text-blue-400' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-1'>10+</h3>
                <p className='text-gray-300 text-sm'>Projects in Development</p>
              </div>

              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <div className='flex items-center justify-center mb-3'>
                  <Users className='w-8 h-8 text-violet-400' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-1'>50K+</h3>
                <p className='text-gray-300 text-sm'>Target Users</p>
              </div>

              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <div className='flex items-center justify-center mb-3'>
                  <Sparkles className='w-8 h-8 text-purple-400' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-1'>100%</h3>
                <p className='text-gray-300 text-sm'>Gen Z Focused</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <a
                href='https://github.com/DeluluDevelopers'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent'
                >
                  <Github className='w-5 h-5 mr-2' />
                  View on GitHub
                </Button>
              </a>
              <Link href='/'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300'
                >
                  Back to Home
                </Button>
              </Link>
            </motion.div>
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
                title: "Social Apps",
                description: "Viral social platforms that Gen Z loves to share",
                icon: "📱",
                color: "from-violet-500 to-purple-600",
                gradient: "from-violet-500/20 to-purple-600/20",
              },
              {
                title: "AI Tools",
                description: "Next-gen AI applications that feel magical",
                icon: "🤖",
                color: "from-blue-500 to-cyan-600",
                gradient: "from-blue-500/20 to-cyan-600/20",
              },
              {
                title: "E-commerce",
                description: "Modern shopping experiences for digital natives",
                icon: "🛒",
                color: "from-green-500 to-emerald-600",
                gradient: "from-green-500/20 to-emerald-600/20",
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
                      <span className='text-3xl'>{category.icon}</span>
                    </div>
                    <h3
                      className={`text-xl font-bold text-white mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </h3>
                    <p className='text-gray-300 leading-relaxed'>
                      {category.description}
                    </p>
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
