import React from 'react'
import styled from 'styled-components/macro'
import { BiSearch } from 'react-icons/bi'
import logo from '../../assets/ob-logo.svg'
import Input from '../Input'
import Menu from './Menu'

function Navbar() {
  return (
    <Container>
      <Left>
        <img src={logo} alt="logo" />
        OpenBootcamp
      </Left>
      <Right>
        <Input placeholder="Buscar" leftIcon={<BiSearch size={24} />} />
        <Menu username="luismvl" />
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  /* position: fixed;
  top: 0; */
  width: 100vw;
  align-items: center;
  gap: 40px;
  height: 70px;
  padding: 0 34px;
  background-color: ${({ theme }) => theme.colors.grey1};
`

const Left = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.grey1};
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 700;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export default Navbar
