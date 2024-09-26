import React from "react"
import Image from "next/image"
import miw from "./miw-1.png"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid w-full lg:grid-cols-2">
      <div className="relative hidden h-full w-full bg-muted lg:block">
        <Image
          src={miw}
          alt="Made in Workshop building"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {children}
    </div>
  )
}

export default Layout
