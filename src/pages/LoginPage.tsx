import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="w-full flex justify-center items-center py-20 px-6">
      <div className="bg-brand-content w-full max-w-md rounded-[4px] border border-brand-main p-8 md:p-10 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px] mb-2">Welcome Back</h1>
          <p className="text-brand-main text-sm font-serif italic">Sign in to your account</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+880 (1XX) XXX-XXXX" 
              className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-wide">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter password" 
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

          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded-[2px] border-brand-main accent-brand-main text-brand-main focus:ring-brand-main bg-transparent" />
              <span className="text-sm font-bold text-brand-main uppercase tracking-wide text-[11px]">Remember me</span>
            </label>
            <Link to="#" className="text-[11px] font-bold uppercase tracking-wide text-brand-main hover:text-brand-dark hover:underline">
              Forgot password?
            </Link>
          </div>

          <button className="w-full bg-brand-dark text-brand-light py-3 rounded-[4px] font-bold uppercase text-[13px] tracking-[1px] hover:bg-brand-main border border-brand-dark hover:border-brand-main transition-colors mt-4">
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-[13px] font-bold text-brand-main">
          Don't have an account? <Link to="/register" className="text-brand-dark hover:underline uppercase tracking-wide ml-1">Register</Link>
        </div>
      </div>
    </main>
  );
}
