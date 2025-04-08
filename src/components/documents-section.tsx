import Image from "next/image";
import { Button } from "./ui/button";
import { mostSearchedDocuments, popularDocuments, popularDocumentsAroundTheWorld } from "@/data/documents";

export default function DocumentsSection() {
  return (
    <div className="flex w-full justify-center bg-[#f3f8fb] text-center lg:text-left">
      <div className="relative mt-20 mb-50 flex flex-col items-center overflow-hidden bg-white px-[18px] py-20 lg:w-[1380px] lg:items-start lg:justify-start lg:p-30 lg:pt-50">
        <span className="font-pt-serif mb-5 text-[32px] leading-[67px] font-bold tracking-[-1px] lg:text-5xl lg:tracking-[-1.6px]">
          Documents
        </span>

        <Image
          className="top-30 right-20 h-[288px] w-[285px] lg:absolute lg:h-[440px] lg:w-[435px]"
          src="/images/man-thinking.svg"
          alt="Passport Photo App"
          width={435}
          height={440}
        />

        <p className="border-b py-10 text-base">
          We provide photos for IDs from all over the world. You’ll find the one
          you are looking for!
        </p>
        <span className="font-pt-serif mt-5 mb-10 text-[24px] leading-[67px] font-bold tracking-[-1.6px] lg:mt-10 lg:mb-15 lg:text-[40px]">
          Most Searched
        </span>

        <div className="relative h-[420px] w-screen overflow-x-scroll pt-[56px] lg:h-[500px] lg:gap-10 lg:overflow-x-hidden">
          <div className="absolute flex flex-row gap-1 overflow-visible px-[18px] lg:gap-10">
            {mostSearchedDocuments.map((document) => (
              <div
                key={document.title}
                className="min-h-[326px] min-w-[285px] rounded-lg bg-[#f3f8fb] p-10 text-left hover:bg-[#D9E0F3] lg:min-h-[435px] lg:min-w-[350px]"
              >
                <div className="relative -mt-24 mb-5 h-[250px] w-[180px] lg:-mt-24 lg:mb-10 lg:h-[320px] lg:w-[230px]">
                  <Image
                    className="object-cover"
                    src={document.imageUrl}
                    alt="Documents"
                    fill
                  />
                </div>
                <span className="text-lg font-semibold lg:text-2xl lg:font-bold">
                  {document.title}
                </span>
                <Button
                  className="mt-6 h-[50px] w-[124px] text-base lg:mt-4 lg:w-[170px]"
                  variant="default"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        <span className="font-pt-serif mt-10 mb-15 text-[24px] font-bold lg:mt-20 lg:mb-25 lg:text-[40px] lg:leading-[67px] lg:tracking-[-1.6px]">
          Popular Documents
        </span>
        <div className="grid-rows grid gap-x-10 gap-y-15 lg:grid-cols-5 lg:gap-y-20">
          {popularDocuments.map((document) => (
            <div
              key={document.title}
              className="flex max-h-[108px] min-w-full flex-row items-center justify-between gap-6 rounded-2xl bg-[#f3f8fb] p-5 hover:bg-[#D9E0F3] lg:block lg:min-h-[230px] lg:min-w-[190px]"
            >
              <div className="relative -mt-14 mb-5 min-h-[100px] min-w-[76px] lg:-mt-14 lg:mb-10 lg:ml-[-40px] lg:min-h-[150px] lg:min-w-[120px]">
                <Image
                  className="object-contain"
                  src={document.imageUrl}
                  alt="Documents"
                  fill
                />
              </div>
              <span className="text-left text-base font-semibold lg:w-5/6 lg:font-bold">
                {document.title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-[24px] lg:hidden"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"
                  fill="#1D253B"
                ></path>
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-20 flex w-full flex-col items-center lg:mt-30">
          <Button
            className="h-[60px] w-full text-base lg:w-[255px]"
            variant="outline"
          >
            Show more documents
          </Button>
        </div>

        <span className="font-pt-serif mt-10 mb-15 text-[24px] font-bold lg:mt-20 lg:mb-25 lg:text-[40px] lg:leading-[67px] lg:tracking-[-1.6px]">
          Popular Documents Around the World
        </span>
        <div className="grid-rows grid gap-x-10 gap-y-15 lg:grid-cols-5 lg:gap-y-20">
          {popularDocumentsAroundTheWorld.map((document) => (
            <div
              key={document.title}
              className="flex max-h-[108px] min-w-full flex-row items-center justify-between gap-6 rounded-2xl bg-[#f3f8fb] p-5 hover:bg-[#D9E0F3] lg:block lg:min-h-[230px] lg:min-w-[190px]"
            >
              <div className="relative -mt-14 mb-5 min-h-[100px] min-w-[76px] lg:-mt-14 lg:mb-10 lg:ml-[-40px] lg:min-h-[150px] lg:min-w-[120px]">
                <Image
                  className="object-contain"
                  src={document.imageUrl}
                  alt="Documents"
                  fill
                />
              </div>
              <span className="text-left text-base font-semibold lg:w-5/6 lg:font-bold">
                {document.title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-[24px] lg:hidden"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"
                  fill="#1D253B"
                ></path>
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-20 flex w-full flex-col items-center lg:mt-30">
          <Button
            className="h-[60px] w-full text-base lg:w-[255px]"
            variant="outline"
          >
            Show more documents
          </Button>
        </div>
      </div>
    </div>
  );
}
