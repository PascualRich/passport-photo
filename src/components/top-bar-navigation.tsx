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
import { useSidebar } from "./ui/sidebar";

export default function TopBarNavigation() {
  const { openMobile: isSidebarOpen, setOpenMobile: setSidebarOpen } =
    useSidebar();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHover, setHeaderHover] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open
  const [isMobile, setIsMobile] = useState(false); // State to track if the device is mobile

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
    const handleResize = () => {
      console.log(window.innerWidth, "window.innerWidth");

      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Run it once on mount
    handleResize();

    // Then add event listener for future resizes
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
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
        className={cn("fixed z-20 h-[68px] w-screen lg:h-auto lg:w-full", {
          "bg-white": headerHover,
          "bg-[#eeecf9]": !headerHover,
        })}
      >
        <div className="margin-auto container mx-auto flex items-center gap-4 p-[18px] lg:max-w-[1425px] lg:justify-between lg:gap-0 lg:px-[32px] lg:py-0">
          <div className="lg:max-w-auto flex max-w-[136px] items-center">
            <Image
              className="mr-6 lg:h-[30.73px] lg:w-[151px]"
              src="/icons/logo.svg"
              alt="Logo"
              width={151}
              height={30.73}
            />
            <div className="hidden items-center gap-6 lg:flex">
              {topNavigationLinks.map((link, index) => (
                <NavigationMenu key={index} className="hover:bg-white">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={cn(
                          "hover:border-b-primary hover:text-primary cursor-pointer rounded-none border-b-3 border-b-transparent bg-[#eeecf9] px-0 py-11 text-base font-medium hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent",
                          {
                            "bg-white": headerHover,
                          },
                        )}
                        onMouseEnter={() => setIsMenuOpen(true)} // Open menu on hover
                      >
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        className="flex"
                        style={{ width: link.width || "300px" }}
                      >
                        <ul className="grid gap-3 p-4">
                          {link.items.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              imageUrl={item?.imageUrl}
                            />
                          ))}
                        </ul>
                        {link.itemsSuffix && (
                          <div className="p-4">{link.itemsSuffix}</div>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              className={cn(
                "focus-outline-0 h-[32px] cursor-pointer px-[12px] text-sm tracking-[-0.2992px] lg:h-[40px] lg:px-[24px] lg:py-1 lg:text-base",
                {
                  visible: headerHover,
                  invisible: !headerHover,
                },
              )}
            >
              Choose document
            </Button>

            <Button
              variant="ghost"
              className={cn("z-50 block cursor-pointer p-0", {
                visible: isMobile,
                invisible: !isMobile,
              })}
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <div className="relative h-5 w-6">
                {/* Top bar */}
                <span
                  className={cn(
                    "absolute top-1/2 left-0 h-0.5 w-full -translate-y-2 bg-black transition-transform duration-300 ease-in-out",
                    {
                      "translate-y-0 rotate-45": isSidebarOpen,
                    },
                  )}
                />
                {/* Middle bar */}
                <span
                  className={cn(
                    "absolute top-1/2 left-0 h-0.5 w-full bg-black transition-opacity duration-300 ease-in-out",
                    {
                      "opacity-0": isSidebarOpen,
                    },
                  )}
                />
                {/* Bottom bar */}
                <span
                  className={cn(
                    "absolute top-1/2 left-0 h-0.5 w-full translate-y-2 bg-black transition-transform duration-300 ease-in-out",
                    {
                      "translate-y-0 -rotate-45": isSidebarOpen,
                    },
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Black Overlay */}
      <div
        className={cn(
          "fixed top-0 left-0 z-10 h-full w-full bg-black opacity-50",
          {
            hidden: !isMenuOpen,
          },
        )}
      />
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { imageUrl?: string }
>(({ className, title, imageUrl, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "justify-items hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-row items-center space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className,
          )}
          {...props}
        >
          {imageUrl && (
            <div className="relative h-[36px] w-[26px]">
              <Image
                src={imageUrl}
                alt={title || ""}
                layout="fill"
                objectFit="cover"
                className=" "
              />
            </div>
          )}
          <div className="text-base leading-none font-medium text-black">
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
