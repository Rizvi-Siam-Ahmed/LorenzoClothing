import { Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-brand-content rounded-[4px] border border-brand-main p-3 relative hover:shadow-md transition-all duration-300">
      <button className="absolute top-4 right-4 z-10 text-brand-main hover:text-brand-dark" title="Add to Wishlist">
        <Heart size={18} />
      </button>

      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-brand-main text-brand-light text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-[2px]">New</span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-muted mb-2 rounded-[2px] flex items-center justify-center text-brand-main italic opacity-90 hover:opacity-100 transition-opacity">
        <Link to={`/product/${product.id}`} className="w-full h-full block">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1 mt-2">
        <Link to={`/product/${product.id}`} className="hover:underline">
          <h3 className="font-bold text-brand-dark text-[16px] line-clamp-1 group-hover:text-brand-main transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="text-brand-main">৳{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-[13px] text-brand-main/70 line-through">৳{product.originalPrice.toLocaleString()}</span>
          )}
          {product.discount && (
            <span className="ml-auto bg-brand-main text-brand-light text-[10px] uppercase font-bold px-2 py-0.5 rounded-[2px]">-{product.discount}%</span>
          )}
        </div>

        <div className="text-[11px] mt-1 text-brand-dark">
          ★★★★☆ ({product.reviews} Reviews)
        </div>

        <Link 
          to={`/product/${product.id}`}
          className="mt-3 w-full bg-brand-dark text-brand-light hover:bg-brand-main py-2.5 rounded-[4px] flex items-center justify-center font-bold uppercase text-[12px] transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
