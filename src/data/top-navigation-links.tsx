import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LinkProps {
  title: string;
  width?: string;
  items: Array<{
    title: string;
    href: string;
    imageUrl?: string;
  }>;
  itemsSuffix?: React.ReactNode;
}

export const topNavigationLinks: LinkProps[] = [
  {
    title: "Resources",
    items: [
      { title: "Passport Photo Resizer", href: "resources/passport-photo-resizer" },
      { title: "How to Take a Passport Photo with an iPhone", href: "/how-to-take-a-passport-photo-with-an-iphone" },
      { title: "How to Take a Passport Photo with Android", href: "/how-to-take-a-passport-photo-with-android" },
    ],
  },
  {
    title: "Popular Documents",
    width: "615px",
    items: [
      {
        title: "Baby Passport Photo",
        href: "/popular-documents/baby-passport-photo",
        imageUrl: "/images/US_passport_photo_cover_f9064c684a.webp",
      },
      {
        title: "USCIS Photo",
        href: "/popular-documents/uscis-photo",
        imageUrl: "/images/USCIS_photo_cover_7528ad6aa5.webp",
      },
      {
        title: "2x2 Photo",
        href: "/popular-documents/2x2-photo",
        imageUrl: "/images/US_passport_photo_cover_f9064c684a.webp",
      },
      {
        title: "Chinese Visa Photo",
        href: "/popular-documents/chinese-visa-photo",
        imageUrl: "/images/chinese_visa_photo_cover_90fecd5334.webp",
      },
    ],
    itemsSuffix: (
      <div className="bg-[#f9f6fe] flex p-5 rounded-md gap-5">
        <div className="flex flex-col justify-between">
          <div>
            <span className="bg-orange-500 text-white font-semibold text-xs px-3 mb-5 flex-shrink-0">Most Popular</span>
          </div>
          <div>
            <span className="font-semibold">US Passport Photo</span>
            <div className="flex gap-2">
              <span className="text-xs text-gray-500">Size</span>
              <span className="text-xs font-semibold">2x2 in</span>
            </div>
          </div>
          <Button variant="default" className="text-xs focus-outline-0 cursor-pointer">
            Choose document
          </Button>
        </div>
        <Image src="/images/US_passport_photo_cover_f9064c684a.webp" alt="US Passport Photo" width={105} height={150} />
      </div>
    ),
  },
  {
    title: "How it Works",
    items: [
      { title: "How to Take a Photo", href: "how-it-works/how-to-take-a-photo" },
      { title: "AI and Expert Verification", href: "how-it-works/ai-and-expert-verification" },
      { title: "Guarantee", href: "/how-it-works/guarantee" },
      { title: "Delivery", href: "/how-it-works/delivery" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Editorial Process", href: "/about/editorial-process" },
      { title: "Contact", href: "/contact" },
    ],
  },
];
