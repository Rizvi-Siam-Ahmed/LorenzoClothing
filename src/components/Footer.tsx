import { Facebook, MapPin, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-light pt-16 pb-8 border-t border-brand-main">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand info */}
        <div className="space-y-4">
          <Link to="/" className="text-[28px] font-bold text-brand-dark flex flex-col uppercase tracking-[2px] mb-6">
            <span className="leading-none">Lorenzo</span>
            <span className="text-sm font-medium text-brand-main tracking-[2px]">Clothing</span>
          </Link>
          <p className="text-brand-dark/70 text-sm leading-relaxed">
            Your trusted source for premium and comfortable everyday fashion in Bangladesh. Discover the finest selection of clothing.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-main hover:text-brand-light hover:border-brand-main transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-main hover:text-brand-light hover:border-brand-main transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[14px] font-bold text-brand-dark uppercase tracking-[2px] mb-6">QUICK LINKS</h3>
          <ul className="space-y-3">
            {['All Products', 'New Arrivals', 'Best Sellers', 'Flash Sale', 'About Us'].map((link) => (
              <li key={link}>
                <Link to="#" className="text-brand-dark/70 hover:text-brand-main text-sm transition-colors">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-[14px] font-bold text-brand-dark uppercase tracking-[2px] mb-6">CUSTOMER SERVICE</h3>
          <ul className="space-y-3">
            {['Track Order', 'Returns & Exchanges', 'Shipping Policy', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
              <li key={link}>
                <Link to="#" className="text-brand-dark/70 hover:text-brand-main text-sm transition-colors">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[14px] font-bold text-brand-dark uppercase tracking-[2px] mb-6">CONTACT US</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-brand-dark/70 text-sm">
              <MapPin size={18} className="text-brand-main shrink-0 mt-0.5" />
              <span>Khilgaon, Basabo, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-start gap-3 text-brand-dark/70 text-sm">
              <Phone size={18} className="text-brand-main shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span>01948615900</span>
                <span>01943944033</span>
              </div>
            </li>
            <li className="flex items-center gap-3 text-brand-dark/70 text-sm">
              <Mail size={18} className="text-brand-main shrink-0" />
              <span>rizvisiamahmed@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-brand-main/50 text-center text-sm text-brand-dark">
        <p>&copy; {new Date().getFullYear()} Lorenzo Clothing Bangladesh. All rights reserved.</p>
      </div>
    </footer>
  );
}
