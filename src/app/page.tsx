"use client"
import Image from "next/image"
import heroImg from "@/../public/images/hero-img2.jpg"
import Button from "@/app/components/Button"
import Seprator from "@/app/components/Seprator"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP)

export default function Home() {
  const heroTl = useRef<GSAPTimeline>(null)
  const heroHeading = useRef<HTMLHeadingElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const handleOnHeroBtnClick = () => {
    console.log("clicker")
  }

  const { contextSafe } = useGSAP(() => {
    if (!heroTl.current) return
    heroTl.current
      .to(heroHeading.current, {
        y: 0,
      }, "<")
      .to(
        ".hero-image",
        {
          y: 0,
        },
        "-=.8"
      )
  }, [isLoading])

  const handleImageLoaded = contextSafe(() => {
    if (!heroHeading.current) return
    const imageY = heroHeading.current.clientHeight + 8

    heroTl.current = gsap
      .timeline({ defaults: { duration: 1, ease: "sine.inOut" } })
      .set(".hero-image", { y: -imageY })
      .set(heroHeading.current, { y: imageY })
      .to(loadingRef.current, {
        opacity: 0,
        onComplete: () => {
          loadingRef.current?.remove()
        },
      })
    setIsLoading(false)
  })

  return (
    <main className="flex flex-col gap-2 lg:gap-4 overflow-hidden">
      <div
        ref={loadingRef}
        className="loading-section w-full h-screen flex items-center justify-center bg-foreground text-background absolute z-[999] opacity-100 medium-header"
      >
        GETTING THIS READY ...
      </div>
      <section className="hero my-container pt-[46px] cols-view">
        <div className="overflow-hidden">
          <h1
            ref={heroHeading}
            className="hero-heading main-header text-primary"
          >
            TRISHA PARKER
          </h1>
        </div>
        <div className="w-full h-screen min-h-[600px]">
          <Image
            src={heroImg}
            alt="hero image"
            quality={100}
            priority
            className="hero-image w-full h-full object-cover object-[33%]"
            placeholder="blur"
            onLoad={handleImageLoaded}
          />
        </div>
        <div className="call-to-action cols-view md:flex-row md:items-end md:justify-between">
          <h1 className="medium-header w-full md:w-4/6 lg:w-1/2">
            Enjoy Calm, Confident, and Clear Skin Everyday
          </h1>
          <div>
            <Button name="GLOW TODAY" onBtnClick={handleOnHeroBtnClick} />
          </div>
        </div>
      </section>
      <Seprator />
      <section>Hey I will be here in few minutes</section>
    </main>
  )
}
