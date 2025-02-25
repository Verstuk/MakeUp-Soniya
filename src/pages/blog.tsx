import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: "makeup" | "skincare" | "tips" | "trends";
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Как подготовить кожу к свадебному макияжу",
    excerpt:
      "Пошаговое руководство по подготовке кожи для идеального свадебного макияжа",
    content: "...",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    category: "skincare",
    readTime: "5 мин",
  },
  {
    id: "2",
    title: "Тренды макияжа весна-лето 2024",
    excerpt: "Обзор самых горячих трендов в макияже на предстоящий сезон",
    content: "...",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1503236823255-94609f598e71",
    category: "trends",
    readTime: "7 мин",
  },
  {
    id: "3",
    title: "5 секретов стойкого макияжа",
    excerpt:
      "Профессиональные советы по созданию макияжа, который держится весь день",
    content: "...",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c",
    category: "tips",
    readTime: "4 мин",
  },
  {
    id: "4",
    title: "Базовые продукты для повседневного макияжа",
    excerpt: "Список необходимых продуктов для создания естественного макияжа",
    content: "...",
    date: "2024-03-01",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    category: "makeup",
    readTime: "6 мин",
  },
  {
    id: "5",
    title: "Уход за кожей в разные сезоны",
    excerpt: "Как адаптировать уход за кожей к сезонным изменениям",
    content: "...",
    date: "2024-02-25",
    image: "https://images.unsplash.com/photo-1512257739666-7ee1a41ff472",
    category: "skincare",
    readTime: "8 мин",
  },
  {
    id: "6",
    title: "Модные оттенки помад 2024",
    excerpt: "Самые популярные и трендовые оттенки помад этого года",
    content: "...",
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    category: "trends",
    readTime: "5 мин",
  },
];

const categories = [
  { value: "all", label: "Все" },
  { value: "makeup", label: "Макияж" },
  { value: "skincare", label: "Уход за кожей" },
  { value: "tips", label: "Советы" },
  { value: "trends", label: "Тренды" },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredPosts = React.useMemo(() => {
    return activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9)`,
              opacity: 0.7,
            }}
          />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl text-white font-bold mb-4"
            >
              Блог о красоте
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl"
            >
              Советы, тренды и секреты профессионального макияжа
            </motion.p>
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category.value}
                variant={
                  activeCategory === category.value ? "default" : "secondary"
                }
                className="cursor-pointer text-sm px-4 py-2 hover:bg-primary/90 transition-colors duration-200 ease-in-out"
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {categories.find((c) => c.value === post.category)?.label}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <time>
                      {new Date(post.date).toLocaleDateString("ru-RU")}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Читать далее
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 py-16 px-4 mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
            <p className="text-gray-600 mb-8">
              Получайте свежие статьи и советы по макияжу прямо на вашу почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
