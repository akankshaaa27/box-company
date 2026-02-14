export const products = [
    {
        id: 1,
        name: "Corrugated Boxes",
        slug: "corrugated-boxes",
        category: "Standard",
        image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop",
        shortDescription: "High-strength shipping boxes for industrial and retail use.",
        description: "Our standard corrugated boxes are designed for maximum durability and stacking strength. Available in various wall thicknesses (3-ply, 5-ply, 7-ply).",
        dimensions: { length: 30, width: 20, height: 25 }, // cm
        specifications: {
            material: "Virgin Kraft Liner",
            thickness: "3 Ply / 5 Ply / 7 Ply",
            usage: "Shipping & Logistics",
            color: "Brown / White"
        },
        features: [
            "Extra stacking strength",
            "Bursting factor certified",
            "Eco-friendly & Recyclable",
            "Custom sizes available"
        ],
        applications: [
            "E-commerce packaging",
            "Food and Beverage",
            "Electronics",
            "Textiles"
        ]
    },
    {
        id: 2,
        name: "Printed Corrugated Boxes",
        slug: "printed-corrugated-boxes",
        category: "Printed",
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Branded packaging with high-quality offset or flexo printing.",
        description: "Enhance your brand visibility with our premium printed corrugated boxes. High-resolution printing ensures your logo and product info stand out.",
        dimensions: { length: 25, width: 25, height: 15 },
        specifications: {
            printing: "Flexographic / Offset",
            finish: "Matte / Gloss Laminate",
            colors: "Up to 4 Colors",
            material: "White Top Liner"
        },
        features: [
            "Brand visibility",
            "High precision printing",
            "Lamination options",
            "Scratch resistant"
        ],
        applications: [
            "Subscription Boxes",
            "Retail Packaging",
            "Gift Boxes",
            "Branded Parcels"
        ]
    },
    {
        id: 3,
        name: "Die Cut Boxes",
        slug: "die-cut-boxes",
        category: "Custom",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Precision cut custom shapes for specialized product packaging.",
        description: "Our die-cut boxes offer specialized shapes and locking mechanisms. Perfect for products requiring a unique unboxing experience.",
        dimensions: { length: 20, width: 20, height: 5 },
        specifications: {
            type: "Mailer / Pizza / Folder",
            mold: "Custom CNC Die Cut",
            material: "High Strength Fluting",
            thickness: "E-Flute / B-Flute"
        },
        features: [
            "No tape required (Self-locking)",
            "Premium unboxing feel",
            "Precision dimensions",
            "Tear resistant"
        ],
        applications: [
            "Pizza & Food delivery",
            "Cosmetics",
            "Subscription boxes",
            "Jewelry packaging"
        ]
    },
    {
        id: 4,
        name: "Heavy Duty Packaging",
        slug: "heavy-duty-packaging",
        category: "Industrial",
        image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Ultra-strong 7-ply boxes for machinery and heavy parts.",
        description: "Designed for international exports and heavy industrial machinery, our 7-ply boxes can withstand extreme pressure and moisture.",
        dimensions: { length: 100, width: 80, height: 60 },
        specifications: {
            material: "Heavier Grade GSM Kraft",
            thickness: "7 Ply (10mm+)",
            loadCapacity: "Up to 500kg",
            waterproof: "Optional Coating"
        },
        features: [
            "Export grade quality",
            "Weather resistant options",
            "Pallet compatible",
            "Reinforced corners"
        ],
        applications: [
            "Machinery Parts",
            "Automotive components",
            "Construction materials",
            "Bulk chemical handling"
        ]
    }
];

export const categories = ["All", "Standard", "Printed", "Custom", "Industrial"];
