import { useState, useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"
import { useLocation, useNavigate } from "react-router-dom"
import Products from "../constants/products"
import { Link } from "react-router-dom"
import styled from "styled-components"

// Map all Products
const products = Products.map((product) => ({
  id: product.id,
  name: product.name,
  type: product.type,
  link: product.link,
  mainImage: product.mainImage,
  extraImages: product.extraImages,
  description: product.description,
}))

export default function ProductListing() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("all")
  const productTypes = [...new Set(products.map((product) => product.type))]
  const tabs = ["all", ...productTypes]

  // Filter products based on active tab
  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.type === activeTab)

  // Check URL parameters on component mount
  useEffect(() => {
    window.scrollTo(0, 0)

    const urlParams = new URLSearchParams(location.search)
    const typeParam = urlParams.get("type")

    if (typeParam && tabs.includes(typeParam)) {
      setActiveTab(typeParam)
    }
  }, [location.search, tabs])

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab)

    // Update URL without page reload
    const newUrl = tab === "all" ? location.pathname : `${location.pathname}?type=${tab}`

    navigate(newUrl, { replace: true })
  }

  // Capitalize first letter for display
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <ProductListingContainer>
      <ContentWrapper>
        <PageTitle>Our Products</PageTitle>

        {/* Tabs */}
        <TabsContainer>
          <TabsList>
            {tabs.map((tab) => (
              <TabButton key={tab} active={activeTab === tab} onClick={() => handleTabChange(tab)}>
                {tab === "all" ? "All Products" : capitalizeFirst(tab)}
              </TabButton>
            ))}
          </TabsList>
        </TabsContainer>

        {/* Products Grid */}
        <ProductsContainer>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} reverse={index % 2 === 0}>
                <ProductImageSection>
                  <MainImage src={`/products/${product.mainImage}`} alt={product.name} style={{ objectFit: "fill" }} />
                  {product.extraImages.length > 0 && (
                    <ExtraImagesContainer>
                      {product.extraImages.map((img, i) => (
                        <ExtraImage key={i} style={{ objectFit: "fill" }} src={`/products/${img}`} alt={`${product.name} ${i + 1}`} />
                      ))}
                    </ExtraImagesContainer>
                  )}
                </ProductImageSection>

                <ProductContentSection>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>{product.description}</ProductDescription>
                  <LearnMoreButton to={`../${product.link}`}>
                    Learn More
                    <FiArrowRight />
                  </LearnMoreButton>
                </ProductContentSection>
              </ProductCard>
            ))
          ) : (
            <NoProductsMessage>No products found for this category.</NoProductsMessage>
          )}
        </ProductsContainer>
      </ContentWrapper>
    </ProductListingContainer>
  )
}

const ProductListingContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 48px 16px;
  
  @media (min-width: 640px) {
    padding: 48px 24px;
  }
  
  @media (min-width: 1024px) {
    padding: 48px 32px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const TabsContainer = styled.div`
  margin-bottom: 48px;
  border-bottom: 1px solid #e5e7eb;
`

const TabsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: -1px;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`

const TabButton = styled.button`
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: ${(props) => (props.active ? "#0277bd" : "#6b7280")};
  border-bottom-color: ${(props) => (props.active ? "#0277bd" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: #0277bd;
    background-color: #f3f4f6;
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 16px 32px;
  }
`

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }
`

const ProductImageSection = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`

const MainImage = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
`

const ExtraImagesContainer = styled.div`
  display: flex;
  padding: 8px;
  gap: 8px;
  justify-content: center;
`

const ExtraImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`

const ProductContentSection = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`

const ProductName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
`

const ProductDescription = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
  line-height: 1.6;
`

const LearnMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  color: white;
  background-color: #0277bd;
  text-decoration: none;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: #01579b;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`

const NoProductsMessage = styled.div`
  text-align: center;
  padding: 48px;
  color: #6b7280;
  font-size: 18px;
`
