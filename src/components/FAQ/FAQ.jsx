import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your subscription at any time. There are no cancellation fees, but we do not provide refunds for partial months.'
    },
    {
      question: 'How does billing work?',
      answer: 'We bill on a monthly basis. You will be charged on the same date each month based on your signup date.'
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can change your account email in your profile settings. After changing, you will need to verify your new email address.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <div className="container">
        <SectionTitle data-aos="fade-up">Need Help?</SectionTitle>
        <SectionSubtitle data-aos="fade-up">Everything you need to know about CorePac USA</SectionSubtitle>
        
        <FAQContainer data-aos="fade-up">
          {faqs.map((faq, index) => (
            <FAQItem key={index} isActive={activeIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer isActive={activeIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
        
        <SupportTeam data-aos="fade-up">
          <SupportTeamImages>
            <img src="../../../src/assets/website/review1.png" alt="Support Team Member" />
            <img src="../../../src/assets/website/review2.png" alt="Support Team Member" />
            <img src="../../../src/assets/website/review3.png" alt="Support Team Member" />
          </SupportTeamImages>
          <SupportTeamTitle>Still have questions?</SupportTeamTitle>
          <SupportTeamText>
            Can't find the answer you're looking for? Please chat to our friendly team.
          </SupportTeamText>
          <SupportButton>Get in touch</SupportButton>
        </SupportTeam>
      </div>
    </FAQSection>
  );
};

const FAQSection = styled.section`
  background-color: white;
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  text-align: center;
  color: #666;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 60px;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 15px;
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 500;
  color: #333;
`;

const FAQIcon = styled.div`
  color: #0277bd;
  font-size: 14px;
`;

const FAQAnswer = styled.div`
  padding: ${props => (props.isActive ? '0 0 15px' : '0')};
  max-height: ${props => (props.isActive ? '1000px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => (props.isActive ? '1' : '0')};
  color: #666;
`;

const SupportTeam = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const SupportTeamImages = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 -5px;
  }
`;

const SupportTeamTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
`;

const SupportTeamText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const SupportButton = styled.button`
  background-color: #0277bd;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #01579b;
  }
`;

export default FAQ;