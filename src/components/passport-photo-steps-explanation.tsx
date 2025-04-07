import Image from "next/image";

export default function PassportPhotoMakerExplanation() {
  return (
    <div className="flex justify-center bg-[#f3f8fb] w-full">
      <div className="flex flex-col my-20 justify-start w-[1110px]">
        <span className="font-pt-serif text-[40px] font-bold">How Does Our Passport-Size Photo Maker Work?</span>
        <div className="flex flex-row gap-10 mt-10">
          <div className="flex flex-col gap-5">
            <Image src="/images/how_It_Works1.webp" alt="Step 1" width={125} height={125} />
            <span className="text-[32px] font-semibold">Take or upload a photo</span>
            <p className="text-lg">
              Take a selfie or upload one from your <br /> gallery. Follow the on-screen <br /> instructions to meet all
              <br /> the requirements.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Image src="/images/how_It_Works2.webp" alt="Step 2" width={125} height={125} />
            <span className="text-[32px] font-semibold">Get your photo verified</span>
            <p className="text-lg">
              Our innovative AI software will fine-
              <br />
              tune your photo. Then, our in-house <br /> experts will ensure 100% <br /> compliance.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Image src="/images/how_It_Works3.webp" alt="Step 3" width={125} height={125} />
            <span className="text-[32px] font-semibold">Submit your photo</span>
            <p className="text-lg">
              Your photo is ready for submission. <br /> Get a digital photo instantly, or have <br /> printouts
              delivered to your door for <br /> free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
