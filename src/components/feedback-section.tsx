import Image from "next/image";

export default function FeedbackSection() {
  return (
    <div className="flex justify-center bg-white w-full">
      <div className="flex flex-row items-end justify-center gap-14 my-30 pb-10 w-[1140px]">
        <div className="flex flex-col gap-10 w-1/2">
          <Image
            src="/images/man-offering-hand.svg"
            alt="Offer"
            width={248}
            height={188}
            className="transform scale-x-[-1]" // Flips the image horizontally
          />
          <span className="font-pt-serif font-semibold text-balance text-7xl tracking-[-2.4px] leading-[80px]">
            Are You <br /> Satisfied <br /> With Our <br /> Service?
          </span>
          <span className="text-2xl tracking-[-0.7504px]">
            Let us know how we’re doing. <br />
            Customer feedback is always welcome.
          </span>
        </div>
        <div className="w-[2px] h-full bg-border"></div> {/* The middle dividing line */}
        <div className="flex flex-col items-center justify-center text-center w-1/2">
          <span className="font-pt-serif font-semibold text-balance text-[40px]">
            Rate Your Reading <br /> Experience:
          </span>
          <div className="flex flex-row gap-2 items-center my-20">
            <Image src="/icons/starEmpty.svg" alt="Star" width={60} height={60} />

            <Image src="/icons/starEmpty.svg" alt="Star" width={60} height={60} />

            <Image src="/icons/starEmpty.svg" alt="Star" width={60} height={60} />

            <Image src="/icons/starEmpty.svg" alt="Star" width={60} height={60} />

            <Image src="/icons/starEmpty.svg" alt="Star" width={60} height={60} />
          </div>
          <span className="text-2xl mb-5">
            <b>Rating: 4.74/5</b>
          </span>
          <span className="text-base text-[#a7adb5]">Number of votes: 46523</span>
        </div>
      </div>
    </div>
  );
}
