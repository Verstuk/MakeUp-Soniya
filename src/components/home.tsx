import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import FeaturedGallery from "./Gallery/FeaturedGallery";
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
          backgroundImage="back.jpeg"
          title="Профессиональное мастерство визажиста"
          subtitle="Преобразите свой образ с помощью профессионального макияжа и индивидуальных косметических услуг"
        />
        <FeaturedGallery />
        <TestimonialsSlider />
        <ContactForm />
      </main>
      <Footer
        socialLinks={{
          instagram: "https://instagram.com/makeupartist",
          tiktok: "https://tiktok.com/@makeupartist",
          telegram: "https://t.me",
        }}
        contactInfo={{
          email: "contact@makeupartist.com",
          phone: "+1 (555) 123-4567",
        }}
      />
      <div className="w-[6px] h-[12px]"></div>
    </div>
  );
};

export default Home;
