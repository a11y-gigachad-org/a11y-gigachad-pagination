import { render, screen } from "@testing-library/react"

import { Pagination } from "."

const data = ["john", "doe", "jane"]

test("should render controls", () => {
  const onPageChange = jest.fn()

  render(<Pagination currentPage={1} setCurrentPage={onPageChange} limit={2} total={data.length} />)

  expect(screen.getByRole("button", { name: "go to the next page" })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "go to the previous page" })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "go to page 1" })).toBeInTheDocument()
})

test("should render initial labels", async () => {
  const onPageChange = jest.fn()

  render(<Pagination currentPage={1} setCurrentPage={onPageChange} limit={2} total={data.length} />)

  expect(screen.getByText("Current page 1 out of 2")).toBeInTheDocument()
})

test("should render labels as per `currentPage`", async () => {
  const onPageChange = jest.fn()

  render(<Pagination currentPage={2} setCurrentPage={onPageChange} limit={2} total={data.length} />)

  expect(screen.getByText("Current page 2 out of 2")).toBeInTheDocument()
})

test("should have a11y", async () => {
  const onPageChange = jest.fn()

  render(<Pagination currentPage={1} setCurrentPage={onPageChange} limit={2} total={data.length} />)

  expect(screen.getByRole("button", { name: "go to the next page" })).toHaveAccessibleDescription()
  expect(screen.getByRole("button", { name: "go to the next page" })).toHaveAccessibleName()

  expect(
    screen.getByRole("button", { name: "go to the previous page" })
  ).toHaveAccessibleDescription()
  expect(screen.getByRole("button", { name: "go to the previous page" })).toHaveAccessibleName()

  expect(screen.getByRole("button", { name: "go to page 1" })).toHaveAccessibleDescription()
  expect(screen.getByRole("button", { name: "go to page 1" })).toHaveAccessibleName()

  expect(screen.getByText("Current page 1 out of 2")).toHaveAttribute("role", "status")
})
