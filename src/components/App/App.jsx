import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light, base } from '../../styles/themes'

import Navbar from '../Navbar'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light)

  const toggleTheme = () => {
    if (selectedTheme.name === 'light') setSelectedTheme(dark)
    else setSelectedTheme(light)
  }

  return (
    <ThemeProvider theme={{ ...selectedTheme, ...base }}>
      <Navbar />
      <h1>Test</h1>
      <button type="button" onClick={toggleTheme}>
        Change theme
      </button>
    </ThemeProvider>
  )
}

export default App
