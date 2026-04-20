import React from 'react';
import { Plus, FolderTree, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoriesOverviewPage() {

  const categories = [
    { name: 'Airpod & TWS', icon: '🎧' },
    { name: 'Bluetooth Speaker', icon: '🔊' },
    { name: 'Cable', icon: '🔌' },
    { name: 'Charger', icon: '⚡' },
    { name: 'Cooling Fan', icon: '❄️' },
    { name: 'Decorator', icon: '✨' },
    { name: 'Gadget', icon: '🎮' },
    { name: 'Headphone', icon: '🎧' },
    { name: 'Neckband', icon: '🎵' },
    { name: 'Pendrive', icon: '💾' },
    { name: 'Power Bank', icon: '🔋' },
    { name: 'Smart Watch', icon: '⌚' },
    { name: 'TV Box', icon: '📺' },
  ];

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px]">Categories</h1>
        <Link 
          to="/admin/categories/add" 
          className="bg-brand-main text-brand-light px-6 py-2.5 rounded-[4px] font-bold uppercase text-[13px] tracking-wide hover:bg-brand-dark transition-colors flex items-center gap-2"
        >
          <Plus size={18} /> Add Category
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 flex items-center gap-6 shadow-sm w-fit min-w-[240px]">
          <div className="w-12 h-12 rounded-full bg-brand-main/10 text-brand-main flex items-center justify-center shrink-0">
            <FolderTree size={24} />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-brand-dark font-sans leading-none mb-1">13</h3>
            <p className="text-[13px] font-serif text-brand-main uppercase tracking-wide">Total Categories</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-brand-light border border-brand-main/30 hover:border-brand-main rounded-[4px] p-4 flex items-center justify-between group transition-colors shadow-sm cursor-default">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-brand-content flex items-center justify-center text-lg">
                 {category.icon}
              </div>
              <span className="font-bold text-[14px] text-brand-dark font-sans">{category.name}</span>
            </div>
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-brand-dark hover:text-brand-main transition-colors" title="Edit">
                <Edit size={16} />
              </button>
              <button className="text-red-700 hover:text-red-900 transition-colors" title="Delete">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
