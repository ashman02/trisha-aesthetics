"use client"
import Image, { StaticImageData } from "next/image"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger)

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
        container.scrollWidth - container.clientWidth - 4
      ) {
        container.scrollLeft = container.scrollLeft - singleSetWidth
      }
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  useGSAP(() => {
    const container = scrollRef.current
    if (!container) return
    const imgArray = container.querySelectorAll(".carousel-img")
    imgArray.forEach((img) => {
      gsap.to(img, {
        x: -50,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: img,
          scroller: container,
          horizontal: true,
          scrub: true,
        },
      })
    })
  }, [])

  // Mouse drag scroll logic for left-button drag
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const mouseDownHandler = (e: MouseEvent) => {
      if (e.button !== 0) return // Only left mouse button
      isDown = true
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = x - startX
      container.scrollLeft = scrollLeft - walk
    }

    const mouseUpLeaveHandler = () => {
      isDown = false
    }

    container.addEventListener("mousedown", mouseDownHandler)
    container.addEventListener("mousemove", mouseMoveHandler)
    container.addEventListener("mouseup", mouseUpLeaveHandler)
    container.addEventListener("mouseleave", mouseUpLeaveHandler)

    return () => {
      container.removeEventListener("mousedown", mouseDownHandler)
      container.removeEventListener("mousemove", mouseMoveHandler)
      container.removeEventListener("mouseup", mouseUpLeaveHandler)
      container.removeEventListener("mouseleave", mouseUpLeaveHandler)
    }
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
            className={`w-4/5 md:w-1/2 lg:w-[28%] aspect-square shrink-0 cursor-grab select-none overflow-hidden`}
          >
            <Image
              src={img}
              alt={`before and after image ${idx + 1}`}
              quality={100}
              loading="lazy"
              className="w-full h-full object-cover scale-150 lg:scale-125 carousel-img"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfinitCarousel
