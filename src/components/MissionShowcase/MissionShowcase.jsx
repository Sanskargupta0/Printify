import styled from "styled-components";
import {
  FaBullseye,
  FaLeaf,
  FaHandshake,
  FaCogs,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import aboutus1 from "../../assets/website/aboutus1.jpg";
import aboutus2 from "../../assets/website/aboutus2.jpg";

const MissionShowcase = () => {
  const missionPoints = [
    {
      icon: <FaBullseye />,
      text: "Deliver high-quality, customized printing and packaging solutions",
    },
    {
      icon: <FaLeaf />,
      text: "Promote sustainable and eco-friendly packaging practices",
    },
    {
      icon: <FaHandshake />,
      text: "Build lasting partnerships through reliability and transparency",
    },
    {
      icon: <FaCogs />,
      text: "Leverage modern technology for precision and efficiency",
    },
    {
      icon: <FaLightbulb />,
      text: "Help brands stand out with creative, impactful designs",
    },
    {
      icon: <FaClock />,
      text: "Ensure timely delivery and responsive customer service",
    },
  ];

  return (
    <ShowcaseSection>
      <div className="container">
        <WhoWeAreContainer data-aos="fade-up">
          <SectionTitle>Who We Are</SectionTitle>
          <WhoWeAreText>
            We&apos;re a team of designers, print experts, and packaging specialists
            who understand that your product&apos;s first impression matters. Whether
            it&apos;s a sleek retail box, an eco-friendly pouch, or a custom-printed
            flyer, we believe packaging should do more than just protect — it
            should speak.
          </WhoWeAreText>
        </WhoWeAreContainer>
        
        <ShowcaseGrid>
          {/* First Row - Image and Explore Button */}
          <FirstRowContainer>
            <ProductImageCard data-aos="fade-right">
              <img
                src={aboutus2}
                alt="White with Love Packaging"
              />
            </ProductImageCard>
            <ExploreButtonContainer data-aos="fade-up">
              <ExploreButton to="/products">EXPLORE MORE</ExploreButton>
            </ExploreButtonContainer>
          </FirstRowContainer>

          {/* Second Row - Mission Card and Product Image */}
          <SecondRowContainer>
            <MissionCard data-aos="fade-left">
              <MissionTitle>Mission we are working on</MissionTitle>
              <MissionList>
                {missionPoints.map((point, index) => (
                  <MissionItem
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={150 + index * 50}
                  >
                    <MissionIcon>{point.icon}</MissionIcon>
                    <MissionText>{point.text}</MissionText>
                  </MissionItem>
                ))}
              </MissionList>
            </MissionCard>

            <ProductImageCard data-aos="fade-up">
              <ProductImage
                src={aboutus1}
                alt="COCO Packaging"
              />
            </ProductImageCard>
          </SecondRowContainer>
        </ShowcaseGrid>
      </div>
      {/* Bottom Section */}
          <div className="sm:px-[5rem] mt-[125px] w-[80%] bg-[#6DB2FB] rounded-[20px] sm: px-0; ">
            <BottomSection data-aos="fade-up">
              <BottomContent>
                <BottomTitle>You might also like</BottomTitle>
                <BottomSubtitle>
                  Choose the one that resonates with your brand&apos;s tone and style.
                </BottomSubtitle>
                <BottomButtons>
                  <ContactButton to="/contact">Contact now</ContactButton>
                  <LearnMoreButton to="/products">Learn more</LearnMoreButton>
                </BottomButtons>
              </BottomContent>
            </BottomSection>
          </div>
    </ShowcaseSection>
  );
};

const WhoWeAreContainer = styled.div`
  padding: 40px 20px;
  border-radius: 20px;
  margin-bottom: 60px;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  background: #f9f9f9;
`;

const WhoWeAreText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #0277bd;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ShowcaseSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 80px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

const FirstRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const SecondRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

`;

const ProductImageCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
`;

const MissionCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const MissionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #4a90e2;
  margin-bottom: 30px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const MissionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MissionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MissionIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #4a90e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  flex-shrink: 0;
`;

const MissionText = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

const ExploreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  @media (max-width: 768px) {
    order: 2;
    height: 100px
  }
`;

const ExploreButton = styled(Link)`
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(74, 144, 226, 0.3);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(74, 144, 226, 0.4);
  }
`;

const BottomSection = styled.div`
  position: relative;
  bottom: 125px;
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const BottomContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const BottomTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #4a90e2;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const BottomSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const BottomButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactButton = styled(Link)`
  background-color: #d32f2f;
  color: white;
  padding: 12px 25px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b71c1c;
    transform: translateY(-1px);
  }
`;

const LearnMoreButton = styled(Link)`
  background: transparent;
  color: #d32f2f;
  border: 2px solid #d32f2f;
  padding: 10px 23px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d32f2f;
    color: white;
    transform: translateY(-1px);
  }
`;

export default MissionShowcase;