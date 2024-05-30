import React from "react"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="grid lg:grid-cols-2 h-full">
      <div className="hidden bg-muted lg:block" />
      {children}
    </main>
  )
}

export default Layout
