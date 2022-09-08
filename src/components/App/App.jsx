import React, { useState } from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components/macro'
import { dark, light } from '../../styles/themes'

import Navbar from '../Navbar'
import Login from '../../pages/Login'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Home from '../../pages/Home'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light)

  // eslint-disable-next-line no-unused-vars
  const toggleTheme = () => {
    if (selectedTheme.name === 'light') setSelectedTheme(dark)
    else setSelectedTheme(light)
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>

          {/* Not Found Route */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        <Outlet />
      </AppWrapper>
    </ThemeProvider>
  )
}

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`
export default App
