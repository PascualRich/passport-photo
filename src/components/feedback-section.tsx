"use client";

import Image from "next/image";
import React from "react";

export default function FeedbackSection() {
  const [selectedStarIndex, setSelectedStarIndex] = React.useState(0);
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="my-30 flex flex-col items-center justify-center gap-5 px-[18px] pb-10 lg:w-[1140px] lg:flex-row lg:items-end lg:gap-14 lg:px-0">
        <div className="flex flex-col items-center gap-10 lg:w-1/2 lg:items-start">
          <Image
            src="/images/man-offering-hand.svg"
            alt="Offer"
            width={248}
            height={188}
            className="scale-x-[-1] transform" // Flips the image horizontally
          />
          <span className="font-pt-serif hidden text-7xl leading-[80px] font-semibold tracking-[-2.4px] text-balance lg:block">
            Are You <br /> Satisfied <br /> With Our <br /> Service?
          </span>
          <span className="font-pt-serif block text-[40px] leading-[46px] font-semibold tracking-[-1.2896px] text-balance lg:hidden">
            Are You Satisfied <br /> With Our Service?
          </span>
          <span className="text-center text-lg tracking-[-0.2px] lg:text-left lg:text-2xl lg:tracking-[-0.7504px]">
            Let us know how we’re doing. <br />
            Customer feedback is always welcome.
          </span>
        </div>
        <div className="bg-border hidden h-full w-[2px] lg:block"></div>{" "}
        {/* The middle dividing line */}
        <div className="flex flex-col items-center justify-center text-center lg:w-1/2">
          <span className="font-pt-serif hidden text-[40px] font-semibold text-balance lg:block">
            Rate Your Reading <br /> Experience:
          </span>
          <div className="my-10 mb-10 flex flex-row items-center gap-2 lg:my-20">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Star
                key={index}
                filled={selectedStarIndex > index}
                onMouseEnter={() => setSelectedStarIndex(index + 1)}
                onMouseLeave={() => setSelectedStarIndex(0)}
              />
            ))}
          </div>
          <span className="mb-5 text-lg lg:text-2xl">
            <b>Rating: 4.74/5</b>
          </span>
          <span className="text-base text-[#a7adb5]">
            Number of votes: 46523
          </span>
        </div>
      </div>
    </div>
  );
}

interface StarProps {
  filled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Star({ filled, onMouseEnter, onMouseLeave }: StarProps) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      className="cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={filled ? "#fcd156" : "transparent"}
        stroke="#ebebeb"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
