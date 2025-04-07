interface LinkProps {
  title: string;
  width?: string;
  items: Array<{
    title: string;
    href: string;
  }>;
}

export const footerNavigationLinks: LinkProps[] = [
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
      },
      {
        title: "USCIS Photo",
        href: "/popular-documents/uscis-photo",
      },
      {
        title: "2x2 Photo",
        href: "/popular-documents/2x2-photo",
      },
      {
        title: "Chinese Visa Photo",
        href: "/popular-documents/chinese-visa-photo",
      },
    ],
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
