"use client";

import Image from "next/image";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { footerNavigationLinks } from "@/data/footer-navigation-links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { languages } from "@/data/language";

export default function FooterNavigation() {
  return (
    <footer className="">
      {/* Main Footer */}
      <div className="flex flex-col items-center justify-center border-t border-t-[#dcdde6] px-[18px] lg:px-0 lg:pb-10">
        <div className="flex w-full flex-col gap-10 bg-white py-10 lg:w-[1145px] lg:flex-row">
          <div className="">
            <Image
              className="mb-2 inline-block lg:mb-15"
              src="/icons/logo.svg"
              alt="Logo"
              width={151}
              height={30.73}
            />
            <div className="hidden flex-row gap-10 lg:flex">
              {footerNavigationLinks.map((link) => (
                <div key={link.title} className="flex flex-col">
                  <span className="mb-5 text-sm font-semibold">
                    {link.title}
                  </span>
                  {link.items?.map((item) => (
                    <a
                      href={item.href}
                      key={item.title}
                      className="mb-2 text-sm text-black"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <Accordion type="single" collapsible className="w-full lg:hidden">
              {footerNavigationLinks.map((link) => (
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
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[#f3f8fb] p-7 lg:mt-10 lg:w-[230px]">
            <span className="text-2xl font-semibold">Get the app!</span>
            <span className="mb-3 text-sm">
              Get the free app for iOS or Android.
            </span>
            <div className="flex flex-row gap-2 lg:flex-col">
              <Image
                className="h-[44px] w-[136px] lg:h-[55px] lg:w-[170px]"
                src="/images/appStoreBtn.svg"
                alt="App Store Button"
                width={170}
                height={55}
              />
              <Image
                className="h-[44px] w-[136px] lg:h-[55px] lg:w-[170px]"
                src="/images/googlePlayBtn.svg"
                alt="Google Play Button"
                width={170}
                height={55}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="flex flex-col items-center justify-center px-[18px] pb-10 lg:border-t lg:border-t-[#dcdde6] lg:px-0">
        <div className="hidden w-[1145px] flex-row gap-10 bg-white py-10 lg:flex">
          <div className="flex flex-col">
            <a href="" className="mb-5 text-sm text-[#bfcad7]">
              Passport Photo Online
            </a>
            <span className="mb-5 text-sm">Powered by PhotoAiD®</span>
          </div>
          <div className="flex flex-col">
            <a href="" className="mb-5 text-sm text-[#bfcad7]">
              Privacy Policy
            </a>
            <a href="" className="mb-5 text-sm text-[#bfcad7]">
              Terms and Conditions
            </a>
            <a href="" className="mb-5 text-sm text-[#bfcad7]">
              Payment Terms
            </a>
          </div>
          <div className="flex flex-col">
            <a href="" className="mb-5 text-sm text-[#bfcad7]">
              Returns and Refunds
            </a>
            <a href="" className="mb-5 text-sm text-[#bfcad7]">
              Shipping Terms
            </a>
          </div>
          <div className="flex flex-col">
            <a href="" className="mb-5 text-sm text-[#bfcad7]">
              PhotoAiD Passport Photo Maker (Android)
            </a>
            <a href="" className="mb-5 text-sm text-[#bfcad7]">
              PhotoAiD Passport Photo Maker (Apple)
            </a>
          </div>
          <Select defaultValue="/">
            <SelectTrigger className="w-[180px] border-0 shadow-none">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full flex-col justify-start gap-5 bg-white lg:hidden">
          <Select defaultValue="/">
            <SelectTrigger className="w-[180px] border-0 shadow-none">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex flex-col gap-5 border-b border-b-[#dcdde6] pb-5">
            <a href="" className="text-sm text-[#9399b4]">
              Privacy Policy
            </a>
            <a href="" className="text-sm text-[#9399b4]">
              Terms and Conditions
            </a>
            <a href="" className="text-sm text-[#9399b4]">
              Payment Terms
            </a>
            <a href="" className="text-sm text-[#9399b4]">
              Returns and Refunds
            </a>
            <a href="" className="text-sm text-[#9399b4]">
              Shipping Terms
            </a>
            <a href="" className="text-sm text-[#9399b4]">
              PhotoAiD Passport Photo Maker (Android)
            </a>
            <a href="" className="text-sm text-[#9399b4]">
              PhotoAiD Passport Photo Maker (Apple)
            </a>
          </div>
          <div className="flex flex-col">
            <a href="" className="mb-5 text-sm text-[#9399b4]">
              Passport Photo Online
            </a>
            <span className="mb-5 text-sm">Powered by PhotoAiD®</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
