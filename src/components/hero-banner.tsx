import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="flex justify-center bg-[#ececf6] w-full mt-[70px]">
      <div className="flex max-w-[1110px] gap-10 overflow-visible">
        <div className="flex flex-col gap-6 mt-28 w-1/2">
          <h1 className="font-pt-serif font-semibold text-balance text-7xl tracking-[-2.4px] leading-[80px]">
            Take a Passport Photo Online
          </h1>
          <p className="text-2xl tracking-[-0.7504px]">
            Use our online passport photo <br /> maker and get a compliant picture <br /> instantly. 100% acceptance
            rate.
          </p>
          <Button className="text-base mt-4 mb-6 w-[255px] h-[60px]" variant="default">
            Choose document
          </Button>
          <div className="flex flex-row items-center w-full text-base gap-2">
            <span className="font-bold ">Excellent</span>
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
            <span className="font-bold">10838</span>
            <span>reviews on</span>
            <Image className="mb-1" src="/images/trustpilot.svg" alt="Trustpilot" width={98} height={24} />
          </div>
        </div>
        <div className="w-[650px] h-[602px] relative -mr-32">
          <Image src="/images/hero-image.webp" alt="Passport Photo App" fill />
        </div>
      </div>
    </div>
  );
}
