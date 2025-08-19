import React from "react"

const Seprator = ({color = "foreground"} : {color? : string}) => {
  return <div className="w-full h-px" style={{backgroundColor : `var(--${color})`}}/>
}

export default Seprator
