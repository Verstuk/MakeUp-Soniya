import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsSliderProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Марина",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    role: "Невеста",
    content:
      "Самый потрясающий визажист, с которым я когда-либо работала! Благодаря ей я чувствовала себя абсолютно прекрасной в день своей свадьбы.",
    rating: 5,
  },
  {
    id: "2",
    name: "Ирина",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    role: "Модель",
    content:
      "Невероятное внимание к деталям и идеально подходит для редакционных съёмок. Всегда превосходит ожидания.",
    rating: 5,
  },
  {
    id: "3",
    name: "Александра",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michelle",
    role: "День рождения",
    content:
      "Мой визажист на всех мероприятиях с красной ковровой дорожкой. Каждый раз точно понимает, что мне нужно.",
    rating: 5,
  },
];

const TestimonialsSlider = ({
  testimonials = defaultTestimonials,
}: TestimonialsSliderProps) => {
  return (
    <div className="w-full h-[400px] bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Отзывы клиентов
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="mx-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-gray-600">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
