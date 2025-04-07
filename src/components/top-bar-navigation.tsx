"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { topNavigationLinks } from "@/data/top-navigation-links";

export default function TopBarNavigation() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHover, setHeaderHover] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open

  const setHeaderHoverState = (state: boolean) => {
    if (!state) setIsMenuOpen(false); // Close menu when mouse leaves
    if (scrollPosition > 50) return;
    setHeaderHover(state);
  };

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update scroll position
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if scroll position is greater than 100, and update hover state
    if (isMenuOpen) return; // Don't change hover state if menu is open
    if (scrollPosition > 50) {
      setHeaderHover(true);
    } else {
      setHeaderHover(false);
    }
  }, [scrollPosition]);

  return (
    <>
      <header
        ref={headerRef}
        onMouseEnter={() => setHeaderHoverState(true)}
        onMouseLeave={() => setHeaderHoverState(false)}
        className={cn("w-full fixed z-20", {
          "bg-white": headerHover,
          "bg-[#f0eef9]": !headerHover,
        })}
      >
        <div className="container mx-auto flex items-center justify-between margin-auto px-[32px] max-w-[1425px]">
          <div className="flex items-center">
            <Image className="mr-6 inline-block" src="/icons/logo.svg" alt="Logo" width={151} height={30.73} />
            <div className="flex items-center gap-6">
              {topNavigationLinks.map((link, index) => (
                <NavigationMenu key={index} className="hover:bg-white">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-[#f0eef9] py-11 px-0 font-medium border-b-3 border-b-transparent hover:border-b-primary hover:text-primary rounded-none text-base cursor-pointer hover:bg-transparent focus:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent",
                          {
                            "bg-white": headerHover,
                          }
                        )}
                        onMouseEnter={() => setIsMenuOpen(true)} // Open menu on hover
                      >
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="flex" style={{ width: link.width || "300px" }}>
                        <ul className={"grid gap-3 p-4"}>
                          {link.items.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} imageUrl={item?.imageUrl} />
                          ))}
                        </ul>
                        {link.itemsSuffix && <div className="p-4">{link.itemsSuffix}</div>}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ))}
            </div>
          </div>
          <Button
            variant="default"
            className={cn("text-base h-[40px] px-[24px] py-1 focus-outline-0 cursor-pointer", {
              block: headerHover,
              hidden: !headerHover,
            })}
          >
            Choose document
          </Button>
        </div>
      </header>

      {/* Black Overlay */}
      <div
        className={cn("fixed top-0 left-0 w-full h-full bg-black z-10 opacity-50", {
          hidden: !isMenuOpen,
        })}
      />
    </>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { imageUrl?: string }>(
  ({ className, title, imageUrl, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "flex flex-row justify-items items-center block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            {imageUrl && (
              <div className="w-[26px] h-[36px] relative">
                <Image src={imageUrl} alt={title || ""} layout="fill" objectFit="cover" className=" " />
              </div>
            )}
            <div className="text-black text-base font-medium leading-none">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
