import Image from "next/image";

export default function MediaPartners() {
  return (
    <div className="flex justify-center bg-[#f3f8fb] w-full">
      <div className="flex flex-row flex-wrap items-center justify-center gap-14 mt-10 border-b border-b-[#dcdde6] pb-10 max-w-[1400px]">
        <span className="w-full lg:w-auto text-center">As seen in</span>
        <div className="w-[160px] h-[32px] relative">
          <Image src="/icons/bloomberg.svg" alt="Bloomberg" fill />
        </div>

        <div className="w-[117px] h-[32px] relative">
          <Image src="/icons/yahoo.svg" alt="Yahoo" fill />
        </div>

        <div className="w-[56px] h-[32px] relative">
          <Image src="/icons/bbc.svg" alt="BBC" fill />
        </div>

        <div className="w-[40px] h-[32px] relative">
          <Image src="/icons/cnbc.svg" alt="CNBC" fill />
        </div>

        <div className="w-[70px] h-[32px] relative">
          <Image src="/icons/msn.svg" alt="MSN" fill />
        </div>
        <div className="w-[145px] h-[32px] relative">
          <Image src="/icons/verizon.svg" alt="Verizon" fill />
        </div>
        <div className="w-[68px] h-[32px] relative">
          <Image src="/icons/forbes.svg" alt="Forbes" fill />
        </div>
        <div className="w-[170px] h-[32px] relative">
          <Image src="/icons/tnyt.svg" alt="NYT" fill />
        </div>
      </div>
    </div>
  );
}
