"use client"
import Image, { StaticImageData } from "next/image"
import React, { useEffect, useRef } from "react"

const InfinitCarousel = ({ images }: { images: Array<StaticImageData> }) => {
  const imagesArray = [...images, ...images]
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    // Initial scroll to start of first image set
    const firstSetScrollStart = 200
    const singleSetWidth = container.scrollWidth / 2 // width of one duplicated image set

    // Set position at the beginning of first set upon mount
    container.scrollLeft = firstSetScrollStart

    const handleScroll = () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth
      } else if (
        container.scrollLeft >=
        container.scrollWidth - window.innerWidth - 4
      ) {
        container.scrollLeft = container.scrollLeft - singleSetWidth
      }
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="carousalh w-full h-screen">
      <div
        ref={scrollRef}
        className="flex items-center flex-nowrap gap-2 overflow-x-auto w-full h-full hide-scrollbar"
      >
        {imagesArray.map((img, idx) => (
          <div
            key={idx}
            className={`w-4/5 md:w-1/2 lg:w-[28%] aspect-square shrink-0 cursor-grab select-none`}
          >
            <Image
              src={img}
              alt={`before and after image ${idx + 1}`}
              quality={100}
              loading="lazy"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfinitCarousel
