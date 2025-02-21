import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import GallerySection from "./Gallery/GallerySection";
import TestimonialsSlider from "./TestimonialsSlider";
import Footer from "./Footer";

interface HomeProps {
  isNavigationTransparent?: boolean;
}

const Home = ({ isNavigationTransparent = true }: HomeProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation isTransparent={isNavigationTransparent} />

      <main>
        <Hero
          backgroundImage="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937"
          title="Professional Makeup Artistry"
          subtitle="Transform your look with expert makeup application and personalized beauty services"
        />

        <GallerySection />

        <TestimonialsSlider />
      </main>

      <Footer
        socialLinks={{
          instagram: "https://instagram.com/makeupartist",
          tiktok: "https://tiktok.com/@makeupartist",
        }}
        contactInfo={{
          email: "contact@makeupartist.com",
          phone: "+1 (555) 123-4567",
        }}
      />
    </div>
  );
};

export default Home;
