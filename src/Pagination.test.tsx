import { render, screen } from "@testing-library/react"

import { Pagination } from "."

it("should render `title` and `children`", () => {
  const onPageChange = jest.fn()

  const items = ["h"]

  render(
    <Pagination
      currentPage={1}
      onPageChange={onPageChange}
      pageSize={3}
      totalCount={items.length}
    />
  )

  expect(screen.getByText("1")).toBeInTheDocument()
})
