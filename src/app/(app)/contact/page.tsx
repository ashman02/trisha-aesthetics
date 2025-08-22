"use client"
import Button from "@/app/components/Button"
import Input from "@/app/components/Input"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef, useState } from "react"

gsap.registerPlugin(useGSAP)

const Contact = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const challengeInputRef = useRef<HTMLInputElement>(null)
  const goalInputRef = useRef<HTMLInputElement>(null)
  const [response, setResponse] = useState("")

  const handleFormSubmit = () => {
    if (
      !emailInputRef.current?.value ||
      !challengeInputRef.current?.value ||
      !goalInputRef.current?.value
    ) {
      setResponse("All fields are required")
      return
    }

    const email = emailInputRef.current.value
    const challenge = challengeInputRef.current.value
    const goal = goalInputRef.current.value
    console.log(email, challenge, goal)
    setResponse("I got your message. Thank You!")
    //clear
    emailInputRef.current.value = ""
    challengeInputRef.current.value = ""
    goalInputRef.current.value = ""
    return
  }

  useGSAP(() => {
    gsap.to(mainContainerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay : 0.8,
      ease: "power3.inOut",
    })
  }, [])

  return (
    <main className="my-container min-h-screen flex items-center pt-[46px] pb-6 overflow-hidden">
      <section
        ref={mainContainerRef}
        className="flex flex-col gap-16 items-center justify-center md:flex-row-reverse md:gap-4 md:items-start w-full overflow-hidden opacity-0 translate-y-[100%]"
      >
        <div className="contact-address-form-container input-form flex flex-col gap-6 md:gap-12 w-full md:w-3/5">
          <h1 className="medium-header lg:w-[65%]">
            Ready for Calm, Clear, Radiant Skin?
          </h1>
          <div className="form flex flex-col gap-4">
            <Input
              placeholder="Enter your best email"
              type="email"
              ref={emailInputRef as React.RefObject<HTMLInputElement>}
            />
            <Input
              placeholder="Describe your current skin challenge"
              ref={challengeInputRef as React.RefObject<HTMLInputElement>}
            />
            <Input
              placeholder="Share your skincare goals"
              ref={goalInputRef as React.RefObject<HTMLInputElement>}
            />
            <div>
              <Button
                name="YES, I WANT CLEARER SKIN"
                onBtnClick={handleFormSubmit}
              />
            </div>
            <p className="body-text text-primary w-full h-full">{response}</p>
          </div>
        </div>
        <div className="contact-address-form-container flex flex-col gap-6 md:gap-12 w-full md:w-[40%] h-full">
          <h4 className="body-text w-3/5">
            Take the First Step to Your Best Skin Yet
          </h4>
          <div className="flex justify-between md:flex-col md:gap-6">
            <div className="cols-view">
              <h6 className="body-text">Address</h6>
              <div className="flex flex-col text-primary">
                <span className="btn-text">Trisha Parker</span>
                <span className="btn-text">1966 Isaacs Creek Road</span>
                <span className="btn-text">Illinois</span>
              </div>
            </div>
            <div className="cols-view">
              <h6 className="body-text">Email</h6>
              <span className="btn-text text-primary">
                trishaparker02@gmail
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
