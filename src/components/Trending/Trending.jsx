import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import CoffeePackaging from '../../../src/assets/website/Flexible Pouches.png';
import BeveragePackaging from '../../../src/assets/website/beverage-packaging.png';
import PremiumGiftBox from '../../../src/assets/website/gift box.png';
import CustomMailerBox from '../../../src/assets/products/boxes/boxes.png';

const Trending = () => {
  const trendingProducts = [
    {
      title: 'Coffee Packaging',
      image: CoffeePackaging,
      link: '/products'
    },
    {
      title: 'Beverage Packaging',
      image: BeveragePackaging,
      link: '/products'
    },
    {
      title: 'Premium Gift Box',
      image: PremiumGiftBox,
      link: '/products'
    },
    {
      title: 'Custom Mailer Box',
      image: CustomMailerBox,
      link: '/products'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <TrendingSection>
      <div className="container" style={{ padding: '0 40px' }}>
        <TrendingLabel data-aos="fade-up">Trending</TrendingLabel>
        <SectionTitle data-aos="fade-up">See what&apos;s trending</SectionTitle>
        
        <SliderContainer data-aos="fade-up">
          <Slider {...settings}>
            {trendingProducts.map((product, index) => (
              <ProductCard key={index}>
                <ProductImage>
                  <img src={product.image || "/placeholder.svg"} alt={product.title} />
                </ProductImage>
                <ProductTitle>
                  <Link to={product.link}>{product.title}</Link>
                </ProductTitle>
              </ProductCard>
            ))}
          </Slider>
        </SliderContainer>
      </div>
    </TrendingSection>
  );
};

const TrendingSection = styled.section`
  background-color: #0277bd;
  padding: 80px 0;
  color: white;
`;

const TrendingLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const SliderContainer = styled.div`
  .slick-slide {
    padding: 0 10px;
  }
  
  .slick-dots li button:before {
    color: white;
  }
  
  .slick-dots li.slick-active button:before {
    color: white;
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductTitle = styled.h3`
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  
  a {
    color: #333;
    transition: color 0.3s ease;
    
    &:hover {
      color: #0277bd;
    }
  }
`;

export default Trending;