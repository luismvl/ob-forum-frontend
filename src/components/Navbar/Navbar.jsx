import React from 'react'
import styled from 'styled-components/macro'
import logo from '../../assets/ob-logo.svg'

import Input from '../Input'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  height: 70px;
  padding: 0 34px;
  background-color: #f8f8f9;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
  background-color: #f8f8f9;
  color: #10172e;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

function Navbar() {
  return (
    <Container>
      <Left>
        <img src={logo} alt="logo" />
        OpenBootcamp
      </Left>
      <Right>
        {/* Input de buscar */}
        <Input />
        {/* Menú de usuario */}
        <div>
          <img src="https://via.placeholder.com/50x50" alt="user" />
        </div>
      </Right>
    </Container>
  )
}

export default Navbar
