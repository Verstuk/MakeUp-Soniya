import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1487412720507-e7ab37603c6f)`,
              opacity: 0.7,
            }}
          />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl text-white font-bold"
            >
              Обо мне
            </motion.h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                alt="Визажист за работой"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Привет, я Анна</h2>
              <p className="text-gray-600">
                Профессиональный визажист с более чем 8-летним опытом работы в
                индустрии красоты. Моя страсть - помогать людям раскрывать их
                естественную красоту и создавать незабываемые образы для особых
                случаев.
              </p>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">8+</h3>
              <p className="text-gray-600">Лет опыта</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Свадебных образов</p>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Мои услуги</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Свадебный макияж</h3>
                <p className="text-gray-600">
                  Создание незабываемого образа для вашего особенного дня
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Вечерний макияж</h3>
                <p className="text-gray-600">
                  Элегантный макияж для особых случаев и мероприятий
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Дневной макияж</h3>
                <p className="text-gray-600">
                  Естественный макияж для повседневной жизни
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Мастер-классы</h3>
                <p className="text-gray-600">
                  Индивидуальные и групповые уроки по макияжу
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
