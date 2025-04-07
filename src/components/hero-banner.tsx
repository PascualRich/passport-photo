import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="flex justify-center bg-[#ececf6] w-full mt-[70px]">
      <div className="flex flex-col lg:flex-row max-w-[1110px] gap-10 overflow-visible px-4">
        <div className="flex flex-col gap-6 mt-28 w-full lg:w-1/2">
          <h1 className="font-pt-serif font-semibold text-balance text-4xl lg:text-7xl tracking-[-2.4px] leading-[50px] lg:leading-[80px] text-center lg:text-left">
            Take a Passport Photo Online
          </h1>
          <p className="text-xl lg:text-2xl tracking-[-0.7504px] text-center lg:text-left">
            Use our online passport photo <br /> maker and get a compliant picture <br /> instantly. 100% acceptance
            rate.
          </p>
          <Button className="text-base mt-4 mb-6 w-full lg:w-[255px] h-[60px]" variant="default">
            Choose document
          </Button>
          <div className="flex flex-col lg:flex-row items-center w-full text-base gap-2">
            <div className="flex flex-row justify-center lg:justify-start items-center w-full text-base gap-2">
              <span className="font-bold">Excellent</span>
              <div className="flex items-center gap-1">
                <div className="size-[21px] bg-[#04b97e]">
                  <Image src="/icons/star.svg" alt="Star" width={19} height={19} />
                </div>
                <div className="size-[21px] bg-[#04b97e]">
                  <Image src="/icons/star.svg" alt="Star" width={19} height={19} />
                </div>
                <div className="size-[21px] bg-[#04b97e]">
                  <Image src="/icons/star.svg" alt="Star" width={19} height={19} />
                </div>
                <div className="size-[21px] bg-[#04b97e]">
                  <Image src="/icons/star.svg" alt="Star" width={19} height={19} />
                </div>
                <div className="size-[21px] bg-[#04b97e] relative">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-[#dcdde6]"></div>
                  <Image src="/icons/star.svg" alt="Star" width={19} height={19} />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center lg:justify-start items-center w-full text-base gap-2">
              <span className="font-bold">10838</span>
              <span>reviews on</span>
              <Image className="mb-1" src="/images/trustpilot.svg" alt="Trustpilot" width={98} height={24} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[650px] h-[402px] lg:h-[602px] relative lg:-mr-32 mt-8 lg:mt-0">
          <Image src="/images/hero-image.webp" alt="Passport Photo App" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
