import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import GalleryGrid from "./GalleryGrid";
import {
  defaultItems,
  categories,
  GalleryItem,
  Category,
} from "./gallery.data";

interface FeaturedGalleryProps {
  items?: GalleryItem[];
}

const FeaturedGallery = ({
  items = defaultItems.slice(0, 6),
}: FeaturedGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full min-h-[800px] bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Избранное</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с моей коллекцией потрясающих преображений макияжа и
            художественных творений
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category.value}
              variant={
                activeCategory === category.value ? "default" : "secondary"
              }
              className="cursor-pointer text-sm px-4 py-2 hover:bg-primary/90 transition-colors duration-200 ease-in-out"
              onClick={() => handleCategoryChange(category.value)}
            >
              {category.label}
            </Badge>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <GalleryGrid items={filteredItems} />
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              Смотреть все работы
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
