"use client";

import React from "react";
import Image from "next/image";

type Slide = {
  img: string;
  title: string;
  description: string;
};

type SliderProps = {
  slides: Slide[];
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Slider({ slides }: SliderProps) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full mx-auto"
    >
      <CarouselContent className="">
        {slides.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <div
              key={index}
              className="overflow-hidden rounded-[36px] bg-[#292828] text-white m-4"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={1200}
                height={1200}
                className=" h-64"
              />
              <div className="p-5">
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 md:left-4 lg:left-8" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 md:right-4 lg:right-8" />
    </Carousel>
  );
}
