import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import styled from 'styled-components/macro'
import { ThemeProvider } from 'styled-components'
import { dark, light, base } from '../../styles/themes'
import { useAuth } from '../../hooks/use-auth'

import Navbar from '../Navbar'
// import Sidenav from '../Sidenav'
import Login from '../Login'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light)

  // eslint-disable-next-line no-unused-vars
  const toggleTheme = () => {
    if (selectedTheme.name === 'light') setSelectedTheme(dark)
    else setSelectedTheme(light)
  }

  const { auth } = useAuth()

  return (
    <ThemeProvider theme={{ ...selectedTheme, ...base }}>
      {auth && <Navbar />}
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
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
