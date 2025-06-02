import React from 'react';
import styled from 'styled-components';

const Values = () => {
  const valueItems = [
    { number: '01', value: 'authentic' },
    { number: '02', value: 'authentic' },
    { number: '03', value: 'authentic' },
    { number: '04', value: 'authentic' },
    { number: '05', value: 'authentic' },
    { number: '06', value: 'authentic' }
  ];

  return (
    <ValuesSection>
      <div className="container">
        <ValuesHeader data-aos="fade-up">
          <ValuesSubtitle>Helping small business grow big</ValuesSubtitle>
          <ValuesTitle>Values 360</ValuesTitle>
        </ValuesHeader>
        
        <ValuesGrid>
          {valueItems.map((item, index) => (
            <ValueCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ValueNumber>{item.number}</ValueNumber>
              <ValueText>{item.value}</ValueText>
            </ValueCard>
          ))}
        </ValuesGrid>
      </div>
    </ValuesSection>
  );
};

const ValuesSection = styled.section`
  padding: 60px 0;
  background-color: #0277bd;
  color: white;
`;

const ValuesHeader = styled.div`
  margin-bottom: 40px;
`;

const ValuesSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ValuesTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  position: relative;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ValueNumber = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #0277bd;
`;

const ValueText = styled.div`
  font-family: 'Dancing Script', cursive;
  font-size: 42px;
  color: #333;
`;

export default Values;