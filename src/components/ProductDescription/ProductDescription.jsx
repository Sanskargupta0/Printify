import styled from "styled-components";

const ProductDescription = ({ image, features }) => {
  return (
    <DescriptionSection>
      <div className="container">
        <DescriptionContainer>
          <DescriptionContent data-aos="fade-right">
            <SectionTitle>About this product</SectionTitle>
            <FeaturesList>
              { features?features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureNumber>{index + 1}.</FeatureNumber>
                  <FeatureContent>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>
                      {feature.description}
                    </FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
              )): <p>
                No features available at the moment.
              </p> }
            </FeaturesList>
            <ReadMoreButton>READ MORE →</ReadMoreButton>
          </DescriptionContent>

          <ProductShowcase data-aos="fade-left">
            <ShowcaseImage>
              <img src={image} />
            </ShowcaseImage>
          </ProductShowcase>
        </DescriptionContainer>
      </div>
    </DescriptionSection>
  );
};

const DescriptionSection = styled.section`
  background-color: #0A679A;
  padding: 60px 0;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: stretch;
  justify-items: center;

  & > * {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    & > * {
      height: auto;
    }
  }
`;

const DescriptionContent = styled.div`
  flex: 1;
  background: #D9D9D9;
  border-radius: 8px;
  padding: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
`;

const FeaturesList = styled.div`
  margin-bottom: 30px;
`;

const FeatureItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
`;

const FeatureNumber = styled.span`
  font-weight: 700;
  color: #0277bd;
  margin-right: 10px;
  min-width: 20px;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #0277bd;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const ProductShowcase = styled.div`
  flex: 1;
`;

const ShowcaseImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default ProductDescription;
