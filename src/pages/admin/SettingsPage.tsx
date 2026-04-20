import React from 'react';
import { Upload, Save } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-[900px] mx-auto pb-12">
      <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px] mb-6">Website Settings</h1>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        
        {/* General Settings */}
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 md:p-8 space-y-6 shadow-sm">
          <h2 className="text-[17px] font-bold text-brand-dark font-sans mb-4">General</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-brand-dark font-sans">Site Name</label>
              <input 
                type="text" 
                defaultValue="Gadget" 
                className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-sans" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-brand-dark font-sans">Tagline</label>
              <input 
                type="text" 
                defaultValue="Your trusted source for quality gadge" 
                className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-sans" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-brand-dark font-sans">Phone</label>
              <input 
                type="text" 
                defaultValue="01948615900" 
                className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-mono" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-brand-dark font-sans">Email</label>
              <input 
                type="email" 
                defaultValue="rizvisiamahmed@gmail.com" 
                className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-sans" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[13px] font-bold text-brand-dark font-sans">Address</label>
            <textarea 
              rows={3} 
              defaultValue="Khilgaon, Basabo, Dhaka, Bangladesh" 
              className="w-full py-3 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-sans resize-y"
            ></textarea>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 md:p-8 space-y-6 shadow-sm">
          <h2 className="text-[17px] font-bold text-brand-dark font-sans mb-4">Payment Methods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-brand-dark font-sans">বিকাশ নাম্বার</label>
              <input 
                type="text" 
                placeholder="01700-000000" 
                className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-mono placeholder:font-sans placeholder:text-brand-main/70" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-brand-dark font-sans">নগদ নাম্বার</label>
              <input 
                type="text" 
                placeholder="01700-000000" 
                className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-mono placeholder:font-sans placeholder:text-brand-main/70" 
              />
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 md:p-8 space-y-6 shadow-sm">
          <h2 className="text-[17px] font-bold text-brand-dark font-sans mb-4">Branding</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold text-brand-dark font-sans">Logo</h3>
              <div className="w-20 h-20 rounded-full overflow-hidden bg-brand-dark outline outline-1 outline-brand-main outline-offset-2 flex items-center justify-center">
                {/* Fallback avatar for demonstration */}
                <div className="text-brand-light text-xs text-center leading-tight p-2 flex flex-col items-center">
                   <div className="font-bold text-[18px]">G</div>
                   <div className="text-[8px] uppercase tracking-widest">Gadget</div>
                </div>
              </div>
              <div className="w-full h-24 border-2 border-brand-main/30 border-dashed hover:border-brand-main rounded-[4px] flex flex-col items-center justify-center text-brand-main hover:text-brand-dark transition-colors cursor-pointer bg-brand-light mt-2">
                 <Upload size={20} className="mb-2" />
                 <span className="text-[13px] font-serif">Upload logo</span>
              </div>
            </div>

            {/* Banner */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold text-brand-dark font-sans">Hero Banner</h3>
              <div className="w-48 h-20 rounded-[4px] overflow-hidden bg-brand-dark outline outline-1 outline-brand-main outline-offset-2">
                <img 
                  src="https://picsum.photos/seed/gadget/400/200" 
                  alt="Hero Preview" 
                  className="w-full h-full object-cover opacity-80" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full h-24 border-2 border-brand-main/30 border-dashed hover:border-brand-main rounded-[4px] flex flex-col items-center justify-center text-brand-main hover:text-brand-dark transition-colors cursor-pointer bg-brand-light mt-2">
                 <Upload size={20} className="mb-2" />
                 <span className="text-[13px] font-serif">Upload banner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Links */}
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 md:p-8 space-y-6 shadow-sm">
          <h2 className="text-[17px] font-bold text-brand-dark font-sans mb-4">Support Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-brand-dark font-sans">Facebook Page URL</label>
              <input 
                type="url" 
                placeholder="https://facebook.com/gadgetinsider" 
                className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-sans placeholder:text-brand-main/70" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-brand-dark font-sans">WhatsApp Support Number</label>
              <input 
                type="text" 
                placeholder="+8801948615900" 
                className="w-full py-2.5 px-4 rounded-[2px] border border-brand-main/50 focus:border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-mono placeholder:font-sans placeholder:text-brand-main/70" 
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
           <button type="submit" className="bg-brand-main text-brand-light px-8 py-3.5 rounded-[4px] font-bold uppercase text-[14px] tracking-wide hover:bg-brand-dark transition-colors flex items-center justify-center gap-2 shadow-sm border border-brand-dark/20">
             <Save size={18} /> Save All Settings
           </button>
        </div>

      </form>
    </div>
  );
}
