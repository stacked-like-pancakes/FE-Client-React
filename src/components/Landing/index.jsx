import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDudeMode } from '../../hooks/useDudeMode';

import Navigation from '../Navigation';
import './landing.css';

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
  const [dude, setDude] = useDudeMode(false);

  return (
    <div className="wrapper">
      <Container>
        <button onClick={e => setDude(e)}>dude</button>
        <Navigation dude={dude} setDude={setDude} />
        <Section id="main">
          <Heading>DUDESCAPE.</Heading>
          <Link to="/auth">
            <Button type="button" className="login">
              LOGIN
            </Button>
          </Link>
        </Section>
      </Container>
    </div>
  );
};

export default LandingPage;
