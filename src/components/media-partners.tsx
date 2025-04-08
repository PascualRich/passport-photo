import Image from "next/image";

export default function MediaPartners() {
  return (
    <div className="flex w-full justify-center bg-[#f3f8fb]">
      <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-14 border-b border-b-[#dcdde6] pb-10 lg:max-w-[1400px]">
        <span className="w-full text-center lg:w-auto">As seen in</span>
        <div className="relative h-[32px] w-[160px]">
          <Image src="/icons/bloomberg.svg" alt="Bloomberg" fill />
        </div>

        <div className="relative h-[32px] w-[117px]">
          <Image src="/icons/yahoo.svg" alt="Yahoo" fill />
        </div>

        <div className="relative h-[32px] w-[56px]">
          <Image src="/icons/bbc.svg" alt="BBC" fill />
        </div>

        <div className="relative h-[32px] w-[40px]">
          <Image src="/icons/cnbc.svg" alt="CNBC" fill />
        </div>

        <div className="relative h-[32px] w-[70px]">
          <Image src="/icons/msn.svg" alt="MSN" fill />
        </div>
        <div className="relative h-[32px] w-[145px]">
          <Image src="/icons/verizon.svg" alt="Verizon" fill />
        </div>
        <div className="relative h-[32px] w-[68px]">
          <Image src="/icons/forbes.svg" alt="Forbes" fill />
        </div>
        <div className="relative h-[32px] w-[170px]">
          <Image src="/icons/tnyt.svg" alt="NYT" fill />
        </div>
      </div>
    </div>
  );
}
