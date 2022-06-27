import React from 'react'
import styled from 'styled-components/macro'

import { BiSearch } from 'react-icons/bi'

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 42px;
  max-width: 161px;
  padding: 0 16px;
  border-radius: 48px;
  background-color: #f0f0f3;
  border: 1px solid #e6e6ea;

  & input {
    width: 100%;
    border: none;
    background-color: #f0f0f3;
    color: #797a7d;
    font-size: 16px;
  }

  & input:focus-visible {
    outline: none;
  }

  & input::placeholder {
    color: #a5a8b3;
    font-size: 16px;
  }
`

function Input() {
  return (
    <Container>
      <BiSearch color="#A5A8B3" size={20} style={{ flexShrink: 0 }} />
      <input type="text" placeholder="Buscar" />
    </Container>
  )
}

export default Input
