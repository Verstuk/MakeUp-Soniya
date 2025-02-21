import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavigationProps {
  logo?: string;
  isTransparent?: boolean;
}

const Navigation = ({
  logo = "https://api.dicebear.com/7.x/avataaars/svg?seed=makeup",
  isTransparent = true,
}: NavigationProps) => {
  const menuItems = [
    { title: "Portfolio", href: "/portfolio" },
    { title: "About", href: "/about" },
    { title: "Press", href: "/press" },
    { title: "Courses", href: "/courses" },
    { title: "FAQ", href: "/faq" },
  ];

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 px-6",
        isTransparent ? "bg-transparent" : "bg-white shadow-sm",
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                    isTransparent ? "text-white" : "text-gray-700",
                  )}
                  href={item.href}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Book Now Button */}
        <Button
          variant={isTransparent ? "outline" : "default"}
          className={cn(
            "px-6",
            isTransparent &&
              "text-white border-white hover:bg-white hover:text-black",
          )}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
