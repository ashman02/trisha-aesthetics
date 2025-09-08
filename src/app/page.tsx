"use client"
import Image from "next/image"
import heroImg from "@/../public/images/hero-img-final.jpeg"
import aboutImg from "@/../public/images/about-img.jpeg"
import Button from "@/app/components/Button"
import Seprator from "@/app/components/Seprator"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { beforAndAfterImagesForHome } from "@/data"
import InfinitCarousel from "./components/InfinitCarousel"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FamousServices from "./components/FamousServices"
import Testimonials from "./components/Testimonials"
gsap.registerPlugin(useGSAP, ScrollTrigger)

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
      .to(
        heroHeading.current,
        {
          y: 0,
        },
        "<"
      )
      .to(
        ".hero-image",
        {
          y: 0,
        },
        "-=.8"
      )

    gsap.to(".about-main-img", {
      y: 70,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: ".about-image-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    })
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
    <main className="cols-view overflow-hidden">
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
      <section className="cols-view">
        <InfinitCarousel images={beforAndAfterImagesForHome} />
        <div className="my-container call-to-action cols-view md:flex-row md:items-end md:justify-between">
          <h1 className="medium-header w-full md:w-4/6 lg:w-1/2">
            We Help Busy Adults Achieve Clear, Confident Skin
          </h1>
          <div>
            <Button name="START NOW" onBtnClick={handleOnHeroBtnClick} />
          </div>
        </div>
      </section>
      <Seprator />
      <section className="my-container cols-view">
        <div className="about-image-container overflow-hidden w-full h-screen min-h-[600px]">
          <Image
            src={aboutImg}
            alt="about section image"
            className="w-full h-full object-cover object-right lg:object-top-right scale-125 about-main-img"
          />
        </div>
        <div className="cols-view md:flex-row justify-between">
          <h1 className="medium-header w-full md:w-[45%]">About Me</h1>
          <div className="cols-view w-full">
            <p className="body-text">
              With over 5 years of professional experience and 1,000+ satisfied
              clients, I specialize in personalized skincare and beauty
              treatments that deliver real, lasting results. Whether you’re
              struggling with stress breakouts, aging, sensitivity, or just want
              to glow without makeup.
            </p>
            <p className="body-text">
              I’m dedicated to understanding your unique needs and crafting
              effective, gentle solutions—no quick fixes. My clients choose me
              for my warm, trustworthy approach, proven results, and ongoing
              commitment to the best in esthetics. Experience calming, expert
              care that helps you look and feel your best—because confidence
              begins with healthy skin.
            </p>
          </div>
        </div>
      </section>
      <Seprator />
      <FamousServices />
      <Testimonials />
    </main>
  )
}
