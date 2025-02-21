import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero = ({
  backgroundImage = "back.jpeg",
  title = "Профессиональное мастерство визажиста",
  subtitle = "Преобразите свой образ с помощью профессионального макияжа и индивидуальных косметических услуг",
  ctaText = "Записаться",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroProps) => {
  return (
    <div className="relative w-full h-[800px] bg-neutral-100">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-7xl text-white mb-6"
          style={{ fontFamily: "Great Vibes" }}
        >
          {title}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          {subtitle}
        </p>

        <Button
          size="lg"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
        >
          {ctaText}
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
