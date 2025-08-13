"use client"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <header className="my-container fixed w-full z-50 bg-background ">
      <div className="py-2 flex justify-between items-center">
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
    </header>
  )
}

export default Navbar
