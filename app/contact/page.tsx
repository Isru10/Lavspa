"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi"; // Icons remain useful

// Animation variants (can be reused)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Variant specifically for the map fading/scaling in
const mapVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const ContactSectionWithMap = () => {
    // --- Hydration Safety ---
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
       return (
         <section id="contact" className="py-24 bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-600 min-h-[60vh]">
             <div className="max-w-6xl mx-auto px-6 opacity-0"></div>
         </section>
       );
    }
    // --- End Hydration Safety ---

    // !!! IMPORTANT: Replace this src with your actual Google Maps embed src !!!
    const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1929912681172!2d38.78594099999998!3d8.993119000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850054017e3b%3A0x6142a63bcaecac26!2sLavish%20Medical%20Spa!5e0!3m2!1sen!2set!4v1746346652217!5m2!1sen!2set"; // Replace with your Map Embed SRC
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1929912681172!2d38.78594099999998!3d8.993119000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850054017e3b%3A0x6142a63bcaecac26!2sLavish%20Medical%20Spa!5e0!3m2!1sen!2set!4v1746346652217!5m2!1sen!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  return (
    <section
        id="contact"
        className="py-24 bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-600 text-white overflow-hidden"
    >
        <div className="max-w-6xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-center mb-16 drop-shadow-lg"
            >
                Visit Us or Get in Touch
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">

                {/* Left Side: Contact Info (Remains the same) */}
                <motion.div
                    className="lg:w-2/5 space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 border-b-2 border-white/20 pb-3">
                        Contact Details
                    </motion.h3>

                    {/* Address */}
                    <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                        <FiMapPin className="text-3xl text-white/80 mt-1 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h4 className="font-medium text-lg">Address</h4>
                            <p className="text-white/80 group-hover:text-white transition-colors">
                           Bole Medhanialem,<br />
                                 Hotel Adorsam Apartments 5th floor
                            </p>
                        </div>
                    </motion.div>
                    {/* Phone */}
                     <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                        <FiPhone className="text-3xl text-white/80 mt-1 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h4 className="font-medium text-lg">Phone</h4>
                            <a href="tel:+251 970 44 44 41" className="text-white/80 group-hover:text-white transition-colors hover:underline">+251 970 44 44 41</a>
                        </div>
                    </motion.div>
                    {/* Email */}
                     <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                        <FiMail className="text-3xl text-white/80 mt-1 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h4 className="font-medium text-lg">Email</h4>
                            <a href="mailto:info@lavishmedspa.com" className="text-white/80 group-hover:text-white transition-colors hover:underline">info@lavishmedspa.com</a>
                        </div>
                    </motion.div>
                    {/* Hours */}
                     <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                        <FiClock className="text-3xl text-white/80 mt-1 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h4 className="font-medium text-lg">Hours</h4>
                            <p className="text-white/80 group-hover:text-white transition-colors">
                                Mon - Fri: 9:00 AM - 7:00 PM<br />
                                Saturday: 10:00 AM - 5:00 PM<br/>
                                Sunday: Closed
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Embedded Map */}
                <motion.div
                     className="lg:w-3/5"
                     // Use simple variant for the container, animate children individually
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.2 }}
                >
                     <motion.h3
                        variants={itemVariants} // Use item variant for heading entry
                        className="text-2xl font-semibold mb-6 border-b-2 border-white/20 pb-3"
                    >
                        Find Us Here
                    </motion.h3>

                    <motion.div
                        className="aspect-w-16 aspect-h-9 md:aspect-h-10 lg:aspect-h-11 rounded-xl overflow-hidden shadow-2xl border border-white/10" // Responsive aspect ratio, rounded corners, shadow
                        variants={mapVariant} // Apply fade/scale animation
                    >
                        <iframe
                            src={mapEmbedSrc}
                            width="100%"
                            height="100%" // Fill the aspect ratio container
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Location of Lavish Med Spa`} // Accessibility
                        ></iframe>
                    </motion.div>
                     {/* Optional: Add a Directions Button below map */}
                     {/* <motion.div variants={itemVariants} className="mt-6 text-center lg:text-left">
                          <a
                              href="YOUR_GOOGLE_MAPS_DIRECTIONS_LINK_HERE" // Replace with your directions link
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-white text-teal-700 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                           >
                              Get Directions
                          </a>
                     </motion.div> */}
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default ContactSectionWithMap;