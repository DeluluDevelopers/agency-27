"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "FinTech Dashboard",
    client: "TechCorp",
    description:
      "Real-time financial analytics platform with AI-powered insights",
    metrics: [
      { icon: TrendingUp, label: "Engagement Boost", value: "+150%" },
      { icon: Users, label: "Active Users", value: "50K+" },
      { icon: Clock, label: "Development Time", value: "2 weeks" },
    ],
    image: "/fintech-dashboard.png",
    tech: ["React", "Spring Boot", "MongoDB", "TensorFlow"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Commerce Mobile App",
    client: "RetailPlus",
    description: "Cross-platform shopping app with AR try-on features",
    metrics: [
      { icon: TrendingUp, label: "Sales Increase", value: "+200%" },
      { icon: Users, label: "Downloads", value: "100K+" },
      { icon: Clock, label: "Launch Time", value: "3 weeks" },
    ],
    image: "/mobile-ar-ecommerce.png",
    tech: ["React Native", "Node.js", "PostgreSQL", "AR Kit"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "AI Chatbot Platform",
    client: "ServiceHub",
    description: "Intelligent customer service automation with NLP",
    metrics: [
      { icon: TrendingUp, label: "Efficiency Gain", value: "+300%" },
      { icon: Users, label: "Support Coverage", value: "24/7" },
      { icon: Clock, label: "Setup Time", value: "10 days" },
    ],
    image: "/ai-chatbot-interface.png",
    tech: ["Next.js", "Python", "OpenAI", "Redis"],
    color: "from-pink-500 to-rose-500",
  },
];

export function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id='cases' className='py-12 xs:py-20 bg-black'>
      <div className='w-full max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-8 xs:mb-16'
        >
          <h2 className='text-2xl xs:text-4xl md:text-5xl font-bold text-white mb-4 heading-accent'>
            Success{" "}
            <span className='bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent'>
              Stories
            </span>
          </h2>
          <p className='text-base xs:text-xl text-gray-300 max-w-xs xs:max-w-3xl mx-auto'>
            Real results from real clients. See how we've transformed businesses
            with our rapid development approach.
          </p>
          <div className='mt-6'>
            <a href='/portfolio'>
              <Button className='bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white rounded-2xl px-6 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300'>
                View All Projects
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Case Study Tabs */}
        <div className='flex justify-center mb-8 xs:mb-12'>
          <div className='flex space-x-2 glass rounded-2xl p-2 shadow-lg border border-gray-800/50 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent max-w-full'>
            {caseStudies.map((study, index) => (
              <button
                key={study.title}
                onClick={() => setActiveCase(index)}
                className={`px-4 xs:px-6 py-2 xs:py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCase === index
                    ? `bg-gradient-to-r ${study.color} text-white shadow-lg neon-blue`
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {study.client}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 items-center'
        >
          {/* Case Study Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className='relative group w-full max-w-md mx-auto lg:max-w-full'
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${caseStudies[activeCase].color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}
            />
            <img
              src={
                caseStudies[activeCase].image ||
                "/placeholder.svg?height=320&width=480"
              }
              alt={caseStudies[activeCase].title}
              className='relative w-full h-48 xs:h-64 sm:h-80 object-cover rounded-3xl shadow-2xl border border-gray-800/50'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl' />
          </motion.div>

          {/* Case Study Details */}
          <div className='space-y-4 xs:space-y-6'>
            <div>
              <div className='text-xs xs:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1 xs:mb-2'>
                {caseStudies[activeCase].client}
              </div>
              <h3 className='text-xl xs:text-3xl font-bold text-white mb-2 xs:mb-4'>
                {caseStudies[activeCase].title}
              </h3>
              <p className='text-sm xs:text-lg text-gray-300 leading-relaxed'>
                {caseStudies[activeCase].description}
              </p>
            </div>

            {/* Metrics */}
            <div className='flex flex-row flex-wrap justify-center items-stretch gap-2 xs:gap-4 w-full'>
              {caseStudies[activeCase].metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex-1 min-w-[120px] max-w-[180px] text-center p-3 xs:p-4 glass rounded-2xl border border-gray-800/50'
                >
                  <metric.icon className='w-5 xs:w-6 h-5 xs:h-6 mx-auto mb-1 xs:mb-2 text-blue-400' />
                  <div className='font-bold text-white text-base xs:text-lg'>
                    {metric.value}
                  </div>
                  <div className='text-xs xs:text-sm text-gray-400'>
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <div className='text-xs xs:text-sm font-semibold text-gray-300 mb-2 xs:mb-3'>
                Technologies Used:
              </div>
              <div className='flex flex-wrap gap-2'>
                {caseStudies[activeCase].tech.map((tech) => (
                  <span
                    key={tech}
                    className='px-2 xs:px-3 py-1 glass text-gray-300 rounded-full text-xs xs:text-sm font-medium border border-gray-800/50'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* <Button
              className={`w-full xs:w-auto bg-gradient-to-r ${caseStudies[activeCase].color} hover:shadow-lg text-white rounded-2xl px-4 xs:px-6 py-2 xs:py-3 font-semibold group neon-blue`}
            >
              View Full Case Study
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
