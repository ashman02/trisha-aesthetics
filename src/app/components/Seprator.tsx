"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Seprator = ({ color = "foreground" }: { color?: string }) => {
  const separatorRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.to(separatorRef.current, {
      scaleX : 1,
      ease : "power3.inOut",
      duration : 1,
      scrollTrigger : {
        trigger : separatorRef.current,
        start : "top bottom",
        end : "+=100%",
      }
    })
  })
  return (
    <div
      ref={separatorRef}
      className="w-full h-px scale-x-0 origin-left"
      style={{ backgroundColor: `var(--${color})` }}
    />
  )
}

export default Seprator
