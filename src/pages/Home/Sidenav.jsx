import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { FcHome } from 'react-icons/fc'
import { BiChevronDown } from 'react-icons/bi'
import Divider from '../../components/Divider'
import SidenavItem from './SidenavItem'

function Sidenav({ courses }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <SidenavItem label="Página principal" icon={<FcHome />} />

      <Divider />

      <SidenavMenuTitle onClick={toggleMenu}>
        Cursos <MenuIcon $isOpen={isOpen} />
      </SidenavMenuTitle>

      <SidenavMenu $isOpen={isOpen}>
        {courses.map((course) => (
          <SidenavItem
            key={course.id}
            label={course.name}
            icon={course.iconUrl}
            to={`${course.id}`}
          />
        ))}
      </SidenavMenu>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-basis: 275px;
`
const SidenavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;

  // Animación de entrada y salida
  transform: scaleY(1);
  ${({ $isOpen }) => !$isOpen && 'transform: scaleY(0);'}
  transition: transform 0.25s ease-in-out;
  transform-origin: top;

  overflow: hidden;
`

const SidenavMenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`

const MenuIcon = styled(BiChevronDown)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.25s ease-in-out;
  margin-left: -5px;
  width: 24px;
  height: 100%;
  color: ${({ theme }) => theme.greys.grey4};
`

Sidenav.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      iconUrl: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    })
  ).isRequired,
}

export default Sidenav
