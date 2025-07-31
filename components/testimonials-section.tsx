"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    content:
      "AgileApps delivered our fintech platform in just 2 weeks. The quality and speed exceeded all expectations.",
    rating: 5,
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, RetailPlus",
    content: "The AR shopping app they built increased our sales by 200%. Incredible ROI and fantastic team.",
    rating: 5,
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Emily Johnson",
    role: "VP Product, ServiceHub",
    content: "Their AI chatbot solution transformed our customer service. 24/7 support with human-like interactions.",
    rating: 5,
    avatar: "/professional-woman-avatar-2.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 xs:py-20 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 xs:mb-16"
        >
          <h2 className="text-2xl xs:text-4xl md:text-5xl font-bold text-white mb-4 heading-accent">
            Gen Z Loves Us
          </h2>
          <p className="text-base xs:text-xl text-gray-300 max-w-xs xs:max-w-3xl mx-auto">
            Real reviews from real people. Our apps are built to trend, and our clients are vibing with the results.
          </p>
        </motion.div>

        {/* Responsive Testimonials Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Card className="rounded-3xl glass border border-gray-800/50 shadow-xl h-full flex flex-col p-4 xs:p-6">
                <CardHeader className="flex flex-col items-center gap-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-t-3xl p-2 xs:p-4">
                  <Quote className="w-7 xs:w-8 h-7 xs:h-8 text-blue-400 mb-2 opacity-60" />
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 xs:w-5 h-4 xs:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between p-2 xs:p-4">
                  <p className="text-gray-300 mb-4 xs:mb-6 leading-relaxed text-sm xs:text-base md:text-lg text-center">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center space-x-3 xs:space-x-4 mt-auto">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 xs:w-12 h-10 xs:h-12 rounded-full border-2 border-gray-700"
                    />
                    <div>
                      <div className="font-semibold text-white text-sm xs:text-base">{testimonial.name}</div>
                      <div className="text-xs xs:text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-8 mt-8 xs:mt-16"
        >
          <div className="text-center glass rounded-2xl p-4 xs:p-6 border border-gray-800/50">
            <div className="text-2xl xs:text-3xl font-bold text-white mb-1 xs:mb-2">98%</div>
            <div className="text-gray-400 text-xs xs:text-base">Client Satisfaction</div>
          </div>
          <div className="text-center glass rounded-2xl p-4 xs:p-6 border border-gray-800/50">
            <div className="text-2xl xs:text-3xl font-bold text-white mb-1 xs:mb-2">50+</div>
            <div className="text-gray-400 text-xs xs:text-base">Projects Delivered</div>
          </div>
          <div className="text-center glass rounded-2xl p-4 xs:p-6 border border-gray-800/50">
            <div className="text-2xl xs:text-3xl font-bold text-white mb-1 xs:mb-2">2-4</div>
            <div className="text-gray-400 text-xs xs:text-base">Week Average</div>
          </div>
          <div className="text-center glass rounded-2xl p-4 xs:p-6 border border-gray-800/50">
            <div className="text-2xl xs:text-3xl font-bold text-white mb-1 xs:mb-2">24/7</div>
            <div className="text-gray-400 text-xs xs:text-base">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
