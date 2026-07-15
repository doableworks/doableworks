"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const items = [
  { type: "text", label: "Under Construction" },
  { type: "star" },
  { type: "text", label: "Under Construction" },
  { type: "star" },
  { type: "text", label: "Under Construction" },
  { type: "star" },
  { type: "text", label: "Under Construction" },
  { type: "star" },
  { type: "text", label: "Under Construction" },
  { type: "star" },
    { type: "text", label: "Under Construction" },
  { type: "star" },
  { type: "text", label: "Under Construction" },
  { type: "star" },
  { type: "text", label: "Under Construction" },
  { type: "star" },
  { type: "text", label: "Under Construction" },
  { type: "star" },
  { type: "text", label: "Under Construction" },
  { type: "star" },
]

export default function TickerCarousel() {
  return (
    <div className="w-full bg-black overflow-hidden">
      <Carousel
        opts={{ loop: true, align: "start", dragFree: true }}
        plugins={[AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: false })]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {items.map((item, i) =>
            item.type === "text" ? (
              <CarouselItem
                key={i}
                className="basis-1/6 pl-0 flex items-center justify-center"
              >
                <span className="font-inter font-light lowercase tracking-[0.01em] text-xl leading-[3.125rem] text-[#f2d801] whitespace-nowrap">
                  {item.label}
                </span>
              </CarouselItem>
            ) : (
              <CarouselItem
                key={i}
                className="basis-auto pl-0 flex items-center justify-center py-[0.625rem] px-4"
              >
                <img
                  src="/images/icons/Star.svg"
                  alt="star"
                  className="size-6 shrink-0"
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
