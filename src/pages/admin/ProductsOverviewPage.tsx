import React from 'react';
import { Plus, FolderTree, Package, Edit, Trash2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data';

export default function ProductsOverviewPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px]">Products</h1>
        <Link 
          to="/admin/products/add" 
          className="bg-brand-main text-brand-light px-6 py-2.5 rounded-[4px] font-bold uppercase text-[13px] tracking-wide hover:bg-brand-dark transition-colors flex items-center gap-2"
        >
          <Plus size={18} /> Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-brand-main/10 text-brand-main flex items-center justify-center">
            <FolderTree size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-dark font-sans leading-none mb-1">13</h3>
            <p className="text-[13px] font-serif text-brand-main uppercase tracking-wide">Categories</p>
          </div>
        </div>
        
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-brand-main/10 text-brand-main flex items-center justify-center">
            <Package size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-dark font-sans leading-none mb-1">22</h3>
            <p className="text-[13px] font-serif text-brand-main uppercase tracking-wide">Products</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-brand-content border border-brand-main rounded-[4px] overflow-hidden group">
            <div className="relative aspect-square bg-brand-muted/20 p-4 shrink-0 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
              {product.featured && (
                <div className="absolute top-3 right-3 text-[#d5a95d]">
                   <Star size={20} fill="currentColor" stroke="none" />
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-brand-main/50">
              <h4 className="font-bold text-brand-dark text-[14px] line-clamp-1 mb-1">{product.name}</h4>
              {product.brand && <p className="text-[12px] text-brand-main font-serif italic mb-2">{product.brand}</p>}
              
              <div className="flex items-end gap-2 mb-2">
                <span className="font-bold text-[15px] text-brand-dark">৳{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-[12px] text-brand-main/70 line-through pb-0.5">৳{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              
              <p className="text-[12px] font-serif text-brand-dark mb-4">Stock: {product.inStock ? '150' : '0'}</p>
              
              <div className="flex items-center gap-3 border-t border-brand-main/20 pt-3">
                <button className="text-brand-dark hover:text-brand-main transition-colors" title="Edit">
                  <Edit size={18} />
                </button>
                <button className="text-red-700 hover:text-red-900 transition-colors" title="Delete">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
