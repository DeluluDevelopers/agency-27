"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Lightbulb, Code, Rocket, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business needs, target audience, and technical requirements. We analyze your market, competitors, and create a comprehensive roadmap for your project.",
    duration: "1-2 days",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Lightbulb,
    title: "Prototype",
    description:
      "Rapid prototyping with interactive mockups and technical architecture planning. We create clickable prototypes and define the perfect tech stack for your project.",
    duration: "3-5 days",
    color: "from-violet-500 to-purple-500",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Code,
    title: "Build",
    description:
      "Agile development with daily updates and continuous integration. We build your app using modern technologies with regular demos and feedback loops.",
    duration: "1-3 weeks",
    color: "from-pink-500 to-rose-500",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Rocket,
    title: "Ship",
    description:
      "Deployment, testing, and launch with ongoing support and monitoring. We ensure your app is production-ready and provide post-launch maintenance.",
    duration: "2-3 days",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through steps
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const ActiveIcon = processSteps[activeStep].icon;

  return (
    <section
      id='process'
      className='py-16 xs:py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-950'
    >
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12 xs:mb-16'
        >
          <h2 className='text-3xl xs:text-4xl md:text-5xl font-bold text-white mb-6 heading-accent'>
            How We Build for Gen Z
          </h2>
          <p className='text-lg xs:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Fast, fun, and always on trend. Here's how we turn your idea into
            the next big thing—no boring stuff, just results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className='relative w-full flex flex-col items-center justify-center gap-8'>
          {/* Steps Navigation */}
          <div className='hidden sm:flex w-full items-center justify-between relative max-w-4xl mx-auto'>
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === activeStep;
              return (
                <div
                  key={step.title}
                  className='flex flex-col items-center flex-1 z-10 cursor-pointer group relative'
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Progress Line */}
                  {index < processSteps.length - 1 && (
                    <div className='absolute top-6 left-1/2 w-full h-0.5 bg-gray-700'>
                      <motion.div
                        className='h-full bg-gradient-to-r from-blue-500 to-violet-500'
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      isActive
                        ? `bg-gradient-to-r ${step.color} border-white shadow-lg shadow-blue-500/25`
                        : "bg-gray-800 border-gray-600 hover:border-gray-500"
                    } text-white relative z-10`}
                  >
                    <StepIcon
                      className={`w-6 h-6 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    />
                  </motion.div>

                  <div className='text-center mt-3'>
                    <div
                      className={`font-semibold transition-colors text-sm ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className='text-xs text-gray-500 mt-1'>
                      {step.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Steps */}
          <div className='sm:hidden w-full'>
            <div className='grid grid-cols-2 gap-4'>
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeStep;
                return (
                  <div
                    key={step.title}
                    className='flex flex-col items-center cursor-pointer group'
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                        isActive
                          ? `bg-gradient-to-r ${step.color} border-white shadow-lg`
                          : "bg-gray-800 border-gray-600 hover:border-gray-500"
                      } text-white`}
                    >
                      <StepIcon
                        className={`w-5 h-5 ${
                          isActive ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </motion.div>

                    <div className='text-center mt-2'>
                      <div
                        className={`font-semibold transition-colors text-xs ${
                          isActive ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {step.title}
                      </div>
                      <div className='text-xs text-gray-500 mt-1'>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mt-8'
        >
          <div className='relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 xs:p-8 border border-gray-700/50 max-w-4xl mx-auto overflow-hidden'>
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${processSteps[activeStep].gradient} opacity-20`}
            />

            <div className='relative z-10 text-center'>
              <motion.div
                key={activeStep}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${processSteps[activeStep].color} text-white mb-6 shadow-lg`}
              >
                <ActiveIcon className='w-8 h-8' />
              </motion.div>

              <h3 className='text-2xl font-bold text-white mb-4'>
                {processSteps[activeStep].title}
              </h3>
              <p className='text-gray-300 leading-relaxed text-base xs:text-lg max-w-2xl mx-auto'>
                {processSteps[activeStep].description}
              </p>

              <div className='mt-6 flex items-center justify-center space-x-2'>
                <div className='flex space-x-1'>
                  {processSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeStep
                          ? "bg-blue-400 scale-125"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className='text-sm text-gray-400 ml-2'>
                  {activeStep + 1} of {processSteps.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessSection;
export { ProcessSection };
