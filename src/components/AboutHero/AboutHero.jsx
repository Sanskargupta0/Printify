import styled from 'styled-components';
import backgroundImage from "../../assets/website/background.png"
const AboutHero = () => {
  return (
    <HeroSection>
      <div className="container">
        <HeroContent>
          <HeroTextContent data-aos="fade-right">
            <HeroTitle>Your Packaging Partner</HeroTitle>
            <HeroSubtitle>Crafting packaging excellence, delivering your brand&apos;s success</HeroSubtitle>
            
            <AboutTitle>About CorePac USA</AboutTitle>
            <AboutText>
              Welcome to CorePac USA, where innovation meets precision in
              the world of printing and packaging. With a passion for
              excellence and a commitment to delivering top-notch services,
              CorePac USA stands as your trusted partner in the realm of
              bespoke printing solutions.
            </AboutText>
          </HeroTextContent>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  padding: 80px 0;
  background-color: #0A679A;
  position: relative;
`;

const HeroContent = styled.div`
  background-image: url('${backgroundImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.3) 100%);
    z-index: 1;
  }
`;

const HeroTextContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 60px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    max-width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #222;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 60px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #222;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default AboutHero;