import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

interface GalleryGridProps {
  items?: GalleryItem[];
}

const defaultItems: GalleryItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    title: "Bridal Makeup",
    description: "Elegant bridal look with natural tones",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1503236823255-94609f598e71",
    title: "Editorial Look",
    description: "High fashion editorial makeup",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1526045478516-99145907023c",
    title: "Natural Glam",
    description: "Soft glam for everyday wear",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1512257739666-7ee1a41ff472",
    title: "Evening Makeup",
    description: "Dramatic evening look",
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    title: "Special Effects",
    description: "Creative special effects makeup",
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Red Carpet",
    description: "Celebrity-inspired red carpet look",
  },
];

const GalleryGrid = ({ items = defaultItems }: GalleryGridProps) => {
  return (
    <div className="w-full h-[700px] bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-hidden cursor-pointer group">
              <div className="relative aspect-square">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
