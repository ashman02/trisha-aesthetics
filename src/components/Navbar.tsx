"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
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
  return (
    <header className="fixed w-full z-50">
      <div className="my-container py-2 flex justify-between items-center">
        <Link href="/">
          <h1 className="logo-header">TRISHA AESTHETICS</h1>
        </Link>
        <button className="hamburger ">
          <div className="w-6 md:w-7 lg:w-8 h-full flex items-center justify-center flex-col gap-[2.5px] md:gap-[3px] lg:gap-1">
            <div className="h-[1.5px] w-full bg-foreground" />
            <div className="h-[1.5px] w-full bg-foreground" />
            <div className="h-[1.5px] w-full bg-foreground" />
          </div>
        </button>
      </div>
      <nav className="hidden my-container absolute top-0 z-40 h-screen bg-foreground w-full">
        <div className="closeSign text-end w-full py-2">
          <button className="closeSign">
            <div className="h-4 md:h-5 lg:h-7 flex w-[11px]">
              <div className="h-full w-[1.5px] bg-background rotate-z-45" />
              <div className="h-full w-[1.5px] bg-background -rotate-z-45 -ml-px" />
            </div>
          </button>
        </div>
        <div className="items h-full flex flex-col justify-evenly">
          <ul className="flex flex-col items-start gap-4">
            {navbarItems.map((item) => (
              <li
                key={item.name}
                className={`main-header ${
                  item.isActive ? "text-primary" : "text-background"
                }`}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-2">
            <li className="body-text text-background"><Link href={"/"}>Instagram</Link></li>
            <li className="body-text text-background"><Link href={"/"}>Facebook</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
