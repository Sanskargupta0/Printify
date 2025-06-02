import React from 'react';
import styled from 'styled-components';
import logo1 from "../../assets/website/logo1.png";
import logo2 from "../../assets/website/logo2.png"; 
import logo3 from "../../assets/website/logo3.png";
import logo4 from "../../assets/website/logo4.png";

const Customers = () => {
  const clients = [
    { name: 'Spicy', logo: logo1 },
    { name: 'Hive', logo: logo2 },
    { name: 'Bee', logo: logo3 },
    { name: 'Umbrella', logo: logo4 }
  ];

  return (
    <CustomersSection>
      <div className="container">
        <CustomersTitle data-aos="fade-up">Customers 360</CustomersTitle>
        <CustomersDescription data-aos="fade-up">
          We have worked with clients in a variety of industries for 5+ years. We provide you with proven
          ideas that go beyond the norm in your industry and help you expand into new markets.
        </CustomersDescription>
        
        <ClientsGrid data-aos="fade-up">
          {clients.map((client, index) => (
            <ClientLogo key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <img src={client.logo || `/placeholder-logo-${index + 1}.jpg`} alt={client.name} className='rounded-2xl' />
            </ClientLogo>
          ))}
        </ClientsGrid>
      </div>
    </CustomersSection>
  );
};

const CustomersSection = styled.section`
  padding: 60px 0;
  background-color: #0277bd;
  color: white;
  text-align: center;
`;

const CustomersTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CustomersDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const ClientsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  margin-bottom: 40px;
`;

const ClientLogo = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export default Customers;