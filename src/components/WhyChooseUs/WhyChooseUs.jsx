import styled from "styled-components"
import image1 from "../../assets/website/image1.png"
import image2 from "../../assets/website/image2.png"
import image3 from "../../assets/website/image3.png"
import image4 from "../../assets/website/image4.png"
import image5 from "../../assets/website/image5.png"
import image6 from "../../assets/website/image6.png"

import { Link } from "react-router-dom"

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Free Design Support",
      description: "We provide comprehensive packaging design assistance. Our innovative themes blend functionality with stunning aesthetics",
      image: image1,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🎨"
    },
    {
      id: 2,
      title: "E-Commerce Solutions",
      description: "Custom printed boxes with logo in bulk quantities at wholesale prices. Lightweight, durable, with seamless unboxing experience.",
      image: image2,
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "📦"
    },
    {
      id: 3,
      title: "Eco-Friendly Packaging",
      description: "Environmentally responsible packaging solutions using recyclable and sustainable materials for a greener future.",
      image: image3,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "🌱"
    },
    {
      id: 4,
      title: "Quick Turnaround",
      description: "Lightning-fast production with real-time updates. We keep you informed throughout the process with nationwide shipping.",
      image: image4,
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "⚡"
    },
    {
      id: 5,
      title: "24/7 Customer Support",
      description: "Premium customer support across the USA. Our expert team transforms your packaging dreams into reality around the clock.",
      image: image5,
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: "🎧"
    },
    {
      id: 6,
      title: "Low MOQs",
      description: "Industry-leading low minimum order quantities. Perfect for startups and established businesses across America.",
      image: image6,
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      icon: "📊"
    }
  ]

  return (
    <WhyChooseUsSection>
      <Container>
        <HeaderSection data-aos="fade-up">
          <Eyebrow>Why Choose Us</Eyebrow>
          <MainTitle>
            Transform Your <span>Product Packaging</span>
          </MainTitle>
          <Subtitle>
            We don&apos;t just create packaging – we craft experiences that make your products roar and take the lead. 
            Join the success story with America&apos;s premier packaging innovators.
          </Subtitle>
        </HeaderSection>

        <FeaturesContainer>
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              backgroundGradient={feature.color}
            >
              <CardHeader>
                <IconWrapper>{feature.icon}</IconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </CardHeader>
              
              <CardBody>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </CardBody>

              <CardFooter>
                <ImageContainer>
                  <img src={feature.image} alt={feature.title} />
                  <ImageOverlay />
                </ImageContainer>
              </CardFooter>

              <HoverEffect />
            </FeatureCard>
          ))}
        </FeaturesContainer>

        <CTASection data-aos="fade-up" data-aos-delay="600">
          <CTATitle>Ready to Elevate Your Brand?</CTATitle>
          <Link to="/products" style={{ textDecoration: 'none' }}>
          <CTAButton>
            Get Started Today
            <ArrowIcon>→</ArrowIcon>
          </CTAButton>
          </Link>
        </CTASection>
      </Container>
    </WhyChooseUsSection>
  )
}

const WhyChooseUsSection = styled.section`
  background: #ffffff;
  position: relative;
  padding: 120px 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Eyebrow = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
`

const MainTitle = styled.h2`
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 800;
  color: #333;
  margin-bottom: 24px;
  line-height: 1.2;

  span {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const FeatureCard = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.backgroundGradient};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.12);
    border-color: rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin: 0;
  line-height: 1.3;
`

const CardBody = styled.div`
  margin-bottom: 24px;
`

const FeatureDescription = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin: 0;
`

const CardFooter = styled.div`
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.02);
  position: relative;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 0%, rgba(0, 0, 0, 0.02) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${FeatureCard}:hover & {
    opacity: 1;
  }
`

const HoverEffect = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.02) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;

  ${FeatureCard}:hover & {
    opacity: 1;
  }
`

const CTASection = styled.div`
  text-align: center;
  padding: 60px 0;
`

const CTATitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const CTAButton = styled.button`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
  padding: 18px 36px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(240, 147, 251, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 48px rgba(240, 147, 251, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

const ArrowIcon = styled.span`
  font-size: 18px;
  transition: transform 0.3s ease;

  ${CTAButton}:hover & {
    transform: translateX(4px);
  }
`

export default WhyChooseUs