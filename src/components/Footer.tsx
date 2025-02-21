import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone } from "lucide-react";

interface FooterProps {
  socialLinks?: {
    instagram?: string;
    tiktok?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
  };
}

const Footer = ({
  socialLinks = {
    instagram: "https://instagram.com/makeupartist",
    tiktok: "https://tiktok.com/@makeupartist",
  },
  contactInfo = {
    email: "contact@makeupartist.com",
    phone: "+1 (555) 123-4567",
  },
}: FooterProps) => {
  return (
    <footer className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                {/* Using a custom SVG for TikTok since it's not in lucide-react */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={20} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-300">
                Stay updated with our latest work and offers
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Professional Makeup Artist. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
