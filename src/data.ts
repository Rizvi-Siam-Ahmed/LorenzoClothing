export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  image: string;
  gallery: string[];
  description: string;
  sizes: string[];
  colors: string[];
  stock: number;
  rating: number;
  reviews: number;
  isNew: boolean;
  featured: boolean;
}

export const CATEGORIES = [
  { id: 'men', name: 'Men', icon: 'Shirt' },
  { id: 'women', name: 'Women', icon: 'Dress' },
  { id: 'kids', name: 'Kids', icon: 'Baby' },
  { id: 'panjabi', name: 'Panjabi', icon: 'Sun' },
  { id: 'sharee', name: 'Sharee', icon: 'Sparkles' },
  { id: 'accessories', name: 'Accessories', icon: 'Watch' }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Classic Premium Panjabi Signature",
    price: 3200,
    originalPrice: 4000,
    discount: 20,
    category: "Panjabi",
    image: "https://images.unsplash.com/photo-1583391733958-d25e07fac044?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583391733958-d25e07fac044?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Experience the ultimate comfort and style with our Premium Signature Panjabi. Made from high-quality imported cotton. Perfect for weddings, Eid, and casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy Blue", "Black"],
    stock: 45,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    featured: true
  },
  {
    id: "p2",
    name: "Elegant Georgette Sharee with Blouse Piece",
    price: 4500,
    category: "Sharee",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585465223293-863a35f0f354?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Authentic Georgette Sharee with intricate embroidery work. Comes with an unstitched blouse piece. A stunning choice for grand occasions.",
    sizes: ["Free Size"],
    colors: ["Red", "Emerald Green", "Purple"],
    stock: 12,
    rating: 4.5,
    reviews: 89,
    isNew: false,
    featured: true
  },
  {
    id: "p3",
    name: "Men's Casual Checkered Shirt",
    price: 1250,
    originalPrice: 1500,
    discount: 16,
    category: "Men",
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ce3?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Breathable cotton casual shirt. Long sleeve, slim fit, and perfect for office or weekend wear.",
    sizes: ["M", "L", "XL"],
    colors: ["Red Check", "Blue Check", "Green Check"],
    stock: 120,
    rating: 4.2,
    reviews: 34,
    isNew: false,
    featured: false
  },
  {
    id: "p4",
    name: "Women's Floral Summer Midi Dress",
    price: 1800,
    originalPrice: 2200,
    discount: 18,
    category: "Women",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Lightweight summer midi dress featuring beautiful floral prints. Flattering waistline and extremely soft fabric.",
    sizes: ["S", "M", "L"],
    colors: ["Yellow Floral", "Blue Floral"],
    stock: 30,
    rating: 4.9,
    reviews: 210,
    isNew: true,
    featured: true
  },
  {
    id: "p5",
    name: "Classic Denim Jeans High Waist",
    price: 2100,
    category: "Women",
    image: "https://images.unsplash.com/photo-1542272604-7802874d1565?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542272604-7802874d1565?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Premium washed denim with a comfortable high waist fit. Very durable and stylish.",
    sizes: ["28", "30", "32", "34"],
    colors: ["Light Blue", "Deep Blue", "Black"],
    stock: 85,
    rating: 4.4,
    reviews: 67,
    isNew: false,
    featured: false
  },
  {
    id: "p6",
    name: "Kids Winter Hoodie Collection",
    price: 950,
    originalPrice: 1300,
    discount: 26,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Warm, cozy, and cute winter hoodie for kids. Suitable for ages 3 to 10.",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Pink", "Grey", "Navy"],
    stock: 50,
    rating: 4.7,
    reviews: 42,
    isNew: true,
    featured: false
  },
  {
    id: "p7",
    name: "Luxury Silk Tie & Cufflink Set",
    price: 1500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=600&q=80"
    ],
    description: "A perfect gift set containing a 100% silk tie, matching pocket square, and premium cufflinks.",
    sizes: ["Standard"],
    colors: ["Burgundy", "Navy Blue", "Silver"],
    stock: 20,
    rating: 4.6,
    reviews: 15,
    isNew: false,
    featured: true
  },
  {
    id: "p8",
    name: "Men's Basic Solid T-Shirt",
    price: 450,
    originalPrice: 600,
    discount: 25,
    category: "Men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1529369623266-f5264b696110?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Everyday essential pure cotton t-shirt. Ultra-soft and retains shape wash after wash.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey", "Olive"],
    stock: 300,
    rating: 4.3,
    reviews: 450,
    isNew: false,
    featured: false
  }
];
