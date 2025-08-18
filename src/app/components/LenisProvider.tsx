"use client"
import React from "react"
import { ReactLenis, useLenis } from "lenis/react"

const LenisProvider = () => {
  useLenis(() => {})
  return <ReactLenis root options={{ lerp: 0.04 }} />
}

export default LenisProvider
