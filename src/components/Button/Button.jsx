import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {
  getBackgroundColor,
  getBorderStyle,
  getHoverBackgroundColor,
  getTextColor,
} from './Button.helpers'

function Button({ type, variant, color, label, leftIcon, rightIcon, disabled, span }) {
  return (
    <Wrapper type={type} variant={variant} color={color} disabled={disabled} $span={span}>
      {leftIcon}
      <span>{label}</span>
      {rightIcon}
    </Wrapper>
  )
}

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding: 8px;
  width: ${({ $span }) => ($span ? '100%' : 'auto')};
  border: ${({ color, variant }) => getBorderStyle(color, variant)};
  border-radius: 10px;
  background-color: ${({ color, variant }) => getBackgroundColor(color, variant)};
  color: ${({ color, variant }) => getTextColor(color, variant)};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ color, variant }) => getHoverBackgroundColor(color, variant)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.greys.grey4};
    cursor: wait;
  }

  & svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  & span {
    white-space: nowrap;
  }
`

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'shaded', 'colorShaded']), // define el estilo del botón (ej: tiene bordes o no)
  color: PropTypes.oneOf(['primary', 'secondary', 'white', 'grey']),
  label: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  disabled: PropTypes.bool,
  span: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  variant: 'filled',
  color: 'primary',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  label: '',
  span: false,
}

export default Button
