import React from 'react';
import styled from 'styled-components';
import WhyChooseUsSectionImage from '../../../src/assets/website/WhyChooseUsSection.png';

const WhyChooseUs = () => {

  return (
    <WhyChooseUsSection>
      <div className="container">
        <WhyChooseUsContainer>
          <FeaturesContainer data-aos="fade-right">
            <img src={WhyChooseUsSectionImage} alt="image" />
          </FeaturesContainer>
          
          <WhyChooseUsContent data-aos="fade-left">
            <SectionTitle>Why Choose Our Product?</SectionTitle>
            <SectionDescription>
              Various reasons why you should use our products to elevate your brand
            </SectionDescription>
          </WhyChooseUsContent>
        </WhyChooseUsContainer>
      </div>
    </WhyChooseUsSection>
  );
};

const WhyChooseUsSection = styled.section`
  background-color: white;
  padding: 80px 0;
`;

const WhyChooseUsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const FeaturesContainer = styled.div`
  flex: 1;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureNumber = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  margin-right: 15px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent ${props => props.style.backgroundColor};
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const WhyChooseUsContent = styled.div`
  flex: 1;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 400px;
  margin: 0 auto;
`;

export default WhyChooseUs;