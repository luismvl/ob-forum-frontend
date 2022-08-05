import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function Button({ label, type }) {
  return <Wrapper type={type}>{label}</Wrapper>
}

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 42px;
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary.main};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary.dark};
  }
`

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
