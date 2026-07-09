import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

describe("rtl setup", () => {
  it("renders JSX and matches jest-dom matchers", () => {
    render(<p>hello gallery</p>)
    expect(screen.getByText("hello gallery")).toBeInTheDocument()
  })
})
