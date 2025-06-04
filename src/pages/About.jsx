import styled from 'styled-components';

// Components
import AboutHero from '../components/AboutHero/AboutHero';
import Values from '../components/Values/Values';
import Customers from '../components/Customers/Customers';
import SetTrends from '../components/SetTrends/SetTrends';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutHero />
      <Values />
      <Customers />
      <SetTrends />
      <FAQ />
      <Contact />
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  background-color: #0A679A;
  color: white;
`;

export default AboutUs;