"use client"
import React from 'react'

interface buttonProps {
    name : string,
    onBtnClick : () => void
}

const Button = ({name, onBtnClick} : buttonProps) => {
  return (
    <button className='font-sans text-xs leading-[120%] tracking-tight font-semibold py-1 md:py-2 px-3 md:px-6 border-foreground border rounded-full' onClick={onBtnClick}>{name}</button>
  )
}

export default Button