import React, { useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import GalleryGrid from "./GalleryGrid";
import {
  defaultItems,
  categories,
  GalleryItem,
  Category,
} from "./gallery.data";

interface FullGalleryProps {
  items?: GalleryItem[];
}

const FullGallery = ({ items = defaultItems }: FullGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const getCategoryCount = (category: Category) => {
    return category === "all"
      ? items.length
      : items.filter((item) => item.category === category).length;
  };

  return (
    <section className="w-full min-h-screen bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Портфолио</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полная коллекция моих работ в различных стилях и техниках
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
              {`${category.label} (${getCategoryCount(category.value)})`}
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
      </div>
    </section>
  );
};

export default FullGallery;
