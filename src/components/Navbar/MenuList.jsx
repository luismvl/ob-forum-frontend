import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function MenuList({ $isOpen, children }) {
  return <Wrapper $isOpen={$isOpen}>{children}</Wrapper>
}

// TODO: Agregar animación de entrada y salida de la lista
const Wrapper = styled.ul`
  width: max-content;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  padding: 10px 0;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 5;
`

MenuList.propTypes = {
  $isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default MenuList
