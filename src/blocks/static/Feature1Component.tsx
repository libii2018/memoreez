"use client";
import React from "react";
import { Text } from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

function FeatureBlock() {
  return (
    <section className="lg:px-40 md:px-20 px-4 pb-10 md:pb-16 lg:pb-20 lg:h-fit">
      <div className="p-10 text-center">
        <h2 className="text-5xl font-normal">Features</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-20 lg:gap-52 w-full">
        <div className="flex flex-col gap-y-9 md:flex-row md:justify-between w-full">
          <div className="flex flex-col items-center justify-center md:w-1/2 px-0 md:px-2 lg:px-10">
            <div className="w-full h-[437px] md:h-[537px] lg:h-[637px] p-6 md:px-[54px] md:py-[160px] ld:px-[74px] ld:py-[190px] rounded-[8px] bg-[#CAB1AC]">
              <img
                src="/10.gif"
                alt="image feature"
                className="w-full h-full aspect-square object-contain"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:items-center md:justify-center md:w-1/2 w-full md:h-fit m-auto">
            <div className="max-w-md flex flex-col gap-8 mx-auto">
              <h1 className="text-[#141414] font-normal uppercase tracking-wider text-[30px] md:text-[40px] lg:text-[50px]">
                Cover Image
              </h1>
              <p className="text-base font-normal text-[20px]">
                Customizable cover image for a better first image and wow effect
              </p>
              <a
                href="#"
                className="whitespace-nowrap text-[16px] md:text-[18px] lg:text-[20px] px-[33px] py-[8px] md:px-[43px] md:py-[10px] lg:px-[53px] lg:py-[12px] w-fit inline-flex items-center text-white bg-[#111111] hover:bg-primary-800 font-medium rounded-[.5rem] text-center"
              >
                Start for free
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-9 md:flex-row-reverse md:justify-between w-full">
          <div className="flex flex-col items-center justify-center md:w-1/2 px-0 md:px-2 lg:px-10">
            <div className="w-full h-[437px] md:h-[537px] lg:h-[637px] p-6 md:px-[54px] md:py-[160px] ld:px-[74px] ld:py-[190px] rounded-[8px] bg-[#A0AC98]">
              <img
                src="/11.png"
                alt="image feature"
                className="w-full h-full aspect-square object-contain"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:items-center md:justify-center md:w-1/2 w-full md:h-fit m-auto">
            <div className="max-w-md flex flex-col gap-8 mx-auto">
              <h1 className="text-[#141414] font-normal uppercase tracking-wider text-[30px] md:text-[40px] lg:text-[50px]">
                Password
              </h1>
              <p className="text-base font-normal text-[20px]">
                you control who has access. Protect you gallery with a password
              </p>
              <a
                href="#"
                className="whitespace-nowrap text-[16px] md:text-[18px] lg:text-[20px] px-[33px] py-[8px] md:px-[43px] md:py-[10px] lg:px-[53px] lg:py-[12px] w-fit inline-flex items-center text-white bg-[#111111] hover:bg-primary-800 font-medium rounded-[.5rem] text-center"
              >
                Start for free
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-9 md:flex-row md:justify-between w-full">
          <div className="flex flex-col items-center justify-center md:w-1/2 px-0 md:px-2 lg:px-10">
            <div className="w-full h-[437px] md:h-[537px] lg:h-[637px] p-6 md:px-[54px] md:py-[160px] ld:px-[74px] ld:py-[190px] rounded-[8px] bg-[#806651]">
              <img
                src="/12.png"
                alt="image feature"
                className="w-full h-full aspect-square object-contain"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:items-center md:justify-center md:w-1/2 w-full md:h-fit m-auto">
            <div className="max-w-md flex flex-col gap-8 mx-auto">
              <h1 className="text-[#141414] font-normal uppercase tracking-wider text-[30px] md:text-[40px] lg:text-[50px]">
                Download
              </h1>
              <p className="text-base font-normal text-[20px]">
                Control wether or not photos from the galleries can be download
              </p>
              <a
                href="#"
                className="whitespace-nowrap text-[16px] md:text-[18px] lg:text-[20px] px-[33px] py-[8px] md:px-[43px] md:py-[10px] lg:px-[53px] lg:py-[12px] w-fit inline-flex items-center text-white bg-[#111111] hover:bg-primary-800 font-medium rounded-[.5rem] text-center"
              >
                Start for free
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-9 md:flex-row-reverse md:justify-between w-full">
          <div className="flex flex-col items-center justify-center md:w-1/2 px-0 md:px-2 lg:px-10">
            <div className="w-full h-[437px] md:h-[537px] lg:h-[637px] p-6 md:px-[54px] md:py-[160px] ld:px-[74px] ld:py-[190px] rounded-[8px] bg-[#F8F7F5]">
              <img
                src="/13.png"
                alt="image feature"
                className="w-full h-full aspect-square object-contain"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:items-center md:justify-center md:w-1/2 w-full md:h-fit m-auto">
            <div className="max-w-md flex flex-col gap-8 mx-auto">
              <h1 className="text-[#141414] font-normal uppercase tracking-wider text-[30px] md:text-[40px] lg:text-[50px]">
                Favorites
              </h1>
              <p className="text-base font-normal text-[20px]">
                Get instant feedback by letting your clients pick their favorite
                photos{" "}
              </p>
              <a
                href="#"
                className="whitespace-nowrap text-[16px] md:text-[18px] lg:text-[20px] px-[33px] py-[8px] md:px-[43px] md:py-[10px] lg:px-[53px] lg:py-[12px] w-fit inline-flex items-center text-white bg-[#111111] hover:bg-primary-800 font-medium rounded-[.5rem] text-center"
              >
                Start for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureBlock;
