import styled from "styled-components"

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`
export const OrderedList = styled.ol`
  display: flex;
  column-gap: 16px;
  list-style-type: none;
  padding: 0;
`

export const Button = styled.button`
  padding: 8px;

  &:focus {
    outline-color: blue;
    outline-width: 5px;
  }
`
