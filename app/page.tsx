
'use client';

import Link from 'next/link';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TripsSection from '../components/TripsSection';
import GallerySection from '../components/GallerySection';
import FleetSection from '../components/FleetSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <TripsSection />
      <GallerySection />
      <FleetSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}