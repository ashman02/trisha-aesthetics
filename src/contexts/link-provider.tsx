"use client"
import React, { useState } from "react"
import { createContext, use } from "react"

type LinkProviderType = {
  destination: string
  handleSetDestination: (destination: string) => void
}

const DestinationContext = createContext<LinkProviderType>({
  destination: "/",
  handleSetDestination: () => {},
})

const DestinationProvider = ({ children }: { children: React.ReactNode }) => {
  const [destination, setDestination] = useState("/")

  const handleSetDestination = (link: string) => {
    setDestination(link)
  }

  return (
    <DestinationContext value={{ destination, handleSetDestination }}>
      {children}
    </DestinationContext>
  )
}

export default DestinationProvider

export const useDestinationHook = () => use(DestinationContext)
