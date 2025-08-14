"use client"
import Image from "next/image"
import heroImg from "@/../public/images/hero-img2.jpg"
import Button from "@/app/components/Button"
import Seprator from "@/app/components/Seprator"
import { useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const handleOnHeroBtnClick = () => {
    console.log("clicker")
  }

  return (
    <main className="flex flex-col gap-2 lg:gap-4">
      <section className="hero my-container pt-[46px] cols-view">
        <h1 className="main-header text-primary">TRISHA PARKER</h1>
        <div className="w-full h-screen min-h-[600px]">
          <Image
            src={heroImg}
            alt="hero image"
            quality={100}
            priority
            className="w-full h-full object-cover object-[33%]"
            placeholder="blur"
            onLoad={() => setIsLoading(false)}
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
      <Seprator/>
      <section>
        Hey I will be here in few minutes
      </section>
    </main>
  )
}
