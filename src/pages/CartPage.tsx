import React, { useState } from 'react';
import { Minus, Plus, Trash2, Undo } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';

export default function CartPage() {
  const [items, setItems] = useState([
    { ...PRODUCTS[0], quantity: 1 }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) }
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-brand-main pb-4">
        <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px]">Shopping Cart ({items.length})</h1>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <button className="text-[13px] font-bold uppercase tracking-wide text-brand-main hover:text-brand-dark flex items-center gap-2">
            <Undo size={16} /> Undo
          </button>
          <button 
            onClick={() => setItems([])}
            className="text-[13px] font-bold uppercase tracking-wide text-red-700 hover:text-red-900 flex items-center gap-2"
          >
            <Trash2 size={16} /> Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.length === 0 ? (
            <div className="bg-brand-content border border-brand-main p-12 text-center rounded-[4px]">
              <p className="text-brand-dark text-lg mb-4 font-serif italic">Your cart is currently empty.</p>
              <Link to="/" className="inline-block bg-brand-dark text-brand-light px-6 py-3 border border-brand-dark hover:bg-brand-light hover:text-brand-dark hover:border-brand-main uppercase tracking-wide font-bold text-[13px] rounded-[4px] transition-colors">
                Return to Shop
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="bg-brand-content border border-brand-main p-4 flex flex-col sm:flex-row items-center gap-6 rounded-[2px]">
                <div className="w-24 h-24 bg-brand-muted shrink-0 border border-brand-main/50 rounded-[2px] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-brand-dark text-[15px] hover:text-brand-main hover:underline decoration-brand-main mb-1">
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                    <span className="text-[14px] font-bold text-brand-main">৳{item.price.toLocaleString()}</span>
                    {item.originalPrice && <span className="text-[12px] text-brand-main/70 line-through">৳{item.originalPrice.toLocaleString()}</span>}
                  </div>
                  
                  <div className="flex items-center justify-center sm:justify-between w-full">
                    <div className="flex items-center border border-brand-main rounded-[2px] bg-transparent">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-brand-dark hover:bg-brand-main/10 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center font-bold text-[13px]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-brand-dark hover:bg-brand-main/10 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <div className="hidden sm:flex items-center gap-4">
                      <span className="font-bold text-[15px] text-brand-dark">৳{(item.price * item.quantity).toLocaleString()}</span>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-brand-main hover:text-red-700 transition-colors p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="lg:col-span-1">
            <div className="bg-brand-content border border-brand-main p-6 rounded-[2px] sticky top-24">
              <h2 className="text-[16px] font-bold text-brand-dark uppercase tracking-wide border-b border-brand-main pb-4 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6 font-serif italic text-[14px]">
                <div className="flex justify-between items-center text-brand-dark">
                  <span>Subtotal</span>
                  <span className="font-bold">৳{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-brand-main">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-brand-main pt-4 mb-6">
                <div className="flex justify-between items-center text-brand-dark mb-1">
                  <span className="font-bold uppercase tracking-wide text-[16px]">Total</span>
                  <span className="font-bold text-[20px]">৳{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <Link to="/checkout" className="w-full block text-center bg-brand-dark text-brand-light py-3.5 rounded-[4px] font-bold uppercase text-[13px] tracking-[1px] hover:bg-brand-main border border-brand-dark hover:border-brand-main transition-colors mb-3">
                Proceed to Checkout
              </Link>
              
              <Link to="/" className="w-full block text-center text-[13px] font-bold uppercase tracking-wide text-brand-main hover:text-brand-dark hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
