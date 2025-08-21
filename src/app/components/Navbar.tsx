"use client"
import Link from "next/link"
import React, { useRef } from "react"
import { usePathname } from "next/navigation"
import { socialsData } from "@/data"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useDestinationHook } from "@/contexts/link-provider"

gsap.registerPlugin(useGSAP)

const Navbar = () => {
  const pathname = usePathname()
  const { handleSetDestination } = useDestinationHook()
  const navbarTimeline = useRef<GSAPTimeline>(null)
  const navbarMenuContainer = useRef<HTMLElement>(null)
  const navbarItems = [
    {
      name: "Services",
      link: "/services",
      isActive: pathname === "/services",
    },
    {
      name: "Gallery",
      link: "/gallery",
      isActive: pathname === "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
      isActive: pathname === "/contact",
    },
  ]
  const { contextSafe } = useGSAP()

  const handleOpenMenu = contextSafe(() => {
    if (navbarTimeline.current) navbarTimeline.current.kill()
    navbarTimeline.current = gsap
      .timeline({
        defaults: { duration: 0.8, ease: "sine.inOut" },
      })
      .to(navbarMenuContainer.current, {
        scaleY: 1,
      })
      .to(".navbar-items", {
        y: 0,
        opacity: 1,
      })
      .to(".navbar-social-items", {
        opacity: 1,
      })
      .to(
        ".closeSign",
        {
          opacity: 1,
        },
        "<"
      )
  })

  const handleCloseMenu = contextSafe(() => {
    if (navbarTimeline.current) navbarTimeline.current.kill()
    navbarTimeline.current = gsap
      .timeline({
        defaults: { duration: 0.8, ease: "sine.inOut" },
      })
      .to(".navbar-items", {
        y: "100%",
        opacity: 0,
      })
      .to(
        ".navbar-social-items",
        {
          opacity: 0,
        },
        "<"
      )
      .to(
        ".closeSign",
        {
          opacity: 0,
        },
        "<"
      )
      .to(navbarMenuContainer.current, {
        scaleY: 0,
      })
  })

  return (
    <header className="fixed w-full z-50 backdrop-blur-xs ">
      <div className="my-container py-2 flex justify-between items-center">
        <Link href="/">
          <h1 className="logo-header">TRISHA AESTHETICS</h1>
        </Link>
        <button onClick={handleOpenMenu} className="hamburger cursor-pointer">
          <div className="w-6 md:w-7 lg:w-8 h-full flex items-center justify-center flex-col gap-[2.5px] md:gap-[3px] lg:gap-1">
            <div className="h-[1.5px] w-full bg-foreground" />
            <div className="h-[1.5px] w-full bg-foreground" />
            <div className="h-[1.5px] w-full bg-foreground" />
          </div>
        </button>
      </div>
      <nav
        ref={navbarMenuContainer}
        className="my-container absolute top-0 z-[60] h-screen bg-foreground w-full flex flex-col justify-between pb-4 scale-y-0 origin-top"
      >
        <div className="closeSign text-end w-full py-2">
          <button
            onClick={handleCloseMenu}
            className="closeSign opacity-0 cursor-pointer"
          >
            <div className="h-4 md:h-5 lg:h-7 flex w-[11px]">
              <div className="h-full w-[1.5px] bg-background rotate-z-45" />
              <div className="h-full w-[1.5px] bg-background -rotate-z-45 -ml-px" />
            </div>
          </button>
        </div>
        <div className="items h-full flex flex-col md:justify-between justify-evenly">
          <ul className="flex flex-col items-start gap-4">
            {navbarItems.map((item) => (
              <li key={item.name} className="overflow-hidden">
                <Link
                  onClick={() => {
                    handleCloseMenu()
                    handleSetDestination(item.link)
                  }}
                  href={item.link}
                >
                  <h1
                    className={`navbar-items main-header ${
                      item.isActive ? "text-primary" : "text-background"
                    } hover:text-primary transition-colors duration-500 ease-in-out overflow-y-hidden translate-y-[100%] opacity-0`}
                  >
                    {item.name}
                  </h1>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-2">
            {socialsData.map((item) => (
              <li key={item.name} className="">
                <Link href={item.link}>
                  <span className="navbar-social-items body-text text-background hover:text-primary transition-colors duration-500 ease-in-out opacity-0">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
