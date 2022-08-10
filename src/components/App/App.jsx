import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import styled from 'styled-components/macro'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../../styles/themes'

import Navbar from '../Navbar'
// import Sidenav from '../Sidenav'
import Login from '../../pages/Login'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

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
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <h2>Home Protected</h2>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/test"
          element={
            <ProtectedRoute>
              <h2>ProtectedRoute</h2>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
      {/* <Sidenav />
      <button type="button" onClick={toggleTheme}>
        Change theme
      </button> */}
    </ThemeProvider>
  )
}

export default App
