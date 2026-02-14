export const products = [
    // Printed Corrugated Boxes
    {
        id: 1,
        name: "Printed Laminated Corrugated Box",
        slug: "printed-laminated-corrugated-box",
        category: "Printed",
        price: 55,
        image: "/assets/images/products/printed-laminated.jpg",
        shortDescription: "Premium high-gloss laminated boxes with vibrant offset printing.",
        description: "Elevate your brand with our premium laminated corrugated boxes. Features a high-gloss finish that protects against moisture while providing a stunning visual appeal for retail and gift packaging.",
        dimensions: { length: 25, width: 25, height: 25 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            style: "Die Cut",
            surfaceCoating: "Laminated Gloss",
            materialThickness: "9 mm"
        },
        features: [
            "Luxury glossy finish",
            "High-definition color printing",
            "Water-resistant outer layer",
            "Superior structural integrity"
        ],
        applications: [
            "Luxury Retail",
            "Gift Sets",
            "Electronic Gadgets",
            "Premium Apparel"
        ]
    },
    {
        id: 2,
        name: "7 Ply Printed Corrugated Box",
        slug: "7-ply-printed-corrugated-box",
        category: "Printed",
        price: 20,
        image: "/assets/images/products/7ply-printed.jpg",
        shortDescription: "Heavy-duty triple-wall 7-ply boxes for maximum industrial protection.",
        description: "Our 7-ply boxes are engineered for the most demanding industrial requirements. Triple-wall construction provides extreme stacking strength, making them ideal for heavy machinery and international exports.",
        dimensions: { length: 45, width: 35, height: 35 },
        specifications: {
            boardGrade: "Triple Wall 7 Ply",
            style: "Heavy Duty RSC",
            printing: "Long-lasting Flexo",
            strength: "Highest Bursting Factor"
        },
        features: [
            "Extreme load capacity",
            "Maximum shock absorption",
            "Export-grade durability",
            "Reinforced corner support"
        ],
        applications: [
            "Heavy Machinery Parts",
            "Automotive Components",
            "Industrial Equipment",
            "Overseas Shipping"
        ]
    },
    {
        id: 3,
        name: "3 Ply Printed Corrugated Box",
        slug: "3-ply-printed-corrugated-box",
        category: "Printed",
        price: 15,
        image: "/assets/images/products/3ply-printed.jpg",
        shortDescription: "Cost-effective 3-ply boxes optimized for e-commerce and retail.",
        description: "Perfect for lightweight shipping, our 3-ply printed boxes offer a balance of protection and speed. Specifically designed for high-volume e-commerce businesses needing consistent branding.",
        dimensions: { length: 20, width: 15, height: 10 },
        specifications: {
            boardGrade: "Single Wall 3 Ply",
            style: "Self-Locking Folder",
            printing: "High-Speed Flexo",
            material: "Virgin Kraft Liner"
        },
        features: [
            "Lightweight & Eco-friendly",
            "Fast assembly design",
            "Reliable tape adhesion",
            "Smooth printing surface"
        ],
        applications: [
            "E-commerce Logistics",
            "Books & Media",
            "Cosmetic Products",
            "Small Tech Accessories"
        ]
    },
    {
        id: 4,
        name: "Cardboard Printed Corrugated Box",
        slug: "cardboard-printed-corrugated-box",
        category: "Printed",
        price: 35,
        image: "/assets/images/products/cardboard-printed.jpg",
        shortDescription: "High-finish cardboard boxes with custom branding.",
        description: "Our printed cardboard boxes are designed to be a extension of your marketing. With crisp edge-to-edge printing, these boxes ensure your product stands out the moment it arrives at the customer's door.",
        dimensions: { length: 30, width: 22, height: 18 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            printing: "4-Color Offset",
            material: "White Top Liner",
            finish: "Semi-Matte Aqueous"
        },
        features: [
            "Precision die-cutting",
            "Vivid brand colors",
            "Moisture resistant coating",
            "Rigid structural design"
        ],
        applications: [
            "Subscription Boxes",
            "Brand Showcasing",
            "Footwear Packaging",
            "Consumer Goods"
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
        shortDescription: "Industrial-grade 5-ply boxes for safe warehousing.",
        description: "Standard industrial boxes providing superior protection for medium-weight goods. Our 5-ply natural brown boxes are a staples in warehouses across India for their reliability and stacking strength.",
        dimensions: { length: 40, width: 30, height: 30 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            style: "Regular Slotted",
            color: "Natural Industrial Brown",
            material: "Recycled Kraft"
        },
        features: [
            "Consistent structural strength",
            "Tear-resistant edges",
            "Standard pallet size",
            "Bulk handling durability"
        ],
        applications: [
            "FMCG Logistics",
            "Warehousing",
            "Wholesale shipping",
            "Moving & Storage"
        ]
    },
    {
        id: 6,
        name: "Rectangular Brown Corrugated Box",
        slug: "rectangular-brown-corrugated-box",
        category: "Plain",
        price: 28,
        image: "/assets/images/products/rectangular-brown.jpg",
        shortDescription: "Standard brown boxes for everyday storage needs.",
        description: "Versatile rectangular boxes for general storage and distribution. Made from high-quality natural kraft paper, these boxes offer high friction for stable stacking during transit.",
        dimensions: { length: 45, width: 25, height: 20 },
        specifications: {
            boardGrade: "Single Wall 3 Ply",
            style: "Folder Type",
            material: "High-Strength Liner",
            recyclability: "100% Eco-Friendly"
        },
        features: [
            "Pure eco-friendly material",
            "Easy flat storage",
            "Cost-efficient solution",
            "Impact resistant fluting"
        ],
        applications: [
            "Document Management",
            "Home Storage",
            "Office Supply",
            "Light Retail stock"
        ]
    },
    {
        id: 7,
        name: "Single Wall 3 Ply Vegetable Box",
        slug: "single-wall-3-ply-vegetable-box",
        category: "Plain",
        price: 12,
        image: "/assets/images/products/vegetable-box.jpg",
        shortDescription: "Ventilated trays for fresh agricultural transport.",
        description: "Specifically designed for the agriculture sector, these ventilated 3-ply trays allow for air circulation, preventing moisture buildup and keeping produce fresh from farm to market.",
        dimensions: { length: 40, width: 30, height: 15 },
        specifications: {
            boardGrade: "Single Wall 3 Ply",
            style: "Ventilated Tray",
            material: "Food-Safe Liner",
            strength: "Wet-Strength Adhesive"
        },
        features: [
            "Airflow circulation holes",
            "Reinforced base for heavy loads",
            "Stack-safe tray design",
            "Completely biodegradable"
        ],
        applications: [
            "Farm Fresh Produce",
            "Cold Storage Transport",
            "Fruit Exports",
            "Wholesale Markets"
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
        shortDescription: "Thin, premium finish cartons for primary packaging.",
        description: "Precision-engineered mono cartons for the pharmaceutical and cosmetic industries. Features clean die-cutting and high-end surface finishes for a professional retail presentation.",
        dimensions: { length: 12, width: 8, height: 4 },
        specifications: {
            type: "Duplex / FBB Board",
            gsm: "300-400 GSM",
            finish: "UV Drip / Spot Coating",
            printing: "High-Precision Offset"
        },
        features: [
            "Precision folding lines",
            "High print resolution",
            "Variety of coating options",
            "Efficient automated packing"
        ],
        applications: [
            "Pharmaceutical Units",
            "Cosmetic Packaging",
            "Healthcare Products",
            "Confectionery"
        ]
    },
    {
        id: 9,
        name: "Craft Packaging Box",
        slug: "craft-packaging-box",
        category: "Specialty",
        price: 18,
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Sustainable rustic craft paper boxes for eco-conscious brands.",
        description: "Capture an organic feel with our kraft packaging boxes. Made from 100% unbleached natural fibers, these boxes are perfect for brands prioritizing sustainability and a 'handmade' aesthetic.",
        dimensions: { length: 15, width: 15, height: 15 },
        specifications: {
            material: "Natural Unbleached Craft",
            style: "Square Folder",
            locking: "Secure Tuck-in",
            texture: "Raw Fiber Finish"
        },
        features: [
            "Completely compostable",
            "Unique organic texture",
            "No chemical bleach",
            "Strong structural design"
        ],
        applications: [
            "Organic Skincare",
            "Eco-Gifts",
            "Sustainable Fashion",
            "Handcrafted Jewelry"
        ]
    },
    {
        id: 10,
        name: "Wine & Bottle Packaging Box",
        slug: "wine-bottle-packaging-box",
        category: "Specialty",
        price: 45,
        image: "/assets/images/products/wine-box.jpg",
        shortDescription: "Secure bottle shippers with internal protective dividers.",
        description: "Engineered for the safest transport of glass bottles. Our wine boxes feature a scoring-sheet partition system that locks each bottle in place, minimizing the risk of breakage during shipping.",
        dimensions: { length: 35, width: 25, height: 35 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            style: "Partitioned Shipper",
            material: "Heavy-Duty Craft",
            dividerMaterial: "Multi-layered Scored Sheets"
        },
        features: [
            "Advanced impact protection",
            "Interlocking dividers",
            "Reinforced handle cut-outs",
            "Moisture resistant base"
        ],
        applications: [
            "Wine & Spirits Units",
            "Craft Beer Packs",
            "Gourmet Glass Jars",
            "Premium Vinegars"
        ]
    }
];

export const categories = ["All", "Printed", "Plain", "Specialty"];
