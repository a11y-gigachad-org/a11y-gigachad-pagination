import { render, screen } from "@testing-library/react"

import { Dummy } from "./"

it("should render `title` and `children`", () => {
  render(
    <Dummy title="Hi!">
      <p>I'm Dummy!</p>
    </Dummy>
  )

  expect(screen.getByText("I'm Dummy!")).toBeInTheDocument()
})
