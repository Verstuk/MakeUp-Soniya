import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import GalleryGrid from "./GalleryGrid";

type Category =
  | "all"
  | "bridal"
  | "editorial"
  | "natural"
  | "evening"
  | "effects";

interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  category: Category;
}

interface GallerySectionProps {
  items?: GalleryItem[];
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "bridal", label: "Свадебный" },
  { value: "editorial", label: "Фэшн" },
  { value: "natural", label: "Естественный" },
  { value: "evening", label: "Вечерний" },
  { value: "effects", label: "Спецэффекты" },
];

const defaultItems: GalleryItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    title: "Свадебный макияж",
    description: "Элегантный свадебный образ в естественных тонах",
    category: "bridal",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1503236823255-94609f598e71",
    title: "Editorial Look",
    description: "High fashion editorial makeup",
    category: "editorial",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1526045478516-99145907023c",
    title: "Natural Glam",
    description: "Soft glam for everyday wear",
    category: "natural",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1512257739666-7ee1a41ff472",
    title: "Evening Makeup",
    description: "Dramatic evening look",
    category: "evening",
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    title: "Special Effects",
    description: "Creative special effects makeup",
    category: "effects",
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Red Carpet",
    description: "Celebrity-inspired red carpet look",
    category: "evening",
  },
];

const GallerySection = ({ items = defaultItems }: GallerySectionProps) => {
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
          <Button variant="outline" size="lg">
            Смотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
