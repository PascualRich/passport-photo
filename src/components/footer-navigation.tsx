"use client";

import Image from "next/image";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { footerNavigationLinks } from "@/data/footer-navigation-links";

export default function FooterNavigation() {
  return (
    <footer className="">
      {/* Main Footer */}
      <div className="flex flex-col justify-center items-center border-t border-t-[#dcdde6]">
        <div className="flex flex-row gap-10 bg-white w-[1145px] py-10  ">
          <div className="">
            <Image className="mb-15 inline-block" src="/icons/logo.svg" alt="Logo" width={151} height={30.73} />
            <div className="flex flex-row gap-10">
              {footerNavigationLinks.map((link) => (
                <div key={link.title} className="flex flex-col">
                  <span className="text-sm font-semibold mb-5">{link.title}</span>
                  {link.items?.map((item) => (
                    <a href={item.href} key={item.title} className="text-sm text-black mb-2">
                      {item.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#f3f8fb] flex flex-col gap-2 p-7 mt-10 rounded-xl w-[230px]">
            <span className="text-2xl font-semibold">Get the app!</span>
            <span className="text-sm mb-3">Get the free app for iOS or Android.</span>
            <Image src="/images/appStoreBtn.svg" alt="App Store Button" width={170} height={55} />
            <Image src="/images/googlePlayBtn.svg" alt="Google Play Button" width={170} height={55} />
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="flex flex-col justify-center items-center border-t border-t-[#dcdde6]">
        <div className="flex flex-row gap-10 bg-white w-[1145px] py-10 border-t border-t-[#dcdde6]">
          <div className="flex flex-col">
            <a href="" className="text-sm text-[#bfcad7] mb-5">
              Passport Photo Online
            </a>
            <span className="text-sm mb-5">Powered by PhotoAiD®</span>
          </div>
          <div className="flex flex-col">
            <a href="" className="text-sm text-[#bfcad7] mb-5">
              Privacy Policy
            </a>
            <a href="" className="text-sm text-[#bfcad7] mb-5">
              Terms and Conditions
            </a>
            <a href="" className="text-sm text-[#bfcad7] mb-5">
              Payment Terms
            </a>
          </div>
          <div className="flex flex-col">
            <a href="" className="text-sm text-[#bfcad7] mb-5">
              Returns and Refunds
            </a>
            <a href="" className="text-sm text-[#bfcad7] mb-5">
              Shipping Terms
            </a>
          </div>
          <div className="flex flex-col">
            <a href="" className="text-sm text-[#bfcad7] mb-5">
              PhotoAiD Passport Photo Maker (Android)
            </a>
            <a href="" className="text-sm text-[#bfcad7] mb-5">
              PhotoAiD Passport Photo Maker (Apple)
            </a>
          </div>
          <Select defaultValue="/">
            <SelectTrigger className="ml-10 w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="/de-de">Deutsch (Deutschland)</SelectItem>
              <SelectItem value="/de-at">Deutsch (Österreich)</SelectItem>
              <SelectItem value="/de-ch">Deutsch (Schweiz)</SelectItem>
              <SelectItem value="/en-au">English (Australia)</SelectItem>
              <SelectItem value="/en-ca">English (Canada)</SelectItem>
              <SelectItem value="/en-in">English (India)</SelectItem>
              <SelectItem value="/en-ie">English (Ireland)</SelectItem>
              <SelectItem value="/en-nz">English (New Zealand)</SelectItem>
              <SelectItem value="/en-ph">English (Philippines)</SelectItem>
              <SelectItem value="/en-sg">English (Singapore)</SelectItem>
              <SelectItem value="/en-za">English (South Africa)</SelectItem>
              <SelectItem value="/en-gb">English (UK)</SelectItem>
              <SelectItem value="/">English (USA)</SelectItem>
              <SelectItem value="/es-ar">Español (Argentina)</SelectItem>
              <SelectItem value="/es-cl">Español (Chile)</SelectItem>
              <SelectItem value="/es-co">Español (Colombia)</SelectItem>
              <SelectItem value="/es-ec">Español (Ecuador)</SelectItem>
              <SelectItem value="/es-es">Español (España)</SelectItem>
              <SelectItem value="/es-mx">Español (México)</SelectItem>
              <SelectItem value="/es-do">Español (República Dominicana)</SelectItem>
              <SelectItem value="/fr-be">Français (Belgique)</SelectItem>
              <SelectItem value="/fr-ca">Français (Canada)</SelectItem>
              <SelectItem value="/fr-fr">Français (France)</SelectItem>
              <SelectItem value="/fr-ch">Français (Suisse)</SelectItem>
              <SelectItem value="/it-it">Italiano (Italia)</SelectItem>
              <SelectItem value="/lt">Lietuvių</SelectItem>
              <SelectItem value="/hu">Magyar</SelectItem>
              <SelectItem value="/nl-nl">Nederlands (Nederland)</SelectItem>
              <SelectItem value="/pl">Polski</SelectItem>
              <SelectItem value="/pt-br">Português (Brasil)</SelectItem>
              <SelectItem value="/pt-pt">Português (Portugal)</SelectItem>
              <SelectItem value="/ru-kz">Pусский (Казахстан)</SelectItem>
              <SelectItem value="/ru-ua">Pусский (Украина)</SelectItem>
              <SelectItem value="/ro">Română</SelectItem>
              <SelectItem value="/sv-se">Svenska</SelectItem>
              <SelectItem value="/vi-vn">Tiếng Việt</SelectItem>
              <SelectItem value="/tr">Türk</SelectItem>
              <SelectItem value="/el-gr">ελληνικά</SelectItem>
              <SelectItem value="/uk-ua">Українська</SelectItem>
              <SelectItem value="/ar-sa">عربى (المملكة العربية السعودية)</SelectItem>
              <SelectItem value="/ko-kr">한국어</SelectItem>
              <SelectItem value="/zh-cn">中华的</SelectItem>
              <SelectItem value="/ja-jp">日本語</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </footer>
  );
}
