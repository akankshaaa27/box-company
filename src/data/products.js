export const products = [
    // Printed Corrugated Boxes
    {
        id: 1,
        name: "Printed Laminated Corrugated Box",
        slug: "printed-laminated-corrugated-box",
        category: "Printed",
        price: 55,
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
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
        name: "Brown Corrugated Paper Packaging Box",
        slug: "brown-corrugated-paper-packaging-box",
        category: "Printed",
        price: 25,
        image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Standard brown boxes for diverse packaging needs.",
        description: "Versatile and reliable, these brown paper packaging boxes are suitable for a wide range of industrial and commercial applications. High-quality kraft paper ensures protection.",
        dimensions: { length: 30, width: 25, height: 20 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            style: "Universal",
            material: "Recycled Kraft",
            finish: "Natural Brown"
        },
        features: [
            "100% Recyclable",
            "Sturdy construction",
            "Available in bulk",
            "Secure locking"
        ],
        applications: [
            "Storage & Moving",
            "Logistics",
            "FMCG products",
            "Office supplies"
        ]
    },

    // Plain Corrugated Boxes
    {
        id: 5,
        name: "Double Wall 5 Ply Corrugated Box",
        slug: "double-wall-5-ply-corrugated-box",
        category: "Plain",
        price: 20,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
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
        name: "Plain Corrugated Carton Box",
        slug: "plain-corrugated-carton-box",
        category: "Plain",
        price: 45,
        image: "https://images.unsplash.com/photo-1599700403969-fbc08c287410?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Simple and reliable plain carton boxes.",
        description: "Perfect for everyday shipping and storage. These plain cartons are easy to label and seal, providing a professional look at an affordable price.",
        dimensions: { length: 50, width: 40, height: 40 },
        specifications: {
            boardGrade: "Single Wall 3 Ply",
            style: "Square",
            material: "Kraft Liner",
            recyclability: "100%"
        },
        features: [
            "Lightweight design",
            "Fast assembly",
            "Space-saving storage",
            "Reliable protection"
        ],
        applications: [
            "Clothing & Apparel",
            "Books & Media",
            "Toys & Games",
            "Small housewares"
        ]
    },
    {
        id: 7,
        name: "Heavy Duty Corrugated Box",
        slug: "heavy-duty-corrugated-box",
        category: "Plain",
        price: 200,
        image: "https://images.unsplash.com/photo-1530124560676-4ae822479713?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Ultra-strong boxes for palletized shipping.",
        description: "Designed for the toughest shipping environments. These heavy-duty boxes are built to handle significant weight and stacking pressure, perfect for palletized transport.",
        dimensions: { length: 120, width: 100, height: 80 },
        specifications: {
            boardGrade: "Triple Wall 7 Ply",
            loadCapacity: "Up to 300kg",
            material: "High GSM Kraft",
            certification: "Export Grade"
        },
        features: [
            "Pallet-sized design",
            "Extreme durability",
            "Reinforced walls",
            "Moisture protection"
        ],
        applications: [
            "Bulk Chemicals",
            "Auto Components",
            "Machinery Export",
            "Raw materials"
        ]
    },

    // Sheets & Specialty
    {
        id: 8,
        name: "Corrugated Packaging Sheet",
        slug: "corrugated-packaging-sheet",
        category: "Sheets",
        price: 36,
        image: "https://images.unsplash.com/photo-1542618953-27856d2f349c?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Protective sheets for layering and wrapping.",
        description: "Our corrugated sheets provide excellent cushioning for flat items or as dividers within larger boxes. Available in various sizes and thicknesses to suit your needs.",
        dimensions: { length: 100, width: 100, height: 0.5 },
        specifications: {
            type: "2 Ply / 3 Ply Sheet",
            gsm: "100-300 GSM",
            material: "Kraft Paper",
            packaging: "Rolls / Sheets"
        },
        features: [
            "Flexible protection",
            "Easy to cut and fold",
            "Excellent cushioning",
            "Surface protection"
        ],
        applications: [
            "Glassware dividers",
            "Furniture wrapping",
            "Floor protection",
            "Product layering"
        ]
    },
    {
        id: 9,
        name: "Wine & Bottle Packaging Box",
        slug: "wine-bottle-packaging-box",
        category: "Specialty",
        price: 30,
        image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Specialized boxes for glass bottle protection.",
        description: "Specially designed for the safe transport of wine and other glass bottles. Includes internal dividers to prevent breakage during transit.",
        dimensions: { length: 10, width: 10, height: 35 },
        specifications: {
            boardGrade: "Double Wall 5 Ply",
            type: "Bottle Carrier",
            dividers: "Included",
            material: "Reinforced Kraft"
        },
        features: [
            "Anti-shock design",
            "Secure dividers",
            "Custom printing available",
            "Moisture absorbent"
        ],
        applications: [
            "Wine & Spirits",
            "Gourmet oils",
            "Glass giftware",
            "Beverage retail"
        ]
    },
    {
        id: 10,
        name: "Die Cut Printing Boxes",
        slug: "die-cut-printing-boxes",
        category: "Specialty",
        price: 40,
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Precision die-cut boxes with custom graphics.",
        description: "Our die-cut printing boxes offer a unique blend of functionality and aesthetics. Perfect for specialized product packaging that requires a custom shape and vibrant printing.",
        dimensions: { length: 20, width: 20, height: 10 },
        specifications: {
            style: "Custom Die-Cut",
            printing: "High Definition Offset",
            material: "Premium Kraft Liner",
            locking: "Self-Locking"
        },
        features: [
            "No tape required",
            "Precision dimensions",
            "Vibrant graphics",
            "Unique unboxing"
        ],
        applications: [
            "Electronics packaging",
            "Cosmetic kits",
            "Subscription boxes",
            "Promotional gifts"
        ]
    }
];

export const categories = ["All", "Printed", "Plain", "Sheets", "Specialty"];
