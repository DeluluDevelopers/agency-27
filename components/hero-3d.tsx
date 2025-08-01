"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero3D() {
  const [currentDevice, setCurrentDevice] = useState(0);
  const devices = ["laptop", "tablet", "phone"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % devices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const deviceConfigs = {
    laptop: {
      width: "w-80",
      height: "h-48",
      padding: "p-4",
      borderRadius: "rounded-2xl",
      shadow: "shadow-2xl",
      gradient: "from-blue-500 to-violet-600",
      text: "Web Dashboard",
      icon: "💻",
      zIndex: "z-20",
      scale: 1,
      rotateY: 0,
      translateY: 0,
      translateX: 0,
    },
    tablet: {
      width: "w-64",
      height: "h-80",
      padding: "p-3",
      borderRadius: "rounded-3xl",
      shadow: "shadow-xl",
      gradient: "from-violet-500 to-purple-600",
      text: "Tablet App",
      icon: "📱",
      zIndex: "z-30",
      scale: 0.9,
      rotateY: 15,
      translateY: 0,
      translateX: 0,
    },
    phone: {
      width: "w-32",
      height: "h-64",
      padding: "p-2",
      borderRadius: "rounded-3xl",
      shadow: "shadow-lg",
      gradient: "from-indigo-500 to-blue-600",
      text: "Mobile App",
      icon: "📱",
      zIndex: "z-40",
      scale: 0.8,
      rotateY: -15,
      translateY: 0,
      translateX: 0,
    },
  };

  return (
    <div className='relative w-full h-full flex items-center justify-center min-h-[180px] xs:min-h-[240px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[480px] hidden sm:block'>
      {/* Background glow effects */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-96 h-96 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse' />
      </div>

      {/* Device showcase */}
      <div className='relative w-full h-full flex items-center justify-center'>
        <div
          className='relative transform-gpu'
          style={{ perspective: "1200px" }}
        >
          <AnimatePresence mode='wait'>
            {devices.map((device, index) => {
              if (index !== currentDevice) return null;

              const config =
                deviceConfigs[device as keyof typeof deviceConfigs];

              return (
                <motion.div
                  key={device}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotateY: 30,
                    y: 30,
                    x: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: config.scale,
                    rotateY: config.rotateY,
                    y: config.translateY,
                    x: config.translateX,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    rotateY: -30,
                    y: -30,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                  }}
                  className={`relative ${config.zIndex} mx-auto`}
                >
                  {/* Device body */}
                  <div
                    className={`relative bg-gray-900 ${config.borderRadius} ${config.padding} ${config.shadow} ${config.width} ${config.height} flex items-center justify-center border border-gray-700/50 backdrop-blur-sm`}
                  >
                    {/* Screen content */}
                    <div
                      className={`w-full h-full bg-gradient-to-br ${config.gradient} ${config.borderRadius} flex flex-col items-center justify-center text-white font-bold relative overflow-hidden`}
                    >
                      {/* Animated background pattern */}
                      <div className='absolute inset-0 opacity-20'>
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent' />
                        <div className='absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl' />
                      </div>

                      {/* Device icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className='text-4xl mb-2'
                      >
                        {config.icon}
                      </motion.div>

                      {/* Device text */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className='text-center'
                      >
                        <div className='text-sm font-semibold'>
                          {config.text}
                        </div>
                        <div className='text-xs opacity-80 mt-1'>Next Gen</div>
                      </motion.div>
                    </div>

                    {/* Device details */}
                    {device === "laptop" && (
                      <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full' />
                    )}

                    {/* Floating elements for laptop */}
                    {device === "laptop" && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: 60, y: -40 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className='absolute -top-4 -right-4 z-30'
                        >
                          <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-xs font-bold shadow-lg'>
                            AI Chat
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -60, y: 40 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className='absolute -bottom-4 -left-4 z-30'
                        >
                          <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-xs font-bold shadow-lg'>
                            Analytics
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating particles */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className='absolute w-2 h-2 bg-blue-400 rounded-full blur-sm'
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
