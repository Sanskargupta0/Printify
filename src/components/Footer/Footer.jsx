import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterBrand>
            <Link to="/">
              <Logo>COREPAC USA</Logo>
            </Link>
          </FooterBrand>

          <FooterLinksSection>
            <FooterLinksColumn>
              <FooterLinksTitle>Company</FooterLinksTitle>
              <FooterLinks>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/careers">Careers</FooterLink>
                <FooterLink to="/faq">FAQ</FooterLink>
              </FooterLinks>
            </FooterLinksColumn>

            <FooterLinksColumn>
              <FooterLinksTitle>Category</FooterLinksTitle>
              <FooterLinks>
                <FooterLink to="/products/pouches">Pouches</FooterLink>
                <FooterLink to="/products/bags">Bags</FooterLink>
                <FooterLink to="/products/boxes">Boxes</FooterLink>
                <FooterLink to="/products/gifts">Gifts</FooterLink>
                <FooterLink to="/products/labels">Labels</FooterLink>
              </FooterLinks>
            </FooterLinksColumn>

            <FooterLinksColumn>
              <FooterLinksTitle>Join our newsletter</FooterLinksTitle>
              <NewsletterForm onSubmit={handleSubscribe}>
                <NewsletterInput
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <NewsletterButton type="submit">Subscribe</NewsletterButton>
              </NewsletterForm>
            </FooterLinksColumn>
          </FooterLinksSection>
        </FooterContent>

        <FooterBottom>
          <FooterCopyright>
            Copyright 2025 COREPAC. All rights reserved
          </FooterCopyright>
          <FooterLegal>
            <FooterLegalLink to="/terms">Terms of condition</FooterLegalLink>
            <FooterLegalLink to="/privacy">Privacy Policy</FooterLegalLink>
          </FooterLegal>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: white;
  padding-top: 60px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterBrand = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Logo = styled.div`
  font-family: Nico Moji;
  font-weight: 400;
  font-size: 24px;
  line-height: 16px;
  letter-spacing: 0%;
  vertical-align: middle;
`;

const FooterLinksSection = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const FooterLinksColumn = styled.div`
  flex: 1;
  min-width: 150px;
`;

const FooterLinksTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #333;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled(Link)`
  font-size: 14px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #0277bd;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #0277bd;
  }
`;

const NewsletterButton = styled.button`
  padding: 10px;
  background-color: #0277bd;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #01579b;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #eee;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterCopyright = styled.div`
  font-size: 14px;
  color: #666;
`;

const FooterLegal = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLegalLink = styled(Link)`
  font-size: 14px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #0277bd;
  }
`;

export default Footer;
