export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <article className="mt-4 flex flex-col justify-center text-foreground container prose lg:prose-xl">{children}</article>
  }
  