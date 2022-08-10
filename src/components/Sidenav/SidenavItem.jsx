import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function SidenavItem({ icon, label }) {
  return (
    <Wrapper>
      {typeof icon === 'string' ? <img src={icon} alt={label} /> : icon}
      <span>{label}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

  & img,
  & svg {
    width: 28px;
    height: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.greys.grey3};
  }
`

SidenavItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  label: PropTypes.string.isRequired,
}

export default SidenavItem
