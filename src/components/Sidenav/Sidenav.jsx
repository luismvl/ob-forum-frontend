import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

import { FcHome } from 'react-icons/fc'
import { BiChevronDown } from 'react-icons/bi'
import Divider from '../Divider'
import SidenavItem from './SidenavItem'

function Sidenav() {
  const [isOpen, setIsOpen] = useState(true)
  const [courses, setCourses] = useState([])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    axios
      .get('https://ob-forum-backend.herokuapp.com/courses', {
        headers: {
          Authorization: `Bearer Mw.PtJLsJpSOnIk3KajtK1pT9X1RyFJl2wJ1Ht79J-Bi3dV2vD15QF3qZ_S47-6`,
        },
      })
      .then((res) => {
        setCourses(res.data)
      })
  }, [])

  return (
    <Wrapper>
      <SidenavItem label="Página principal" icon={<FcHome />} />
      <Divider />
      <SidenavMenuTitle onClick={toggleMenu}>
        Cursos <MenuIcon $isOpen={isOpen} />
      </SidenavMenuTitle>
      <SidenavMenu $isOpen={isOpen}>
        {courses.map((course) => (
          <SidenavItem key={course.id} label={course.name} icon={course.iconUrl} />
        ))}
      </SidenavMenu>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 275px;
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

export default Sidenav
