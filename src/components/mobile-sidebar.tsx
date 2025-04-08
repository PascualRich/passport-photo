"use client";

import { topNavigationLinks } from "@/data/top-navigation-links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useSidebar } from "./ui/sidebar";

export default function MobileSidebar() {
  const { openMobile, setOpenMobile } = useSidebar();

  return (
    <div
      className={cn(
        "bg-sidebar text-sidebar-foreground fixed top-0 z-10 mt-[68px] h-screen w-screen p-4 transition-transform duration-300 ease-in-out md:hidden",
        {
          "translate-x-0": openMobile,
          "translate-x-full": !openMobile,
        },
      )}
    >
      <Accordion type="single" collapsible className="w-full">
        {topNavigationLinks.map((link) => (
          <AccordionItem key={link.title} value={`item-${link.title}`}>
            <AccordionTrigger className="text-base font-bold">
              {link.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col">
              {link.items?.map((item) => (
                <a
                  href={item.href}
                  key={item.title}
                  className="mb-2 text-base text-black"
                >
                  {item.title}
                </a>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-10 flex flex-row justify-center gap-2">
        <Image
          className="h-[52px] w-[160px]"
          src="/images/appStoreBtn.svg"
          alt="App Store Button"
          width={170}
          height={55}
        />
        <Image
          className="h-[52px] w-[160px]"
          src="/images/googlePlayBtn.svg"
          alt="Google Play Button"
          width={170}
          height={55}
        />
      </div>
    </div>
  );
}
