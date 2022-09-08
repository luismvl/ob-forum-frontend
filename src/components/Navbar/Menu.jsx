import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { BiChevronDown, BiLogOut } from 'react-icons/bi'
import { useAuth } from '../../hooks/useAuth'
import Avatar from './Avatar'
import MenuList from './MenuList'
import MenuItem from './MenuItem'

function Menu({ username }) {
  const [isOpen, setIsOpen] = useState(false)

  const { logout } = useAuth()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper onClick={toggleMenu}>
      <Avatar />
      <span>{username}</span>
      <Icon $isOpen={isOpen} />
      <MenuList $isOpen={isOpen}>
        <MenuItem label="Cerrar sesión" onClick={logout} icon={<BiLogOut />} />
      </MenuList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* border: 1px solid red; // temp */
  background-color: ${({ theme }) => theme.greys.white};
  border: 1px solid ${({ theme }) => theme.greys.grey3};
  position: relative;
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: #fff;
  border-radius: 91px;
  padding-right: 10px;
  cursor: pointer;

  & span {
    color: ${({ theme }) => theme.greys.black};
    font-size: 14px;
    font-weight: 600;
    user-select: none;
  }

  @media (max-width: 625px) {
    gap: 10px;
    & > span {
      display: none;
    }
  }
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
  color: ${({ theme }) => theme.greys.grey4};
`
Menu.propTypes = {
  username: PropTypes.string.isRequired,
}

export default Menu
