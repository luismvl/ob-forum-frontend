/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light, base } from '../../styles/themes'

import Navbar from '../Navbar'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light)

  return (
    <ThemeProvider theme={{ ...selectedTheme, ...base }}>
      <Navbar />
      <h1>Test</h1>
    </ThemeProvider>
  )
}

export default App
