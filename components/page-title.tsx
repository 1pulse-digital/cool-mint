export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="py-4 text-center text-headings font-bold leading-tight">
      {children}
      <span className="text-primary">.</span>
    </h1>
  )
}

export const PageSubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <span className="text-muted-foreground">{children}</span>
    </div>
  )
}
