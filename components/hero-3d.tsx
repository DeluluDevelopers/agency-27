"use client";

import { motion } from "framer-motion";

export function Hero3D() {
  return (
    <div className='relative w-full h-full flex items-center justify-center min-h-[180px] xs:min-h-[240px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[480px]'>
      {/* Desktop Screen - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, rotateY: -30, z: -100 }}
        animate={{ opacity: 1, rotateY: 0, z: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='relative transform-gpu z-20 mx-auto hidden sm:block'
        style={{ perspective: "1000px" }}
      >
        <div className='relative bg-gray-800 rounded-2xl p-2 xs:p-4 shadow-2xl transform rotate-y-6 hover:rotate-y-2 transition-transform duration-500 w-40 xs:w-64 sm:w-80 h-24 xs:h-36 sm:h-48 flex items-center justify-center'>
          <div className='w-full h-full bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xs xs:text-base sm:text-lg'>
            Web App Dashboard
          </div>
          <div className='absolute -bottom-1 xs:-bottom-2 left-1/2 transform -translate-x-1/2 w-8 xs:w-16 h-1 bg-gray-600 rounded-full'></div>
          {/* Mobile App - Top Right Overlap */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -40, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='hidden sm:block absolute -top-8 -right-8 z-30'
          >
            <div className='relative bg-gray-900 rounded-2xl p-3 shadow-xl w-24 h-40 flex items-center justify-center'>
              <div className='w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex flex-col items-center justify-center text-white font-semibold text-lg text-center'>
                Mobile App
              </div>
            </div>
          </motion.div>
          {/* AI Chat - Bottom Left Overlap */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='hidden sm:block absolute -bottom-8 -left-8 z-30'
          >
            <div className='relative bg-gray-900 rounded-2xl p-3 shadow-xl w-24 h-40 flex items-center justify-center'>
              <div className='w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-semibold text-lg'>
                AI Chat
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
