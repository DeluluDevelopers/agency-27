"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function FinalCTASection() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("final-cta");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='final-cta'
      className='relative py-20 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-black/20' />
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl' />
      </div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className='absolute inset-0 pointer-events-none'>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-white rounded-full'
              initial={{
                x:
                  typeof window !== "undefined"
                    ? Math.random() * window.innerWidth
                    : 0,
                y: -10,
                opacity: 1,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y:
                  typeof window !== "undefined" ? window.innerHeight + 10 : 800,
                x:
                  typeof window !== "undefined"
                    ? Math.random() * window.innerWidth
                    : 0,
                opacity: 0,
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                ease: "easeOut",
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      )}

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20'
          >
            <Sparkles className='w-5 h-5 text-white' />
            <span className='text-white font-medium'>
              Ready to Go Viral?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight heading-accent'
          >
            Let’s Build the Next Big Thing for Gen Z
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed'
          >
            We help Gen Z brands, creators, and startups launch apps that trend. Want to stand out? Let’s collab and make your vision a reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-6 justify-center items-center'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='lg'
                className='bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group button-genz'
              >
                Let’s Make Your App Trend
                <motion.div
                  className='ml-2'
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className='w-5 h-5' />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 group bg-transparent button-genz'
              >
                <MessageCircle className='w-5 h-5 mr-2' />
                DM Us for a Collab
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-16 pt-8 border-t border-white/20'
          >
            <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-white/80'>
              <div className='flex items-center space-x-2'>
                <a href="mailto:hello@agileapps.dev" className="font-medium hover:text-white transition-colors">📧 hello@agileapps.dev</a>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='font-medium'>📱 +1 (555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='font-medium'>⚡ 2-4 Week Delivery</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
