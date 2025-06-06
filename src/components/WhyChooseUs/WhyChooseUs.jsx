import styled from "styled-components"
import image1 from "../../assets/website/image1.png"
import image2 from "../../assets/website/image2.png"
import image3 from "../../assets/website/image3.png"
import image4 from "../../assets/website/image4.png"
import image5 from "../../assets/website/image5.png"
import image6 from "../../assets/website/image6.png"

const WhyChooseUs = () => {
  return (
    <WhyChooseUsSection>
      <div className="container">
        <SectionHeader data-aos="fade-up">
          <SectionTitle>A Big Why?</SectionTitle>
          <SectionDescription>
            Why Choose Us? We transform your product packaging. Let's make your product roar. Let's make your product
            take the lead. Join us to be a Success Story. Join us, because We are an American packaging company for
            Americans.
          </SectionDescription>
        </SectionHeader>

        <FeaturesGrid>
          {/* Free Design Support */}
          <FeatureCard backgroundColor="#A8D5E2" data-aos="fade-up">
            <CardContent>
              <FeatureTitle>Free Design Support</FeatureTitle>
              <FeatureDescription>
                We provide you with all-in packaging designs' assistance. Our marvelous themes always come hand in hand
                with functionality and aesthetics
              </FeatureDescription>
            </CardContent>
            <CardImage>
              <img src={image1} alt="Free Design Support" />
            </CardImage>
          </FeatureCard>

          {/* E-Commerce Packaging Solutions */}
          <FeatureCard backgroundColor="#FF6B6B" data-aos="fade-up" data-aos-delay="100">
            <CardContent>
              <FeatureTitle>E-Commerce Packaging Solutions</FeatureTitle>
              <FeatureDescription>
                Shop 'custom printed boxes with logo' in bulk quantities and wholesale prices. We offer a lightweight,
                sturdier, easy unboxing and closing experience
              </FeatureDescription>
            </CardContent>
            <CardImage>
              <img src={image2} alt="E-Commerce Packaging Solutions" />
            </CardImage>
          </FeatureCard>

          {/* Eco-Friendly Packaging */}
          <FeatureCard backgroundColor="#D4B5A0" data-aos="fade-up" data-aos-delay="200">
            <CardContent>
              <FeatureTitle>Eco-Friendly Packaging</FeatureTitle>
              <FeatureDescription>
                 Corepac USA is an environmentally responsible packaging company. We endorse the use of recyclable and
                sustainable materials for a greener planet
              </FeatureDescription>
            </CardContent>
            <CardImage>
              <img src={image3} alt="Eco-Friendly Packaging" />
            </CardImage>
          </FeatureCard>

          {/* Quick Turnaround Time */}
          <FeatureCard backgroundColor="#FFD93D" data-aos="fade-up" data-aos-delay="300">
            <CardContent>
              <FeatureTitle>Quick Turnaround Time</FeatureTitle>
              <FeatureDescription>
                We are fast. We are quick. And we keep you updated till you receive the order/packaging products in your
                hands, which are shipped nationwide
              </FeatureDescription>
            </CardContent>
            <CardImage>
              <img src={image4} alt="Quick Turnaround Time" />
            </CardImage>
          </FeatureCard>

          {/* Ideal Customer Support */}
          <FeatureCard backgroundColor="#FADDE1" data-aos="fade-up" data-aos-delay="400">
            <CardContent>
              <FeatureTitle>Ideal Customer Support</FeatureTitle>
              <FeatureDescription>
                We provide you with the most skillful customer support in the USA. Dial us, then let us make your dream
                packaging a reality with 247 support
              </FeatureDescription>
            </CardContent>
            <CardImage>
              <img src={image5} alt="Ideal Customer Support" />
            </CardImage>
          </FeatureCard>

          {/* Low MOQs */}
          <FeatureCard backgroundColor="#C8A8E9" data-aos="fade-up" data-aos-delay="500">
            <CardContent>
              <FeatureTitle>Low MOQs</FeatureTitle>
              <FeatureDescription>
                Our printing and packaging company offers the most pleasing low MOQs (Minimum Order Quantity) packages
                in the United States of America
              </FeatureDescription>
            </CardContent>
            <CardImage>
              <img src={image6} alt="Low MOQs" />
            </CardImage>
          </FeatureCard>
        </FeaturesGrid>
      </div>
    </WhyChooseUsSection>
  )
}

const WhyChooseUsSection = styled.section`
  background-color: #ffffff;
  padding: 80px 0;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const SectionDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  padding: 30px;
  min-height: 350px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`

const CardContent = styled.div`
  flex: 1;
  margin-bottom: 20px;
`

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const CardImage = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`

export default WhyChooseUs
