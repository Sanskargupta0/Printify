import { useState, useEffect } from "react";
import { FiUpload, FiStar, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import Loader from "../components/Loader/Loder";
import { toast } from "react-toastify";
import Quote from "../assets/website/Quote.png";

export default function ProductPage({ product }) {
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
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const initialDynamicFields = {};
    if (product.dropDownMenu) {
      Object.entries(product.dropDownMenu).forEach(([menuName, options]) => {
        initialDynamicFields[menuName] = [];
      });
    }
    if (product.checkBoxMenu) {
      Object.entries(product.checkBoxMenu).forEach(([menuName, options]) => {
        initialDynamicFields[menuName] = [];
      });
    }
    setFormData((prev) => ({
      ...prev,
      dynamicFields: initialDynamicFields,
    }));
  }, [product]);

  const [isLoading, setIsLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  // Input handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDynamicDropdownChange = (menuName, value) => {
    if (value) {
      setFormData((prev) => ({
        ...prev,
        dynamicFields: {
          ...prev.dynamicFields,
          [menuName]: {
            name: value,
            price: product.dropDownMenu[menuName]?.find(
              (option) => option.name === value
            ).price,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        dynamicFields: {
          ...prev.dynamicFields,
          [menuName]: [],
        },
      }));
    }
  };

  // Handle checkbox changes
  const handleDynamicCheckboxChange = (menuName, value, checked) => {
    setFormData((prev) => ({
      ...prev,
      dynamicFields: {
        ...prev.dynamicFields,
        [menuName]: checked
          ? [...prev.dynamicFields[menuName], value]
          : prev.dynamicFields[menuName].filter((item) => item !== value),
      },
    }));
  };

  // Calculate estimated price
  useEffect(() => {
    const calculateEstimatedPrice = () => {
      const { basePrice, dropDownMenu, checkBoxMenu } = product;
      const { quantity, dynamicFields } = formData;

      let totalPrice = basePrice * (quantity || 1);

      // Add price for dropdown selections
      Object.entries(dynamicFields || {}).forEach(
        ([menuName, selectedValue]) => {
          if (dropDownMenu && dropDownMenu[menuName] && selectedValue?.price) {
            totalPrice += selectedValue.price * (quantity || 1);
          }
        }
      );

      // Add price for selected extras
      if (
        checkBoxMenu &&
        dynamicFields.extra &&
        Array.isArray(dynamicFields.extra)
      ) {
        dynamicFields.extra.forEach((extra) => {
          totalPrice += extra.price * (quantity || 1);
        });
      }

      return totalPrice;
    };

    setEstimatedPrice(calculateEstimatedPrice());
  }, [formData, product]);

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      artwork: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check for all required fields
    const { lengthh, width, height, quantity, name, email, phone } = formData;

    if (
      !lengthh ||
      !width ||
      !height ||
      !quantity ||
      !name ||
      !email ||
      !phone
    ) {
      toast.error(
        "Please fill out length, width, height, quantity, name, email, phone required fields.",
        {
          position: "top-center",
        }
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

      // Prepare FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append("id", formData.id);
      formDataToSend.append("productName", formData.productName);
      formDataToSend.append("lengthh", lengthh);
      formDataToSend.append("width", width);
      formDataToSend.append("height", height);
      formDataToSend.append("quantity", quantity);
      formDataToSend.append("material", formData.material || "");
      formDataToSend.append(
        "finishes",
        JSON.stringify(formData.finishes || [])
      );
      formDataToSend.append("extra", JSON.stringify(formData.extra || []));
      formDataToSend.append("note", formData.note || "");
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      formDataToSend.append("phone", phone);

      // Append the file if present
      if (formData.artwork) {
        formDataToSend.append("artwork", formData.artwork);
        formDataToSend.append("artworkName", formData.artwork.name);
      }

      // Make API call
      const res = await fetch(
        `${import.meta.env.VITE_Backend_URL}/quotation-email`,
        {
          method: "POST",
          body: formDataToSend, // FormData automatically sets the appropriate headers for multipart data
        }
      );

      if (res.ok) {
        toast.success("Your quotation email has been sent successfully.", {
          position: "top-center",
        });
        // Reset the form after successful submission
        setFormData({
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
        });
      } else {
        toast.error(
          "An error occurred while sending your email. Please try again.",
          {
            position: "top-center",
          }
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "An error occurred while sending your email. Please try again.",
        {
          position: "top-center",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePdfDownload = () => {
    setIsLoading(true);
    const userHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quotation Request - Print360</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>
          @page {
            margin: 0;
            size: A4;
          }
          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            color: #434343;
            line-height: 1.6;
          }
          .page {
            page-break-after: always;
            padding: 40px;
            background: linear-gradient(to bottom, #f4f7ff 0%, #ffffff 100%);
            min-height: 100vh;
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
          .images-section {
            margin-top: 20px;
          }
          .main-image-container {
            aspect-ratio: 1 / 1;
            width: 100%;
            max-width: 500px;
            margin: 0 auto 20px;
            border-radius: 10px;
            overflow: hidden;
            background: #f8f9fa;
          }
          .main-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
          .placeholder-image {
            width: 100%;
            height: 100%;
            background: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <!-- First Page - Details -->
        <div class="page">
          <header class="header">
            <div class="logo-section">
              <img src="https://i.postimg.cc/MTpYx13B/logo.png" alt="Logo" height="40px" width="40px" />
              <span class="logo-text">Print360</span>
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
                <div class="detail-label">Dimensions</div>
                <div class="detail-value">${formData.lengthh} x ${
      formData.width
    } x ${formData.height}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Quantity</div>
                <div class="detail-value">${formData.quantity}</div>
              </div>
             
          ${Object.entries(product.dropDownMenu || {})
            .map(
              ([menuName, options]) => `
            <div class="detail-item">
              <div class="detail-label">${menuName}</div>
              <div class="detail-value">
                ${
                  formData.dynamicFields[menuName]?.name
                    ? `${
                        formData.dynamicFields[menuName].name
                      } (+$${formData.dynamicFields[menuName].price.toFixed(
                        2
                      )})`
                    : "N/A"
                }
              </div>
            </div>
          `
            )
            .join("")}

         
          ${Object.entries(product.checkBoxMenu || {})
            .map(
              ([menuName, options]) => `
            <div class="detail-item">
              <div class="detail-label">${menuName}</div>
              <div class="detail-value">
                ${
                  formData.dynamicFields[menuName]?.length
                    ? formData.dynamicFields[menuName]
                        .map(
                          (item) => `${item.name} (+$${item.price.toFixed(2)})`
                        )
                        .join(", ")
                    : "N/A"
                }
              </div>
            </div>
          `
            )
            .join("")}

          <div class="detail-item">
            <div class="detail-label">Estimated Total Price</div>
            <div class="detail-value">$${estimatedPrice.toFixed(2)}</div>
          </div>

            <div class="detail-item">
              <div class="detail-label">Special Notes</div>
              <div class="detail-value">${formData.note || "N/A"}</div>
            </div>
          </main>

          <div class="contact-info">
            Need assistance? Contact us at
            <a href="mailto:Print360Official.help@gmail.com" class="contact-link">
              Print360Official.help@gmail.com
            </a>
          </div>

          <footer class="footer" style="margin-bottom: 200px">
            <p style="font-weight: 600; margin-bottom: 8px;">Print360</p>
            <p style="margin-bottom: 8px;">Noida, Uttar Pradesh 226013</p>
            <p>Copyright © ${new Date().getFullYear()}. All rights reserved.</p>
          </footer>
          
          <div class="page-number">Page 1 of 2</div>
        </div>

        <!-- Second Page - Images -->
        <div class="page">
          <header class="header">
            <div class="logo-section">
              <img src="https://i.postimg.cc/MTpYx13B/logo.png" alt="Logo" height="40px" width="40px"/>
              <span class="logo-text">Print360</span>
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
              <div class="extra-images-grid">
                ${
                  product.extraImages && product.extraImages.length > 0
                    ? product.extraImages
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
                        .join("")
                    : [1, 2, 3, 4]
                        .map(
                          (i) => `
                      <div class="extra-image-container">
                        <div class="placeholder-image">
                          Placeholder ${i}
                        </div>
                      </div>
                    `
                        )
                        .join("")
                }
              </div>
            </div>
          </main>

          <footer class="footer">
            <p style="font-weight: 600; margin-bottom: 8px;">Print360</p>
            <p>Copyright © ${new Date().getFullYear()}. All rights reserved.</p>
          </footer>
          
          <div class="page-number">Page 2 of 2</div>
        </div>
      </body>
    </html>
  `;

    const opt = {
      margin: 0,
      filename: `Print360-Quotation-${formData.productName}-${
        new Date().toISOString().split("T")[0]
      }.pdf`,
      image: {
        type: "jpeg",
        quality: 1,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        allowTaint: true,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
      pagebreak: { mode: "css", before: ".page" },
    };

    // Create a temporary container
    const element = document.createElement("div");
    element.innerHTML = userHtml;
    document.body.appendChild(element);

    // Generate and download PDF
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        document.body.removeChild(element);
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
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-gray-600 dark:text-gray-400">
            <span>Products</span> / <span>{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div
                className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <img
                  src={
                    `/products/${product.mainImage}` ||
                    "/placeholder.svg?height=600&width=600"
                  }
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.extraImages && product.extraImages.length > 0
                  ? product.extraImages.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay={200 * index}
                      >
                        <img
                          src={`/products/${image}`}
                          alt={`Extra view ${index + 1} of ${product.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))
                  : [1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                      >
                        <img
                          src="/placeholder.svg?height=150&width=150"
                          alt={`Placeholder view ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
              </div>
              <div className="grid grid-cols-1">
                <img
                  src={Quote}
                  alt="
              Quotation"
                />
              </div>
            </div>

            {/* Product Form */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 dark:text-white">
                  {product.name}
                </h1>
                <h3 className="text-xl font-medium mb-2 dark:text-white">
                  ${product.basePrice} per unit
                </h3>
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
                <p className="text-gray-600 dark:text-gray-400">
                  {product.description || "No description available."}
                </p>
              </div>

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
                  {product.width && (
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
                  )}
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
                      <div key={menuName} className="space-y-4">
                        <label className="block text-sm font-medium mb-1 dark:text-white capitalize">
                          {menuName} (Optional)
                        </label>
                        <select
                          value={formData.dynamicFields.menuName?.name}
                          
                          
                          
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
                              {option.name} (+${option.price})
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
                        <label className="block text-sm font-medium mb-2 dark:text-white capitalize">
                          {menuName} (Optional)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {options.map((option, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                onChange={(e) =>
                                  handleDynamicCheckboxChange(
                                    menuName,
                                    option,
                                    e.target.checked
                                  )
                                }
                                className="rounded border-gray-300 dark:border-gray-700"
                              />
                              <span className="text-sm dark:text-white">
                                {option.name} (+${option.price})
                              </span>
                            </label>
                          ))}
                        </div>
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
                    Get a Quote{" "}
                    {estimatedPrice
                      ? `Estimated Price ~ $${estimatedPrice}`
                      : ""}
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
            </div>
          </div>
          {/* Related Products */}
          {product.alsoLike && product.alsoLike.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                You may also like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.alsoLike.map((product, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={200 * index}
                  >
                    <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                      <Link to={`../../${product.link}`}>
                        <img
                          src={
                            `/products/${product.image}` ||
                            "/placeholder.svg?height=300&width=300"
                          }
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                    <h3 className="font-medium dark:text-white">
                      {product.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
}
