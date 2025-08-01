"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Trap focus inside mobile menu when open
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;
    const focusable = mobileMenuRef.current.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) (focusable[0] as HTMLElement).focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      } else if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Auto-close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Case Studies", href: "#cases" },
    { name: "Contact", href: "#final-cta" }, // Contact now scrolls to FinalCTASection
  ];

  return (
    <>
      <nav
        className={`fixed z-[50] transition-all duration-1000 ease-in-out
          ${
            isScrolled
              ? "top-4 left-4 right-4 bg-gray-900/15 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/15 shadow-blue-500/20"
              : "top-0 left-0 right-0 w-full border-transparent"
          }
        `}
        style={{
          pointerEvents: "auto",
          background: isScrolled
            ? "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.5) 50%, rgba(51, 65, 85, 0.3) 100%)"
            : "transparent",
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`mx-auto px-4 sm:px-6 lg:px-8 ${
            isScrolled ? "max-w-6xl" : "w-full max-w-7xl"
          }`}
        >
          <div className='flex justify-between items-center h-16'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='flex items-center space-x-2'
            >
              <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-600 rounded-lg flex items-center justify-center neon-blue shadow-lg'>
                <span className='text-white font-bold text-sm'>A</span>
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent'>
                AgileApps
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center flex-wrap gap-x-6 gap-y-2 min-w-0 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:text-blue-400 transition-colors font-medium relative group px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 whitespace-nowrap hover:bg-white/5'
                  style={{ transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)" }}
                  onClick={
                    item.name === "Contact"
                      ? (e) => {
                          e.preventDefault();
                          const el = document.querySelector(item.href);
                          if (el)
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }
                      : undefined
                  }
                >
                  {item.name}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 group-hover:w-full transition-all duration-300 rounded-full'></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='text-white hover:text-blue-400 hover:bg-white/10 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400'
                style={{ minWidth: 44, minHeight: 44 }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-haspopup='true'
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Rendered outside nav container */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 z-[60] bg-black/80 backdrop-blur-lg transition-opacity md:hidden'
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label='Close menu'
            tabIndex={-1}
          />
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className='fixed top-0 right-0 bottom-0 left-0 z-[70] flex flex-col items-center justify-center bg-gray-900/95 backdrop-blur-xl md:hidden outline-none'
            role='dialog'
            aria-modal='true'
            tabIndex={-1}
          >
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(false)}
              className='absolute top-6 right-6 text-white hover:text-blue-400 hover:bg-gray-800/50 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400'
              style={{ minWidth: 44, minHeight: 44 }}
              aria-label='Close menu'
            >
              <X size={32} />
            </Button>
            <nav className='flex flex-col gap-8 w-full items-center mt-12 px-4 max-h-screen overflow-y-auto'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-2xl font-semibold text-gray-200 hover:text-blue-400 transition-colors px-8 py-4 rounded-lg w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-400 relative z-[80]'
                  style={{ minWidth: 120 }}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (item.name === "Contact") {
                      e.preventDefault();
                      const el = document.querySelector(item.href);
                      if (el)
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }
                  }}
                  tabIndex={0}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </>
  );
}
