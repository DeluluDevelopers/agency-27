"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business needs, target audience, and technical requirements. We analyze your market, competitors, and create a comprehensive roadmap for your project.",
    duration: "1-2 days",
    color: "from-white to-gray-300",
    gradient: "from-white/10 to-gray-300/10",
  },
  {
    icon: Lightbulb,
    title: "Prototype",
    description:
      "Rapid prototyping with interactive mockups and technical architecture planning. We create clickable prototypes and define the perfect tech stack for your project.",
    duration: "3-5 days",
    color: "from-gray-200 to-gray-400",
    gradient: "from-gray-200/10 to-gray-400/10",
  },
  {
    icon: Code,
    title: "Build",
    description:
      "Agile development with daily updates and continuous integration. We build your app using modern technologies with regular demos and feedback loops.",
    duration: "1-3 weeks",
    color: "from-gray-300 to-gray-500",
    gradient: "from-gray-300/10 to-gray-500/10",
  },
  {
    icon: Rocket,
    title: "Ship",
    description:
      "Deployment, testing, and launch with ongoing support and monitoring. We ensure your app is production-ready and provide post-launch maintenance.",
    duration: "2-3 days",
    color: "from-gray-400 to-gray-600",
    gradient: "from-gray-400/10 to-gray-600/10",
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
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const ActiveIcon = processSteps[activeStep].icon;

  return (
    <section
      id='process'
      className='bg-gradient-to-br from-[#0a0a0a] via-black to-[#1a1a1a] h-screen flex items-center'
    >
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-8 xs:mb-10'
        >
          <h2 className='text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-3 heading-accent'>
            How We Build for Gen Z
          </h2>
          <p className='text-sm xs:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Fast, fun, and always on trend. Here's how we turn your idea into
            the next big thing—no boring stuff, just results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className='relative w-full flex flex-col items-center justify-center gap-4 mb-10'>
          {/* Steps Navigation */}
          <div className='hidden sm:flex w-full items-center justify-between relative max-w-3xl mx-auto'>
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
                    <div className='absolute top-5 left-1/2 w-full h-0.5 bg-gray-800'>
                      <motion.div
                        className='h-full bg-gradient-to-r from-white to-gray-400'
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                      isActive
                        ? `bg-gradient-to-r ${step.color} border-white shadow-lg shadow-white/25`
                        : "bg-gray-900 border-gray-700 hover:border-gray-600"
                    } relative z-10`}
                  >
                    <StepIcon
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive ? "text-black" : "text-gray-500"
                      }`}
                    />
                  </motion.div>

                  <div className='text-center mt-2'>
                    <div
                      className={`font-semibold transition-all duration-300 text-xs ${
                        isActive ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className='text-xs text-gray-600 mt-1 transition-all duration-300'>
                      {step.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Steps */}
          <div className='sm:hidden w-full'>
            <div className='grid grid-cols-2 gap-3'>
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
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                        isActive
                          ? `bg-gradient-to-r ${step.color} border-white shadow-lg`
                          : "bg-gray-900 border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      <StepIcon
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive ? "text-black" : "text-gray-500"
                        }`}
                      />
                    </motion.div>

                    <div className='text-center mt-1'>
                      <div
                        className={`font-semibold transition-all duration-300 text-xs ${
                          isActive ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </div>
                      <div className='text-xs text-gray-600 mt-1 transition-all duration-300'>
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
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className='mt-8'
        >
          <div className='relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 xs:p-6 border border-gray-800/50 max-w-3xl mx-auto overflow-hidden'>
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${processSteps[activeStep].gradient} opacity-20 transition-all duration-500`}
            />

            <div className='relative z-10 text-center'>
              <motion.div
                key={activeStep}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${processSteps[activeStep].color} mb-4 shadow-lg`}
              >
                <ActiveIcon className='w-6 h-6 text-black' />
              </motion.div>

              <h3 className='text-lg font-bold text-white mb-3 transition-all duration-300'>
                {processSteps[activeStep].title}
              </h3>
              <p className='text-gray-300 leading-relaxed text-sm xs:text-base max-w-xl mx-auto transition-all duration-300'>
                {processSteps[activeStep].description}
              </p>

              <div className='mt-4 flex items-center justify-center space-x-2'>
                <div className='flex space-x-1'>
                  {processSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                        index === activeStep
                          ? "bg-white scale-125"
                          : "bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
                <span className='text-xs text-gray-500 ml-2 transition-all duration-300'>
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