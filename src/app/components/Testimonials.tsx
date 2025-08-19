import React, { useRef } from "react"
import SectionIntro from "./SectionIntro"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { testimonialsData } from "@/data"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const cards: HTMLElement[] = gsap.utils.toArray(".testimonial-card")
    gsap.set(cards, { yPercent: 100 })
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${cards.length * 100}%`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    })
    cards.forEach((card) =>
      timeline.to(card, {
        yPercent: 0,
        ease: "power3.inOut",
      })
    )
  }, [])
  return (
    <section>
      <SectionIntro heading1="Real Stories" heading2="Real Results" />
      <div
        ref={containerRef}
        className="h-screen min-h-[600px] w-full relative"
      >
        {testimonialsData.map((testi) => (
          <div
            key={testi.id}
            className={`my-container testimonial-card w-full h-full cols-view items-center justify-center absolute left-0 top-0 ${testi.classes}`}
          >
            <p className="body-text text-center w-full md:w-3/5 lg:w-1/2">
              {testi.content}
            </p>
            <h1 className="medium-header">{testi.name}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
