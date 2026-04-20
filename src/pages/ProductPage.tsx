import { ChevronRight, Heart, Minus, Plus, Share2, ShieldCheck, ShoppingCart, Star } from 'lucide-react';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const relatedProducts = PRODUCTS.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-brand-dark">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-brand-main hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <main className="w-full pb-20">
      {/* Breadcrumbs */}
      <div className="bg-brand-main/5 py-4 border-b border-brand-main/20">
        <div className="max-w-7xl mx-auto px-6 flex items-center text-[12px] uppercase font-bold text-brand-main tracking-wide">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="hover:text-brand-dark cursor-pointer">{product.category}</span>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-brand-dark truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-brand-content border-l border-brand-main p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Images */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/5] bg-brand-muted flex items-center justify-center text-brand-main rounded-[2px] overflow-hidden relative border border-brand-main">
              <img 
                src={product.gallery[activeImage] || product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-24 rounded-[2px] overflow-hidden shrink-0 border transition-all ${activeImage === idx ? 'border-brand-dark' : 'border-brand-main hover:border-brand-dark opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase">{product.name}</h1>
              <button className="text-brand-main hover:text-brand-dark transition-colors p-2">
                <Share2 size={20} />
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6 text-[13px] uppercase tracking-wide font-bold">
              <div className="flex items-center text-brand-main gap-0.5">
                ★★★★☆
              </div>
              <span className="text-brand-main">({product.reviews} reviews)</span>
              
              <div className="w-px h-4 bg-brand-main"></div>
              
              {product.stock > 0 ? (
                <span className="text-brand-main px-2 py-0.5 border border-brand-main">In Stock ({product.stock})</span>
              ) : (
                <span className="text-brand-dark px-2 py-0.5 border border-brand-dark">Out of Stock</span>
              )}
            </div>

            <div className="flex items-end gap-3 mb-6 pb-6 border-b border-brand-main">
              <span className="text-[24px] font-bold text-brand-dark">{product.price.toLocaleString()} ৳</span>
              {product.originalPrice && (
                <span className="text-[16px] text-brand-main line-through mb-1">৳{product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <div className="mb-6 space-y-4">
              <h3 className="font-bold text-brand-main uppercase text-[14px]">Description</h3>
              <p className="text-brand-main text-[14px] leading-relaxed italic">{product.description}</p>
              
              {/* Fake guarantees */}
              <ul className="space-y-2 mt-4 text-sm text-brand-dark/80">
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-main"/> 100% Authentic Product</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-main"/> Next-Day Delivery (inside Dhaka)</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-main"/> 7 Days Return Policy</li>
              </ul>
            </div>

            {/* Variations */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Size */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="font-bold text-brand-main uppercase text-[14px] mb-3">Select Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[40px] px-2 h-8 flex items-center justify-center rounded-[2px] border text-[12px] font-bold uppercase transition-all ${selectedSize === size ? 'border-brand-main bg-brand-main text-brand-content' : 'border-brand-main text-brand-dark hover:border-brand-dark hover:bg-brand-main/10'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="font-bold text-brand-main uppercase text-[14px] mb-3">Select Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <button 
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 h-8 flex items-center justify-center rounded-[2px] border text-[12px] font-bold transition-all ${selectedColor === color ? 'border-brand-main bg-brand-main text-brand-content' : 'border-brand-main text-brand-dark hover:border-brand-dark hover:bg-brand-main/10'}`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-bold text-brand-main uppercase text-[14px] mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-brand-main rounded-[2px] bg-transparent">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-brand-dark hover:bg-brand-main/10 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center font-bold text-[14px]">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-8 h-8 flex items-center justify-center text-brand-dark hover:bg-brand-main/10 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button className="flex-1 bg-transparent border border-brand-main text-brand-dark flex items-center justify-center gap-2 py-3 rounded-[4px] font-bold uppercase text-[12px] hover:bg-brand-main/10 transition-colors">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="flex-1 bg-brand-dark border border-brand-dark text-brand-light flex items-center justify-center gap-2 py-3 rounded-[4px] font-bold uppercase text-[12px] hover:bg-brand-main hover:border-brand-main transition-colors">
                  Buy Now
                </button>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-3 text-brand-dark/70 hover:text-brand-main font-medium transition-colors group">
                <Heart size={18} className="group-hover:fill-brand-main" />
                Add to Wishlist
              </button>
            </div>
            
            {/* Secure Payments Mock */}
            <div className="mt-8 pt-6 border-t border-brand-main">
               <p className="text-center text-[11px] text-brand-main mb-3 uppercase tracking-wider font-bold">Guaranteed Safe Checkout</p>
               <div className="flex justify-center gap-2">
                 {/* Visual representation of payment methods */}
                 <div className="h-8 w-12 bg-brand-content rounded-[2px] border border-brand-main flex items-center justify-center text-[10px] font-bold text-brand-dark leading-none">VISA</div>
                 <div className="h-8 w-12 bg-brand-content rounded-[2px] border border-brand-main flex items-center justify-center text-[10px] font-bold text-brand-dark leading-none">MASTER</div>
                 <div className="h-8 w-12 bg-brand-content rounded-[2px] border border-brand-main flex items-center justify-center text-[10px] font-bold text-brand-dark leading-none">bKash</div>
                 <div className="h-8 w-12 bg-brand-content rounded-[2px] border border-brand-main flex items-center justify-center text-[10px] font-bold text-brand-dark leading-none">Nagad</div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Tabs (Description / Reviews) */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-brand-main">
        <div className="flex gap-10 border-b border-brand-main mb-8 pb-1">
          <button className="font-bold text-brand-dark uppercase tracking-wide border-b-2 border-brand-dark pb-2 px-2 text-[14px]">Reviews ({product.reviews})</button>
          <button className="font-bold text-brand-main uppercase tracking-wide hover:text-brand-dark pb-2 px-2 text-[14px] transition-colors">Additional Info</button>
        </div>
        
        <div className="space-y-6 max-w-4xl">
          {/* Mock review */}
          <div className="pb-6 border-b border-brand-main/30">
             <div className="flex items-center gap-2 mb-2">
               <div className="flex text-brand-main">
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
               </div>
               <span className="font-bold text-[14px] text-brand-dark uppercase tracking-wide">Arafat R.</span>
               <span className="text-[12px] text-brand-main ml-2 font-bold italic">2 days ago</span>
             </div>
             <p className="text-brand-dark text-sm leading-relaxed">Amazing quality! The fabric feels premium and the fit is exactly as described. Will definitely buy again from Lorenzo Clothing.</p>
          </div>
          <div className="pb-6 border-b border-brand-main/30">
             <div className="flex items-center gap-2 mb-2">
               <div className="flex text-brand-main">
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} className="text-brand-main/30" />
               </div>
               <span className="font-bold text-[14px] text-brand-dark uppercase tracking-wide">Nusrat J.</span>
               <span className="text-[12px] text-brand-main ml-2 font-bold italic">1 week ago</span>
             </div>
             <p className="text-brand-dark text-sm leading-relaxed">Very beautiful, colors match the pictures perfectly. Delivery was fast.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-brand-main">
          <div className="flex justify-between items-end mb-8 border-b border-brand-main pb-2">
            <h2 className="text-[14px] font-bold text-brand-main uppercase tracking-[1px]">Related Products</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
