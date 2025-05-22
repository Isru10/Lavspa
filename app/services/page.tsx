"use client";

import React, { useState, useEffect, useRef, useCallback } from "react"; // Import useCallback
import { motion, AnimatePresence } from "framer-motion";

// Define an interface for the service object for better type safety
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

// Define the services array with the Service type
const services: Service[] = [
    {
        id: "hydrafacial",
        title: "Hydrafacial",
        description: "Deeply cleanse, exfoliate, and hydrate your skin for an instant glow. Perfect for tackling impurities and achieving a refreshed complexion.",
        image: "/lavishspa1.jpg",
    },
    {
        id: "laser",
        title: "Laser Hair Removal",
        description: "Achieve smooth, permanently hair-free skin with our advanced, safe, and effective laser technology. Suitable for various skin types.",
        image: "/lavishspa2.jpg",
    },
    {
        id: "injectables",
        title: "Botox & Fillers",
        description: "Subtly smooth wrinkles and restore volume for a naturally refreshed and youthful appearance. Expertly administered for tailored results.",
        image: "/lavishspa3.jpg",
    },
    {
        id: "peels",
        title: "Chemical Peels",
        description: "Rejuvenate your skin's surface, improve tone, texture, and clarity. Addresses concerns like sun damage, acne scars, and fine lines.",
        image: "/lavishspa4.jpg",
    },
    {
        id: "sculpting",
        title: "Body Sculpting",
        description: "Non-invasively contour and tighten targeted areas to achieve your desired body shape. Reduce stubborn fat and improve definition.",
        image: "/lavishspa5.jpg",
    },
];

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeInOut" } },
};

const AUTO_ROTATE_INTERVAL = 5000;

const ServicesSection = () => {
  // Explicitly type the state
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0].id);

  // Fix: Type the useRef correctly for setInterval return type (number in browser, NodeJS.Timeout in Node)
  const intervalRef = useRef<NodeJS.Timeout | number | null>(null);

  // Wrap nextService in useCallback - it depends only on stable setters/constants
  const nextService = useCallback(() => {
    setSelectedServiceId(currentId => {
      const currentIndex = services.findIndex(s => s.id === currentId);
      const nextIndex = (currentIndex + 1) % services.length;
      return services[nextIndex].id;
    });
  }, []); // No dependencies needed here as setSelectedServiceId is stable

  // Wrap startAutoRotate in useCallback
  const startAutoRotate = useCallback(() => {
    // Clear any existing interval before starting a new one
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    // Set up the new interval
    intervalRef.current = setInterval(() => {
      nextService(); // Use the memoized nextService
    }, AUTO_ROTATE_INTERVAL);
  }, [nextService]); // Dependency on the memoized nextService

  // Fix: Explicitly type the serviceId parameter
  const handleSelectService = (serviceId: string) => {
    // Clear the current interval
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    // Set the selected service
    setSelectedServiceId(serviceId);
    // The useEffect will handle restarting the timer due to selectedServiceId dependency change
  };


  // useEffect for managing the interval lifecycle
  useEffect(() => {
    // Start the timer when the component mounts or when startAutoRotate changes
    // (which only happens if its dependencies change - nextService in this case, which is stable)
    startAutoRotate();

    // Cleanup function: Clear the interval when the component unmounts
    // or before the effect runs again
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
    // Fix: Add startAutoRotate to the dependency array (it's memoized by useCallback)
  }, [selectedServiceId, startAutoRotate]); // Also depends on selectedServiceId to restart after manual select


  const selectedService = services.find(s => s.id === selectedServiceId);

  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-br from-cyan-700 to-teal-600 text-white"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16"
        >
          Our Signature Services
        </motion.h2>

        {/* Layout Container */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

          {/* Service Selector Buttons */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-row md:flex-col flex-wrap md:flex-nowrap justify-center md:justify-start gap-3 md:gap-4">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => handleSelectService(service.id)}
                className={`
                  px-4 py-3 w-auto md:w-full text-left rounded-lg transition-all duration-300 ease-in-out text-base lg:text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-700 focus-visible:ring-white
                  ${ selectedServiceId === service.id
                      ? 'bg-white text-teal-700 shadow-lg scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }
                `}
                whileHover={{ scale: selectedServiceId !== service.id ? 1.03 : 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Service Details Display */}
          <div className="w-full md:w-2/3 lg:w-3/4 min-h-[400px] md:min-h-[450px] lg:min-h-[500px] relative">
            <AnimatePresence mode="wait">
              {/* Ensure selectedService is not undefined before rendering */}
              {selectedService && (
                <motion.div
                  key={selectedService.id}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  // Add absolute positioning only inside AnimatePresence if needed for smooth transitions
                  className="absolute inset-0 bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden h-full flex flex-col lg:flex-row"
                >
                  {/* Image Area */}
                  <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                     <img
                     
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="w-full h-full object-cover"
                     />
                  </div>

                  {/* Text Content Area */}
                  <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                     <h3 className="text-2xl lg:text-3xl font-semibold mb-3 text-teal-700">
                       {selectedService.title}
                     </h3>
                     <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                       {selectedService.description}
                     </p>
                     {/* <motion.button ... >Learn More</motion.button> */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection