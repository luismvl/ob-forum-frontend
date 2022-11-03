import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SidenavItem({ icon, label, to }) {
  return (
    <Wrapper to={`${to}`} as={!to ? 'div' : undefined}>
      {typeof icon === 'string' ? <img src={icon} alt={label} /> : icon}
      <span>{label}</span>
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.005em;
  color: ${({ theme }) => theme.greys.black};
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  & img,
  & svg {
    width: 28px;
    height: 100%;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.greys.grey3};
  }
`

SidenavItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
}

SidenavItem.defaultProps = {
  to: '',
}

export default SidenavItem
