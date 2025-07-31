"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero3D } from "@/components/hero-3d"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-violet-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex flex-col gap-8 items-center lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass rounded-full px-3 py-1.5 mb-4 mt-6 sm:mt-8 text-xs sm:text-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Gen Z App Wizards</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight heading-accent mt-2 xs:mt-4"
            style={{ wordBreak: 'break-word' }}
          >
            Apps for the Next Gen<br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Built Fast. Built for You.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xs xs:max-w-sm sm:max-w-xl mx-auto"
          >
            We build bold, viral, and future-proof apps for Gen Z and the digital generation. Want your idea to trend? Let’s make it happen—faster than you can say “go viral.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-3 w-full sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white rounded-2xl px-4 xs:px-6 py-2 xs:py-3 text-base xs:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group neon-blue button-genz"
              >
                Let’s Build Something Cool
                <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-2xl px-4 xs:px-6 py-2 xs:py-3 text-base xs:text-lg font-semibold border-2 border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 bg-transparent text-white button-genz"
              >
                See Gen Z Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full flex flex-row justify-center items-center gap-6 xs:gap-8 sm:gap-12 mt-8 px-2"
          >
            <div className="text-center">
              <div className="text-lg xs:text-xl sm:text-2xl font-bold text-white">50+</div>
              <div className="text-xs xs:text-sm text-gray-300">Apps Shipped</div>
            </div>
            <div className="text-center">
              <div className="text-lg xs:text-xl sm:text-2xl font-bold text-white">2-4</div>
              <div className="text-xs xs:text-sm text-gray-300">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-lg xs:text-xl sm:text-2xl font-bold text-white">98%</div>
              <div className="text-xs xs:text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right 3D Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[200px] xs:h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] mt-8 lg:mt-0"
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  )
}
