import { render, screen } from "@testing-library/react"

import { Pagination } from "."

it("should render `title` and `children`", () => {
  render(
    <Pagination title="Hi!">
      <p>I'm Pagination!</p>
    </Pagination>
  )

  expect(screen.getByText("I'm Pagination!")).toBeInTheDocument()
})
