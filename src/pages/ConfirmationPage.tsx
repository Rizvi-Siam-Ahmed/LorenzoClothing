import React from 'react';
import { CheckCircle2, Download, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConfirmationPage() {
  return (
    <main className="w-full flex justify-center items-center py-20 px-6 min-h-[70vh]">
      <div className="bg-brand-content w-full max-w-xl rounded-[4px] border border-brand-main p-8 md:p-12 shadow-lg text-center flex flex-col items-center">
        
        <div className="w-20 h-20 rounded-full bg-brand-main/10 flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-brand-main" />
        </div>

        <h1 className="text-2xl md:text-[32px] font-bold text-brand-dark uppercase tracking-[1px] mb-2">Order Placed!</h1>
        <p className="text-brand-main text-[15px] font-serif italic mb-8">Thank you for your purchase</p>

        <div className="w-full bg-brand-muted/50 border border-brand-main/40 rounded-[2px] p-6 mb-8 text-left">
          <div className="space-y-4 font-serif text-[14px]">
            <div className="flex justify-between items-center border-b border-brand-main/20 pb-3">
              <span className="text-brand-main italic">Order ID</span>
              <span className="font-bold text-brand-dark uppercase tracking-wide text-sm font-sans">ORD-2026-8192</span>
            </div>
            <div className="flex justify-between items-center border-b border-brand-main/20 pb-3">
              <span className="text-brand-main italic">Payment</span>
              <span className="font-bold text-brand-dark">Cash on Delivery</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-brand-main italic">Est. Delivery</span>
              <span className="font-bold text-brand-dark">3-5 Business Days</span>
            </div>
          </div>
        </div>

        <div className="w-full space-y-3">
          <button className="w-full bg-brand-content text-brand-dark py-3.5 rounded-[4px] font-bold uppercase text-[12px] tracking-[1px] hover:bg-brand-muted border border-brand-main transition-colors flex items-center justify-center gap-2">
            <Download size={16} /> Download Invoice
          </button>
          
          <Link to="/track-order" className="w-full bg-brand-dark text-brand-light py-3.5 rounded-[4px] font-bold uppercase text-[12px] tracking-[1px] hover:bg-brand-main border border-brand-dark hover:border-brand-main transition-colors flex items-center justify-center gap-2">
            <Package size={16} /> Track Order
          </Link>
        </div>

        <Link to="/" className="mt-8 text-[12px] font-bold uppercase tracking-wide text-brand-main hover:text-brand-dark hover:underline flex items-center gap-1">
          Back to Home
        </Link>

      </div>
    </main>
  );
}
