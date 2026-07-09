import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ClassGallery } from "@/components/class-gallery"

const img = (n: number, desc = "") => ({
  url: `https://storage.googleapis.com/made-in-workshop/g${n}.jpg`,
  description: desc,
})

describe("ClassGallery", () => {
  it("renders nothing when there are no images", () => {
    const { container } = render(
      <ClassGallery images={[]} title="Woodworking 101" />,
    )
    expect(container).toBeEmptyDOMElement()
  })

  it("renders a single image without carousel controls", () => {
    render(
      <ClassGallery images={[img(1, "A lathe")]} title="Woodworking 101" />,
    )
    expect(screen.getByAltText("A lathe")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /previous|next/i })).toBeNull()
  })

  it("renders all images and carousel controls for 2+ images", () => {
    render(
      <ClassGallery
        images={[img(1, "A lathe"), img(2), img(3, "A chisel")]}
        title="Woodworking 101"
      />,
    )
    // all three images present
    expect(screen.getByAltText("A lathe")).toBeInTheDocument()
    expect(screen.getByAltText("A chisel")).toBeInTheDocument()
    // empty description falls back to the class title
    expect(screen.getAllByAltText("Woodworking 101").length).toBe(1)
    // arrows present
    expect(
      screen.getByRole("button", { name: /previous/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument()
    // one pagination dot per image
    expect(
      screen.getAllByRole("button", { name: /go to image/i }),
    ).toHaveLength(3)
  })

  it("opens a lightbox dialog when an image is clicked", async () => {
    const user = userEvent.setup()
    render(
      <ClassGallery
        images={[img(1, "A lathe"), img(2, "A chisel")]}
        title="Woodworking 101"
      />,
    )
    expect(screen.queryByRole("dialog")).toBeNull()
    await user.click(screen.getAllByAltText("A lathe")[0])
    expect(await screen.findByRole("dialog")).toBeInTheDocument()
  })
})
