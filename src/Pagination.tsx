export type PaginationProps = {
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
}

const Pagination = (props: PaginationProps) => {
  const { totalCount, currentPage, pageSize, onPageChange } = props

  const onNext = () => {
    if (currentPage !== Math.ceil(totalCount / pageSize)) {
      onPageChange(currentPage + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
    }
  }

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ol>
        <li>
          <button type="button" onClick={onPrevious}>
            Prev
          </button>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <button type="button" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}

        <li>
          <button type="button" onClick={onNext}>
            Next
          </button>
        </li>
      </ol>
    </nav>
  )
}

export default Pagination
