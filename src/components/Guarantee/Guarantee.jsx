import styled from "styled-components"
import background from "../../assets/website/background-Guarantee.png";

const Guarantee = () => {
  const guarantees = [
    {
      title: "Quality First:",
      description: 'Our motto is "standard without compromise."',
    },
    {
      title: "Seamless Experience:",
      description: "Place your order and leave the rest to us — we handle everything with care.",
    },
    {
      title: "Customer-First Approach:",
      description: "We're committed to exceeding your expectations, delivering exactly what you deserve.",
    },
  ]

  return (
    <GuaranteeSection>
      <div className="container">
        <GuaranteeContent data-aos="fade-up">
          <SectionTitle>OUR GUARANTEE</SectionTitle>
          <GuaranteeList>
            {guarantees.map((guarantee, index) => (
              <GuaranteeItem key={index}>
                <GuaranteeTitle>{guarantee.title}</GuaranteeTitle>
                <GuaranteeDescription>{guarantee.description}</GuaranteeDescription>
              </GuaranteeItem>
            ))}
          </GuaranteeList>
        </GuaranteeContent>
      </div>
    </GuaranteeSection>
  )
}

const GuaranteeSection = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 80px 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 10%;
    left: 5%;
    right: 5%;
    bottom: 10%;
    background: rgba(255, 255, 255);
    z-index: 1;
  }
`

const GuaranteeContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #333;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const GuaranteeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const GuaranteeItem = styled.div`
  text-align: center;
`

const GuaranteeTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`

const GuaranteeDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`

export default Guarantee
