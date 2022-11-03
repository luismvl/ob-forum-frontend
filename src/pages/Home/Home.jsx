import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import Sidenav from './Sidenav'
import { useAuth } from '../../hooks/useAuth'

function Home() {
  const [courses, setCourses] = useState([])

  const location = useLocation()
  const { auth } = useAuth()

  // Get all courses
  useEffect(() => {
    // TODO: Refactorizar a su propio archivo en /api
    axios
      .get('https://ob-forum-backend.herokuapp.com/courses', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        setCourses(res.data)
      })
  }, [])

  const inMainPath = location.pathname === '/foros' || location.pathname === '/foros/'
  if (courses.length > 0 && inMainPath) return <Navigate to={`${courses[0].id}`} />

  return (
    <Wrapper>
      <Container>
        <Sidenav courses={courses} />
        <SubforumsGridContainer>
          <Outlet />
        </SubforumsGridContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 40px;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-grow: 1;
`

const SubforumsGridContainer = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
`

export default Home
