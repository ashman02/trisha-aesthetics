"use client"
import Image, { StaticImageData } from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { galleryImagesData } from "@/data"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

// Utility function: Splits flat array into numColumns columns
const splitIntoColumns = (images: StaticImageData[], numColumns: number) => {
  const cols: StaticImageData[][] = Array.from({ length: numColumns }, () => [])
  images.forEach((img, idx) => {
    cols[idx % numColumns].push(img)
  })
  return cols
}

const Gallery = () => {
  const [columnCount, setColumnCount] = useState(3)
  const columnRefsArray = useRef<HTMLDivElement[]>([])
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const animationTl = useRef<GSAPTimeline>(null)
  useEffect(() => {
    // calculate how many columns to display based on screen width
    const updateColumnCount = () => {
      if (window.innerWidth >= 1024) {
        setColumnCount(3)
      } else {
        setColumnCount(2)
      }
    }
    updateColumnCount()
    window.addEventListener("resize", updateColumnCount)
    return () => window.removeEventListener("resize", updateColumnCount)
  }, [])

  useGSAP(() => {
    const columns = columnRefsArray.current
    if (!columns.length) return

    const mm = gsap.matchMedia()
    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(max-width: 1023px)",
      },
      (context) => {
        const { isDesktop } = context.conditions as {
          isDesktop: boolean
          isTablet: boolean
        }

        // calculate the height of each column
        const desktopColumnHieght = (-window.innerWidth / 3) * 5
        const tabletColumnHieght = (-window.innerWidth / 2) * 8

        // set the initial position of each column based on screen width
        if (isDesktop) {
          gsap.set(columns[0], { y: desktopColumnHieght })
          gsap.set(columns[2], { y: desktopColumnHieght })
        } else {
          gsap.set(columns[0], { y: tabletColumnHieght })
        }

        // Create a timeline with scroll trigger
        if (animationTl.current) animationTl.current.kill()
        animationTl.current = gsap.timeline({
          defaults: { duration: 0.8, ease: "power3.out" },
          scrollTrigger: {
            trigger: mainContainerRef.current,
            pin: true,
            start: "top top",
            end: `+=300%`, //() => `+=${isDesktop ? desktopColumnHieght : tabletColumnHieght}px`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        // apply based on the screen
        if (isDesktop) {
          animationTl.current
            .to(
              columns[0],
              {
                y: 0,
              },
              "<"
            )
            .to(
              columns[2],
              {
                y: 0,
              },
              "<"
            )
            .to(
              columns[1],
              {
                y: desktopColumnHieght,
              },
              "<"
            )
        } else {
          animationTl.current
            .to(
              columns[0],
              {
                y: 0,
              },
              "<"
            )
            .to(
              columns[1],
              {
                y: tabletColumnHieght,
              },
              "<"
            )
        }
      }
    )
  }, [columnCount])

  const columns = splitIntoColumns(galleryImagesData, columnCount)

  return (
    <main className="my-container pt-[46px] pb-4">
      <section
        ref={mainContainerRef}
        className="w-full h-screen min-h-[600px] flex gap-2 md:gap-4 overflow-hidden"
      >
        {columns.map((col, idx) => (
          <div
            ref={(el: HTMLDivElement | null) => {
              if (el) columnRefsArray.current[idx] = el
            }}
            key={idx}
            className="cols-view w-1/2 lg:w-1/3"
          >
            {col.map((img, idx) => (
              <div key={idx} className="w-full h-full">
                <Image
                  src={img}
                  alt="gallery-image"
                  className="w-full aspect-square object-cover gallery-img"
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}

export default Gallery
