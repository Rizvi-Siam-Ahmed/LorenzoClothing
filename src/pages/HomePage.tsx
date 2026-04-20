import { ArrowRight, ChevronRight, Filter } from 'lucide-react';
import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import * as Icons from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const featuredProducts = PRODUCTS.filter(p => p.featured);
  
  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category.toLowerCase() === activeCategory);

  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon size={24} /> : <Icons.HelpCircle size={24} />;
  };

  return (
    <main className="w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full bg-brand-main text-brand-light py-16 md:py-24 relative overflow-hidden border-b border-brand-main">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-light via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-[2px] leading-tight uppercase text-brand-light">
              Elegance in Every <br/> Thread
            </h1>
            <p className="text-brand-light/90 text-lg md:text-xl max-w-md pb-4 font-serif">
              Explore the latest collections of premium ethnic and western wear. Elevate your style.
            </p>
            <button className="bg-brand-dark text-brand-light px-8 py-3.5 rounded-[4px] font-bold uppercase tracking-[1px] hover:bg-brand-light hover:text-brand-dark transition-colors flex items-center gap-2 border border-brand-dark">
              Browse Collection
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="hidden md:flex w-full md:w-1/2 justify-end">
            {/* Abstract representation of model/clothes instead of broken placeholder image */}
            <div className="w-80 h-[380px] rounded-[4px] bg-brand-muted border border-brand-light overflow-hidden relative shadow-lg">
              <img src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=80" alt="Hero Model" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Shop Categories */}
      <section className="w-full max-w-7xl mx-auto px-6 mt-16">
        <div className="flex justify-between items-end mb-8 border-b border-brand-main pb-2">
          <h2 className="text-[14px] font-bold text-brand-main uppercase tracking-[1px]">Shop Categories</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {CATEGORIES.map(category => (
            <div 
              key={category.id} 
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center gap-3 cursor-pointer group`}
            >
              <div className={`w-20 h-20 rounded-[4px] border flex items-center justify-center transition-all duration-300 ${activeCategory === category.id ? 'bg-brand-main text-brand-light border-brand-main' : 'bg-transparent text-brand-main border-brand-main hover:bg-brand-main/10'}`}>
                {renderIcon(category.icon)}
              </div>
              <span className={`text-[13px] uppercase font-bold tracking-wide ${activeCategory === category.id ? 'text-brand-main' : 'text-brand-dark group-hover:text-brand-main'}`}>{category.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-7xl mx-auto px-6 mt-20">
        <div className="flex justify-between items-end mb-8 border-b border-brand-main pb-2">
          <h2 className="text-[14px] font-bold text-brand-main uppercase tracking-[1px]">Featured Products</h2>
          <button className="text-brand-main hover:text-brand-dark font-bold uppercase flex items-center gap-1 text-[12px] bg-transparent border border-brand-main px-4 py-1.5 rounded-[4px] transition-colors">
            View All <ChevronRight size={14} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="w-full max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-brand-muted border border-brand-main rounded-[4px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-6 z-10">
            <div className="bg-brand-light border border-brand-main p-4 rounded-[4px] text-brand-main">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
            </div>
            <div>
              <h3 className="text-xl md:text-[24px] font-bold text-brand-dark mb-1 uppercase tracking-[1px]">Flash Sale — Up to 40% Off!</h3>
              <p className="text-brand-dark/90 font-serif italic">Limited time deals on top collections. Don't miss out!</p>
            </div>
          </div>
          <button className="bg-brand-dark text-brand-light px-8 py-3.5 rounded-[4px] font-bold uppercase tracking-[1px] hover:bg-brand-light hover:text-brand-dark border border-brand-dark transition-colors whitespace-nowrap z-10 text-sm">
            Shop Deals
          </button>
          {/* Decorative background mark */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-brand-light opacity-30 rounded-full blur-3xl mix-blend-multiply"></div>
        </div>
      </section>

      {/* All Products & Filters */}
      <section className="w-full max-w-7xl mx-auto px-6 mt-16 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-brand-main pb-4">
          <h2 className="text-[14px] font-bold text-brand-main uppercase tracking-[1px]">All Products</h2>
          
          <div className="flex flex-wrap items-center gap-3">
             <button className="flex items-center gap-2 border border-brand-main text-brand-main px-4 py-2 rounded-[4px] hover:bg-brand-main/10 transition-colors text-[12px] uppercase font-bold tracking-wide">
               <Filter size={14} /> Filters
             </button>
             <select className="border border-brand-main text-brand-main px-4 py-2 rounded-[4px] bg-transparent hover:bg-brand-main/5 focus:outline-none focus:ring-1 focus:ring-brand-main text-[12px] uppercase font-bold tracking-wide cursor-pointer font-serif">
                <option>Filter by Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
             </select>
             <select className="border border-brand-main text-brand-main px-4 py-2 rounded-[4px] bg-transparent hover:bg-brand-main/5 focus:outline-none focus:ring-1 focus:ring-brand-main text-[12px] uppercase font-bold tracking-wide cursor-pointer font-serif">
                <option>Filter by Color</option>
                <option>Black</option>
                <option>White</option>
                <option>Blue</option>
                <option>Red</option>
             </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="w-full py-20 text-center text-brand-dark/50">
            No products found for this category.
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="border border-brand-main text-brand-main font-bold uppercase tracking-wide px-8 py-3 rounded-[4px] hover:bg-brand-main hover:text-brand-light transition-colors text-sm">
              Load More Products
            </button>
          </div>
        )}
      </section>

    </main>
  );
}
