import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function MenuItem({ label, onClick, icon }) {
  return (
    <Wrapper onClick={onClick}>
      {label}
      {icon}
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey3};
  }

  & svg {
    width: 20px;
    height: 100%;
  }
`

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
}

export default MenuItem
