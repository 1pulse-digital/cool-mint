import React from "react"

interface HeaderTitleProps {
  children: React.ReactNode
  description?: string | React.ReactNode
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ children, description }) => {
  return (
    <div className="px-6 md:mx-16 lg:mx-40 xl:mx-60 2xl:mx-40">
      <h1 className="py-4 text-center font-helvetica text-headings font-bold leading-tight text-foreground">
        {children}
        <span className="text-primary">.</span>
      </h1>
      <div className="text-center font-helvetica text-BodyText font-normal text-muted-foreground 2xl:px-60">
        {description}
      </div>
    </div>
  )
}

export default HeaderTitle
