import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="w-full flex justify-center items-center py-20 px-6">
      <div className="bg-brand-content w-full max-w-lg rounded-[4px] border border-brand-main p-8 md:p-10 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px] mb-2">Create Account</h1>
          <p className="text-brand-main text-sm font-serif italic">Join our community today</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Phone Number</label>
            <input 
              type="tel" 
              placeholder="01XXXXXXXXX" 
              className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Email (optional)</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">District / জেলা</label>
              <select className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif">
                <option value="">Select District</option>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
              </select>
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Thana / Upazila</label>
              <select className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif">
                <option value="">Select district first</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Full Address</label>
            <textarea 
              placeholder="House/Road/Village, landmark..." 
              rows={3}
              className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif resize-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Min 8 characters" 
                className="w-full py-2.5 px-4 pr-10 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-main hover:text-brand-dark"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button className="w-full bg-brand-dark text-brand-light py-3 rounded-[4px] font-bold uppercase text-[13px] tracking-[1px] hover:bg-brand-main border border-brand-dark hover:border-brand-main transition-colors mt-6">
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center text-[13px] font-bold text-brand-main">
          Already have an account? <Link to="/login" className="text-brand-dark hover:underline uppercase tracking-wide ml-1">Sign In</Link>
        </div>
      </div>
    </main>
  );
}
