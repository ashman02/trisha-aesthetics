"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface SectionIntroProps {
  heading1: string
  heading2: string
}

const SectionIntro = ({ heading1, heading2 }: SectionIntroProps) => {
  const introSectionRef = useRef<HTMLDivElement>(null)
  const introSectionFirstHeader = useRef<HTMLHeadingElement>(null)
  const introSectionSecondHeader = useRef<HTMLHeadingElement>(null)
  const introSectionTimeline = useRef<GSAPTimeline>(null)
  useGSAP(() => {
    if (introSectionTimeline.current) introSectionTimeline.current.kill()
    gsap.set(introSectionSecondHeader.current, {xPercent : -97})
    introSectionTimeline.current = gsap
      .timeline({
        defaults: { ease: "circ.inOut" },
        scrollTrigger: {
          trigger: introSectionRef.current,
          start: "top center",
          end: "+=1500",
          scrub: true,
        },
      })
      .to(introSectionFirstHeader.current, {
        xPercent: -97,
      })
      .to(introSectionSecondHeader.current, {
        xPercent: 0,
      }, "<")
  }, [])
  return (
    <div className="py-32 overflow-hidden" ref={introSectionRef}>
      <h1
        ref={introSectionFirstHeader}
        className="large-header whitespace-nowrap"
      >
        {heading1}
      </h1>
      <h1
        ref={introSectionSecondHeader}
        className="large-header whitespace-nowrap"
      >
        {heading2}
      </h1>
    </div>
  )
}

export default SectionIntro
