import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FiUpload, FiStar, FiShare2, FiDownload } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import Loader from "../components/Loader/Loder";
import ContactRequirement from "../components/ContactRequirement/ContactRequirement";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import Guarantee from "../components/Guarantee/Guarantee";
import { toast } from "react-toastify";
import Quote from "../assets/website/Quote.png";
import styled from "styled-components";

function ProductPage({ product }) {
  // Default form state
  const [formData, setFormData] = useState({
    id: product.id,
    productName: product.name,
    lengthh: "",
    width: "",
    height: "",
    quantity: "",
    dynamicFields: {},
    note: "",
    artwork: null,
    name: "",
    email: "",
    phone: "",
    initialDynamicFields: {},
  });

  const [showDescription, setShowDescription] = useState(false);

  const [showContactRequirement, setShowContactRequirement] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  const [images, setImages] = useState([]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const initialDynamicFields = {};
    if (product.dropDownMenu) {
      Object.entries(product.dropDownMenu).forEach(([menuName]) => {
        initialDynamicFields[menuName] = [];
      });
    }
    if (product.checkBoxMenu) {
      Object.entries(product.checkBoxMenu).forEach(([menuName]) => {
        initialDynamicFields[menuName] = [];
      });
    }
    setFormData({
      id: product.id,
      productName: product.name,
      lengthh: "",
      width: "",
      height: "",
      quantity: "",
      note: "",
      artwork: null,
      name: "",
      email: "",
      phone: "",
      dynamicFields: initialDynamicFields,
      initialDynamicFields,
    });
    setImages([
      `/products/${product.mainImage}`,
      ...(product.extraImages || []).map((img) => `/products/${img}`),
    ]);
  }, [product]);

  const [isLoading, setIsLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  // Input handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDynamicDropdownChange = (menuName, value) => {
    setFormData((prev) => ({
      ...prev,
      dynamicFields: {
        ...prev.dynamicFields,
        [menuName]: value
          ? { name: value }
          : [],
      },
    }));
  };

  // Handle checkbox changes
  const handleDynamicCheckboxChange = (menuName, value, checked) => {
    setFormData((prev) => ({
      ...prev,
      dynamicFields: {
        ...prev.dynamicFields,
        [menuName]: checked
          ? [...prev.dynamicFields[menuName], value]
          : prev.dynamicFields[menuName].filter(
              (item) => item.name !== value.name
            ),
      },
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      artwork: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      lengthh,
      width,
      height,
      quantity,
      name,
      email,
      phone,
    } = formData;

    // Validation checks
    if (
      !lengthh ||
      !width ||
      (!height && product.height) || // Only validate height if required by product
      !quantity ||
      !name ||
      !email ||
      !phone
    ) {
      toast.error(
        "Please fill out length, width, height, quantity, name, email, and phone.",
        { position: "top-center" }
      );
      return;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }

    try {
      setLoading(true);

      // Prepare FormData
      const formDataToSend = new FormData();
      formDataToSend.append("id", formData.id);
      formDataToSend.append("productName", formData.productName);
      formDataToSend.append("lengthh", lengthh);
      formDataToSend.append("width", width);
      formDataToSend.append("height", height || ""); // Default empty if not required
      formDataToSend.append("quantity", quantity);

      // Convert dynamicFields to JSON string
      const dynamicFieldsArray = Object.entries(formData.dynamicFields).map(
        ([key, value]) => {
          if (Array.isArray(value)) {
            // For arrays like checkboxes
            return {
              [key]: value.map((option) => option.name),
            };
          } else if (value && typeof value === "object") {
            // For dropdowns or single selection
            return { [key]: value.name };
          }
          return { [key]: value }; // Default case
        }
      );
      formDataToSend.append(
        "dynamicFields",
        JSON.stringify(dynamicFieldsArray)
      );

      formDataToSend.append("note", formData.note || "");
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      formDataToSend.append("phone", phone);

      if (formData.artwork) {
        formDataToSend.append("artwork", formData.artwork);
        formDataToSend.append("artworkName", formData.artwork.name);
      }

      // Send API request
      const res = await fetch(
        `${import.meta.env.VITE_Backend_URL}/quotation-email`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (res.ok) {
        toast.success("Your quotation email has been sent successfully.", {
          position: "top-center",
        });
        setFormData((prev) => ({
          ...prev,
          lengthh: "",
          width: "",
          height: "",
          quantity: "",
          note: "",
          artwork: null,
          name: "",
          email: "",
          phone: "",
          dynamicFields: prev.initialDynamicFields,
        }));
      } else {
        toast.error("Failed to send email. Please try again.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePdfDownload = () => {
    setIsLoading(true);
    
    // Convert artwork to base64 if it exists
    let artworkBase64 = null;
    if (formData.artwork) {
      const reader = new FileReader();
      reader.readAsDataURL(formData.artwork);
      reader.onload = () => {
        artworkBase64 = reader.result;
        generatePDF(artworkBase64);
      };
      reader.onerror = () => {
        generatePDF(null);
      };
    } else {
      generatePDF(null);
    }
  };

  const generatePDF = (artworkBase64) => {
    const pageCount = artworkBase64 ? 3 : 2;
    const userHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quotation Request - CorePac USA</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          @page {
            margin: 0;
            size: A4;
          }
          html, body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            color: #434343;
            line-height: 1.6;
          }
          .page {
            padding: 40px;
            background: linear-gradient(to bottom, #f4f7ff 0%, #ffffff 100%);
            position: relative;
          }
          .page:not(:last-child) {
            page-break-after: always;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e6ebf1;
          }
          .logo-section {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .logo-text {
            font-size: 24px;
            font-weight: bold;
            color: #1f1f1f;
          }
          .date {
            font-size: 14px;
            color: #666;
          }
          .content-box {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            margin-bottom: 30px;
          }
          .title {
            font-size: 24px;
            color: #1f1f1f;
            margin-bottom: 25px;
            text-align: center;
          }
          .subtitle {
            font-size: 16px;
            color: #666;
            text-align: center;
            margin-bottom: 30px;
          }
          .details-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 25px;
          }
          .detail-item {
            padding: 12px;
            background: #f8f9fa;
            border-radius: 8px;
          }
          .detail-label {
            font-weight: 600;
            color: #1f1f1f;
            margin-bottom: 4px;
            font-size: 14px;
            text-transform: capitalize;
          }
          .detail-value {
            color: #666;
            font-size: 13px;
            text-transform: capitalize;
          }
          .contact-info {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            color: #666;
          }
          .contact-link {
            color: #0277bd;
            text-decoration: none;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 12px;
            color: #666;
          }
          .page-number {
            position: absolute;
            bottom: 20px;
            right: 40px;
            font-size: 12px;
            color: #999;
          }
          .images-section {
            margin-top: 20px;
          }
          .main-image-container {
            width: 100%;
            max-width: 500px;
            margin: 0 auto 20px;
            border-radius: 10px;
            overflow: hidden;
            background: #f8f9fa;
          }
          .main-image {
            width: 100%;
            height: auto;
            object-fit: contain;
          }
          .extra-images-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 20px;
          }
          .extra-image-container {
            aspect-ratio: 1 / 1;
            border-radius: 8px;
            overflow: hidden;
            background: #f8f9fa;
          }
          .extra-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .artwork-container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            border-radius: 10px;
            overflow: hidden;
            background: #f8f9fa;
            text-align: center;
          }
          .artwork-image {
            width: 100%;
            height: auto;
            max-height: 800px;
            object-fit: contain;
          }
        </style>
      </head>
      <body>
        <!-- Page 1 - Details -->
        <div class="page">
          <header class="header">
            <div class="logo-section">
              <img src="https://i.postimg.cc/bNth8xHZ/COREPAC.jpg" alt="Logo" height="40px" width="40px" />
              <span class="logo-text">CorePac USA</span>
            </div>
            <div class="date">${new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</div>
          </header>

          <main class="content-box">
            <h1 class="title">Quotation Request Details</h1>
            <p class="subtitle">Request ID: ${formData.id}</p>

            <div class="details-grid">
              <div class="detail-item">
                <div class="detail-label">Product Name</div>
                <div class="detail-value">${formData.productName}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Dimensions (L x W x H)</div>
                <div class="detail-value">${formData.lengthh} x ${
      formData.width
    } x ${product.height ? formData.height : "N/A"}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Quantity</div>
                <div class="detail-value">${
                  formData.quantity ? formData.quantity : "1"
                }</div>
              </div>
             
          ${Object.entries(product.dropDownMenu || {})
            .map(
              ([menuName]) => `
            <div class="detail-item">
              <div class="detail-label">${menuName}</div>
              <div class="detail-value">
                ${
                  formData.dynamicFields[menuName]?.name
                    ? formData.dynamicFields[menuName].name
                    : "N/A"
                }
              </div>
            </div>
          `
            )
            .join("")}

         
          ${Object.entries(product.checkBoxMenu || {})
            .map(
              ([menuName]) => `
            <div class="detail-item">
              <div class="detail-label">${menuName}</div>
              <div class="detail-value">
                ${
                  formData.dynamicFields[menuName]?.length
                    ? formData.dynamicFields[menuName]
                        .map((item) => item.name)
                        .join(", ")
                    : "N/A"
                }
              </div>
            </div>
          `
            )
            .join("")}

              <div class="detail-item">
                <div class="detail-label">Special Notes</div>
                <div class="detail-value">${formData.note || "N/A"}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Customer Name</div>
                <div class="detail-value">${formData.name}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Email</div>
                <div class="detail-value">${formData.email}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Phone</div>
                <div class="detail-value">${formData.phone}</div>
              </div>
            </div>
          </main>

          <div class="contact-info">
            Need assistance? Contact us at
            <a href="mailto:info@CorePacUSA.com" class="contact-link">
              info@CorePacUSA.com
            </a>
          </div>

          <footer class="footer">
            <p style="font-weight: 600; margin-bottom: 8px;">CorePac USA</p>
            <p style="margin-bottom: 8px;">9816 E Colonial Dr, Orlando FL 32817, United States</p>
            <p>Copyright © ${new Date().getFullYear()}. All rights reserved.</p>
          </footer>
          
          <div class="page-number">Page 1 of ${pageCount}</div>
        </div>

        <!-- Page 2 - Product Images -->
        <div class="page">
          <header class="header">
            <div class="logo-section">
              <img src="https://i.postimg.cc/bNth8xHZ/COREPAC.jpg" alt="Logo" height="40px" width="40px"/>
              <span class="logo-text">CorePac USA</span>
            </div>
          </header>

          <main class="content-box">
            <h2 class="title">Product Images</h2>
            
            <div class="images-section">
              <!-- Main Image -->
              <div class="main-image-container">
                <img
                  src="/products/${product.mainImage}"
                  alt="${product.name}"
                  class="main-image"
                />
              </div>

              <!-- Extra Images Grid -->
              ${
                product.extraImages && product.extraImages.length > 0
                  ? `<div class="extra-images-grid">
                      ${product.extraImages
                        .map(
                          (image, index) => `
                        <div class="extra-image-container">
                          <img
                            src="/products/${image}"
                            alt="Extra view ${index + 1} of ${product.name}"
                            class="extra-image"
                          />
                        </div>
                      `
                        )
                        .join("")}
                    </div>`
                  : ""
              }
            </div>
          </main>

          <footer class="footer">
            <p style="font-weight: 600; margin-bottom: 8px;">CorePac USA</p>
            <p>Copyright © ${new Date().getFullYear()}. All rights reserved.</p>
          </footer>
          
          <div class="page-number">Page 2 of ${pageCount}</div>
        </div>

        ${
          artworkBase64
            ? `
        <!-- Page 3 - Artwork -->
        <div class="page">
          <header class="header">
            <div class="logo-section">
              <img src="https://i.postimg.cc/bNth8xHZ/COREPAC.jpg" alt="Logo" height="40px" width="40px"/>
              <span class="logo-text">CorePac USA</span>
            </div>
          </header>

          <main class="content-box">
            <h2 class="title">Customer Artwork</h2>
            
            <div class="artwork-container">
              <img
                src="${artworkBase64}"
                alt="Customer Artwork"
                class="artwork-image"
              />
            </div>
          </main>

          <footer class="footer">
            <p style="font-weight: 600; margin-bottom: 8px;">CorePac USA</p>
            <p>Copyright © ${new Date().getFullYear()}. All rights reserved.</p>
          </footer>
          
          <div class="page-number">Page 3 of ${pageCount}</div>
        </div>
        `
            : ""
        }
      </body>
    </html>
  `;    const opt = {
      margin: 0,
      filename: `CorePac USA-Quotation-${formData.productName}-${
        new Date().toISOString().split("T")[0]
      }.pdf`,
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { 
        mode: 'avoid-all'
      },
    };

    // Create a temporary container
    const element = document.createElement("div");
    element.innerHTML = userHtml;
    document.body.appendChild(element);

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          if (document.body.contains(element)) {
            document.body.removeChild(element);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error generating PDF:", error);
          toast.error(
            "An error occurred while generating the PDF. Please try again.",
            {
              position: "top-center",
            }
          );
          setIsLoading(false);
          if (document.body.contains(element)) {
            document.body.removeChild(element);
          }
        });
    }, 100);
  };

  return (
    <>
      <div className="min-h-screen bg-[#0A679A] dark:bg-gray-950 pt-8">
        <div className="container mx-auto px-4 py-8 ">
          {/* Breadcrumb */}
          <div className="text-xl mb-3 text-white">
            <span>Home</span> &gt; <span>{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 py-8 px-2 mb-8 rounded bg-[#D9D9D9]">
            {/* Product Images */}
            <div className="space-y-4">
              <GalleryContainer className="container">
                <GalleryWrapper>
                  <MainImage>
                    <img
                      src={images[currentImage] || "/placeholder.svg"}
                      alt="Gift Box Package"
                    />
                    <NavButton className="prev" onClick={prevImage}>
                      <FaChevronLeft />
                    </NavButton>
                    <NavButton className="next" onClick={nextImage}>
                      <FaChevronRight />
                    </NavButton>
                  </MainImage>

                  <ImageDots>
                    {images.map((_, index) => (
                      <Dot
                        key={index}
                        active={index === currentImage}
                        onClick={() => setCurrentImage(index)}
                      />
                    ))}
                  </ImageDots>
                </GalleryWrapper>
              </GalleryContainer>

              {/* Quotation Image */}
              {showContactRequirement && (
                <div className="grid grid-cols-1">
                  <img
                    src={Quote}
                    alt="
              Quotation"
                  />
                </div>
              )}
            </div>

            {/* Product Form */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 dark:text-white">
                  {product.name}
                </h1>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                    5.0 Rating
                  </span>
                </div>
                <PriceContainer>
                  <CurrentPrices>On Request</CurrentPrices>
                </PriceContainer>
                {/* Show Description Button */}
                <div className="mb-4 mt-4">
                  <button
                    type="button"
                    className={`flex items-center gap-2 px-3 py-1 rounded mb-2 transition-colors ${
                      showDescription
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-[#8A919C] text-white  hover:bg-gray-400"
                    }`}
                    onClick={() => setShowDescription((prev) => !prev)}
                  >
                    {showDescription ? (
                      <span className="transition-transform duration-200 rotate-180">
                        <FiUpload
                          className="w-4 h-4"
                          style={{ transform: "rotate(180deg)" }}
                        />
                      </span>
                    ) : (
                      <span className="transition-transform duration-200">
                        <FiDownload className="w-4 h-4" />
                      </span>
                    )}
                    {showDescription ? "Hide Description" : "See more details"}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      showDescription
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-2 bg-gray-100 rounded text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                      {product.description || "No description available."}
                    </div>
                  </div>
                </div>
                <div className="mb-4 mt-4">
                  <button
                    type="button"
                    className={`flex items-center gap-2 px-3 py-1 rounded mb-2 transition-colors ${
                      showContactRequirement
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-[#8A919C] text-white  hover:bg-gray-400"
                    }`}
                    onClick={() => setShowContactRequirement((prev) => !prev)}
                  >
                    {showContactRequirement ? (
                      <span className="transition-transform duration-200 rotate-180">
                        <FiUpload
                          className="w-4 h-4"
                          style={{ transform: "rotate(180deg)" }}
                        />
                      </span>
                    ) : (
                      <span className="transition-transform duration-200">
                        <FiDownload className="w-4 h-4" />
                      </span>
                    )}
                    {showContactRequirement
                      ? "Hide Customize"
                      : "Show Customize"}
                  </button>
                </div>
              </div>
              {showContactRequirement ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Box Dimensions */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 dark:text-white">
                        Length (inches)
                      </label>
                      <input
                        type="number"
                        name="lengthh"
                        min={0}
                        value={formData.lengthh}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 dark:text-white">
                        Width (inches)
                      </label>
                      <input
                        type="number"
                        name="width"
                        min={0}
                        value={formData.width}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    {product.height && (
                      <div>
                        <label className="block text-sm font-medium mb-1 dark:text-white">
                          Height (inches)
                        </label>
                        <input
                          type="number"
                          name="height"
                          min={0}
                          value={formData.height}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                          required
                        />
                      </div>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min={1}
                      placeholder={`Minimum order quantity is ${
                        product.minimumQuantity || 1
                      } units`}
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      required
                    />
                  </div>

                  {/* Render Dropdown Menus */}
                  {product.dropDownMenu &&
                    Object.entries(product.dropDownMenu).map(
                      ([menuName, options]) => (
                        <div key={menuName}>
                          <label className="block font-medium mb-1 capitalize dark:text-white">
                            {menuName} (Optional)
                          </label>
                          <select
                            value={formData.dynamicFields[menuName]?.name || ""}
                            onChange={(e) =>
                              handleDynamicDropdownChange(
                                menuName,
                                e.target.value
                              )
                            }
                            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                          >
                            <option value="">Select {menuName}</option>
                            {options.map((option, index) => (
                              <option key={index} value={option.name}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )
                    )}

                  {/* Render Checkbox Menus */}
                  {product.checkBoxMenu &&
                    Object.entries(product.checkBoxMenu).map(
                      ([menuName, options]) => (
                        <div key={menuName}>
                          <p className="block font-medium mb-1 capitalize dark:text-white">
                            {menuName} (Optional)
                          </p>
                          {options.map((option, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-2 dark:text-white"
                            >
                              <input
                                type="checkbox"
                                checked={
                                  formData.dynamicFields[menuName]?.some(
                                    (item) => item.name === option.name
                                  ) || false
                                }
                                onChange={(e) =>
                                  handleDynamicCheckboxChange(
                                    menuName,
                                    { name: option.name },
                                    e.target.checked
                                  )
                                }
                                className="rounded border-gray-300 dark:border-gray-700"
                              />
                              <span>{option.name}</span>
                            </label>
                          ))}
                        </div>
                      )
                    )}

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    ></textarea>
                  </div>

                  {/* Artwork Upload file Name*/}
                  {formData.artwork && (
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <FiUpload className="text-2xl" />
                        <span className="text-sm dark:text-white">
                          {formData.artwork.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, artwork: null }))
                        }
                        className="text-sm text-red-500 dark:text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  {/* Artwork Upload */}
                  {!formData.artwork && (
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-white">
                        Artwork (Optional)
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="w-full flex flex-col items-center px-4 py-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 cursor-pointer hover:border-gray-400 dark:hover:border-gray-500">
                          <FiUpload className="text-3xl mb-1" />
                          <span className="text-sm">
                            Click or drag file to upload
                          </span>
                          <input
                            type="file"
                            name="artwork"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  )}

                  {/* name */}
                  <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      required
                    />{" "}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      required
                    />{" "}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      required
                    />{" "}
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get a Quote
                    </button>
                    <button
                      type="button"
                      className={`px-6 py-3 border rounded-lg dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                        isLoading ? "cursor-not-allowed opacity-70" : ""
                      }`}
                      onClick={handlePdfDownload}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                      ) : (
                        <FiShare2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-lg mb-4">Contact us for a quote!</p>
                  <button
                    onClick={() => setShowContactRequirement(true)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Product Description */}
          <ProductDescription
            features={product.features || []}
            image={
              `/products/${product.mainImage}` ||
              "/placeholder.svg?height=300&width=300"
            }
          />

          <div
            style={{
              width: "100%",
              height: "44",
              gap: "8px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              paddingTop: "8px",
              paddingRight: "12px",
              paddingBottom: "8px",
              paddingLeft: "12px",
              background: "rgba(60, 158, 228, 1)",
              color: "white",
              textAlign: "center",
            }}
          >
            Easy Returns: Free Replacement or Full Refund
          </div>
          <div
            style={{
              width: "100%",
              height: "44",
              gap: "8px",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              paddingTop: "8px",
              paddingRight: "12px",
              paddingBottom: "8px",
              paddingLeft: "12px",
              background: "rgba(38, 143, 76, 1)",
              color: "white",
              textAlign: "center",
            }}
          >
            100% Satisfaction Guaranteed
          </div>
          {/* Related Products */}
          {product.alsoLike && product.alsoLike.length > 0 && (
            <RelatedSection>
              <div className="container">
                <SectionHeader data-aos="fade-up">
                  <SectionSubtitle>Here’s what</SectionSubtitle>
                  <SectionTitle>
                    Frequently bought together with this product
                  </SectionTitle>
                </SectionHeader>

                <ProductsGrid>
                  {product.alsoLike.map((relatedProduct, index) => (
                    <Link
                      to={`../../${relatedProduct.link}`}
                      className="no-underline"
                      key={relatedProduct.id}
                    >
                      <ProductCard
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <ProductImage>
                          <img
                            src={
                              `/products/${relatedProduct.image}` ||
                              "/placeholder.svg?height=300&width=300"
                            }
                            alt={relatedProduct.title}
                          />
                        </ProductImage>
                        <ProductInfo>
                          <ProductName>{relatedProduct.title}</ProductName>
                        </ProductInfo>
                      </ProductCard>
                    </Link>
                  ))}
                </ProductsGrid>

                <ViewAllButton data-aos="fade-up">
                  <Link to="/products">VIEW ALL</Link>
                </ViewAllButton>
              </div>
            </RelatedSection>
          )}
          {/* Guarantee Section */}
          <Guarantee />
          {/* Contact Requirement Section */}
          <ContactRequirement />
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
}

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    extraImages: PropTypes.arrayOf(PropTypes.string),
    height: PropTypes.bool,
    minimumQuantity: PropTypes.number,
    dropDownMenu: PropTypes.object,
    checkBoxMenu: PropTypes.object,
    description: PropTypes.string,
    features: PropTypes.array,
    alsoLike: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
        image: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ProductPage;

const RelatedSection = styled.section`
  background-color: #0a679a;
  padding: 60px 0;
  color: white;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
`;

const SectionSubtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
  background-color: #0a679a;
  color: white;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;



const ViewAllButton = styled.div`
  text-align: center;

  a {
    display: inline-block;
    background-color: #2e86c1;
    color: white;
    padding: 10px 25px;
    border-radius: 4px;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2874a6;
    }
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 30px;
`;

const CurrentPrices = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #333;
`;

const GalleryContainer = styled.div`
  flex: 1;
`;

const GalleryWrapper = styled.div`
  max-width: 500px;
`;

const MainImage = styled.div`
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &.prev {
    left: 15px;
  }

  &.next {
    right: 15px;
  }
`;

const ImageDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.active ? "#0277bd" : "black")};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
