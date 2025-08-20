"use client"
import React, { RefObject } from "react"
import Seprator from "./Seprator"

interface InputProps {
  placeholder: string
  ref: RefObject<HTMLInputElement>
  type?: React.HTMLInputTypeAttribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Input = ({ placeholder, ref, type = "text", ...props }: InputProps) => {
  return (
    <div className="cols-view">
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...props}
        className="outline-none focus:outline-none body-text placholder:text-primary pl-px"
      />
      <Seprator />
    </div>
  )
}

export default Input
