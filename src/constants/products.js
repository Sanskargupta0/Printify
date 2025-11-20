const Products = [
  {
    id: 1,
    name: "Corrugated boxes/Shipper Boxes",
    type: "Commercial Packaging",
    height: true,
    minimumQuantity: 100,
    link: "category/corrugated-boxes",
    mainImage: "boxes/boxes.png",
    bgRemoveImage: "boxes/boxes-bg.png",
    extraImages: ["gallery/img12.png", "gallery/img13.png"],
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
        { name: "Corrugated paperboard" },
        { name: "Rigid paperboard" },
        { name: "Folding carton" },
      ],
      finishes: [
        { name: "Glossy" },
        { name: "Matte" },
        { name: "UV coating" },
        { name: "Lamination" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Die-cut" },
        { name: "Embossing" },
        { name: "Debossing" },
        { name: "Foil stamping" },
      ],
    },
    alsoLike: [
      {
        title: "Tapes",
        image: "roll/tape.png",
        link: "category/tapes",
      },
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
      },
      {
        title: "Printed Mono Cartons",
        image: "cartons/cartons.png",
        link: "category/printed-mono-cartons",
      },
    ],
  },
  {
    id: 2,
    name: "Tapes",
    type: "Commercial Packaging",
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
        { name: "BOPP film" },
        { name: "Acrylic adhesive" },
      ],
      finishes: [
        { name: "Transparent" },
        { name: "Printed" },
        { name: "Colored" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Custom branding" },
        { name: "Easy tear" },
        { name: "Water-resistant" },
      ],
    },
    alsoLike: [
      {
        title: "Corrugated boxes/Shipper Boxes",
        image: "boxes/boxes.png",
        link: "category/corrugated-boxes",
      },
      {
        title: "Printed Tapes",
        image: "tape/tape.png",
        link: "category/printed-tapes",
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
      },
    ],
  },
  {
    id: 3,
    name: "Printed Corrugated boxes/Shipper boxes",
    type: "Customised Packaging",
    height: true,
    minimumQuantity: 100,
    link: "category/printed-corrugated-boxes",
    mainImage: "boxes/boxes2.png",
    bgRemoveImage: "boxes/boxes-bg.png",
    extraImages: ["gallery/img15.png", "gallery/img16.png"],
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
        { name: "Corrugated paperboard" },
        { name: "Rigid paperboard" },
        { name: "Folding carton" },
      ],
      finishes: [
        { name: "Glossy" },
        { name: "Matte" },
        { name: "UV coating" },
        { name: "Lamination" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Die-cut" },
        { name: "Embossing" },
        { name: "Debossing" },
        { name: "Foil stamping" },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "cartons/cartons.png",
        link: "category/printed-mono-cartons",
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
      },
      {
        title: "Printed Rigid Gift Boxes",
        image: "gift-Box/gift-Box.png",
        link: "category/printed-rigid-gift-boxes",
      },
    ],
  },
  {
    id: 4,
    name: "Printed Mono Cartons",
    type: "Customised Packaging",
    link: "category/printed-mono-cartons",
    mainImage: "cartons/cartons.png",
    bgRemoveImage: "cartons/cartons.png",
    extraImages: ["gallery/img17.png", "gallery/img18.png"],
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
        { name: "Cardboard" },
        { name: "Paperboard" },
      ],
      finishes: [
        { name: "Matte" },
        { name: "Spot UV" },
        { name: "Lamination" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Embossing" },
        { name: "Foil stamping" },
        { name: "Window patching" },
      ],
    },
    alsoLike: [
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
      },
      {
        title: "Printed Rigid Gift Boxes",
        image: "gift-Box/gift-Box.png",
        link: "category/printed-rigid-gift-boxes",
      },
      {
        title: "Printed Flexible Pouches/Myler Bags",
        image: "bags/bags.png",
        link: "category/printed-flexible-pouches",
      },
    ],
  },
  {
    id: 5,
    name: "Printed Labels",
    type: "Customised Packaging",
    link: "category/printed-labels",
    mainImage: "labels/labels.png",
    bgRemoveImage: "labels/labels.png",
    extraImages: ["gallery/img19.png", "gallery/img20.png"],
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
        { name: "Paper" },
        { name: "Vinyl" },
        { name: "Polyester" },
      ],
      finishes: [
        { name: "Glossy" },
        { name: "Matte" },
        { name: "UV coating" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Custom shapes" },
        { name: "Waterproof" },
        { name: "Permanent adhesive" },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "cartons/cartons.png",
        link: "category/printed-mono-cartons",
      },
      {
        title: "Printed Tapes",
        image: "tape/tape.png",
        link: "category/printed-tapes",
      },
      {
        title: "Printed Shrink Sleeves",
        image: "sleeves/sleeves.png",
        link: "category/printed-shrink-sleeves",
      },
    ],
  },
  {
    id: 6,
    name: "Printed Flexible Pouches/Myler Bags",
    type: "Customised Packaging",
    link: "category/printed-flexible-pouches",
    mainImage: "bags/bags.png",
    bgRemoveImage: "bags/bags.png",
    extraImages: ["gallery/img21.png", "gallery/img22.png"],
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
        { name: "Plastic" },
        { name: "Foil" },
      ],
      finishes: [
        { name: "Glossy" },
        { name: "Matte" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Reclosable zippers" },
        { name: "Tear notches" },
        { name: "Spout attachments" },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "cartons/cartons.png",
        link: "category/printed-mono-cartons",
      },
      {
        title: "Printed Shrink Sleeves",
        image: "sleeves/sleeves.png",
        link: "category/printed-shrink-sleeves",
      },
      {
        title: "Printed Tapes",
        image: "tape/tape.png",
        link: "category/printed-tapes",
      },
    ],
  },
  {
    id: 7,
    name: "Printed Tapes",
    type: "Customised Packaging",
    link: "category/printed-tapes",
    mainImage: "tape/tape.png",
    bgRemoveImage: "tape/tape.png",
    extraImages: ["gallery/img23.png", "gallery/img24.png"],
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
        { name: "BOPP film" },
        { name: "Acrylic adhesive" },
      ],
      finishes: [
        { name: "Transparent" },
        { name: "Printed" },
        { name: "Colored" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Custom branding" },
        { name: "Easy tear" },
        { name: "Water-resistant" },
      ],
    },
    alsoLike: [
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
      },
      {
        title: "Printed Flexible Pouches/Myler Bags",
        image: "bags/bags.png",
        link: "category/printed-flexible-pouches",
      },
    ],
  },
  {
    id: 8,
    name: "Printed Rigid Gift Boxes",
    type: "Customised Packaging",
    height: true,
    link: "category/printed-rigid-gift-boxes",
    mainImage: "gift-Box/gift-Box.png",
    bgRemoveImage: "gift-Box/gift-Box-bg.jpg",
    extraImages: ["gallery/img25.png", "gallery/img26.png"],
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
        { name: "Cardboard" },
        { name: "Paperboard" },
      ],
      finishes: [
        { name: "Glossy" },
        { name: "Matte" },
        { name: "UV coating" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Embossing" },
        { name: "Foil stamping" },
        { name: "Magnetic closure" },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "cartons/cartons.png",
        link: "category/printed-mono-cartons",
      },
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
      },
      {
        title: "Printed Shrink Sleeves",
        image: "sleeves/sleeves.png",
        link: "category/printed-shrink-sleeves",
      },
    ],
  },
  {
    id: 9,
    name: "Printed Shrink Sleeves",
    type: "Customised Packaging",
    link: "category/printed-shrink-sleeves",
    mainImage: "sleeves/sleeves.png",
    bgRemoveImage: "sleeves/sleeves.jpg",
    extraImages: ["gallery/img27.png", "gallery/img28.png"],
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
        { name: "PVC" },
        { name: "PET" },
        { name: "OPS" },
      ],
      finishes: [
        { name: "Glossy" },
        { name: "Matte" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Tamper-evident" },
        { name: "Full-body coverage" },
        { name: "UV-resistant inks" },
      ],
    },
    alsoLike: [
      {
        title: "Printed Flexible Pouches/Myler Bags",
        image: "bags/bags.png",
        link: "category/printed-flexible-pouches",
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
      },
      {
        title: "Printed Corrugated boxes/Shipper boxes",
        image: "boxes/boxes.png",
        link: "category/printed-corrugated-boxes",
      },
    ],
  },
  {
    id: 10,
    name: "Printed paper bags",
    type: "Customised Packaging",
    link: "category/printed-paper-bags",
    mainImage: "paper-bags/paper-bags.png",
    bgRemoveImage: "paper-bags/paper-bags.jpg",
    extraImages: ["gallery/img29.png", "gallery/img30.png"],
    description:
      "Printed paper bags are eco-friendly and customizable packaging solutions for retail, events, and more with high-quality printing.",
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
        { name: "Kraft paper" },
        { name: "Art paper" },
      ],
      finishes: [
        { name: "Glossy" },
        { name: "Matte" },
      ],
    },
    checkBoxMenu: {
      extra: [
        { name: "Custom handles" },
        { name: "Reinforced bottom" },
        { name: "Water-resistant coating" },
      ],
    },
    alsoLike: [
      {
        title: "Printed Mono Cartons",
        image: "roll/roll.png",
        link: "category/printed-mono-cartons",
      },
      {
        title: "Printed Labels",
        image: "labels/labels.png",
        link: "category/printed-labels",
      },
      {
        title: "Printed Tapes",
        image: "roll/tape.png",
        link: "category/printed-tapes",
      },
    ],
  },
];

export default Products;
