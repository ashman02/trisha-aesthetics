"use client"
import Image from "next/image"
import heroImg from "@/../public/images/hero-img2.jpg"
import Button from "@/components/Button"

export default function Home() {
  const handleOnHeroBtnClick = () => {
    console.log("clicker")
  }
  return (
    <main className="cols-view">
      <section className="hero my-container pt-[46px] cols-view">
        <h1 className="main-header text-primary">TRISHA PARKER</h1>
        <div className="w-full h-screen">
          <Image
            src={heroImg}
            alt="hero image"
            quality={80}
            priority
            className="w-full h-full object-cover object-[33%]"
            placeholder="blur"
          />
        </div>
        <div className="call-to-action cols-view md:flex-row md:items-end md:justify-between">
          <h1 className="medium-header w-full md:w-4/6">
            Enjoy Calm, Confident, and Clear Skin Everyday
          </h1>
          <div>
            <Button name="GLOW TODAY" onBtnClick={handleOnHeroBtnClick} />
          </div>
        </div>
      </section>
    </main>
  )
}
