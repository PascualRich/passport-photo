import Image from "next/image";

export default function PassportPhotoMakerExplanation() {
  return (
    <div className="flex justify-center bg-[#f3f8fb] w-full px-4">
      <div className="flex flex-col my-20 justify-start items-center text-center lg:items-start lg:text-left lg:w-[1110px]">
        <h2 className="font-pt-serif w-full text-[28px] lg:text-[40px] font-bold leading-snug text-[#1e293b] mt-10">
          How Does Our Passport-Size Photo Maker Work?
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full font-sans text-[#1d243a] px-6 md:px-8 py-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[340px]">
            <Image
              src="/images/how_It_Works1.webp"
              alt="Step 1"
              width={80} // smaller icon for mobile
              height={80}
              className="md:w-[120px] md:h-[120px]" // scale up for desktop
            />
            <span className="text-[18px] md:text-[24px] font-semibold mt-4 md:mt-6">Take or upload a photo</span>
            <p className="text-[14px] md:text-[17px] leading-[22px] md:leading-[28px] mt-2 md:mt-3">
              Take a selfie or upload one from your gallery. Follow the on-screen instructions to meet all the requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[340px]">
            <Image
              src="/images/how_It_Works2.webp"
              alt="Step 2"
              width={80}
              height={80}
              className="md:w-[120px] md:h-[120px]"
            />
            <span className="text-[18px] md:text-[24px] font-semibold mt-4 md:mt-6">Get your photo verified</span>
            <p className="text-[14px] md:text-[17px] leading-[22px] md:leading-[28px] mt-2 md:mt-3">
              Our innovative AI software will fine-tune your photo. Then, our in-house experts will ensure 100% compliance.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[340px]">
            <Image
              src="/images/how_It_Works3.webp"
              alt="Step 3"
              width={80}
              height={80}
              className="md:w-[120px] md:h-[120px]"
            />
            <span className="text-[18px] md:text-[24px] font-semibold mt-4 md:mt-6">Submit your photo</span>
            <p className="text-[14px] md:text-[17px] leading-[22px] md:leading-[28px] mt-2 md:mt-3">
              Your photo is ready for submission. Get a digital photo instantly, or have printouts delivered to your door for free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
