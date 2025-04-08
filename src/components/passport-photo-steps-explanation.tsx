import Image from "next/image";

export default function PassportPhotoMakerExplanation() {
  return (
    <div className="flex w-full justify-center bg-[#f3f8fb]">
      <div className="my-20 flex flex-col items-center justify-start text-center lg:w-[1110px] lg:items-start lg:text-left">
        <span className="font-pt-serif w-[90vw] text-2xl font-bold lg:w-auto lg:text-[40px]">
          How Does Our Passport-Size Photo Maker Work?
        </span>
        <div className="mt-10 flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <Image
              src="/images/how_It_Works1.webp"
              alt="Step 1"
              width={125}
              height={125}
            />
            <span className="text-lg font-semibold lg:text-[32px]">
              Take or upload a photo
            </span>
            <p className="text-sm lg:text-lg">
              Take a selfie or upload one from your <br /> gallery. Follow the
              on-screen <br /> instructions to meet all
              <br /> the requirements.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <Image
              src="/images/how_It_Works2.webp"
              alt="Step 2"
              width={125}
              height={125}
            />
            <span className="text-lg font-semibold lg:text-[32px]">
              Get your photo verified
            </span>
            <p className="text-sm lg:text-lg">
              Our innovative AI software will fine-
              <br />
              tune your photo. Then, our in-house <br /> experts will ensure
              100% <br /> compliance.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <Image
              src="/images/how_It_Works3.webp"
              alt="Step 3"
              width={125}
              height={125}
            />
            <span className="text-lg font-semibold lg:text-[32px]">
              Submit your photo
            </span>
            <p className="text-sm lg:text-lg">
              Your photo is ready for submission. <br /> Get a digital photo
              instantly, or have <br /> printouts delivered to your door for{" "}
              <br /> free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
