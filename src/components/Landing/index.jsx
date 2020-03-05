import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../Navigation';

const Wrapper = styled.div`
  background-image: url('https://wallpaperplay.com/walls/full/8/b/9/113793.jpg');
  background-size: cover;
`;

const Heading = styled.h1`
  font-weight: bold;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 5rem;
  text-shadow: 2px 10px black;
`;

// DUDE MODE
// background-image: url('https://media.discordapp.net/attachments/683074990723170307/684874223604465674/unknown.png?width=378&height=506');
// background-size: cover;
// background-repeat: no-repeat;

const Container = styled.div`
  height: 100vh;
  background-image: -webkit-linear-gradient(
    85deg,
    rgba(255, 255, 255) 12%,
    rgba(000, 000, 000, 0.5) 12%
  );
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  align-items: center;
`;

const Button = styled.button`
  position: relative;
  font-family: 'Roboto', sans-serif;
  //display:block;
  height: 45px;
  width: 150px;
  margin: 10px 7px;
  padding: 5px 5px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  color: black;
  border: 2px white solid;
  border-radius: 4px;
  text-transform: uppercase;
  outline: 0;
  overflow: hidden;
  background: white;
  z-index: 1;
  cursor: pointer;
  transition: 0.08s ease-in;
  -o-transition: 0.08s ease-in;
  -ms-transition: 0.08s ease-in;
  -moz-transition: 0.08s ease-in;
  -webkit-transition: 0.08s ease-in;

  &:hover {
    color: whitesmoke;
  }

  &:before {
    content: '';
    position: absolute;
    background: #333;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    -webkit-transition: top 0.09s ease-in;
  }

  &:hover:before {
    top: 0;
  }
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <Container className="container">
        <Navigation />
        <Section id="main">
          <Heading>DUDESCAPE.</Heading>
          <Link to="/auth">
            <Button type="button" className="login">
              LOGIN
            </Button>
          </Link>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default LandingPage;
