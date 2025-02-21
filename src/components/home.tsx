import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import GallerySection from "./Gallery/GallerySection";
import TestimonialsSlider from "./TestimonialsSlider";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

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
          title="Профессиональное мастерство визажиста"
          subtitle="Преобразите свой образ с помощью профессионального макияжа и индивидуальных косметических услуг"
        />

        <GallerySection />

        <TestimonialsSlider />
        <ContactForm />
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
