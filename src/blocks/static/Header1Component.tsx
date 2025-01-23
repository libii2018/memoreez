"use client";
import React from "react";
import { Text } from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

function Component() {
  return (
    <div className="flex flex-col">
      <div className="px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-[35px] md:text-[45px] lg:text-[50px] font-semibold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl">
          Create beautiful photo galleries
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Wow your client with
        </p>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto justify-end items-end">
        <img
          src="/14.png"
          alt=""
          className="mx-auto sm:w-[1300px] sm:px-5 md:h-auto object-center"
        />
      </div>
    </div>
  );
}

export default Component;
