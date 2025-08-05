"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowLeft,
  Instagram,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:deluluissoluluagency@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open default email client
      window.location.href = mailtoLink;
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <span className='text-sm font-medium text-gray-300'>Contact</span>
          </motion.div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
            Let's{" "}
            <span className='bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient'>
              Build
            </span>{" "}
            Something Cool
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Ready to turn your idea into reality? Get in touch and let's create
            something amazing together.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'
          >
            <h2 className='text-2xl font-bold text-white mb-6'>
              Send us a message
            </h2>

            {submitStatus === "success" && (
              <div className='mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg'>
                <p className='text-green-400 text-sm'>
                  Email client opened! Please send the message to complete your
                  inquiry.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className='mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg'>
                <p className='text-red-400 text-sm'>
                  Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Name
                  </label>
                  <Input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Your name'
                    className='bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
                    required
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Email
                  </label>
                  <Input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='your@email.com'
                    className='bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
                    required
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Subject
                </label>
                <Input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder='What can we help you with?'
                  className='bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Message
                </label>
                <Textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Tell us about your project...'
                  rows={6}
                  className='bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 resize-none'
                  required
                />
              </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white rounded-xl py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <Send className='w-5 h-5 mr-2' />
                {isSubmitting ? "Opening Email..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='space-y-8'
          >
            {/* Quick Contact */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
              <h3 className='text-xl font-bold text-white mb-6'>
                Get in touch
              </h3>

              <div className='space-y-4'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl flex items-center justify-center'>
                    <Mail className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className='text-gray-300 text-sm'>Email</p>
                    <a
                      href='mailto:deluluissoluluagency@gmail.com'
                      className='text-white font-medium hover:text-blue-400 transition-colors'
                    >
                      deluluissoluluagency@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center'>
                    <Instagram className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className='text-gray-300 text-sm'>Instagram</p>
                    <a
                      href='https://www.instagram.com/deluluissoluluagency/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white font-medium hover:text-violet-400 transition-colors'
                    >
                      @deluluissoluluagency
                    </a>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center'>
                    <Clock className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className='text-gray-300 text-sm'>Response Time</p>
                    <p className='text-white font-medium'>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
              <h3 className='text-xl font-bold text-white mb-6'>
                Quick actions
              </h3>

              <div className='space-y-4'>
                <a
                  href='https://www.instagram.com/deluluissoluluagency/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-between p-4 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-xl border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300 group'
                >
                  <div className='flex items-center space-x-3'>
                    <Instagram className='w-5 h-5 text-violet-400' />
                    <span className='text-white font-medium'>
                      DM us on Instagram
                    </span>
                  </div>
                  <div className='text-violet-400 group-hover:translate-x-1 transition-transform'>
                    →
                  </div>
                </a>

                <a
                  href='mailto:deluluissoluluagency@gmail.com'
                  className='flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group'
                >
                  <div className='flex items-center space-x-3'>
                    <Mail className='w-5 h-5 text-blue-400' />
                    <span className='text-white font-medium'>
                      Send us an email
                    </span>
                  </div>
                  <div className='text-blue-400 group-hover:translate-x-1 transition-transform'>
                    →
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
