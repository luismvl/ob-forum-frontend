import React from 'react';
import styled from 'styled-components/macro';
import logo from '../../assets/ob-logo.svg';

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #f8f8f9;

  & > .left {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #f8f8f9;
    color: #10172e;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <div className="left">
        <img src={logo} alt="logo" />
        OpenBootcamp
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
