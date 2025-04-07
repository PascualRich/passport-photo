import Image from "next/image";
import { Button } from "./ui/button";
import { mostSearchedDocuments, popularDocuments, popularDocumentsAroundTheWorld } from "@/data/documents";

export default function DocumentsSection() {
  return (
    <div className="flex justify-center bg-[#f3f8fb] w-full">
      <div className="flex flex-col bg-white mt-20 mb-50 justify-start w-[1380px] p-30 pt-50 pb-30 relative">
        <span className="font-pt-serif text-5xl font-bold tracking-[-1.6px] leading-[67px] mb-5">Documents</span>
        <p className="border-b py-10">
          We provide photos for IDs from all over the world. You’ll find the one you are looking for!
        </p>
        <span className="font-pt-serif text-[40px] font-bold tracking-[-1.6px] leading-[67px] mt-10 mb-15">
          Most Searched
        </span>

        <Image
          className="absolute top-30 right-20 w-[435px] h-[440px]"
          src="/images/man-thinking.svg"
          alt="Passport Photo App"
          width={435}
          height={440}
        />

        <div className="flex flex-row gap-10">
          {mostSearchedDocuments.map((document) => (
            <div
              key={document.title}
              className="mt-10 bg-[#f3f8fb] hover:bg-[#D9E0F3] rounded-lg p-10 max-w-[350px] max-h-[435px]"
            >
              <div className="w-[230px] h-[320px] relative -mt-24 mb-10">
                <Image src={document.imageUrl} alt="Documents" fill />
              </div>
              <span className="text-2xl font-bold">{document.title}</span>
              <Button className="text-base mt-4 w-[170px] h-[50px]" variant="default">
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <span className="font-pt-serif text-[40px] font-bold tracking-[-1.6px] leading-[67px] mt-30 mb-15">
          Popular Documents
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-20">
          {popularDocuments.map((document) => (
            <div
              key={document.title}
              className="bg-[#f3f8fb] hover:bg-[#D9E0F3] rounded-lg p-5 max-w-[190px] max-h-[230px] mx-auto"
            >
              <div className="w-[120px] h-[150px] relative -mt-14 mb-5">
                <Image src={document.imageUrl} alt="Documents" fill />
              </div>
              <span className="text-base font-bold">{document.title}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-30">
          <Button className="text-base w-[255px] h-[60px]" variant="outline">
            Show more documents
          </Button>
        </div>

        <span className="font-pt-serif text-[40px] font-bold tracking-[-1.6px] leading-[67px] mt-30 mb-15">
          Popular Documents Around the World
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-20">
          {popularDocumentsAroundTheWorld.map((document) => (
            <div
              key={document.title}
              className="mt-10 bg-[#f3f8fb] hover:bg-[#D9E0F3] rounded-lg p-5 max-w-[180px] max-h-[230px]"
            >
              <div className="w-[120px] h-[150px] relative -mt-14 mb-5">
                <Image src={document.imageUrl} alt="Documents" fill />
              </div>
              <span className="text-base font-bold">{document.title}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-30">
          <Button className="text-base w-[255px] h-[60px]" variant="outline">
            Show more documents
          </Button>
        </div>
      </div>
    </div>
  );
}
