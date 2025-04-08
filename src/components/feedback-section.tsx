"use client";

import Image from "next/image";
import React from "react";

export default function FeedbackSection() {
  const [selectedStarIndex, setSelectedStarIndex] = React.useState(0);
  return (
    <div className="flex justify-center bg-white w-full">
      <div className="flex flex-row items-end justify-center gap-14 my-30 pb-10 lg:w-[1140px]">
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
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Star
                key={index}
                filled={selectedStarIndex > index}
                onMouseEnter={() => setSelectedStarIndex(index + 1)}
                onMouseLeave={() => setSelectedStarIndex(0)}
              />
            ))}
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
