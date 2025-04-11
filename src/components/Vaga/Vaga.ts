import styled from 'styled-components'

export const VagaContainer = styled.li`
  list-style: none;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
`

export const VagaTitulo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
`

export const VagaLink = styled.a`
  display: inline-block;
  margin-top: 16px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
