"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation Variants remain the same
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.6 }
    }
}

const imageItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
}

// Shared Hover Effect configuration
const hoverEffect = {
    scale: 1.07, // Slightly larger scale on hover
    zIndex: 30, // Bring definitively to the front
    boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.25)', // Enhance shadow for pop
    transition: { duration: 0.3, ease: 'easeOut' }
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-cyan-800 via-teal-700 to-teal-600 py-24 md:py-32 px-6 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left - Text */}
        <motion.div
          className="flex-1 lg:pr-8 xl:pr-12 z-10 w-full" // Keep text above default images
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
           {/* ... (text content remains the same) ... */}
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md"
                variants={textItemVariants}
            >
                Discover <span className="text-white/80 block sm:inline">Lavish Med Spa</span>
            </motion.h2>
            <motion.p
                className="text-lg mb-6 text-white/90 leading-relaxed"
                variants={textItemVariants}
            >
                At Lavish Med Spa, we blend artistry with science to redefine beauty and relaxation. Our sanctuary offers personalized, high-end treatments within a serene, luxurious environment designed for your utmost comfort.
            </motion.p>
            <motion.p
                className="text-white/80 mb-8 leading-relaxed"
                variants={textItemVariants}
            >
                Whether rejuvenating your skin, seeking transformative skincare, or sculpting your silhouette, your journey is guided by certified professionals using cutting-edge technology. We craft every experience to feel exclusive, elegant, and truly effective.
            </motion.p>
            <motion.div variants={textItemVariants}>
                <button className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-out">
                    Explore Our Philosophy
                </button>
            </motion.div>
        </motion.div>

        {/* Right - Layered Images */}
        <motion.div
          className="flex-1 relative w-full mt-12 lg:mt-0 h-[450px] sm:h-[500px] lg:h-[550px]"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            {/* Image 1 - Back Layer */}
            <motion.div
              className="absolute top-0 left-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-xl border-2 border-white/10 cursor-pointer z-0" // Default z-0
              variants={imageItemVariants}
              animate={{
                  y: ["0%", "2%", "0%"],
                  transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              whileHover={hoverEffect} // Apply shared hover effect
            >
                <Image
                  src="/lavishspa1.jpg" // Replace
                  alt="Spa Ambiance - Calm"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover scale-105"
                />
                {/* Optional: Subtle overlay appearing on hover */}
                {/* <motion.div className="absolute inset-0 bg-black/20" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{duration: 0.3}}></motion.div> */}
            </motion.div>

            {/* Image 2 - Middle Layer */}
            <motion.div
              className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-3xl overflow-hidden shadow-xl border-2 border-white/15 cursor-pointer z-10" // Default z-10
              variants={imageItemVariants}
              animate={{
                scale: [1, 1.03, 1],
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
               }}
               whileHover={hoverEffect} // Apply shared hover effect
            >
                <Image
                   src="/lavishspa2.jpg" // Replace
                   alt="Treatment Close-up"
                   fill
                   sizes="(max-width: 768px) 50vw, 33vw"
                   className="object-cover"
                />
            </motion.div>

            {/* Image 3 - Top Layer / Small Accent */}
            <motion.div
               className="absolute top-[15%] right-[5%] w-[35%] h-[40%] rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 cursor-pointer z-20 backdrop-blur-sm bg-white/5" // Default z-20
               variants={imageItemVariants}
                // No continuous animation, but add hover effect
               whileHover={hoverEffect} // Apply shared hover effect
            >
                <Image
                  src="/lavishspa6.jpg" // Replace
                  alt="Detail Shot - Luxury Product"
                  fill
                  sizes="(max-width: 768px) 30vw, 20vw"
                  className="object-cover p-1"
                />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;