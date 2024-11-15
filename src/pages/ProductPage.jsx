import { useState } from "react";
import { FiUpload, FiStar, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import  Quote from "../assets/website/Quote.png";

export default function ProductPage({ product }) {
  // Default form state
  const [formData, setFormData] = useState({
    length: "",
    width: "",
    height: "",
    quantity: "",
    direction: "",
    material: "",
    finishes: [],
    extra: [],
    note: "",
    artwork: null,
    name: "",
    email: "",
    phone: "",
  });

  // Input handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        [name]: [...prev[name], value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: prev[name].filter((item) => item !== value),
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      artwork: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
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
                  `src/assets/products/${product.mainImage}`
                   || "/placeholder.svg?height=600&width=600"
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
                        src={`src/assets/products/${image}`}
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
              <img src={Quote} alt="
              Quotation" />
            </div>
          </div>

          {/* Product Form */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2 dark:text-white">
                {product.name}
              </h1>
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} className="text-yellow-400 fill-current" />
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
                    name="length"
                    min={0}
                    value={formData.length}
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

              {/* Material Selection (conditionally rendered) */}
              {product.material && product.material.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-1 dark:text-white">
                    Material
                  </label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select Material</option>
                    {product.material.map((material) => (
                      <option key={material} value={material}>
                        {material}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Finishes (conditionally rendered) */}
              {product.finishes && product.finishes.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Finishes
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.finishes.map((finish) => (
                      <label
                        key={finish}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          name="finishes"
                          value={finish}
                          onChange={handleCheckboxChange}
                          className="rounded border-gray-300 dark:border-gray-700"
                        />
                        <span className="text-sm dark:text-white">
                          {finish}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra Finishes (conditionally rendered) */}
              {product.extra && product.extra.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Extra Finishes
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.extra.map((finish) => (
                      <label
                        key={finish}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          name="extra"
                          value={finish}
                          onChange={handleCheckboxChange}
                          className="rounded border-gray-300 dark:border-gray-700"
                        />
                        <span className="text-sm dark:text-white">
                          {finish}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">
                  Additional Notes
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                ></textarea>
              </div>

              {/* Artwork Upload */}
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
                  className="px-6 py-3 border rounded-lg dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <FiShare2 className="w-5 h-5" />
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
                <div key={index} className="group cursor-pointer" data-aos="fade-up"
                data-aos-delay={200*index}>
                  <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                    <Link to={product.link}>
                      <img
                        src={
                          `src/assets/products/${product.image}`
                           || "/placeholder.svg?height=300&width=300"
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
  );
}
