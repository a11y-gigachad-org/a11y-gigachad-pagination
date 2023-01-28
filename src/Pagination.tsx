import { useId } from "react"

import * as S from "./styles"

export type PaginationProps = {
  total: number
  currentPage: number
  limit: number
  setCurrentPage: (page: number) => void
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const { total, currentPage, limit, setCurrentPage } = props

  const id = useId()

  const pageCount = Math.ceil(total / limit)

  const onNext = () => {
    if (currentPage !== pageCount) {
      setCurrentPage(currentPage + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const pageNumbers = Array.from(Array(pageCount + 1).keys()).slice(1)

  return (
    <S.Navigation>
      <p role="status" id={id}>
        Current page {currentPage} out of {pageCount}
      </p>

      <S.OrderedList>
        <li>
          <S.Button
            aria-controls={id}
            aria-describedby={id}
            aria-label="go to the previous page"
            type="button"
            onClick={onPrevious}
          >
            Previous
          </S.Button>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <S.Button
              aria-label={`go to page ${page}`}
              aria-controls={id}
              aria-describedby={id}
              type="button"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </S.Button>
          </li>
        ))}

        <li>
          <S.Button
            aria-controls={id}
            aria-describedby={id}
            aria-label="go to the next page"
            type="button"
            onClick={onNext}
          >
            Next
          </S.Button>
        </li>
      </S.OrderedList>
    </S.Navigation>
  )
}

export default Pagination
