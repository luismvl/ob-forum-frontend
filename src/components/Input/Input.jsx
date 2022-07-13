import React from 'react'
import styled from 'styled-components/macro'

import { BiSearch } from 'react-icons/bi'

function Input() {
  return (
    <Container>
      <Icon />
      <input type="text" placeholder="Buscar" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 42px;
  max-width: 161px;
  padding: 0 16px;
  border-radius: 48px;
  background-color: ${({ theme }) => theme.colors.grey2};
  border: 1px solid ${({ theme }) => theme.colors.grey3};

  & input {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.grey2};
    color: ${({ theme }) => theme.colors.grey5};
    font-size: 16px;
    padding: 0;
  }

  & input:focus-visible {
    outline: none;
  }

  & input::placeholder {
    color: ${({ theme }) => theme.colors.grey4};
    font-weight: 700;
  }
`

const Icon = styled(BiSearch)`
  color: ${({ theme }) => theme.colors.grey4};
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

export default Input
