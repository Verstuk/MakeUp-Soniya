import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/Gallery/GallerySection";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
