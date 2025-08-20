"use client"
import React, { useState } from "react"
import Image from "next/image"
import { servicesData } from "@/data"
import Button from "@/app/components/Button"
import Seprator from "@/app/components/Seprator"
import { useRouter } from "next/navigation"

const Services = () => {
  const [activeIndex, setactiveIndex] = useState(0)
  const router = useRouter()
  const handleCardClick = () => {
    router.push("/contact")
  }
  return (
    <main className="my-container pt-[46px] pb-[16px]">
      <section className="cols-view flex-row">
        <div className="hidden w-1/2 h-screen min-h-[600px] lg:cols-view">
          <div className="large-image-container w-full h-full">
            <Image
              src={servicesData[activeIndex].img}
              alt={servicesData[activeIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="cols-view h-fit">
            <p className="body-text">{servicesData[activeIndex].description}</p>
            <div className="price-cta flex items-center justify-between">
              <p className="body-text font-semibold">
                {servicesData[activeIndex].price}
              </p>
              <Button name="BOOK NOW" onBtnClick={() => {}} />
            </div>
          </div>
        </div>
        <div className="cols-view md:flex-row flex-wrap w-full h-full lg:w-1/2">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-2 w-full h-full md:w-[calc(50%-8px)] lg:w-full"
              onClick={handleCardClick}
            >
              <div className="image-container w-full h-full overflow-hidden lg:hidden">
                <Image
                  src={service.img}
                  alt={service.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="lg:cols-view">
                <h1
                  onMouseEnter={() => setactiveIndex(service.id)}
                  className={`medium-header lg:cursor-pointer ${
                    activeIndex === service.id
                      ? "lg:text-foreground"
                      : "lg:text-primary"
                  } transition-colors duration-300 ease-in-out`}
                >
                  {service.name}
                </h1>
                <div className="hidden lg:block">
                  <Seprator />
                </div>
              </div>
              <p className="body-text font-semibold lg:hidden">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Services
