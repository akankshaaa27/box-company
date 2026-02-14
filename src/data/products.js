export const products = [
    // Printed Corrugated Boxes
    {
        id: 1,
        name: "Printed Laminated Corrugated Box",
        slug: "printed-laminated-corrugated-box",
        category: "Printed",
        price: 55,
        image: "/assets/images/products/printed-laminated.jpg",
        shortDescription: "Premium laminated boxes with high-quality printing.",
        description: "Innovative and visually appealing, our printed laminated corrugated boxes are perfect for high-end retail and gift packaging. Featuring double wall 5-ply construction for superior protection.",
        dimensions: { length: 25, width: 25, height: 25 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            style: "Die Cut",
            surfaceCoating: "Laminated Coating",
            materialThickness: "9 mm"
        },
        features: [
            "High-gloss lamination",
            "Vibrant color reproduction",
            "Moisture resistant surface",
            "Premium unboxing experience"
        ],
        applications: [
            "Gifts & Crafts",
            "Retail products",
            "Luxury packaging",
            "Promotional kits"
        ]
    },
    {
        id: 2,
        name: "7 Ply Printed Corrugated Box",
        slug: "7-ply-printed-corrugated-box",
        category: "Printed",
        price: 20,
        image: "/assets/images/products/7ply-printed.jpg",
        shortDescription: "Heavy-duty 7-ply boxes with custom printing.",
        description: "Designed for maximum strength, our 7-ply printed boxes combine industrial-grade durability with professional branding. Ideal for heavy machinery parts and export goods.",
        dimensions: { length: 45, width: 35, height: 35 },
        specifications: {
            boardGrade: "Triple Wall 7 Ply",
            style: "Regular Slotted Container",
            printing: "Flexographic",
            strength: "High Bursting Factor"
        },
        features: [
            "Extreme stacking strength",
            "Custom branding options",
            "Export quality standards",
            "Shock absorbent layers"
        ],
        applications: [
            "Heavy Machinery",
            "Automotive Parts",
            "Industrial Exports",
            "Large Electronics"
        ]
    },
    {
        id: 3,
        name: "3 Ply Printed Corrugated Box",
        slug: "3-ply-printed-corrugated-box",
        category: "Printed",
        price: 15,
        image: "/assets/images/products/3ply-printed.jpg",
        shortDescription: "Lightweight and cost-effective printed boxes.",
        description: "Our 3-ply boxes are the perfect solution for lightweight shipping needs. Custom printing ensures your brand stays visible throughout the delivery process.",
        dimensions: { length: 20, width: 15, height: 10 },
        specifications: {
            boardGrade: "Single Wall 3 Ply",
            style: "Self-Locking",
            printing: "Offset / Flexo",
            material: "Kraft Liner"
        },
        features: [
            "Eco-friendly materials",
            "Easy to assemble",
            "Cost-effective",
            "Lightweight yet durable"
        ],
        applications: [
            "E-commerce parcels",
            "Cosmetics",
            "Small electronics",
            "Document storage"
        ]
    },
    {
        id: 4,
        name: "Cardboard Printed Corrugated Box",
        slug: "cardboard-printed-corrugated-box",
        category: "Printed",
        price: 35,
        image: "/assets/images/products/cardboard-printed.jpg",
        shortDescription: "Vibrant printed cardboard boxes for retail.",
        description: "High-quality cardboard construction paired with precision printing. These boxes are designed to elevate your brand presence on the shelf while providing reliable structural support.",
        dimensions: { length: 30, width: 22, height: 18 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            printing: "Full Color Offset",
            material: "High-Grade Test Liner",
            finish: "Varnish / Aqueous Coating"
        },
        features: [
            "Photorealistic printing",
            "Rigid cardboard structure",
            "Wide customization range",
            "Easy folding design"
        ],
        applications: [
            "Consumer goods",
            "Footwear",
            "Pharma packaging",
            "Tech accessories"
        ]
    },

    // Plain Corrugated Boxes
    {
        id: 5,
        name: "Double Wall 5 Ply Corrugated Box",
        slug: "double-wall-5-ply-corrugated-box",
        category: "Plain",
        price: 20,
        image: "/assets/images/products/5ply-plain.jpg",
        shortDescription: "Strong double-walled boxes for safe transit.",
        description: "Our plain 5-ply boxes provide an extra layer of protection, making them ideal for shipping goods that require more than just a standard box. High stacking strength for warehouse efficiency.",
        dimensions: { length: 40, width: 30, height: 30 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            style: "Regular Slotted",
            color: "Natural Brown",
            material: "Kraft Paper"
        },
        features: [
            "High load capacity",
            "Consistent dimensions",
            "Tape-friendly surface",
            "Impact resistant"
        ],
        applications: [
            "Household appliances",
            "Online retail",
            "Moving supplies",
            "Wholesale distribution"
        ]
    },
    {
        id: 6,
        name: "Rectangular Brown Corrugated Box",
        slug: "rectangular-brown-corrugated-box",
        category: "Plain",
        price: 28,
        image: "/assets/images/products/rectangular-brown.jpg",
        shortDescription: "Standard rectangular boxes for general purpose.",
        description: "A staple in the packaging industry, our rectangular brown boxes are optimized for shipping efficiency and space management during logistics.",
        dimensions: { length: 45, width: 25, height: 20 },
        specifications: {
            boardGrade: "Single Wall 3 Ply",
            style: "Box with Lid",
            material: "Natural Kraft Liner",
            recyclability: "100%"
        },
        features: [
            "Universal utility",
            "Tear resistant kraft",
            "Secure edge protection",
            "Standard pallet size"
        ],
        applications: [
            "Office archiving",
            "Product storage",
            "Logistics shipping",
            "Retail stock"
        ]
    },
    {
        id: 7,
        name: "Single Wall 3 Ply Vegetable Box",
        slug: "single-wall-3-ply-vegetable-box",
        category: "Plain",
        price: 12,
        image: "/assets/images/products/vegetable-box.jpg",
        shortDescription: "Ventilated boxes for fresh agricultural produce.",
        description: "Lightweight and breathable, these 3-ply boxes are specifically designed for the agriculture industry to maintain produce freshness during transport.",
        dimensions: { length: 40, width: 30, height: 15 },
        specifications: {
            boardGrade: "Single Wall 3 Ply",
            style: "Ventilated Tray",
            material: "Food-Grade Liner",
            strength: "Wet Strength Adhesive"
        },
        features: [
            "Airflow ventilation holes",
            "Stack-safe corners",
            "Safe for direct food contact",
            "Rapid assembly"
        ],
        applications: [
            "Fresh Vegetables",
            "Fruits Export",
            "Greenhouse produce",
            "Farmer markets"
        ]
    },

    // Specialty & Specialty
    {
        id: 8,
        name: "Mono Carton Box",
        slug: "mono-carton-box",
        category: "Specialty",
        price: 8,
        image: "/assets/images/products/mono-carton.jpg",
        shortDescription: "Thin, high-finish cartons for primary packaging.",
        description: "Specialized mono cartons for primary product packaging. These are designed with premium finishes and intricate die-cuts for a high-end consumer unboxing experience.",
        dimensions: { length: 12, width: 8, height: 4 },
        specifications: {
            type: "FBB / Duplex Board",
            gsm: "250-450 GSM",
            finish: "UV Coating / Embossing",
            printing: "Multicolor UV Offset"
        },
        features: [
            "Intricate die-cutting",
            "High aesthetic value",
            "Slim profile",
            "Luxury finishing options"
        ],
        applications: [
            "Pharma Primary Packaging",
            "Cosmetic Units",
            "Personal Care",
            "Luxury Sweets"
        ]
    },
    {
        id: 9,
        name: "Craft Packaging Box",
        slug: "craft-packaging-box",
        category: "Specialty",
        price: 18,
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Eco-friendly craft paper boxes for gifts.",
        description: "Embrace a rustic and organic look with our craft packaging boxes. These are 100% biodegradable and perfect for brands focusing on sustainability and natural products.",
        dimensions: { length: 15, width: 15, height: 15 },
        specifications: {
            material: "Unbleached Craft Paper",
            style: "Square Box",
            locking: "Tuck-in",
            texture: "Organic Fiber Finish"
        },
        features: [
            "100% Biodegradable",
            "Rustic natural look",
            "No chemical bleaching",
            "Compostable"
        ],
        applications: [
            "Organic Skincare",
            "Handmade Crafts",
            "Sustainable Fashion",
            "Eco-gifts"
        ]
    },
    {
        id: 10,
        name: "Wine & Bottle Packaging Box",
        slug: "wine-bottle-packaging-box",
        category: "Specialty",
        price: 45,
        image: "/assets/images/products/wine-box.jpg",
        shortDescription: "Secure bottle transport with internal dividers.",
        description: "Specifically engineered for glass bottle protection. The internal divider system ensures no contact between bottles, preventing breakage during the roughest handling.",
        dimensions: { length: 35, width: 25, height: 35 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            style: "Partitioned Box",
            material: "High-Strength Kraft",
            dividerMaterial: "Scored Sheets"
        },
        features: [
            "Breakage prevention system",
            "Easy carry handles",
            "Reusable design",
            "Impact resistant"
        ],
        applications: [
            "Wine & Spirits",
            "Bottled Beverages",
            "Glass jar sets",
            "Chemical bottles"
        ]
    }
];

export const categories = ["All", "Printed", "Plain", "Specialty"];
