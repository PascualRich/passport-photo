import Image from "next/image";

export default function PassportPhotoMakerExplanation() {
  return (
    <div className="flex justify-center bg-[#f3f8fb] w-full px-4">
      <div className="flex flex-col my-20 justify-start items-center text-center lg:items-start lg:text-left lg:w-[1110px]">
        <h2 className="font-pt-serif w-full text-[28px] lg:text-[40px] font-bold leading-snug text-[#1e293b]">
          How Does Our Passport-Size Photo Maker Work?
        </h2>
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10 w-full font-sans">
          {/* Step 1 */}
          <div className="flex items-center lg:items-start text-center lg:text-left flex-col gap-5 max-w-sm">
            <Image src="/images/how_It_Works1.webp" alt="Step 1" width={64} height={64} />
            <span className="text-xl lg:text-[20px] font-semibold text-[#1e293b]">
              Take or upload a photo
            </span>
            <p className="text-sm lg:text-base text-slate-700 leading-relaxed">
              Take a selfie or upload one from your gallery. Follow the on-screen instructions to meet all the requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex items-center lg:items-start text-center lg:text-left flex-col gap-5 max-w-sm">
            <Image src="/images/how_It_Works2.webp" alt="Step 2" width={64} height={64} />
            <span className="text-xl lg:text-[20px] font-semibold text-[#1e293b]">
              Get your photo verified
            </span>
            <p className="text-sm lg:text-base text-slate-700 leading-relaxed">
              Our innovative AI software will fine-tune your photo. Then, our in-house experts will ensure 100% compliance.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex items-center lg:items-start text-center lg:text-left flex-col gap-5 max-w-sm">
            <Image src="/images/how_It_Works3.webp" alt="Step 3" width={64} height={64} />
            <span className="text-xl lg:text-[20px] font-semibold text-[#1e293b]">
              Submit your photo
            </span>
            <p className="text-sm lg:text-base text-slate-700 leading-relaxed">
              Your photo is ready for submission. Get a digital photo instantly, or have printouts delivered to your door for free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
