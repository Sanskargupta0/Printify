import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Boxes from '../../../src/assets/website/boxes.png';
import GiftBoxes from '../../../src/assets/website/gift boxes.png';
import MylarBags from '../../../src/assets/website/Mylar bages.png';
import Labels from '../../../src/assets/website/labels.png';

const PackagingCategories = () => {
  const categories = [
    {
      title: 'Boxes & Packaging',
      image: Boxes,
      link: '/products'
    },
    {
      title: 'Gift Boxes',
      image: GiftBoxes,
      link: '/products'
    },
    {
      title: 'Mylar Bags',
      image: MylarBags,
      link: '/products'
    },
    {
      title: 'Labels',
      image: Labels,
      link: '/products'
    }
  ];

  return (
    <CategoriesSection>
      <div className="container">
        <CategoryLabel data-aos="fade-up">CATEGORY</CategoryLabel>
        <SectionTitle data-aos="fade-up">Design your perfect packaging</SectionTitle>
        
        <CategoriesGrid>
          {categories.map((category, index) => (
            <CategoryCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <CategoryImage>
                <img src={category.image || "/placeholder.svg"} alt={category.title} />
              </CategoryImage>
              <CategoryTitle>
                <Link to={category.link}>{category.title}</Link>
              </CategoryTitle>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </div>
    </CategoriesSection>
  );
};

const CategoriesSection = styled.section`
  background-color: #f5f5f5;
  padding: 80px 0;
`;

const CategoryLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #0A679A;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #333;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CategoryTitle = styled.h3`
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  
  a {
    color: #333;
    transition: color 0.3s ease;
    
    &:hover {
      color: #0A679A;
    }
  }
`;

export default PackagingCategories;