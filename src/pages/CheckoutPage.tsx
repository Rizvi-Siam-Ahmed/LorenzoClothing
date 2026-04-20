import React, { useState } from 'react';
import { Truck, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [itemsExpanded, setItemsExpanded] = useState(true);
  
  const items = [ { ...PRODUCTS[0], quantity: 1 } ];
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 80;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8 border-b border-brand-main pb-4">
        <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px] text-center">Checkout</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Column: Forms */}
        <div className="space-y-6">
          
          {/* Billing & Shipping */}
          <div className="bg-brand-content rounded-[2px] border border-brand-main p-6 sm:p-8 relative">
            <h2 className="flex items-center gap-2 text-[15px] font-bold text-brand-dark uppercase tracking-wide border-b border-brand-main/50 pb-4 mb-6">
              <span className="w-6 h-6 rounded-full bg-brand-main text-brand-content flex items-center justify-center text-[12px]">1</span>
              Billing & Shipping
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[12px] font-bold text-brand-dark uppercase tracking-wide">Full Name *</label>
                <input required type="text" className="w-full py-2 px-3 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main font-serif text-brand-dark" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[12px] font-bold text-brand-dark uppercase tracking-wide">Email (Optional)</label>
                  <input type="email" className="w-full py-2 px-3 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main font-serif text-brand-dark" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[12px] font-bold text-brand-dark uppercase tracking-wide">Phone *</label>
                  <input required type="tel" className="w-full py-2 px-3 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main font-serif text-brand-dark" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[12px] font-bold text-brand-dark uppercase tracking-wide">District *</label>
                  <select required className="w-full py-2 px-3 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main font-serif text-brand-dark">
                    <option value="dhaka">Dhaka</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[12px] font-bold text-brand-dark uppercase tracking-wide">Thana / Upazila *</label>
                  <select required className="w-full py-2 px-3 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main font-serif text-brand-dark">
                    <option value="khilgaon">Khilgaon</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[12px] font-bold text-brand-dark uppercase tracking-wide">Full Address *</label>
                <textarea required rows={2} placeholder="House/Road/Village, landmark..." className="w-full py-2 px-3 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main font-serif text-brand-dark resize-none" />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[12px] font-bold text-brand-dark uppercase tracking-wide">Notes (Optional)</label>
                <textarea rows={2} placeholder="Special instructions..." className="w-full py-2 px-3 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main font-serif text-brand-dark resize-none" />
              </div>
            </div>
          </div>

          {/* Delivery Configuration */}
          <div className="bg-brand-content rounded-[2px] border border-brand-main p-6 sm:p-8 relative">
             <h2 className="flex items-center gap-2 text-[15px] font-bold text-brand-dark uppercase tracking-wide border-b border-brand-main/50 pb-4 mb-4">
              <span className="w-6 h-6 rounded-full bg-brand-main text-brand-content flex items-center justify-center text-[12px]">2</span>
              Delivery *
            </h2>
            <label className="flex items-center justify-between border-2 border-brand-main p-4 rounded-[4px] bg-brand-main/5 cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" checked readOnly className="accent-brand-main" />
                <span className="font-bold text-[13px] uppercase text-brand-dark">Standard Delivery</span>
              </div>
              <span className="font-bold text-[14px] text-brand-dark">৳{deliveryFee}</span>
            </label>
          </div>

        </div>

        {/* Right Column: Order Review & Payment */}
        <div className="space-y-6">
          
          {/* Payment */}
          <div className="bg-brand-content rounded-[2px] border border-brand-main p-6 sm:p-8 relative">
            <h2 className="flex items-center gap-2 text-[15px] font-bold text-brand-dark uppercase tracking-wide border-b border-brand-main/50 pb-4 mb-4">
              <span className="w-6 h-6 rounded-full bg-brand-main text-brand-content flex items-center justify-center text-[12px]">3</span>
              Payment *
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="border border-brand-main/50 hover:border-brand-main p-4 flex flex-col items-center justify-center gap-2 rounded-[2px] cursor-pointer transition-colors">
                <input type="radio" name="payment" className="hidden" />
                <div className="w-8 h-8 rounded-full bg-pink-600 text-brand-content font-bold flex items-center justify-center text-[12px] opacity-80">b</div>
                <span className="text-[12px] font-bold text-brand-dark uppercase">bKash</span>
                <span className="text-[10px] text-brand-main italic">Send Money</span>
              </label>

              <label className="border border-brand-main/50 hover:border-brand-main p-4 flex flex-col items-center justify-center gap-2 rounded-[2px] cursor-pointer transition-colors">
                <input type="radio" name="payment" className="hidden" />
                 <div className="w-8 h-8 rounded-full bg-orange-500 text-brand-content font-bold flex items-center justify-center text-[12px] opacity-80">N</div>
                <span className="text-[12px] font-bold text-brand-dark uppercase">Nagad</span>
                <span className="text-[10px] text-brand-main italic">Send Money</span>
              </label>

              <label className="border-2 border-brand-main bg-brand-main/5 p-4 flex flex-col items-center justify-center gap-2 rounded-[2px] cursor-pointer transition-colors">
                <input type="radio" name="payment" checked readOnly className="hidden" />
                 <div className="w-8 h-8 rounded-full bg-green-600 text-brand-content flex items-center justify-center opacity-80">
                   <span className="text-[14px] font-bold">৳</span>
                 </div>
                <span className="text-[12px] font-bold text-brand-dark uppercase text-center">Cash on Delivery</span>
                <span className="text-[10px] text-brand-main italic">Pay on Delivery</span>
              </label>
            </div>
          </div>

          {/* Items Toggle */}
          <div className="bg-brand-content rounded-[2px] border border-brand-main p-6 relative">
            <button 
              type="button" 
              onClick={() => setItemsExpanded(!itemsExpanded)}
              className="w-full flex items-center justify-between text-[15px] font-bold text-brand-dark uppercase tracking-wide"
            >
              <span className="flex items-center gap-2">
                 <span className="w-6 h-6 rounded border border-brand-main flex items-center justify-center text-[10px] font-sans bg-brand-muted">{items.length}</span>
                 Items in Cart
              </span>
              {itemsExpanded ? <ChevronUp size={20} className="text-brand-main" /> : <ChevronDown size={20} className="text-brand-main" />}
            </button>
            
            {itemsExpanded && (
              <div className="mt-4 pt-4 border-t border-brand-main/30 space-y-3">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center bg-brand-main/5 p-3 rounded-[2px] border border-brand-main/20">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-[2px] border border-brand-main/30" />
                      <div>
                         <h4 className="text-[13px] font-bold text-brand-dark line-clamp-1 max-w-[200px]">{item.name}</h4>
                         <p className="text-[11px] text-brand-main italic">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-[14px] text-brand-dark">৳{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-brand-content rounded-[2px] border border-brand-main p-6 sm:p-8 relative">
            <h2 className="text-[15px] font-bold text-brand-dark uppercase tracking-wide border-b border-brand-main/50 pb-4 mb-4">
              Order Summary
            </h2>
            
            <div className="space-y-3 mb-6 font-serif italic text-[14px]">
                <div className="flex justify-between items-center text-brand-dark">
                  <span>Sub-total</span>
                  <span className="font-bold">৳{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-brand-main">
                  <span>Delivery</span>
                  <span>৳{deliveryFee.toLocaleString()}</span>
                </div>
            </div>

             <div className="border-t border-brand-main pt-4 mb-6">
                <div className="flex justify-between items-center text-brand-dark mb-1">
                  <span className="font-bold uppercase tracking-wide text-[16px]">Total</span>
                  <span className="font-bold text-[20px] text-brand-main">৳{total.toLocaleString()}</span>
                </div>
             </div>
             
             <button type="submit" className="w-full bg-brand-dark text-brand-light py-4 rounded-[4px] font-bold uppercase text-[14px] tracking-[1px] hover:bg-brand-main border border-brand-dark hover:border-brand-main transition-colors flex items-center justify-center gap-2">
               Place Order — ৳{total.toLocaleString()}
             </button>
          </div>

        </div>
      </form>
    </main>
  );
}
