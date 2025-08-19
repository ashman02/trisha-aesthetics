"use client"
import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface buttonProps {
  name: string
  mainColor?: string
  secondaryColor?: string
  onBtnClick: () => void
}
gsap.registerPlugin(useGSAP)

const Button = ({
  name,
  onBtnClick,
  mainColor = "foreground",
  secondaryColor = "background",
}: buttonProps) => {
  const { contextSafe } = useGSAP()
  const tl = useRef<GSAPTimeline>(null)
  const firstColorRef = useRef<HTMLDivElement>(null)
  const secondColorRef = useRef<HTMLDivElement>(null)

  const handleOnMouseEnter = contextSafe(() => {
    if (tl.current) tl.current.kill()
    tl.current = gsap
      .timeline({ defaults: { duration: 0.5, ease: "circ.out" } })
      .to(firstColorRef.current, {
        scaleY: 1,
      })
      .to(
        secondColorRef.current,
        {
          scaleY: 1,
        },
        "-=.3"
      )
  })

  const handleOnMouseLeave = contextSafe(() => {
    if (tl.current) tl.current.kill()
    tl.current = gsap
      .timeline({ defaults: { duration: 0.5, ease: "circ.out" } })
      .to(secondColorRef.current, {
        scaleY: 0,
      })
      .to(
        firstColorRef.current,
        {
          scaleY: 0,
        },
        "-=.3"
      )
  })

  return (
    <button
      className="group py-1 md:py-2 px-3 md:px-6 border rounded-full relative overflow-hidden cursor-pointer"
      style={{
        borderColor: `var(--${mainColor})`,
        backgroundColor: `var(--${secondaryColor})`,
      }}
      onClick={onBtnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <h2
        className={`font-sans text-xs leading-[120%] tracking-tight font-semibold text-${mainColor}  group-hover:text-${secondaryColor} transition-colors duration-300 ease-in relative z-30`}
      >
        {name}
      </h2>
      <div
        ref={firstColorRef}
        className="w-full h-full bg-primary absolute top-0 left-0 z-10 scale-y-0 origin-bottom rounded-full"
      />
      <div
        ref={secondColorRef}
        className="w-full h-full absolute top-0 left-0 scale-y-0 z-20 origin-bottom rounded-full"
        style={{ backgroundColor: `var(--${mainColor})` }}
      />
    </button>
  )
}

export default Button
