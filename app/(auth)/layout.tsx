import React from "react"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-full">
      <main className="">
        <div className="grid h-full lg:grid-cols-2">
          <div className="hidden bg-muted lg:block" />
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
