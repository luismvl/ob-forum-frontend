import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

// Color must be in HEXADECIMAL
/**
 *
 * @param {string} color
 * @returns string
 */
function applyAlpha(color, porcent) {
  let newColor = color.length > 7 ? color.substring(0, 7) : color
  if (porcent === 10) newColor += '1A'
  if (porcent === 15) newColor += '26'
  return newColor
}

export function getBackgroundColor(color, variant) {
  const theme = useContext(ThemeContext)
  let bgColor = theme.primary.main // default
  if (!color && !variant) return bgColor

  if (color === 'secondary') bgColor = theme.greys.black
  if (color === 'white') bgColor = theme.greys.white
  if (color === 'grey') bgColor = theme.greys.grey3

  if (variant === 'colorShaded') bgColor = applyAlpha(bgColor, 10)

  return bgColor
}

export function getTextColor(color, variant) {
  const theme = useContext(ThemeContext)

  if (color === 'white') return theme.textColor
  if (color === 'grey') return theme.textColor
  if (variant === 'colorShaded') return theme.primary.main

  return theme.textColorContrast // default
}

export function getBorderStyle(color, variant) {
  const theme = useContext(ThemeContext)
  let borderStyle = 'none'

  if (variant === 'outlined') borderStyle = `1px solid ${theme.greys.grey3}`
  if (variant === 'outlined' && color === 'primary') borderStyle = `1px solid ${theme.greys.grey3}`

  return borderStyle
}

export function getHoverBackgroundColor(color, variant) {
  const theme = useContext(ThemeContext)

  let hoverBgColor = theme.primary.dark
  if (!color) return hoverBgColor

  if (color === 'secondary') hoverBgColor = theme.secondary.black
  if (color === 'white') hoverBgColor = theme.greys.grey2
  if (color === 'grey') hoverBgColor = theme.greys.grey4

  if (variant === 'colorShaded') hoverBgColor = applyAlpha(hoverBgColor, 15)

  return hoverBgColor
}
