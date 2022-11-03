import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function Input({ placeholder, outlined, leftIcon, rightIcon, type, onChange, value, id }) {
  return (
    <Wrapper outlined={outlined}>
      {leftIcon}
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} id={id} />
      {rightIcon}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 42px;
  width: 100%;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.greys.grey2};
  border: ${({ outlined, theme }) => (outlined ? `1px solid ${theme.greys.grey3}` : 'none')};

  & input {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.greys.grey2};
    color: ${({ theme }) => theme.greys.grey5};
    font-size: 16px;
    padding: 0;
  }

  & input:focus-visible {
    outline: none;
  }

  & input::placeholder {
    color: ${({ theme }) => theme.greys.grey4};
    font-weight: 500;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }
  & svg {
    color: ${({ theme }) => theme.greys.grey4};
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }
`

Input.propTypes = {
  placeholder: PropTypes.string,
  outlined: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
  outlined: false,
  leftIcon: null,
  rightIcon: null,
  type: 'text',
  onChange: () => {},
  value: '',
  id: '',
}

export default Input
