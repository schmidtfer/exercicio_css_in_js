import { useState } from 'react'
import type { FormEvent } from 'react'
import { Form, Botao, Campo } from './FormVagas'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (e: FormEvent) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={handleChange}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Form>
  )
}

export default FormVagas
