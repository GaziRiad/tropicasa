"use client";

import Image from "next/image";
import Link from "next/link";
import { SEOResource } from "@/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type SliderProps = {
  slides: SEOResource[];
};

export default function Slider({ slides }: SliderProps) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="mx-auto w-full"
    >
      <CarouselContent className="">
        {slides.map((item, index) => (
          <CarouselItem key={index} className="flex md:basis-1/2 lg:basis-1/3">
            <Link href={`/${item.Topic}/${item.ID}`} className="flex flex-1">
              <div className="m-4 flex flex-1 flex-col overflow-hidden rounded-3xl bg-[#292828] text-white transition-transform duration-300 ease-in-out hover:scale-105 lg:rounded-[36px]">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.Image || "/images/messi.jpg"}
                    alt={item.Title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-3xl lg:rounded-t-[36px]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-lg font-medium">{item.Title}</p>
                  <p className="mt-auto text-sm text-[#a6a6a6]">
                    {`${item.Description.substring(0, 120)}...`}
                  </p>
                  <span className="text-md mt-4 text-blue-400">Read more</span>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-8 top-[105%] -translate-y-1/2 transform bg-black hover:bg-black/80 md:left-4 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-white" />
      <CarouselNext className="absolute left-20 top-[105%] -translate-y-1/2 transform bg-black hover:bg-black/80 md:right-4 lg:left-14 lg:right-8 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-white" />
    </Carousel>
  );
}
