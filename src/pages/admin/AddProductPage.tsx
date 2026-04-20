import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AddProductPage() {
  const [badge, setBadge] = useState<string>('');

  const badges = ['Sale', 'New', 'Hot'];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link to="/admin/products" className="inline-flex items-center gap-2 text-[14px] font-bold text-brand-main hover:text-brand-dark transition-colors uppercase tracking-wide">
        <ArrowLeft size={16} /> Back to Products
      </Link>

      <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px] mb-6">Add Product</h1>

      <form className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 md:p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Product Name *</label>
            <input required type="text" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif" />
          </div>
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Category *</label>
            <select required className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif">
               <option value="">Select category</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Brand</label>
            <input type="text" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif" />
          </div>
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Model</label>
            <input type="text" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Original Price (৳)</label>
            <input type="number" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif" />
          </div>
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Selling Price (৳) *</label>
            <input required type="number" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Stock Quantity</label>
            <input type="number" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif" />
          </div>
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Badge</label>
            <div className="flex flex-wrap gap-3">
              {badges.map(b => (
                <button 
                  key={b}
                  type="button"
                  onClick={() => setBadge(badge === b ? '' : b)}
                  className={`px-4 py-2 text-[12px] uppercase font-bold tracking-wide rounded-[2px] border transition-colors ${
                    badge === b ? 'bg-brand-dark text-brand-light border-brand-dark' : 'bg-brand-light text-brand-dark border-brand-main hover:border-brand-dark'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Sizes (comma separated)</label>
            <input type="text" placeholder="S, M, L, XL" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif placeholder:font-sans placeholder:text-brand-main" />
          </div>
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Material</label>
            <input type="text" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif" />
          </div>
        </div>

        <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Warranty</label>
            <input type="text" className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif" />
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer group">
             <input type="checkbox" className="w-4 h-4 rounded-[2px] border-brand-main text-brand-main focus:ring-brand-main" />
             <span className="font-bold text-[13px] text-brand-dark uppercase group-hover:text-brand-main transition-colors">Featured Product</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
             <input type="checkbox" className="w-4 h-4 rounded-[2px] border-brand-main text-brand-main focus:ring-brand-main" />
             <span className="font-bold text-[13px] text-brand-dark uppercase group-hover:text-brand-main transition-colors flex items-center gap-1">🚚 Free Delivery</span>
          </label>
        </div>

        <div className="bg-brand-main/5 border border-brand-main border-dashed rounded-[4px] p-4 flex items-center gap-3">
           <input type="checkbox" id="limitedOffer" className="w-4 h-4 rounded-[2px] border-brand-main text-brand-main focus:ring-blue-500 bg-brand-light" />
           <label htmlFor="limitedOffer" className="font-bold text-[13px] text-blue-600 uppercase cursor-pointer">⏰ Enable Limited Time Offer</label>
        </div>

        <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Description (Bangla & English supported)</label>
            <textarea rows={5} placeholder="Write product description here... বাংলা এবং English দুইটাই লিখতে পারবেন" className="w-full py-3 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif resize-y placeholder:font-sans placeholder:text-brand-main"></textarea>
        </div>

        <div className="space-y-2">
          <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Product Images (max 25, ⭐️ click to set main)</label>
          <div className="w-32 h-32 border-2 border-brand-main border-dashed hover:border-brand-dark hover:bg-brand-main/10 rounded-[4px] flex flex-col items-center justify-center text-brand-main hover:text-brand-dark transition-colors cursor-pointer bg-brand-light">
             <Upload size={24} className="mb-2" />
          </div>
        </div>

      </form>
    </div>
  );
}
