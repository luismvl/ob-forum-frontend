import React from 'react'
import styled from 'styled-components/macro'

function Avatar() {
  return <Wrapper onClick={(e) => e.stopPropagation()}>NA</Wrapper>
}

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.greys.black};
  border-radius: 50%;
  color: ${({ theme }) => theme.greys.grey6};
  cursor: default;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
`
export default Avatar
