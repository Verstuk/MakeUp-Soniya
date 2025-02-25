export type Category =
  | "all"
  | "bridal"
  | "editorial"
  | "natural"
  | "evening"
  | "effects"
  | "eyebrows";

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  category: Category;
}

export const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "bridal", label: "Свадебный" },
  { value: "natural", label: "Дневной" },
  { value: "evening", label: "Вечерний" },
  { value: "editorial", label: "Фэшн" },
  { value: "effects", label: "Спецэффекты" },
  { value: "eyebrows", label: "Брови" },
];

export const defaultItems: GalleryItem[] = [
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
  {
    id: "7",
    imageUrl: "eyebrows_1.jpeg",
    title: "Брови",
    description: "Моделирование и окрашивание бровей",
    category: "eyebrows",
  },
  // Дополнительные работы для полного портфолио
  {
    id: "8",
    imageUrl: "https://images.unsplash.com/photo-1512257739666-7ee1a41ff472",
    title: "Вечерний макияж",
    description: "Яркий вечерний образ",
    category: "evening",
  },
  {
    id: "9",
    imageUrl: "https://images.unsplash.com/photo-1503236823255-94609f598e71",
    title: "Фэшн макияж",
    description: "Креативный образ для фотосессии",
    category: "editorial",
  },
];
