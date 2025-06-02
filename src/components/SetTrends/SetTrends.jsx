import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SetTrends = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address');
    }
  };

  return (
    <TrendsSection>
      <div className="container">
        <TrendsTitle data-aos="fade-up">Set the Trends with CorePac USA</TrendsTitle>
        <TrendsDescription data-aos="fade-up">
          Indeed, you are just a call away from us. Let's create revolutionary packaging products together.
        </TrendsDescription>
        
        <SubscribeForm data-aos="fade-up" onSubmit={handleSubscribe}>
          <SubscribeInput
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubscribeButton type="submit">
            SUBSCRIBE
          </SubscribeButton>
        </SubscribeForm>
      </div>
    </TrendsSection>
  );
};

const TrendsSection = styled.section`
  padding: 60px 0;
  background-color: #0277bd;
  color: white;
  text-align: center;
`;

const TrendsTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const TrendsDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const SubscribeForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SubscribeInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  outline: none;
  
  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;

const SubscribeButton = styled.button`
  background-color: #2E86C1;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 0 4px 4px 0;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2874A6;
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;

export default SetTrends;