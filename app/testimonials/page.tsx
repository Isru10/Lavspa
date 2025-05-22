"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// Define the Testimonial type for TypeScript
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    role: "Entrepreneur",
    quote:
      "Lavish Med Spa transformed my skin! The experience was luxurious and the staff was incredibly professional.",
    avatar: "/lavishspa.jpg", 
  },
  {
    name: "James Carter",
    role: "Actor",
    quote:
      "I always feel refreshed and glowing after every visit. Their facials are top-notch! Cannot recommend them enough.", // Slightly longer quote
    avatar: "/lavishspa.jpg",
  },
  {
    name: "Emma Collins",
    role: "Influencer",
    quote:
      "Everything was amazing!", // Short quote
    avatar: "/lavishspa.jpg",
  },
  {
    name: "Liam Walker",
    role: "Fitness Coach",
    quote:
      "Their body contouring service helped me feel more confident than ever. Absolutely stunning results and the team is wonderful.",
    avatar: "/lavishspa.jpg",
  },
  {
     name: "Olivia Davis",
     role: "Designer",
     quote:
       "The attention to detail and personalized care here are unmatched. Found my go-to spa!",
     avatar: "/lavishspa.jpg",
   },
   {
    name: "Noah Miller",
    role: "Photographer",
    quote:
      "Laser hair removal was so smooth and effective. The team made me feel comfortable throughout the entire process. Will be back for other services.",
    avatar: "/lavishspa.jpg",
  },
];


// --- Testimonial Card Component ---
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div
        // This outer div gets sized by the flex container and provides spacing
        className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] mx-4 py-2" // Add slight vertical padding if needed for stretch space
        aria-label={`Testimonial from ${testimonial.name}`}
    >
        <div className="bg-white/10 backdrop-blur-sm text-white rounded-2xl p-6 shadow-xl border border-white/10 h-full flex flex-col"> {/* Removed justify-between, added flex flex-col */}
            <FaQuoteLeft className="text-3xl mb-4 text-white/60 flex-shrink-0" /> {/* Ensure icon doesn't shrink */}
            <p className="text-md sm:text-lg leading-relaxed mb-6 italic grow"> {/* Added grow class */}
                {testimonial.quote}
            </p>
            {/* Use mt-auto on the container div for the avatar/name to push it down */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10 flex-shrink-0"> {/* Ensure footer doesn't shrink */}
                <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/50"
                    onError={(e) => (e.currentTarget.src = '/images/avatar-fallback.png')}
                />
                <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                </div>
            </div>
        </div>
    </div>
);


// --- Main Testimonials Section Component ---
const TestimonialsSection = () => {

  const extendedTestimonials = [...testimonials, ...testimonials];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: testimonials.length * 8,
          ease: "linear",
        },
      },
    },
  };


  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-cyan-700 to-teal-600 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Straight from Our Clients
        </motion.h2>

        <div className="relative w-full">
           <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-teal-600 via-teal-600/80 to-transparent z-10 pointer-events-none"></div>
           <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-cyan-700 via-cyan-700/80 to-transparent z-10 pointer-events-none"></div>

           <motion.div
                // Added items-stretch here!
                className="flex items-stretch"
                variants={marqueeVariants}
                animate="animate"
                whileHover={{ animationPlayState: 'paused' }}
            >
                {extendedTestimonials.map((testimonial, index) => (
                     <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;