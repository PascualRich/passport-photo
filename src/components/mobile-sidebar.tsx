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
  const { openMobile } = useSidebar();

  return (
    <div
      className={cn(
        "bg-sidebar text-sidebar-foreground fixed top-0 z-10 mt-[68px] h-screen w-screen transition-transform duration-300 ease-in-out md:hidden",
        {
          "translate-x-0": openMobile,
          "translate-x-full": !openMobile,
        },
      )}
    >
      <Accordion type="single" collapsible className="w-full">
        {topNavigationLinks.map((link) => (
          <AccordionItem key={link.title} value={`item-${link.title}`}>
            <AccordionTrigger className="px-[18px] py-[24px] text-lg font-semibold">
              {link.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center gap-5 px-[18px]">
              {link.items?.map((item) => (
                <a
                  href={item.href}
                  key={item.title}
                  className="mb-2 text-base text-black"
                >
                  {item?.imageUrl && (
                    <Image
                      className="mr-3 inline-block"
                      src={item.imageUrl}
                      alt={item.title}
                      width={26}
                      height={37}
                    />
                  )}
                  {item.title}
                  {item?.banner && (
                    <span className="ml-5 bg-[#ff9500] px-[9px] py-[3px] text-[10px] font-semibold text-white">
                      {item.banner}
                    </span>
                  )}
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
