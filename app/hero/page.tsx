'use client';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 via-cyan-700 to-teal-600 py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-50 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-700">
              Lavish Med Spa
            </span>
            <br />
            Where Wellness Meets Elegance
          </h1>
          <p className="mt-5 text-lg text-gray-200 max-w-md leading-relaxed">
            Experience a blend of rejuvenation and luxury, tailored just for you.
          </p>
          


            <LoginLink className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-700 to-teal-600 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-transform duration-300">  
            Book Your Appointment <BsArrowRight />
            </LoginLink>


        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/lavishspa.jpg"
              alt="Lavish Med Spa"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
