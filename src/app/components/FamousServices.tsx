import { famousServicesData } from "@/data"
import Image from "next/image"
import React from "react"

const FamousServices = () => {
  return (
    <section className="services">
      <div className="py-32">
        <h1 className="large-header whitespace-nowrap">SIGNATURE SERVICES</h1>
        <h1 className="large-header whitespace-nowrap -translate-x-[106%]">
          SIGNATURE SERVICES
        </h1>
      </div>
      <div className="overflow-hidden pl-2 h-screen min-h-[600px]">
        <div className="services-container flex gap-2 overflow-auto flex-nowrap h-full items-center hide-scrollbar snap-x snap-mandatory">
          {famousServicesData.map((s, i) => (
            <div
              key={s.name}
              className={`cols-view items-center shrink-0 w-[95%] snap-start ${
                i === famousServicesData.length - 1 ? "mr-2" : ""
              }`}
            >
              <h1 className="medium-header">{s.name}</h1>
              <div className="aspect-square w-full">
                <Image
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FamousServices
