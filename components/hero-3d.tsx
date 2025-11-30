"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Monitor, Tablet, Smartphone, TrendingUp, Users, Activity, DollarSign, CreditCard, Zap } from "lucide-react";

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
      gradient: "from-white to-gray-300",
      text: "Web Dashboard",
      icon: Monitor,
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
      gradient: "from-gray-200 to-gray-400",
      text: "Tablet App",
      icon: Tablet,
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
      gradient: "from-gray-300 to-gray-500",
      text: "Mobile App",
      icon: Smartphone,
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
        <div className='w-96 h-96 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-full blur-3xl animate-pulse' />
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
                      className={`w-full h-full bg-gray-900 ${config.borderRadius} flex flex-col overflow-hidden`}
                    >
                      {/* Device-specific content */}
                      {device === "laptop" && (
                        <div className='w-full h-full bg-gray-900 rounded-lg flex flex-col overflow-hidden'>
                          {/* Browser Header */}
                          <div className='flex items-center justify-between p-2 bg-gray-800 rounded-t-lg border-b border-gray-700'>
                            <div className='flex items-center space-x-1'>
                              <div className='w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors'></div>
                              <div className='w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors'></div>
                              <div className='w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors'></div>
                            </div>
                            <div className='text-xs text-gray-400 font-medium flex items-center'>
                              <div className='w-2 h-2 bg-white rounded-full mr-1'></div>
                              Dashboard
                            </div>
                            <div className='w-4 h-4 bg-gradient-to-br from-white to-gray-300 rounded flex items-center justify-center'>
                              <Zap className='w-2 h-2 text-black' />
                            </div>
                          </div>

                          {/* Dashboard Content */}
                          <div className='flex-1 p-2 space-y-2 bg-gray-900'>
                            {/* Top Stats */}
                            <div className='flex space-x-2'>
                              <div className='flex-1 bg-gradient-to-br from-white/20 to-gray-300/20 rounded-lg p-2 border border-white/10 shadow-lg'>
                                <div className='text-xs text-gray-300 font-bold mb-1 flex items-center'>
                                  <TrendingUp className='w-3 h-3 mr-1' /> Analytics
                                </div>
                                <div className='text-sm text-white font-semibold'>
                                  +23%
                                </div>
                                <div className='text-xs text-gray-400 mt-1'>
                                  +12% vs last week
                                </div>
                              </div>
                              <div className='flex-1 bg-gradient-to-br from-gray-200/20 to-gray-400/20 rounded-lg p-2 border border-white/10 shadow-lg'>
                                <div className='text-xs text-gray-300 font-bold mb-1 flex items-center'>
                                  <Users className='w-3 h-3 mr-1' /> Users
                                </div>
                                <div className='text-sm text-white font-semibold'>
                                  1.2K
                                </div>
                                <div className='text-xs text-gray-400 mt-1'>
                                  +8% vs last week
                                </div>
                              </div>
                            </div>

                            {/* Chart */}
                            <div className='bg-gray-800 rounded-lg p-2 border border-gray-700 shadow-inner'>
                              <div className='flex items-center justify-between mb-2'>
                                <div className='text-xs text-gray-300 font-medium flex items-center'>
                                  <Activity className='w-3 h-3 mr-1' /> Revenue
                                </div>
                                <div className='text-xs text-white font-bold flex items-center'>
                                  <DollarSign className='w-3 h-3 mr-1' /> $12.5K
                                </div>
                              </div>
                              <div className='flex space-x-1 h-8 items-end'>
                                {[4, 6, 3, 8, 5, 7, 9].map((height, i) => (
                                  <div
                                    key={i}
                                    className='flex-1 bg-gradient-to-t from-white to-gray-300 rounded-t-sm shadow-sm hover:from-gray-200 hover:to-gray-400 transition-all duration-200'
                                    style={{ height: `${height * 2}px` }}
                                  ></div>
                                ))}
                              </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className='flex space-x-2'>
                              <div className='flex-1 bg-gradient-to-br from-gray-300/20 to-gray-500/20 rounded-lg p-2 border border-white/10 shadow-lg'>
                                <div className='text-xs text-gray-300 font-bold mb-1 flex items-center'>
                                  <Zap className='w-3 h-3 mr-1' /> AI Chat
                                </div>
                                <div className='text-xs text-gray-400 flex items-center'>
                                  <div className='w-2 h-2 bg-white rounded-full mr-1 animate-pulse'></div>
                                  Active
                                </div>
                              </div>
                              <div className='flex-1 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-lg p-2 border border-white/10 shadow-lg'>
                                <div className='text-xs text-gray-300 font-bold mb-1 flex items-center'>
                                  <Activity className='w-3 h-3 mr-1' /> API
                                </div>
                                <div className='text-xs text-gray-400 flex items-center'>
                                  <div className='w-2 h-2 bg-white rounded-full mr-1'></div>
                                  99.9%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {device === "tablet" && (
                        <div className='w-full h-full bg-gray-900 rounded-xl flex flex-col overflow-hidden'>
                          {/* Status Bar */}
                          <div className='flex items-center justify-between p-2 bg-gray-800 rounded-t-xl border-b border-gray-700'>
                            <div className='text-xs text-gray-300 font-medium'>
                              9:41
                            </div>
                            <div className='flex items-center space-x-1'>
                              <div className='w-4 h-1 bg-gray-600 rounded-full'></div>
                              <div className='w-4 h-1 bg-gray-600 rounded-full'></div>
                              <div className='w-4 h-1 bg-gray-600 rounded-full'></div>
                            </div>
                            <div className='text-xs text-gray-300'>100%</div>
                          </div>

                          {/* Social App Content */}
                          <div className='flex-1 p-2 space-y-2 bg-gray-900'>
                            {/* Header */}
                            <div className='flex items-center justify-between'>
                              <div className='text-sm font-bold text-white flex items-center'>
                                <Tablet className='w-4 h-4 mr-1' /> Social App
                              </div>
                              <div className='w-6 h-6 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center shadow-lg'>
                                <Users className='w-3 h-3 text-black' />
                              </div>
                            </div>

                            {/* Stories */}
                            <div className='flex space-x-2'>
                              {[1, 2, 3].map((i) => (
                                <div
                                  key={i}
                                  className='w-8 h-8 bg-gradient-to-br from-white to-gray-400 rounded-full flex items-center justify-center border-2 border-white shadow-lg hover:scale-105 transition-transform'
                                >
                                  <Users className='w-4 h-4 text-black' />
                                </div>
                              ))}
                            </div>

                            {/* Post */}
                            <div className='bg-gray-800 rounded-lg p-2 border border-gray-700 shadow-inner'>
                              <div className='flex items-center space-x-2 mb-2'>
                                <div className='w-5 h-5 bg-gradient-to-br from-white to-gray-300 rounded-full shadow-sm'></div>
                                <div className='text-xs text-gray-300 font-medium'>
                                  User123
                                </div>
                                <div className='text-xs text-gray-500'>
                                  • 2h ago
                                </div>
                              </div>
                              <div className='text-xs text-gray-300 mb-2 leading-relaxed'>
                                Amazing app experience! The new features are
                                incredible!
                              </div>
                              <div className='bg-gray-700 rounded-lg h-12 flex items-center justify-center border border-gray-600'>
                                <Activity className='w-6 h-6 text-gray-400' />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {device === "phone" && (
                        <div className='w-full h-full bg-gray-900 rounded-2xl flex flex-col overflow-hidden'>
                          {/* Status Bar */}
                          <div className='flex items-center justify-between p-1 bg-gray-800 rounded-t-2xl border-b border-gray-700'>
                            <div className='text-xs text-gray-300 font-medium'>
                              9:41
                            </div>
                            <div className='flex items-center space-x-1'>
                              <div className='w-3 h-1 bg-gray-600 rounded-full'></div>
                              <div className='w-3 h-1 bg-gray-600 rounded-full'></div>
                              <div className='w-3 h-1 bg-gray-600 rounded-full'></div>
                            </div>
                            <div className='text-xs text-gray-300'>100%</div>
                          </div>

                          {/* Fintech App Content */}
                          <div className='flex-1 p-2 space-y-2 bg-gray-900'>
                            {/* Header */}
                            <div className='flex items-center justify-between'>
                              <div className='text-xs font-bold text-white flex items-center'>
                                <DollarSign className='w-4 h-4 mr-1' /> Fintech
                              </div>
                              <div className='w-5 h-5 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center shadow-lg'>
                                <CreditCard className='w-3 h-3 text-black' />
                              </div>
                            </div>

                            {/* Balance */}
                            <div className='bg-gradient-to-r from-white/20 to-gray-400/20 rounded-lg p-2 border border-white/10 shadow-lg'>
                              <div className='text-xs text-gray-300 mb-1 flex items-center'>
                                <CreditCard className='w-3 h-3 mr-1' /> Balance
                              </div>
                              <div className='text-sm font-bold text-white'>
                                $2,450.00
                              </div>
                              <div className='text-xs text-gray-400 mt-1'>
                                <TrendingUp className='w-3 h-3 inline mr-1' /> +$150 this week
                              </div>
                            </div>

                            {/* Quick Actions */}
                            <div className='grid grid-cols-2 gap-1'>
                              <div className='bg-gray-800 rounded-lg p-1 text-center hover:bg-gray-700 transition-colors border border-gray-700 shadow-sm'>
                                <TrendingUp className='w-3 h-3 text-white mx-auto mb-1' />
                                <div className='text-xs text-gray-300'>
                                  Send
                                </div>
                              </div>
                              <div className='bg-gray-800 rounded-lg p-1 text-center hover:bg-gray-700 transition-colors border border-gray-700 shadow-sm'>
                                <Activity className='w-3 h-3 text-white mx-auto mb-1' />
                                <div className='text-xs text-gray-300'>
                                  Receive
                                </div>
                              </div>
                            </div>

                            {/* Recent Transaction */}
                            <div className='bg-gray-800 rounded-lg p-2 border border-gray-700 shadow-inner'>
                              <div className='flex items-center justify-between'>
                                <div className='flex items-center space-x-1'>
                                  <div className='w-4 h-4 bg-gray-600 rounded-full shadow-sm'></div>
                                  <div className='text-xs text-gray-300'>
                                    Netflix
                                  </div>
                                </div>
                                <div className='text-xs text-gray-400 font-medium flex items-center'>
                                  <DollarSign className='w-3 h-3' /> -15.99
                                </div>
                              </div>
                              <div className='text-xs text-gray-500 mt-1'>
                                Today at 2:30 PM
                              </div>
                            </div>
                          </div>

                          {/* Home Indicator */}
                          <div className='flex justify-center p-1'>
                            <div className='w-8 h-1 bg-gray-600 rounded-full'></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Device details */}
                    {device === "laptop" && (
                      <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full' />
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
            className='absolute w-2 h-2 bg-white rounded-full blur-sm'
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