// components/Footer.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Assuming Next.js for links
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Example social icons

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.2, // Stagger children inside the main container
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const socialIconHover = {
    scale: 1.2,
    rotate: 5, // Slight rotation on hover
    transition: { type: 'spring', stiffness: 300, damping: 10 },
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-teal-900 text-gray-300 pt-16 pb-8" // Dark teal background
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger when footer starts entering view
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Brand/Logo & Description */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-3 font-sans">
              Lavish Med Spa
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Enhancing natural beauty with expert care and advanced aesthetic
              treatments.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-cyan-300 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-300 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-300 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-300 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info (Simplified) */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bole Medhanialem, Hotel Adorsam Apartments 5th floor,</li>
              <li>Addis Ababa, Ethiopia</li>
              <li className="pt-2">
                <a href="tel:+251970444441" className="hover:text-cyan-300 transition-colors">
                    +251 970 44 44 41
                </a>
                </li>
              <li>
                <a href="mailto:info@lavishmedspa.et" className="hover:text-cyan-300 transition-colors">
                  info@lavishmedspa.et
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social Media */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Replace '#' with your actual social media links */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-colors"
                 whileHover={socialIconHover}
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-colors"
                 whileHover={socialIconHover}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-colors"
                 whileHover={socialIconHover}
              >
                <FaTwitter size={20} />
              </motion.a>
               <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-colors"
                 whileHover={socialIconHover}
              >
                <FaLinkedinIn size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright */}
        <motion.div
          className="border-t border-teal-700 pt-6 mt-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }} // Delay slightly after grid items animate
        >
          © {currentYear} Lavish Med Spa. All Rights Reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;