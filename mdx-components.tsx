import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className='text-primary'>{children}</h1>,
    strong: ({ children }) => <strong className='text-primary text-foreground font-bold'>{children}</strong>,

    ...components,
  }
}