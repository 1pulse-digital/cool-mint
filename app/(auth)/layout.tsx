import React from "react"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid w-full lg:grid-cols-2">
      <div className="hidden bg-muted lg:block" />
      {children}
    </div>
  )
}

export default Layout
