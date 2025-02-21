import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContactFormProps {
  onSubmit?: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

const ContactForm = ({ onSubmit = () => {} }: ContactFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    onSubmit({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    });
  };

  return (
    <section id="contact" className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Связаться со мной</h2>
        <p className="text-gray-600 mb-8">
          Оставьте заявку, и я свяжусь с вами для обсуждения деталей
        </p>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  required
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Отправить
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
