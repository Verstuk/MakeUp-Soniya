import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  level: "beginner" | "intermediate" | "advanced";
  image: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Базовый курс макияжа",
    description:
      "Научитесь основам макияжа, подбору цветов и работе с разными типами лица",
    duration: "2 недели",
    price: "15 000 ₽",
    level: "beginner",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  },
  {
    id: "2",
    title: "Свадебный макияж",
    description:
      "Специализированный курс по созданию стойких свадебных образов",
    duration: "1 неделя",
    price: "20 000 ₽",
    level: "intermediate",
    image: "https://images.unsplash.com/photo-1503236823255-94609f598e71",
  },
  {
    id: "3",
    title: "Продвинутые техники",
    description: "Изучите современные техники и тренды в макияже",
    duration: "3 недели",
    price: "25 000 ₽",
    level: "advanced",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c",
  },
];

const getLevelBadge = (level: Course["level"]) => {
  const variants = {
    beginner: "default",
    intermediate: "secondary",
    advanced: "outline",
  };
  const labels = {
    beginner: "Начальный",
    intermediate: "Средний",
    advanced: "Продвинутый",
  };
  return (
    <Badge variant={variants[level]} className="mb-4">
      {labels[level]}
    </Badge>
  );
};

const CoursesPage = () => {
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
              Обучающие курсы
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl"
            >
              Освойте искусство макияжа под руководством профессионала
            </motion.p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  {getLevelBadge(course.level)}
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>Длительность: {course.duration}</span>
                    <span className="font-semibold text-black">
                      {course.price}
                    </span>
                  </div>
                  <Button className="w-full">Записаться на курс</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Почему стоит учиться у нас
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Практический опыт
                </h3>
                <p className="text-gray-600">
                  Более 70% времени уделяется практике на моделях
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Современные техники
                </h3>
                <p className="text-gray-600">
                  Обучаем актуальным трендам и технологиям в макияже
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Поддержка</h3>
                <p className="text-gray-600">
                  Помощь в развитии после окончания курса
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
