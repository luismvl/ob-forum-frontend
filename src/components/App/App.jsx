import React, { useState } from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
      <Outlet />
    </ThemeProvider>
  )
}

export default App
