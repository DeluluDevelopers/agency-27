"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Code, Rocket } from "lucide-react"
import { useState } from "react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business needs, target audience, and technical requirements",
    duration: "1-2 days",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Prototype",
    description: "Rapid prototyping with interactive mockups and technical architecture planning",
    duration: "3-5 days",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Code,
    title: "Build",
    description: "Agile development with daily updates and continuous integration",
    duration: "1-3 weeks",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Rocket,
    title: "Ship",
    description: "Deployment, testing, and launch with ongoing support and monitoring",
    duration: "2-3 days",
    color: "from-green-500 to-emerald-500",
  },
]

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const ActiveIcon = processSteps[activeStep].icon

  return (
    <section id="process" className="py-8 xs:py-10 sm:py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-950">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 flex flex-col gap-6 xs:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2 xs:mb-4"
        >
          <h2 className="text-2xl xs:text-3xl md:text-5xl font-bold text-white mb-2 xs:mb-4 heading-accent">
            How We Build for Gen Z
          </h2>
          <p className="text-base xs:text-lg md:text-xl text-gray-300 max-w-xs xs:max-w-2xl mx-auto">
            Fast, fun, and always on trend. Here’s how we turn your idea into the next big thing—no boring stuff, just results.
          </p>
        </motion.div>

        {/* Responsive Progress Bar & Steps */}
        <div className="relative w-full flex flex-col items-center justify-center gap-6 xs:gap-8">
          {/* Steps (Desktop) */}
          <div className="hidden sm:flex w-full items-center justify-between relative" style={{ minHeight: '72px' }}>
            {processSteps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <div key={step.title} className="flex flex-col items-center flex-1 z-10 cursor-pointer group" onClick={() => setActiveStep(index)}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 xs:w-14 h-12 xs:h-14 rounded-full flex items-center justify-center transition-all duration-300 border-4 bg-gradient-to-r ${step.color} text-white shadow-lg neon-blue border-transparent`}
                    style={{ margin: 0 }}
                  >
                    <StepIcon className="w-7 xs:w-8 h-7 xs:h-8" />
                  </motion.div>
                  <div className="text-center mt-1 xs:mt-2">
                    <div className={`font-semibold transition-colors text-xs md:text-base text-white`}>{step.title}</div>
                    <div className="text-xs text-gray-400 mt-1 whitespace-nowrap">{step.duration}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Steps (Mobile) */}
          <div className="sm:hidden w-full flex flex-col items-center relative" style={{ minHeight: '72px' }}>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-8 w-full py-2 xs:py-4">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <div key={step.title} className="flex flex-col items-center cursor-pointer group" onClick={() => setActiveStep(index)}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 xs:w-14 h-12 xs:h-14 rounded-full flex items-center justify-center transition-all duration-300 border-4 bg-gradient-to-r ${step.color} text-white shadow-lg neon-blue border-transparent`}
                      style={{ margin: 0 }}
                    >
                      <StepIcon className="w-7 xs:w-8 h-7 xs:h-8" />
                    </motion.div>
                    <div className="text-center mt-1 xs:mt-2">
                      <div className={`font-semibold transition-colors text-xs md:text-base text-white`}>{step.title}</div>
                      <div className="text-xs text-gray-400 mt-1 whitespace-nowrap">{step.duration}</div>
                    </div>
                  </div>
                )
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
          className="glass rounded-2xl p-4 xs:p-6 shadow-lg max-w-xs xs:max-w-2xl sm:max-w-3xl mx-auto w-full mt-2 xs:mt-4"
        >
          <div className="text-center">
            <div
              className={`inline-flex items-center justify-center w-12 xs:w-14 h-12 xs:h-14 rounded-2xl bg-gradient-to-r ${processSteps[activeStep].color} text-white mb-2 xs:mb-4`}
            >
              <ActiveIcon className="w-7 xs:w-8 h-7 xs:h-8" />
            </div>
            <h3 className="text-lg xs:text-xl font-bold text-white mb-1 xs:mb-2">{processSteps[activeStep].title}</h3>
            <p className="text-sm xs:text-base text-gray-300 leading-relaxed">{processSteps[activeStep].description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
export { ProcessSection }

