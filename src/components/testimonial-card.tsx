import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  platformName: string;
  platformLogo: string;
  quoteIcon?: string;
}

const TestimonialCard = ({
  quote,
  author,
  platformName,
  platformLogo,
  quoteIcon = "/icons/quote.svg",
}: TestimonialCardProps) => {
  return (
    <div className="mb-10 flex flex-row items-start gap-10">
      <Image src={quoteIcon} alt="Quote" width={32} height={32} />
      <div className="flex flex-col gap-5">
        <p>{quote}</p>
        <div className="flex flex-row items-center justify-between">
          <span>{author}</span>
          <div className="flex flex-row items-center gap-2">
            <span>View full review on</span>
            <Image
              className="mb-1"
              src={platformLogo}
              alt={platformName}
              width={98}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
