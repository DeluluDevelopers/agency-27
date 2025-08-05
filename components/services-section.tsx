"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Brain,
  Settings,
  ArrowRight,
  CheckCircle,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions that Gen Z can't put down",
    color: "from-violet-500 to-purple-600",
    gradient: "from-violet-500/20 to-purple-600/20",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"],
  },
  {
    icon: Globe,
    title: "Web Sites",
    description:
      "Modern, responsive websites that load fast and look stunning on every device",
    color: "from-blue-500 to-cyan-600",
    gradient: "from-blue-500/20 to-cyan-600/20",
    features: ["Responsive Design", "SEO Optimized", "Performance Focused"],
  },
  {
    icon: Code,
    title: "Custom Software",
    description:
      "Tailored solutions that solve your unique business challenges and scale with you",
    color: "from-green-500 to-emerald-600",
    gradient: "from-green-500/20 to-emerald-600/20",
    features: ["Scalable Architecture", "Cloud Native", "Enterprise Ready"],
  },
];

export function ServicesSection() {
  return (
    <section id='services' className='py-16 xs:py-20 bg-gray-900'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12 xs:mb-16'
        >
          <h2 className='text-3xl xs:text-4xl md:text-5xl font-bold text-white mb-6 heading-accent'>
            What We Build
          </h2>
          <p className='text-lg xs:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            We craft viral, future-ready apps for Gen Z brands, creators, and
            startups. Bold, fast, and fun—that's our jam.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative'
            >
              <div className='relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full overflow-hidden'>
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center relative shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className='w-8 h-8 text-white' />
                  <div className='absolute -top-1 -right-1 w-4 h-4 bg-white/20 rounded-full' />
                </motion.div>

                {/* Content */}
                <div className='relative z-10'>
                  <h3 className='text-2xl font-bold text-white mb-4 heading-accent'>
                    {service.title}
                  </h3>

                  <p className='text-gray-300 leading-relaxed mb-6 text-base'>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className='space-y-3 mb-8'>
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        className='flex items-center space-x-3'
                      >
                        <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                        <span className='text-gray-300 font-medium'>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className='flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:text-blue-300 font-medium'
                  >
                    <span>Learn More</span>
                    <ArrowRight className='w-4 h-4' />
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-center mt-12'
        >
          <Button
            size='lg'
            variant='outline'
            className='border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 group'
            onClick={() => (window.location.href = "/services")}
          >
            See More Services
            <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
