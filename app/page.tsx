import Navbar from "@/components/Navbar";
import AboutSection from "./about/page";
import ContactSection from "./contact/page";
import HeroSection from "./hero/page";
import ServicesSection from "./services/page";
import TestimonialsSection from "./testimonials/page";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   
   <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
        <Navbar/>
          <HeroSection/>
          <ServicesSection/>
          <TestimonialsSection/>
          <AboutSection/>
          <ContactSection/>
        <Footer/>
   </div>
  );
}
