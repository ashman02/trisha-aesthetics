import { famousServicesData } from "@/data"
import Image from "next/image"
import React, { useState } from "react"

const FamousServices = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  return (
    <section className="services">
      <div className="py-32">
        <h1 className="large-header whitespace-nowrap">SIGNATURE SERVICES</h1>
        <h1 className="large-header whitespace-nowrap -translate-x-[106%]">
          SIGNATURE SERVICES
        </h1>
      </div>
      <div className="overflow-x-hidden pl-2 md:my-container w-full h-screen min-h-[600px] flex gap-2">
        <div className="bigger-image hidden md:block md:w-3/5 h-full">
          <Image
            src={famousServicesData[activeIndex].img}
            alt={famousServicesData[activeIndex].name}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="services-container w-full md:w-[40%] h-full flex flex-row md:flex-col items-center md:items-end gap-2 flex-nowrap overflow-auto md:overflow-hidden hide-scrollbar snap-x snap-mandatory md:snap-none relative">
          {famousServicesData.map((s, i) => (
            <div
              key={s.name}
              className={`cols-view items-center shrink-0 w-[95%] md:w-full lg:w-1/2 snap-start md:snap-normal ${
                i === famousServicesData.length - 1 ? "mr-2 md:mr-0" : ""
              }`}
            >
              <h1 className="medium-header md:hidden">{s.name}</h1>
              <div className="aspect-square w-full">
                <Image
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          ))}
          <h1 className="medium-header text-center hidden md:block absolute z-20 top-1/2  right-1/8 lg:right-1/3">
            {famousServicesData[activeIndex].name}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default FamousServices
