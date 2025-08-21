"use client"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { createContext, use } from "react"

type LinkProviderType = {
  destination: string | null
  handleSetDestination: (destination: string) => void
}

const DestinationContext = createContext<LinkProviderType>({
  destination: null,
  handleSetDestination: () => {},
})

const DestinationProvider = ({ children }: { children: React.ReactNode }) => {
  const [destination, setDestination] = useState<string | null>(null)
  const pathname = usePathname()
  const handleSetDestination = (link: string) => {
    setDestination(link)
  }

  useEffect(() => {
    handleSetDestination(pathname)
  }, [])

  return (
    <DestinationContext value={{ destination, handleSetDestination }}>
      {children}
    </DestinationContext>
  )
}

export default DestinationProvider

export const useDestinationHook = () => use(DestinationContext)
