export const products = [
    // Printed Corrugated Boxes
    {
        id: 1,
        name: "Printed Laminated Corrugated Box",
        slug: "printed-laminated-corrugated-box",
        category: "Printed",
        price: 55,
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Premium high-gloss laminated boxes with vibrant offset printing.",
        description: "Our premium laminated corrugated boxes feature a high-gloss finish that protects against moisture while providing a stunning visual appeal. These are pure, high-quality boxes designed for high-end retail and gift packaging.",
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
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Heavy-duty triple-wall 7-ply boxes for maximum industrial protection.",
        description: "Engineered for extreme strength, this 7-ply box features triple-wall construction. It is strictly designed for heavy industrial use, machinery parts, and export shipping where maximum protection is required.",
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
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "3-ply boxes optimized for e-commerce and retail shipping.",
        description: "Perfect for lightweight shipping, these 3-ply boxes offer professional branding with recycled, eco-friendly cardboard. Ideal for high-volume e-commerce businesses needing a clean look.",
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
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "High-finish cardboard boxes with custom branding.",
        description: "Professional printed cardboard boxes featuring crisp edge-to-edge branding. These boxes are designed to elevate your brand presence during the unboxing experience.",
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
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Industrial-grade 5-ply boxes for safe warehousing.",
        description: "Our standard 5-ply boxes provide superior protection for medium-weight goods. These are pure brown corrugated boxes with high stacking strength and tear-resistant edges.",
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
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Standard brown boxes for everyday storage needs.",
        description: "Versatile rectangular boxes made from high-quality natural kraft paper. These boxes offer a clean, professional look for storage, archiving, and light shipping.",
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
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Ventilated trays for fresh agricultural transport.",
        description: "Specially designed ventilated trays for the agriculture sector. These corrugated boxes allow for air circulation to keep produce fresh during transit from farm to market.",
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
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Thin, premium finish cartons for primary packaging.",
        description: "Clean, high-finish mono cartons for pharmaceutical and cosmetic products. These are precision-engineered boxes with sharp edges and premium retail presentation.",
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
        shortDescription: "Sustainable rustic craft paper boxes.",
        description: "Our craft packaging boxes provide a raw, organic feel. Made from 100% natural fibers, these boxes are strictly product-focused for eco-conscious brands.",
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
        image: "/assets/images/products/craft-box.jpg",
        shortDescription: "Secure bottle shippers with protective dividers.",
        description: "Professional wine bottle boxes features internal protective dividers. These boxes are strictly engineered to prevent breakage during glass bottle transportation.",
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
