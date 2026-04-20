import { Heart, LogIn, MapPin, Phone, Search, ShoppingCart, Truck, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-brand-light border-b border-brand-main sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center py-2 px-6 border-b border-brand-main/50 text-brand-dark text-sm font-medium">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span>rizvisiamahmed@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>01948615900</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>Khilgaon, Basabo, Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6 gap-4 md:gap-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-[28px] font-bold text-brand-dark flex flex-col uppercase tracking-[2px]">
          <span className="leading-none">Lorenzo</span>
          <span className="text-sm font-medium text-brand-main tracking-[2px]">Clothing</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 w-full max-w-2xl relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full py-2 px-4 pr-12 rounded-[20px] border border-brand-main bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-main focus:border-brand-main text-brand-dark transition-all placeholder-brand-dark/60 font-serif"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-main hover:text-brand-dark p-1">
            <Search size={20} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 sm:gap-7 text-brand-dark">
          <Link to="/track-order" className="hidden sm:flex items-center gap-2 hover:text-brand-main font-medium transition-colors">
            <Truck size={20} />
            <span className="text-sm">Track Order</span>
          </Link>
          
          <Link to="/cart" className="relative hover:text-brand-main transition-colors group">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-brand-main text-brand-light text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
          </Link>
          
          <button className="relative hover:text-brand-main transition-colors group hidden sm:block">
            <Heart size={22} />
          </button>
          
          <Link to="/login" className="hover:text-brand-main transition-colors">
            <User size={22} />
          </Link>
          
          <Link to="/register" className="hover:text-brand-main transition-colors">
            <LogIn size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
}
