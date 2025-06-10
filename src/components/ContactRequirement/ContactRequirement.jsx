import { useState } from "react"
import styled from "styled-components"
import { FaPhone, FaChevronDown } from "react-icons/fa"
import { toast } from "react-toastify"
import Loader from "../Loader/Loder"

const ContactRequirement = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedCountry, setSelectedCountry] = useState({ code: "+91", name: "India" })
  const [showDropdown, setShowDropdown] = useState(false)
  const countryCodes = [
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+91", name: "India" },
    { code: "+86", name: "China" },
    { code: "+81", name: "Japan" },
    { code: "+49", name: "Germany" },
    { code: "+33", name: "France" },
    { code: "+39", name: "Italy" },
    { code: "+34", name: "Spain" },
    { code: "+61", name: "Australia" },
    { code: "+55", name: "Brazil" },
    { code: "+7", name: "Russia" },
    { code: "+82", name: "South Korea" },
    { code: "+65", name: "Singapore" },
    { code: "+971", name: "UAE" },
    { code: "+966", name: "Saudi Arabia" },
    { code: "+27", name: "South Africa" },
    { code: "+52", name: "Mexico" },
    { code: "+31", name: "Netherlands" },
    { code: "+46", name: "Sweden" },
  ]
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!phoneNumber) {
        toast.error("Please enter your Phone Number.",{
          position: "top-center",
        });
        return;
      }
      try {
        // check if phone number is valid
        const phonePattern = /^\+?[1-9]\d{1,14}$/; // E.164 format
        if (!phonePattern.test(phoneNumber)) {
          toast.error("Please enter a valid phone number.",{
            position: "top-center",
          });
          setPhoneNumber("");
          return;
        } else{
          setLoading(true);
          const res = await fetch(`${import.meta.env.VITE_Backend_URL}/contact-number`, 
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ mobile:`${selectedCountry.code + phoneNumber}`})
            }
          )
          if (res.ok) {
            setPhoneNumber("");
            toast.success("Our customer representative will contact you.",{
              position: "top-center",
            });
            setLoading(false);
          } else {
            toast.error("An error occurred while sending your Phone Number. Please try again.",{
              position: "top-center",
            });
            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Error sending Phone Number:", error);
        toast.error("An error occurred while sending your Phone number. Please try again.",{
          position: "top-center",
        });
        setLoading(false);
      }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
    setShowDropdown(false)
  }

  return (
    <ContactSection>
      <div className="container">
        <ContactContent data-aos="fade-up">
          <SectionSubtitle>Contact Us</SectionSubtitle>
          <SectionTitle>Tell us about your requirement</SectionTitle>
          <SectionDescription>We are happy to help you!</SectionDescription>

          <ContactForm onSubmit={handleSubmit}>
            <PhoneInputContainer>
              <PhoneIcon>
                <FaPhone />
              </PhoneIcon>

              <CountrySelector>
                <CountryButton type="button" onClick={() => setShowDropdown(!showDropdown)}>
                  <CountryCode>{selectedCountry.code}</CountryCode>
                  <DropdownIcon>
                    <FaChevronDown />
                  </DropdownIcon>
                </CountryButton>

                {showDropdown && (
                  <DropdownMenu>
                    {countryCodes.map((country) => (
                      <DropdownItem
                        key={country.code}
                        onClick={() => handleCountrySelect(country)}
                        isSelected={selectedCountry.code === country.code}
                      >
                        <span>{country.code}</span>
                        <span>{country.name}</span>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </CountrySelector>

              <PhoneInput
                type="tel"
                maxLength={10}
                autoComplete="tel"
                required
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </PhoneInputContainer>
            <SubmitButton onClick={(e)=> handleSubmit(e)}>SEND</SubmitButton>
          </ContactForm>
        </ContactContent>
      </div>
      {loading && <Loader />}
    </ContactSection>
  )
}

const ContactSection = styled.section`
  background-color: #0A679A;
  padding: 60px 0;
  color: white;
  text-align: center;
`

const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const SectionSubtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const SectionDescription = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
`

const PhoneInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 12px 15px;
  width: 100%;
  max-width: 300px;
  position: relative;
`

const PhoneIcon = styled.div`
  color: white;
  margin-right: 10px;
  font-size: 16px;
`

const CountrySelector = styled.div`
  position: relative;
  margin-right: 10px;
`

const CountryButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    opacity: 0.8;
  }
`

const CountryCode = styled.span`
  font-weight: 500;
  margin-right: 5px;
`

const DropdownIcon = styled.div`
  font-size: 10px;
  transition: transform 0.3s ease;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  min-width: 150px;
  margin-top: 5px;
`

const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  background-color: ${(props) => (props.isSelected ? "#f0f0f0" : "transparent")};
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  span:first-child {
    font-weight: 500;
    margin-right: 10px;
  }
  
  span:last-child {
    font-size: 12px;
    color: #666;
  }
`

const PhoneInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`

const SubmitButton = styled.button`
  background-color: #2E86C1;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2874A6;
  }
`

export default ContactRequirement
