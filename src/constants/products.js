const Products = [
  {
    id: 1,
    name: "Corrugated boxes/Shipper Boxes",
    type: "Commercial Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    height: true,
    minimumQuantity: 100,
    link: "category/corrugated-boxes",
    mainImage: "boxes/boxes.png",
    bgRemoveImage: "boxes/boxes-bg.png",
    extraImages: ["gallery/img1.png", "gallery/img2.png"],
    description:
      "Corrugated boxes are used for packaging of various products. These boxes are made up of corrugated paperboard which is made up of three layers of paper. The middle layer is fluted and the outer layers are flat. These boxes are used for packaging of various products like food items, electronics, cosmetics, etc.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "Corrugated paperboard", price: 0.5 },
        { name: "Rigid paperboard", price: 0.6 },
        { name: "Folding carton", price: 0.7 },
      ],
      finishes: [
        { name: "Glossy", price: 0.5 },
        { name: "Matte", price: 0.6 },
        { name: "UV coating", price: 0.7 },
        { name: "Lamination", price: 0.8 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Die-cut", price: 0.5 },
        { name: "Embossing", price: 0.6 },
        { name: "Debossing", price: 0.7 },
        { name: "Foil stamping", price: 0.8 },
      ],
    },
    alsoLike: [
      {
        title: "Tapes",
        image: "roll/tape.png",
        link: "category/tapes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Mono Cartons",
        image: "roll/roll.png",
        link: "category/printed-mono-cartons",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
  {
    id: 2,
    name: "Tapes",
    type: "Commercial Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    link: "category/tapes",
    mainImage: "roll/tape.png",
    bgRemoveImage: "roll/tape.png",
    extraImages: ["gallery/img8.png", "gallery/img9.png"],
    description:
      "Packaging tape offers superior adhesion and is used for sealing boxes, envelopes, and more.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "BOPP film", price: 0.5 },
        { name: "Acrylic adhesive", price: 0.6 },
      ],
      finishes: [
        { name: "Transparent", price: 0.5 },
        { name: "Printed", price: 0.6 },
        { name: "Colored", price: 0.7 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Custom branding", price: 0.4 },
        { name: "Easy tear", price: 0.5 },
        { name: "Water-resistant", price: 0.6 },
      ],
    },
    alsoLike: [
      {
        title: "Corrugated boxes/Shipper Boxes",
        image: "boxes/boxes.png",
        link: "category/corrugated-boxes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Tapes",
        image: "roll/tape.png",
        link: "category/printed-tapes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
  {
    id: 3,
    name: "Printed Corrugated boxes/Shipper boxes",
    type: "Customised Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    height: true,
    minimumQuantity: 100,
    link: "category/printed-corrugated-boxes",
    mainImage: "boxes/boxes.png",
    bgRemoveImage: "boxes/boxes-bg.png",
    extraImages: ["gallery/img1.png", "gallery/img2.png"],
    description:
      "Printed corrugated boxes are used for packaging of various products with custom branding and designs. These boxes are made up of corrugated paperboard which is made up of three layers of paper. The middle layer is fluted and the outer layers are flat. These boxes are used for packaging of various products like food items, electronics, cosmetics, etc.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "Corrugated paperboard", price: 0.5 },
        { name: "Rigid paperboard", price: 0.6 },
        { name: "Folding carton", price: 0.7 },
      ],
      finishes: [
        { name: "Glossy", price: 0.5 },
        { name: "Matte", price: 0.6 },
        { name: "UV coating", price: 0.7 },
        { name: "Lamination", price: 0.8 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Die-cut", price: 0.5 },
        { name: "Embossing", price: 0.6 },
        { name: "Debossing", price: 0.7 },
        { name: "Foil stamping", price: 0.8 },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "roll/roll.png",
        link: "category/printed-mono-cartons",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Rigid Gift Boxes",
        image: "gift-Box/gift-Box.png",
        link: "category/printed-rigid-gift-boxes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
  {
    id: 4,
    name: "Printed Mono Cartons",
    type: "Customised Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    link: "category/printed-mono-cartons",
    mainImage: "roll/roll.png",
    bgRemoveImage: "roll/roll-bg.png",
    extraImages: ["gallery/img3.png", "gallery/img4.png"],
    description:
      "Printed mono cartons are widely used for retail packaging, offering customized and brand-friendly design options with high-quality printing.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "Cardboard", price: 0.5 },
        { name: "Paperboard", price: 0.6 },
      ],
      finishes: [
        { name: "Matte", price: 0.5 },
        { name: "Spot UV", price: 0.6 },
        { name: "Lamination", price: 0.7 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Embossing", price: 0.5 },
        { name: "Foil stamping", price: 0.6 },
        { name: "Window patching", price: 0.7 },
      ],
    },
    alsoLike: [
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Rigid Gift Boxes",
        image: "gift-Box/gift-Box.png",
        link: "category/printed-rigid-gift-boxes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Flexible Pouches/Myler Bags",
        image: "bags/bags.png",
        link: "category/printed-flexible-pouches",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
  {
    id: 5,
    name: "Printed Labels",
    type: "Customised Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    link: "category/printed-labels",
    mainImage: "labels/labels.png",
    bgRemoveImage: "labels/labels-bg.png",
    extraImages: ["gallery/img5.png", "gallery/img6.png"],
    description:
      "Printed labels and stickers provide a convenient and efficient way to brand, identify, and enhance your products with custom designs and high-quality printing.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "Paper", price: 0.4 },
        { name: "Vinyl", price: 0.5 },
        { name: "Polyester", price: 0.6 },
      ],
      finishes: [
        { name: "Glossy", price: 0.5 },
        { name: "Matte", price: 0.6 },
        { name: "UV coating", price: 0.7 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Custom shapes", price: 0.4 },
        { name: "Waterproof", price: 0.5 },
        { name: "Permanent adhesive", price: 0.6 },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "roll/roll.png",
        link: "category/printed-mono-cartons",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Tapes",
        image: "roll/tape.png",
        link: "category/printed-tapes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Shrink Sleeves",
        image: "gallery/img7.png",
        link: "category/printed-shrink-sleeves",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
  {
    id: 6,
    name: "Printed Flexible Pouches/Myler Bags",
    type: "Customised Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    link: "category/printed-flexible-pouches",
    mainImage: "bags/bags.png",
    bgRemoveImage: "bags/bags-bg.png",
    extraImages: ["gallery/img10.png", "gallery/img11.png"],
    description:
      "Printed flexible pouches and myler bags are lightweight and versatile packaging solutions for liquids, powders, and more with custom branding and high-quality printing.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "Plastic", price: 0.5 },
        { name: "Foil", price: 0.6 },
      ],
      finishes: [
        { name: "Glossy", price: 0.5 },
        { name: "Matte", price: 0.6 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Reclosable zippers", price: 0.4 },
        { name: "Tear notches", price: 0.5 },
        { name: "Spout attachments", price: 0.6 },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "roll/roll.png",
        link: "category/printed-mono-cartons",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Shrink Sleeves",
        image: "gallery/img7.png",
        link: "category/printed-shrink-sleeves",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Tapes",
        image: "roll/tape.png",
        link: "category/printed-tapes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
  {
    id: 7,
    name: "Printed Tapes",
    type: "Customised Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    link: "category/printed-tapes",
    mainImage: "roll/tape.png",
    bgRemoveImage: "roll/tape.png",
    extraImages: ["gallery/img8.png", "gallery/img9.png"],
    description:
      "Printed packaging tape offers superior adhesion and is used for sealing boxes, envelopes, and more with custom branding and high-quality printing.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "BOPP film", price: 0.5 },
        { name: "Acrylic adhesive", price: 0.6 },
      ],
      finishes: [
        { name: "Transparent", price: 0.5 },
        { name: "Printed", price: 0.6 },
        { name: "Colored", price: 0.7 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Custom branding", price: 0.4 },
        { name: "Easy tear", price: 0.5 },
        { name: "Water-resistant", price: 0.6 },
      ],
    },
    alsoLike: [
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Flexible Pouches/Myler Bags",
        image: "bags/bags.png",
        link: "category/printed-flexible-pouches",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
  {
    id: 8,
    name: "Printed Rigid Gift Boxes",
    type: "Customised Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    height: true,
    link: "category/printed-rigid-gift-boxes",
    mainImage: "gift-Box/gift-Box.png",
    bgRemoveImage: "gift-Box/gift-Box-bg.jpg",
    extraImages: ["gallery/img11.png", "gallery/img1.png"],
    description:
      "Printed rigid gift boxes offer luxury presentation and protection for high-value items with custom branding and high-quality printing.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "Cardboard", price: 0.5 },
        { name: "Paperboard", price: 0.6 },
      ],
      finishes: [
        { name: "Glossy", price: 0.5 },
        { name: "Matte", price: 0.6 },
        { name: "UV coating", price: 0.7 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Embossing", price: 0.5 },
        { name: "Foil stamping", price: 0.6 },
        { name: "Magnetic closure", price: 0.7 },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "roll/roll.png",
        link: "category/printed-mono-cartons",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Shrink Sleeves",
        image: "gallery/img7.png",
        link: "category/printed-shrink-sleeves",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
  {
    id: 9,
    name: "Printed Shrink Sleeves",
    type: "Customised Packaging",
    basePrice: 0.5,
    currentPrice: 2000,
    originalPrice: 3000,
    link: "category/printed-shrink-sleeves",
    mainImage: "gallery/img7.png",
    bgRemoveImage: "gallery/Picture5.jpg",
    extraImages: ["gallery/img9.png", "gallery/img10.png"],
    description:
      "Printed shrink sleeves offer 360-degree design coverage and can fit a variety of container shapes with custom branding and high-quality printing.",
    features: [
      {
        title: "Premium Quality Materials",
        description:
          "Crafted from high-grade, eco-friendly materials that ensure your items are beautifully presented and well-protected.",
      },
      {
        title: "Elegant, Versatile Design",
        description:
          "Each box features a sleek, stylish design—perfect for birthdays, holidays, or any special occasion, no additional wrapping needed.",
      },
      {
        title: "Customization Options",
        description:
          "Choose from a variety of sizes, colors, and finishes—or add a personalized message or logo to make your packaging truly unique.",
      },
      {
        title: "Hassle-Free Assembly",
        description:
          "Our gift boxes are easy to assemble and secure, with magnetic closures, ribbons, or fold-flat options for convenient storage and shipping.",
      },
      {
        title: "Eco-Conscious Packaging",
        description:
          "We prioritize sustainability with recyclable and reusable materials, so you can feel good about your environmental impact without compromising on style.",
      },
    ],
    dropDownMenu: {
      material: [
        { name: "PVC", price: 0.5 },
        { name: "PET", price: 0.6 },
        { name: "OPS", price: 0.7 },
      ],
      finishes: [
        { name: "Glossy", price: 0.5 },
        { name: "Matte", price: 0.6 },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Tamper-evident", price: 0.5 },
        { name: "Full-body coverage", price: 0.6 },
        { name: "UV-resistant inks", price: 0.7 },
      ],
    },
    alsoLike: [
      {
        title: "Printed Flexible Pouches/Myler Bags",
        image: "bags/bags.png",
        link: "category/printed-flexible-pouches",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
        currentPrice: 2000,
        originalPrice: 3000,
      },
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
        currentPrice: 2000,
        originalPrice: 3000,
      },
    ],
  },
];

export default Products;