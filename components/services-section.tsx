"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Brain, Settings, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Apps",
    description: "Full-stack web applications with React, Next.js, and Spring Boot",
    color: "from-blue-500 to-cyan-500",
    features: ["Responsive Design", "SEO Optimized", "Performance Focused"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android",
    color: "from-violet-500 to-purple-500",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Smart features powered by machine learning and AI APIs",
    color: "from-pink-500 to-rose-500",
    features: ["GPT Integration", "Custom Models", "Smart Automation"],
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and cloud infrastructure",
    color: "from-green-500 to-emerald-500",
    features: ["Auto Deployment", "Cloud Scaling", "Monitoring"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 xs:py-16 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 xs:mb-16"
        >
          <h2 className="text-2xl xs:text-4xl md:text-5xl font-bold text-white mb-4 heading-accent">
            What We Do for the Digital Generation
          </h2>
          <p className="text-base xs:text-xl text-gray-300 max-w-xs xs:max-w-3xl mx-auto">
            We craft viral, future-ready apps for Gen Z brands, creators, and startups. If it’s bold, fast, and fun—we’re in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-4 xs:p-8 hover:neon-blue transition-all duration-300 border border-gray-800/50 hover:border-blue-500/30 h-full">
                {/* Animated Icon Container */}
                <motion.div
                  className={`w-14 xs:w-20 h-14 xs:h-20 mx-auto mb-4 xs:mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <service.icon className="w-8 xs:w-10 h-8 xs:h-10 text-white" />
                  </motion.div>

                  {/* Corner Accent */}
                  <div className="absolute top-1 right-1 w-2 xs:w-3 h-2 xs:h-3 bg-white/20 rounded-full" />
                </motion.div>

                <h3 className="text-lg xs:text-xl font-bold text-white mb-2 xs:mb-4 text-center heading-accent">{service.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed mb-4 xs:mb-6 text-sm xs:text-base">
                  {service.title === 'Web Apps' && 'Websites that wow, load fast, and look great on every device.'}
                  {service.title === 'Mobile Apps' && 'Mobile experiences Gen Z can’t put down. Swipe, tap, love!'}
                  {service.title === 'AI Integration' && 'Smart features that feel like magic. Chatbots, recs, and more.'}
                  {service.title === 'DevOps & CI/CD' && 'Launch fast, scale big, sleep easy. We automate the boring stuff!'}
                </p>

                {/* Features List */}
                <div className="space-y-1 xs:space-y-2 mb-4 xs:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center space-x-2 text-xs xs:text-sm text-gray-400"
                    >
                      <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-blue-400 rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:text-blue-300 text-xs xs:text-sm"
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
