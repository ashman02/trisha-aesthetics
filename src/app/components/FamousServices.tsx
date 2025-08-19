"use client"
import { famousServicesData } from "@/data"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import SectionIntro from "./SectionIntro"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const FamousServices = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeIndexRef = useRef<number>(activeIndex)
  const servicesContainerRef = useRef<HTMLDivElement>(null)
  const serviceContainerHeaderRef = useRef<HTMLHeadingElement>(null)

  const { contextSafe } = useGSAP(() => {
    gsap.to(".services-section", {
      backgroundColor: "var(--foreground)",
      color: "var(--background)",
      duration: 0.3,
      ease: "sine.in",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top -5%",
        end: "bottom bottom",
        toggleActions: "play reverse play reverse",
      },
    })

    const mm = gsap.matchMedia()
    mm.add("(min-width: 768px)", () => {
      const container = servicesContainerRef.current
      if (!container) return
      const items = container.querySelectorAll(".famous-service")
      gsap.set(items, { yPercent: 100, scale: 0.7 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: "top top",
          end: `+=${items.length * 100}%`,
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            const segment = 1 / items.length
            const idx = Math.min(
              items.length - 1,
              Math.max(0, Math.floor(self.progress / segment))
            )
            if (idx !== activeIndexRef.current) {
              handleChangeActiveIndex(idx)
            }
          },
        },
      })
      items.forEach((item, i) => {
        tl.to(
          item,
          {
            keyframes: [
              { yPercent: 32, scale: 1 },
              { yPercent: -50, scale: 0.7 },
            ],
            ease: "sine.inOut",
          },
          i * 0.3
        )
      })
    })
  }, [])

  const handleChangeActiveIndex = contextSafe((i: number) => {
    activeIndexRef.current = i
    gsap.fromTo(
      serviceContainerHeaderRef.current,
      {
        opacity: 0,
        scaleY: 0,
        duration: 0.3,
        ease: "power3.inOut",
        onComplete: () => setActiveIndex(i),
      },
      { opacity: 1, scaleY: 1, duration: 0.3, ease: "power3.inOut" }
    )
    return
  })

  return (
    <section className="services-section bg-background text-foreground relative min-h-screen">
      <SectionIntro
        heading1="SIGNATURE SERVICES"
        heading2="SIGNATURE SERVICES"
      />
      <div
        ref={servicesContainerRef}
        className="overflow-hidden pl-2 md:my-container w-full h-screen min-h-[600px] flex gap-2 relative"
      >
        <div className="bigger-image hidden md:block md:w-3/5 h-full">
          <Image
            src={famousServicesData[activeIndex].img}
            alt={famousServicesData[activeIndex].name}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="services-container w-full md:w-[40%] h-full flex flex-row md:flex-col items-center md:items-end gap-2 flex-nowrap overflow-auto md:overflow-hidden hide-scrollbar snap-x snap-mandatory md:snap-none relative">
          {famousServicesData.map((s, i) => (
            <div
              key={s.name}
              className={`cols-view items-center shrink-0 w-[95%] md:w-full lg:w-1/2 snap-start md:snap-normal ${
                i === famousServicesData.length - 1 ? "mr-2 md:mr-0" : ""
              } famous-service md:absolute md:h-full`}
            >
              <h1 className="medium-header md:hidden">{s.name}</h1>
              <div className="aspect-square w-full">
                <Image
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          ))}
          <h1
            ref={serviceContainerHeaderRef}
            className="medium-header text-center text-accent hidden md:block absolute z-20 top-1/2 w-full origin-bottom"
          >
            {famousServicesData[activeIndex].name}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default FamousServices
