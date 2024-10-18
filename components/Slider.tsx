"use client";

import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Image from "next/image";

type Slide = {
  img: string;
  title: string;
  description: string;
};

type SliderProps = {
  slides: Slide[];
};

export default function Slider({ slides }: SliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      slides: {
        perView: 4,
        spacing: 56,
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {slides.map((item, index) => (
        <div
          key={index}
          className="keen-slider__slide overflow-hidden rounded-[36px] bg-[#292828] text-white"
        >
          <Image src={item.img} alt={item.title} width={500} height={300} />
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
