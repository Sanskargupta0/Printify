const Products = [
  {
    id: 1,
    name: "Corrugated boxes",
    link: "category/corrugated-boxes",
    mainImage: "boxes/boxes.png",
    bgRemoveImage: "boxes/boxes-bg.png",
    extraImages: ["gallery/img1.png", "gallery/img2.png"],
    description:
      "Corrugated boxes are used for packaging of various products. These boxes are made up of corrugated paperboard which is made up of three layers of paper. The middle layer is fluted and the outer layers are flat. These boxes are used for packaging of various products like food items, electronics, cosmetics, etc.",
    material: ["Corrugated paperboard", "Rigid paperboard", "Folding carton"],
    finishes: ["Glossy", "Matte", "UV coating", "Lamination"],
    extra: ["Die-cut", "Embossing", "Debossing", "Foil stamping"],
    alsoLike: [
      {
        title: "Flexible Pouches",
        image: "bags/bags.png",
        link: "category/flexible-pouches",
      },
      {
        title: "Labels and Stickers",
        image: "labels/labels.png",
        link: "category/labels-and-stickers",
      },
      {
        title: "Corrugated Boxes",
        image: "boxes/boxes.png",
        link: "category/corrugated-boxes",
      },
    ],
  },
  {
    id: 2,
    name: "Mono Cartons",
    link: "category/mono-cartons",
    mainImage: "roll/roll.png",
    bgRemoveImage: "roll/roll-bg.png",
    extraImages: ["gallery/img3.png", "gallery/img4.png"],
    description:
      "Mono cartons are widely used for retail packaging, offering customized and brand-friendly design options.",
    material: ["Cardboard", "Paperboard"],
    finishes: ["Matte", "Spot UV", "Lamination"],
    extra: ["Embossing", "Foil stamping", "Window patching"],
    alsoLike: [
      {
        title: "Corrugated Boxes",
        image: "boxes/boxes.png",
        link: "category/corrugated-boxes",
      },
      {
        title: "Rigid Gift Boxes",
        image: "gift-Box/gift-Box.png",
        link: "category/rigid-gift-boxes",
      },
      {
        title: "Flexible Pouches",
        image: "bags/bags.png",
        link: "category/flexible-pouches",
      },
    ],
  },
  {
    id: 3,
    name: "Labels and Stickers",
    link: "category/labels-and-stickers",
    mainImage: "labels/labels.png",
    bgRemoveImage: "labels/labels-bg.png",
    extraImages: ["gallery/img5.png", "gallery/img6.png"],
    description:
      "Labels and stickers provide a convenient and efficient way to brand, identify, and enhance your products.",
    material: ["Paper", "Vinyl", "Polyester"],
    finishes: ["Glossy", "Matte", "UV coating"],
    extra: ["Custom shapes", "Waterproof", "Permanent adhesive"],
    alsoLike: [
      {
        title: "Mono Cartons",
        image: "roll/roll.png",
        link: "category/mono-cartons",
      },
      {
        title: "Packaging Tape",
        image: "roll/roll2.png",
        link: "category/packaging-tape",
      },
      {
        title: "Shrink Sleeves",
        image: "gallery/img7.png",
        link: "category/shrink-sleeves",
      },
    ],
  },
  {
    id: 4,
    name: "Packaging Tape",
    link: "category/packaging-tape",
    mainImage: "roll/roll.png",
    bgRemoveImage: "roll/roll-bg.png",
    extraImages: ["gallery/img8.png", "gallery/img9.png"],
    description:
      "Packaging tape offers superior adhesion and is used for sealing boxes, envelopes, and more.",
    material: ["BOPP film", "Acrylic adhesive"],
    finishes: ["Transparent", "Printed", "Colored"],
    extra: ["Custom branding", "Easy tear", "Water-resistant"],
    alsoLike: [
      {
        title: "Corrugated Boxes",
        image: "boxes/boxes.png",
        link: "category/corrugated-boxes",
      },
      {
        title: "Labels and Stickers",
        image: "labels/labels.png",
        link: "category/labels-and-stickers",
      },
      {
        title: "Flexible Pouches",
        image: "bags/bags.png",
        link: "category/flexible-pouches",
      },
    ],
  },
  {
    id: 5,
    name: "Flexible Pouches",
    link: "category/flexible-pouches",
    mainImage: "bags/bags.png",
    bgRemoveImage: "bags/bags-bg.png",
    extraImages: ["gallery/img10.png", "gallery/img11.png"],
    description:
      "Flexible pouches are lightweight and versatile packaging solutions for liquids, powders, and more.",
    material: ["Plastic", "Foil"],
    finishes: ["Glossy", "Matte"],
    extra: ["Reclosable zippers", "Tear notches", "Spout attachments"],
    alsoLike: [
      {
        title: "Mono Cartons",
        image: "roll/roll.png",
        link: "category/mono-cartons",
      },
      {
        title: "Shrink Sleeves",
        image: "gallery/img7.png",
        link: "category/shrink-sleeves",
      },
      {
        title: "Packaging Tape",
        image: "roll/roll.png",
        link: "category/packaging-tape",
      },
    ],
  },
  {
    id: 6,
    name: "Shrink Sleeves",
    link: "category/shrink-sleeves",
    mainImage: "gallery/img7.png",
    bgRemoveImage: "gallery/img8.png",
    extraImages: ["gallery/img9.png", "gallery/img10.png"],
    description:
      "Shrink sleeves offer 360-degree design coverage and can fit a variety of container shapes.",
    material: ["PVC", "PET", "OPS"],
    finishes: ["Glossy", "Matte"],
    extra: ["Tamper-evident", "Full-body coverage", "UV-resistant inks"],
    alsoLike: [
      {
        title: "Flexible Pouches",
        image: "bags/bags.png",
        link: "category/flexible-pouches",
      },
      {
        title: "Labels and Stickers",
        image: "labels/labels.png",
        link: "category/labels-and-stickers",
      },
      {
        title: "Corrugated Boxes",
        image: "boxes/boxes.png",
        link: "category/corrugated-boxes",
      },
    ],
  },
  {
    id: 7,
    name: "Rigid Gift Boxes",
    link: "category/rigid-gift-boxes",
    mainImage: "gift-Box/gift-Box.png",
    bgRemoveImage: "gift-Box/gift-Box-bg.png",
    extraImages: ["gallery/img11.png", "gallery/img1.png"],
    description:
      "Rigid gift boxes offer luxury presentation and protection for high-value items.",
    material: ["Chipboard", "Paper wrap"],
    finishes: ["Matte", "Glossy", "Foil stamping"],
    extra: ["Magnetic closure", "Ribbon ties", "Window cutouts"],
    alsoLike: [
      {
        title: "Mono Cartons",
        image: "roll/roll.png",
        link: "category/mono-cartons",
      },
      {
        title: "Corrugated Boxes",
        image: "boxes/boxes.png",
        link: "category/corrugated-boxes",
      },
      {
        title: "Folding Cartons",
        image: "gallery/img2.png",
        link: "category/folding-cartons",
      },
    ],
  },
];

export default Products;
