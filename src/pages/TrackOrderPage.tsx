import React from 'react';
import { Search } from 'lucide-react';

export default function TrackOrderPage() {
  return (
    <main className="w-full flex justify-center py-24 px-6 min-h-[70vh]">
      <div className="w-full max-w-2xl text-center">
        
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-brand-main/10 text-brand-main flex items-center justify-center mb-4 border border-brand-main/20">
             <Search size={28} />
          </div>
          <h1 className="text-2xl md:text-[32px] font-bold text-brand-dark uppercase tracking-[1px] mb-2 flex items-center justify-center gap-2">
            Track Your Order
          </h1>
          <p className="text-brand-main text-[15px] font-serif italic">
            Enter your order number or phone number
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input 
            type="text" 
            placeholder="e.g. ORD-123 or 01XXXXXXXXX" 
            className="flex-1 py-3.5 px-5 rounded-[4px] border border-brand-main bg-brand-content focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif"
          />
          <button className="bg-brand-dark text-brand-light px-8 py-3.5 rounded-[4px] font-bold uppercase tracking-[1px] hover:bg-brand-main border border-brand-dark hover:border-brand-main transition-colors flex items-center justify-center gap-2 min-w-[140px]">
            <Search size={16} /> Track
          </button>
        </form>
        
      </div>
    </main>
  );
}
