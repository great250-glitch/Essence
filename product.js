const products = [
  {
    id: 1,
    name: "Considered Suit",
    category: "Suits",
    price: 89500,
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=900&q=85",
    description:
      "A refined two-piece suit with clean lines and thoughtful tailoring for a confident presence.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Premium suiting wool",
    fit: "Tailored",
    care: "Dry clean recommended",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 2,
    name: "Aurelia Slip Dress",
    category: "Dresses",
    price: 112000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYmS_LoQNv09vmZ6IMBTFngLiNL5afUi3UGT5nYiEvw&s=10",
    description:
      "A fluid slip silhouette with delicate straps and a softly luminous finish.",
    sizes: ["XS", "S", "M", "L"],
    material: "Silk satin",
    fit: "Fluid fit",
    care: "Dry clean recommended",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 3,
    name: "Modern Polo",
    category: "Tops",
    price: 54000,
    image:
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85",
    description:
      "A timeless polo essential, finished with an easy fit and quiet polish.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Structured cotton",
    fit: "True to size",
    care: "Cold wash",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 4,
    name: "Mara Linen Shirt",
    category: "Tops",
    price: 47500,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtBUxlknGPfu_DQuzVK9UOcldGIOVXqvmlN1QFNVv8pwwDAbY0BkUYMfh_XJCjqwJqssZ0i5ChyujhVxUXGmCt5GoTgxd9K6YLRilwEqQ8CjRnoUNTNnaPLsozvziFbroCOYRi2_c&usqp=CAc",
    description:
      "An oversized linen shirt made for quiet mornings and polished layering.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "European linen",
    fit: "Oversized",
    care: "Gentle wash",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 5,
    name: "Celine Wide-Leg Trouser",
    category: "Trousers",
    price: 68000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    description:
      "High-waisted wide-leg trousers with a beautifully tailored drape.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Wool-viscose blend",
    fit: "Wide leg",
    care: "Dry clean recommended",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 6,
    name: "Elara Tailored Trouser",
    category: "Trousers",
    price: 73500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdjGCyjmNTUqLOJgcc9l_fTuA4sC8A3i9qSWdRj2ngw&s",
    description:
      "A polished tailored trouser designed to anchor a modern wardrobe.",
    sizes: ["XS", "S", "M", "L"],
    material: "Premium suiting wool",
    fit: "Tailored",
    care: "Dry clean recommended",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 7,
    name: "Solene Bias Skirt",
    category: "Skirts",
    price: 62500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxksROILA3uAi_e9theAQQc_cg_cC8izZb5nR2voibw&s=10",
    description: "A bias-cut skirt that moves beautifully from day to evening.",
    sizes: ["XS", "S", "M", "L"],
    material: "Viscose satin",
    fit: "Bias cut",
    care: "Gentle wash",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 8,
    name: "Livia Pleated Skirt",
    category: "Skirts",
    price: 59000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vLwuFIPaL060xkx7UuExKwhGRBON5bpvs8cGHpgvnQ&s=10",
    description:
      "Soft pleats and a clean waistband create a timeless feminine silhouette.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Recycled polyester",
    fit: "Regular fit",
    care: "Cold wash",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 9,
    name: "Amara Shoulder Bag",
    category: "Bags",
    price: 98000,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    description:
      "A structured shoulder bag with understated hardware and a refined profile.",
    sizes: ["One Size"],
    material: "Vegan leather",
    fit: "Structured",
    care: "Wipe clean",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 10,
    name: "Iris Mini Tote",
    category: "Bags",
    price: 86000,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
    description:
      "A compact everyday tote with enough space for your essentials.",
    sizes: ["One Size"],
    material: "Grained leather-look finish",
    fit: "Structured",
    care: "Wipe clean",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 11,
    name: "Luna Leather Mule",
    category: "Shoes",
    price: 78000,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
    description: "An elegant open-back mule with a refined low heel.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    material: "Leather",
    fit: "Regular",
    care: "Use leather conditioner",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 12,
    name: "Celeste Slingback",
    category: "Shoes",
    price: 82000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9JW3bqhCAwVorTaJvphqlOV7pqPNslkbUztNdNGnS0g&s",
    description:
      "A pointed slingback designed to bring quiet polish to any look.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    material: "Leather",
    fit: "Regular",
    care: "Use leather conditioner",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 13,
    name: "Elise Silk Scarf",
    category: "Accessories",
    price: 32000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROyLOKoKuNiwBNtisX6H0Xu4xjQwqacnAL2aCtPpIZGw&s",
    description:
      "A softly printed silk scarf for an effortless finishing touch.",
    sizes: ["One Size"],
    material: "100% silk",
    fit: "One size",
    care: "Dry clean",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 14,
    name: "Nadia Sculptural Belt",
    category: "Accessories",
    price: 36000,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description: "A minimal sculptural belt with subtle gold-toned hardware.",
    sizes: ["S", "M", "L"],
    material: "Vegan leather",
    fit: "Adjustable",
    care: "Wipe clean",
    shipping: "Ships within 2–4 business days",
  },
  {
    id: 15,
    name: "ÉSSÉNCE Tailored Jacket",
    category: "Jackets",
    price: 92000,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    description:
      "An effortless final layer that brings considered structure to every look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Cotton blend",
    fit: "Relaxed tailoring",
    care: "Dry clean recommended",
    shipping: "Ships within 2–4 business days",
  },
];
