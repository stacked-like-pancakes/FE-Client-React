import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  margin: 0 auto;
  padding: 20px 0;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`;

const Navigation = () => {
  return (
    <Nav>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'white',
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        HOME
      </Link>
      <Link
        to="/auth"
        style={{
          textDecoration: 'none',
          color: 'white',
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        LOGIN
      </Link>
    </Nav>
  );
};

export default Navigation;
