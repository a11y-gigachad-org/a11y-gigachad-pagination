export type PaginationProps = {
  children: React.ReactNode
  title: string
}

const Pagination = (props: PaginationProps) => {
  const { children, title } = props

  return (
    <section>
      <h1>{title}</h1>

      {children}
    </section>
  )
}

export default Pagination
