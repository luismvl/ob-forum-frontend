import React from 'react'
import styled from 'styled-components/macro'
import { BiSearch } from 'react-icons/bi'
import { useAuth } from '../../hooks/useAuth'
import logo from '../../assets/ob-logo.svg'
import Input, { Wrapper as InputWrapper } from '../Input'
import Menu from './Menu'
import Button, { Wrapper as ButtonWrapper } from '../Button'

function Navbar() {
  const { auth } = useAuth()

  return (
    <Container>
      <Left>
        <img src={logo} alt="logo" />
        <span>OpenBootcamp</span>
      </Left>
      {auth && (
        <Right>
          <Input placeholder="Buscar" leftIcon={<BiSearch size={24} />} />
          <Button variant="outlined" color="grey" leftIcon={<BiSearch size={24} />} />
          <Menu username="luismvl" />
        </Right>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  gap: 40px;
  height: 70px;
  padding: 0 34px;
  background-color: ${({ theme }) => theme.greys.grey1};
  z-index: 5;

  @media (max-width: 680px) {
    padding: 0 15px;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
  background-color: ${({ theme }) => theme.greys.grey1};
  color: ${({ theme }) => theme.greys.black};
  font-size: 24px;
  font-weight: 700;
  flex-shrink: 0;

  // OB Logo
  & > img {
    width: 30px;
  }

  @media (max-width: 680px) {
    gap: 10px;
  }

  @media (max-width: 555px) {
    // 440px
    & > span {
      display: none;
    }
    & > img {
      width: 40px;
    }
  }
`

const Right = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;

  // Custom styles for Buttom component
  & > ${ButtonWrapper} {
    color: ${({ theme }) => theme.greys.grey4};
    background-color: ${({ theme }) => theme.greys.grey2};
    width: 60px;
    border: 1px solid ${({ theme }) => theme.greys.grey3};
    &:hover {
      background-color: ${({ theme }) => theme.greys.grey3};
    }
  }

  // Custom styles for Input component
  & ${InputWrapper} {
    border-radius: 48px;
    border: 1px solid ${({ theme }) => theme.greys.grey3};
    flex-basis: 161px;
  }

  // Breakpoint for displaying a button or an input for search
  @media (max-width: 345px) {
    & > ${InputWrapper} {
      display: none;
    }
  }
  @media (min-width: 345px) {
    & > ${ButtonWrapper} {
      display: none;
    }
  }

  /* & > ${ButtonWrapper} {
    display: none;
  } */
`

export default Navbar
