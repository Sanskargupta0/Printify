import { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Loader from "../Loader/Loder";

const SetTrends = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email to subscribe.", {
        position: "top-center",
      });
      return;
    }

    try {
      // chcek if email is valid
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        toast.error("Please enter a valid email address.", {
          position: "top-center",
        });
        return;
      } else {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_Backend_URL}/subscribe-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
        if (res.ok) {
          setEmail("");
          toast.success("You have successfully subscribed to our newsletter.", {
            position: "top-center",
          });
          setLoading(false);
          setEmail("");
        } else {
          toast.error(
            "An error occurred while sending your subscription email. Please try again.",
            {
              position: "top-center",
            }
          );
          setLoading(false);
          setEmail("");
        }
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "An error occurred while sending your subscription email. Please try again.",
        {
          position: "top-center",
        }
      );
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <TrendsSection>
      <div className="container">
        <TrendsTitle data-aos="fade-up">Set the Trends with CorePac USA</TrendsTitle>
        <TrendsDescription data-aos="fade-up">
          Indeed, you are just a call away from us. Let&apos;s create revolutionary packaging products together.
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
      {loading && <Loader />}
    </TrendsSection>
  );
};

const TrendsSection = styled.section`
  padding: 60px 0;
  background-color: #0A679A;
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
  color: #333;
  
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