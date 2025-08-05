"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Palette,
  Database,
  Cloud,
  Zap,
  Shield,
  Users,
  BarChart3,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navigation } from "@/components/navigation";

const services = [
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-600",
    gradient: "from-blue-500/20 to-cyan-600/20",
    features: [
      "Native iOS & Android Development",
      "React Native & Flutter Apps",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Performance Optimization",
    ],
    price: "Starting from $5,000",
  },
  {
    title: "Web Development",
    description:
      "Full-stack web applications with modern architecture and responsive design.",
    icon: Globe,
    color: "from-violet-500 to-purple-600",
    gradient: "from-violet-500/20 to-purple-600/20",
    features: [
      "Frontend & Backend Development",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
      "Progressive Web Apps",
      "SEO Optimization",
    ],
    price: "Starting from $3,000",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create engaging and intuitive user experiences.",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    gradient: "from-pink-500/20 to-rose-600/20",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Interactive Prototypes",
      "Design Handoff",
      "Usability Testing",
    ],
    price: "Starting from $2,500",
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions designed to meet your specific business requirements.",
    icon: Code,
    color: "from-green-500 to-emerald-600",
    gradient: "from-green-500/20 to-emerald-600/20",
    features: [
      "Business Process Automation",
      "Custom CRM Systems",
      "Inventory Management",
      "Reporting Dashboards",
      "Integration Services",
      "Legacy System Migration",
    ],
    price: "Starting from $8,000",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions for modern applications.",
    icon: Cloud,
    color: "from-orange-500 to-red-600",
    gradient: "from-orange-500/20 to-red-600/20",
    features: [
      "AWS/Azure/GCP Setup",
      "Serverless Architecture",
      "Container Orchestration",
      "CI/CD Pipelines",
      "Monitoring & Logging",
      "Disaster Recovery",
    ],
    price: "Starting from $4,000",
  },
  {
    title: "Data Analytics",
    description:
      "Data-driven insights and analytics solutions to optimize your business performance.",
    icon: BarChart3,
    color: "from-indigo-500 to-blue-600",
    gradient: "from-indigo-500/20 to-blue-600/20",
    features: [
      "Data Visualization",
      "Business Intelligence",
      "Predictive Analytics",
      "Real-time Dashboards",
      "Data Pipeline Setup",
      "Performance Metrics",
    ],
    price: "Starting from $6,000",
  },
];

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Flutter", icon: "📱" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Firebase", icon: "🔥" },
  { name: "GraphQL", icon: "🔗" },
];

export default function ServicesPage() {
  return (
    <main className='min-h-screen bg-black overflow-hidden'>
      <Navigation />

      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-violet-500/30 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-violet-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-violet-500/15 rounded-full blur-3xl' />

        {/* Animated grid pattern */}
        <div className='absolute inset-0 opacity-20'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className='flex items-center justify-center mb-6'>
            <Link href='/'>
              <Button
                variant='ghost'
                className='mr-4 text-gray-300 hover:text-blue-400 transition-colors'
              >
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Home
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-gray-700/50 backdrop-blur-sm'
          >
            <Sparkles className='w-5 h-5 text-blue-400' />
            <span className='text-sm font-medium text-gray-300'>
              Our Services
            </span>
          </motion.div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
            We Build{" "}
            <span className='bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient'>
              Everything
            </span>{" "}
            You Need
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            From mobile apps to web platforms, we deliver cutting-edge solutions
            that drive your business forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group'
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className='w-8 h-8 text-white' />
              </div>

              <h3 className='text-2xl font-bold text-white mb-4'>
                {service.title}
              </h3>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                {service.description}
              </p>

              <div className='space-y-3 mb-6'>
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className='flex items-center space-x-3'
                  >
                    <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                    <span className='text-gray-300 text-sm'>{feature}</span>
                  </div>
                ))}
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-blue-400 font-semibold'>
                  {service.price}
                </span>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl font-bold text-white mb-4'>
            Technologies We Use
          </h2>
          <p className='text-gray-300 mb-12 max-w-2xl mx-auto'>
            We stay up-to-date with the latest technologies to deliver modern,
            scalable solutions.
          </p>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group'
              >
                <div className='text-3xl mb-2 group-hover:scale-110 transition-transform duration-300'>
                  {tech.icon}
                </div>
                <p className='text-white font-medium text-sm'>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/20 backdrop-blur-sm'
        >
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Start Your Project?
            </h2>
            <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
              Let's discuss your requirements and create something amazing
              together. We're here to turn your vision into reality.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300'
                onClick={() => (window.location.href = "/contact")}
              >
                <MessageCircle className='w-5 h-5 mr-2' />
                Start a Project
              </Button>

              <Button
                variant='outline'
                size='lg'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300'
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/deluluissoluluagency/",
                    "_blank"
                  )
                }
              >
                DM on Instagram
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
