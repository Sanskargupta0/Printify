import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Keyframes for animation
const animate = keyframes`
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 100% 0;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

// Styled components
const ErrorPage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 70rem;
  text-align: center;
`;

const Header = styled.h2`
  font-size: 18vw;
  line-height: 1em;
  animation: ${animate} 10s ease-in-out infinite;
  background: -webkit-repeating-linear-gradient(
    -60deg,
    #71b7e6,
    #47f252,
    #b98acc,
    #ee8176,
    #b98acc,
    #47f252,
    #9b59b6
  );
  background-size: 500%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);
  position: relative;
  -webkit-animation: ${animate} 10s ease-in-out infinite;
`;

const SubHeader = styled.h4`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  margin: 25px 0;
  display: inline-flex;
  justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  border: 2px solid #47f252;
  color: #47f252;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 25px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: #47f252;
    color: #fff;
  }
`;

const Error = () => {
  return (
    <ErrorPage className=" dark:bg-gray-950 dark:text-white duration-200 ">
      <Content>
        <Header>404</Header>
        <SubHeader>Sorry! Page not found</SubHeader>
        <p>
          Oops! It seems like the page you&apos;re trying to access doesn&apos;t exist.
          If you believe there&apos;s an issue, feel free to report it, and we&apos;ll
          look into it.
        </p>
        <ButtonContainer>
          <StyledNavLink to="/">return home</StyledNavLink>
          <StyledNavLink to="/contact">report problem</StyledNavLink>
        </ButtonContainer>
      </Content>
    </ErrorPage>
  );
};

export default Error;
