"use client"
import { useDestinationHook } from "@/contexts/link-provider"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRouter } from "next/navigation"
import React, { useRef } from "react"

gsap.registerPlugin(useGSAP)

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { destination } = useDestinationHook()
  const overlayRef = useRef<HTMLDivElement>(null)
  const transitionTl = useRef<GSAPTimeline>(null)
  const isTransitioning = useRef(false)

  const router = useRouter()

  const { contextSafe } = useGSAP(() => {
    if (destination === null || isTransitioning.current) return
    if (transitionTl.current) transitionTl.current.kill()

    isTransitioning.current = true
    router.prefetch(destination)
    // Start with simple animation. You overlay comes in from the bottom

    //create a timeline to animate
    transitionTl.current = gsap.timeline({
      defaults: { duration: 0.8, ease: "sine.inOut" },
      onComplete: () => {
        router.push(destination)
        handleRevealPage()
      },
    })

    // animate the overlay
    transitionTl.current.to(overlayRef.current, { scaleY: 1 })
  }, [destination])

  //When we are done with our animation we want to remove the overlay
  const handleRevealPage = contextSafe(() => {
    gsap.set(overlayRef.current, {
      scaleY: 0,
      onComplete: () => {
        isTransitioning.current = false
      },
    })
  })

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed top-46 left-0 w-full h-svh bg-background pointer-events-none z-[70] origin-bottom"
      ></div>
      {children}
    </>
  )
}

export default PageTransition
