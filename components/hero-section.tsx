"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero3D } from "@/components/hero-3d";

export function HeroSection() {
  return (
    <section className='relative h-screen flex items-center justify-center bg-black pt-16 overflow-hidden'>
      {/* Enhanced Background Elements */}
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

      <div className='relative w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex flex-col items-center justify-center h-full lg:grid lg:grid-cols-2 lg:gap-12 py-4'>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full flex flex-col items-center justify-center lg:items-start text-center lg:text-left'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='inline-flex items-center space-x-2 glass rounded-full px-3 py-1.5 mb-4 mt-2 sm:mt-4 text-xs sm:text-sm border border-gray-700/50 backdrop-blur-sm'
          >
            <Sparkles className='w-3 h-3 sm:w-4 sm:h-4 text-blue-400' />
            <span className='text-sm sm:text-base font-medium text-gray-300'>
              Gen Z App Wizards
            </span>
            <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse' />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight heading-accent mt-1 xs:mt-2'
            style={{ wordBreak: "break-word" }}
          >
            Apps for the
            <br />
            <span className='bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient'>
              Next Generation
            </span>
            <br />
            <span className='text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-90'>
              Built Fast. Built for You.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xs xs:max-w-sm sm:max-w-xl mx-auto leading-relaxed'
          >
            We build bold, viral, and future-proof apps for Gen Z and the
            digital generation. Want your idea to trend? Let's make it
            happen—faster than you can say "go viral."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='flex flex-col gap-3 w-full sm:flex-row sm:justify-center lg:justify-start'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full sm:w-auto'
            >
              <Button
                size='lg'
                className='w-full sm:w-auto bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white rounded-2xl px-4 xs:px-6 py-2 xs:py-3 text-sm xs:text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group neon-blue button-genz border border-blue-500/20'
              >
                <Zap className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                Let's Build Something Cool
                <motion.div
                  className='ml-2'
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5' />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full sm:w-auto'
            >
              <Button
                variant='outline'
                size='lg'
                className='w-full sm:w-auto rounded-2xl px-4 xs:px-6 py-2 xs:py-3 text-sm xs:text-base sm:text-lg font-semibold border-2 border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 bg-transparent text-white button-genz backdrop-blur-sm'
              >
                <TrendingUp className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                See Gen Z Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='w-full flex flex-row justify-center items-center gap-6 xs:gap-8 sm:gap-12 mt-6 lg:mt-8 px-2'
          >
            <motion.div
              className='text-center group'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className='text-xl xs:text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors'>
                50+
              </div>
              <div className='text-xs xs:text-sm text-gray-300 group-hover:text-gray-200 transition-colors'>
                Apps Shipped
              </div>
            </motion.div>
            <motion.div
              className='text-center group'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className='text-xl xs:text-2xl sm:text-3xl font-bold text-white group-hover:text-violet-400 transition-colors'>
                2-4
              </div>
              <div className='text-xs xs:text-sm text-gray-300 group-hover:text-gray-200 transition-colors'>
                Week Delivery
              </div>
            </motion.div>
            <motion.div
              className='text-center group'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className='text-xl xs:text-2xl sm:text-3xl font-bold text-white group-hover:text-green-400 transition-colors'>
                98%
              </div>
              <div className='text-xs xs:text-sm text-gray-300 group-hover:text-gray-200 transition-colors'>
                Client Satisfaction
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right 3D Content - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative w-full h-[200px] xs:h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] mt-6 lg:mt-0 flex items-center justify-center hidden sm:block'
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
