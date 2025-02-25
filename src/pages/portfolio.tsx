import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FullGallery from "@/components/Gallery/FullGallery";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <FullGallery />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
