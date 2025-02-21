import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const defaultItems: GalleryItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    title: "Bridal Makeup",
    description: "Elegant bridal look with natural tones",
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

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full min-h-[800px] bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning makeup transformations and
            artistic creations
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>
              All
            </TabsTrigger>
            <TabsTrigger
              value="bridal"
              onClick={() => setActiveCategory("bridal")}
            >
              Bridal
            </TabsTrigger>
            <TabsTrigger
              value="editorial"
              onClick={() => setActiveCategory("editorial")}
            >
              Editorial
            </TabsTrigger>
            <TabsTrigger
              value="natural"
              onClick={() => setActiveCategory("natural")}
            >
              Natural
            </TabsTrigger>
            <TabsTrigger
              value="evening"
              onClick={() => setActiveCategory("evening")}
            >
              Evening
            </TabsTrigger>
            <TabsTrigger
              value="effects"
              onClick={() => setActiveCategory("effects")}
            >
              Effects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <GalleryGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="bridal" className="mt-0">
            <GalleryGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="editorial" className="mt-0">
            <GalleryGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="natural" className="mt-0">
            <GalleryGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="evening" className="mt-0">
            <GalleryGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="effects" className="mt-0">
            <GalleryGrid items={filteredItems} />
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
