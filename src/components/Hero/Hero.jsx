import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Commercial_Products from '../../../src/assets/website/Commercial Products.png';
import Personalised_Products from '../../assets/website/Personalised Products.png';

const Hero = () => {
  return (
    <HeroSection>
      <div className="container">
        <HeroTitle data-aos="fade-up">
          Brand Packaging Experts!
        </HeroTitle>
        
        <HeroContent>
          <HeroCard data-aos="fade-right">
            <div className="image-container">
              {/* Image placeholder */}
              <img src={Commercial_Products} alt="Commercial Products" />
            </div>
            <HeroCardContent>
              <Link to="/products">
                Commercial Products <FaArrowRight />
              </Link>
            </HeroCardContent>
          </HeroCard>
          
          <HeroCard data-aos="fade-left">
            <div className="image-container">
              {/* Image placeholder */}
              <img src={Personalised_Products} alt="Personalised Products" />
            </div>
            <HeroCardContent>
              <Link to="/products">
                Personalised Products <FaArrowRight />
              </Link>
            </HeroCardContent>
          </HeroCard>
        </HeroContent>
        
        <HeroText data-aos="fade-up">
          Get your packaging professionally designed and create your own story.
        </HeroText>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background-color: #0277bd;
  color: white;
  padding: 60px 0 40px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroCard = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  
  .image-container {
    height: 250px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const HeroCardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #0277bd;
    font-weight: 500;
    
    svg {
      transition: transform 0.3s ease;
    }
    
    &:hover svg {
      transform: translateX(5px);
    }
  }
`;

const HeroText = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin-top: 20px;
`;

export default Hero;