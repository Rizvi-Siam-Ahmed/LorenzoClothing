import React, { useState } from 'react';
import { ArrowLeft, Upload, FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AddCategoryPage() {
  const [catName, setCatName] = useState('');

  return (
    <div className="space-y-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start">
      
      {/* Left Form Column */}
      <div className="flex-1 w-full space-y-6">
        <Link to="/admin/categories" className="inline-flex items-center gap-2 text-[14px] font-bold text-brand-main hover:text-brand-dark transition-colors uppercase tracking-wide">
          <ArrowLeft size={16} /> Back to Categories
        </Link>

        <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px] mb-6">Add Category</h1>

        <form className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 md:p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Category Name *</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. Headphones"
              value={catName}
              onChange={e => setCatName(e.target.value)}
              className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-sans" 
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Icon Class (Font Awesome)</label>
            <input 
              type="text" 
              placeholder="e.g. fa-solid fa-headphones"
              className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-sans" 
            />
            <p className="text-[12px] text-brand-main/80 font-serif italic">Use Font Awesome class names like "fa-solid fa-shirt"</p>
          </div>

          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Or Upload Image</label>
            <div className="w-full h-32 border-2 border-brand-main/50 border-dashed hover:border-brand-main rounded-[4px] flex flex-col items-center justify-center text-brand-main hover:text-brand-dark transition-colors cursor-pointer bg-brand-light">
               <Upload size={24} className="mb-2" />
               <span className="text-[13px] font-serif">Click to upload</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-[4px] font-bold uppercase text-[13px] tracking-wide hover:bg-blue-700 transition-colors">
            Save Category
          </button>
        </form>
      </div>

      {/* Right Preview Column */}
      <div className="w-full md:w-80 space-y-6 md:pt-[104px]">
         <h2 className="text-[16px] font-bold text-brand-dark uppercase tracking-[1px] px-1">Live Preview</h2>
         <div className="bg-brand-light border border-brand-main/30 rounded-[4px] p-12 flex flex-col items-center justify-center gap-4 shadow-sm h-[200px]">
            <div className="w-16 h-16 rounded-[8px] bg-brand-main/10 flex items-center justify-center text-brand-main">
              <FileQuestion size={32} />
            </div>
            <span className="font-bold text-[16px] text-brand-dark font-sans text-center">
              {catName || 'Category Name'}
            </span>
         </div>
      </div>

    </div>
  );
}
