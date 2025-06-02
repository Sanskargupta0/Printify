import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo>
            <Link to="/">COREPAC USA</Link>
          </Logo>
          
          <SearchBar>
            <FaSearch />
            <input type="text" placeholder="Search" />
          </SearchBar>
          
          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
          
          <Navigation isOpen={isMenuOpen}>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact Us</NavLink>
              </NavItem>
            </NavList>
          </Navigation>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #0277bd;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  padding: 5px 10px;
  width: 300px;
  
  svg {
    color: #666;
    margin-right: 8px;
  }
  
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
  }
  
  @media (max-width: 576px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  color: white;
  font-size: 24px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #0277bd;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
    transition: height 0.3s ease;
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  }
`;

const NavList = styled.ul`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;
  
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: 500;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

export default Header;