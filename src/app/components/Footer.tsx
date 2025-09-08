"use client"
import React from "react"
import Button from "./Button"
import Seprator from "./Seprator"
import { socialsData } from "@/data"
import Link from "next/link"

const Footer = () => {
  const handleOnBtnClick = () => {
    console.log("hello")
  }
  return (
    <footer className="cols-view py-16 md:py-32 bg-foreground text-background">
      <div className="my-container call-to-action cols-view md:flex-row md:items-end md:justify-between">
        <h1 className="medium-header w-full md:w-1/2 lg:w-[30%]">
          Let’s Start Your Skin Journey
        </h1>
        <div>
          <Button
            name="CONTACT TRISHA NOW"
            mainColor="background"
            secondaryColor="foreground"
            onBtnClick={handleOnBtnClick}
          />
        </div>
      </div>
      <Seprator color="background" />
      <div className="my-container cols-view md:flex-row md:justify-between">
        <h1 className="medium-header text-primary">TRISHA PARKER</h1>
        <div className="cols-view md:flex-row">
          <div>
            <h1 className="logo-header">Email</h1>
            <p className="body-text">trishaparker02@gmail.com</p>
          </div>
          <div>
            <h1 className="logo-header">Socials</h1>
            <ul>
              {socialsData.map((s) => (
                <li key={s.name} className="body-text">
                  <Link href={s.link}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-container cols-view mt-8 md:flex-row md:justify-between md:items-center">
        <p className="font-sans text-xs leading-[120%]">&copy; 2023 TRISHA AESTHETICS</p>
        <p className="font-sans text-xs leading-[120%]">DESIGN BY ASHMAN SIHDU</p>
      </div>
    </footer>
  )
}

export default Footer
