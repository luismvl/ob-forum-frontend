import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import { BiChevronDown } from 'react-icons/bi'
import Avatar from './Avatar'
import MenuList from './MenuList'

function Menu({ username }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper onClick={toggleMenu}>
      <Avatar />
      {username}
      <Icon $isOpen={isOpen} />
      <MenuList $isOpen={isOpen}>
        {/* TODO: Crear un componente MenuItem */}
        <li>Cerrar sesión</li>
        <li>Cerrar sesión</li>
        <li>Cerrar sesión</li>
      </MenuList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* border: 1px solid red; // temp */
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  position: relative;
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: #fff;
  border-radius: 91px;
  padding-right: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 600;
`
const Icon = styled(BiChevronDown)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.25s ease-in-out;
  margin-left: -5px;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.grey4};
`
Menu.propTypes = {
  username: PropTypes.string.isRequired,
}

export default Menu
