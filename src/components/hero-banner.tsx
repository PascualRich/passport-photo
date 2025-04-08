import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="mt-[68px] flex w-full justify-center bg-[#ececf6] lg:mt-[70px]">
      <div className="flex flex-col gap-10 overflow-visible px-[18px] lg:max-w-[1110px] lg:flex-row lg:px-4">
        <div className="mt-11 flex w-full flex-col gap-6 lg:mt-28 lg:w-1/2">
          <h1 className="font-pt-serif text-center text-[40px] leading-[46px] font-semibold tracking-[-1.2896px] text-balance text-[#1d243a] lg:text-left lg:text-7xl lg:leading-[80px] lg:tracking-[-2.4px]">
            Take a Passport Photo Online
          </h1>
          <p className="text-center text-lg tracking-[-0.2px] lg:text-left lg:text-2xl lg:tracking-[-0.7504px]">
            Use our online passport photo <br /> maker and get a compliant
            picture <br /> instantly. 100% acceptance rate.
          </p>
          <Button
            className="mt-3 mb-4 h-[60px] w-full text-base tracking-[-0.2992px] lg:mt-4 lg:mb-6 lg:w-[255px]"
            variant="default"
          >
            Choose document
          </Button>
          <div className="flex w-full flex-col items-center gap-4 text-base lg:flex-row lg:gap-2">
            <div className="flex w-full flex-row items-center justify-center gap-2 text-base lg:justify-start">
              <span className="font-bold">Excellent</span>
              <div className="flex items-center gap-1">
                <div className="size-[21px] bg-[#04b97e]">
                  <Image
                    src="/icons/star.svg"
                    alt="Star"
                    width={19}
                    height={19}
                  />
                </div>
                <div className="size-[21px] bg-[#04b97e]">
                  <Image
                    src="/icons/star.svg"
                    alt="Star"
                    width={19}
                    height={19}
                  />
                </div>
                <div className="size-[21px] bg-[#04b97e]">
                  <Image
                    src="/icons/star.svg"
                    alt="Star"
                    width={19}
                    height={19}
                  />
                </div>
                <div className="size-[21px] bg-[#04b97e]">
                  <Image
                    src="/icons/star.svg"
                    alt="Star"
                    width={19}
                    height={19}
                  />
                </div>
                <div className="relative size-[21px] bg-[#04b97e]">
                  <div className="absolute top-0 right-0 h-full w-1/2 bg-[#dcdde6]"></div>
                  <Image
                    src="/icons/star.svg"
                    alt="Star"
                    width={19}
                    height={19}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-center gap-2 text-base lg:justify-start">
              <span className="font-bold">10838</span>
              <span>reviews on</span>
              <Image
                className="mb-1"
                src="/images/trustpilot.svg"
                alt="Trustpilot"
                width={98}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="relative h-[330px] w-[339px] w-full lg:mt-0 lg:mt-8 lg:-mr-32 lg:h-[602px] lg:w-[650px]">
          <Image
            src="/images/hero-image.webp"
            alt="Passport Photo App"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
