import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, LayoutDashboard, Package, ShoppingCart, 
  Users, FolderTree, FileText, Settings, LogOut, ArrowLeft
} from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Products', path: '/admin/products', icon: <Package size={18} /> },
    { name: 'Orders', path: '/admin/orders', icon: <ShoppingCart size={18} /> },
    { name: 'Customers', path: '/admin/customers', icon: <Users size={18} /> },
    { name: 'Categories', path: '/admin/categories', icon: <FolderTree size={18} /> },
    { name: 'Notepad', path: '/admin/notepad', icon: <FileText size={18} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-brand-light font-serif">
      {/* Sidebar */}
      <aside className="w-64 border-r border-brand-main flex flex-col bg-brand-content/50">
        <div className="h-16 flex items-center justify-between px-6 border-b border-brand-main z-10 shrink-0">
          <h2 className="font-bold text-brand-dark text-[15px] uppercase tracking-wide">Admin Panel</h2>
          <button className="text-brand-main hover:text-brand-dark transition-colors">
            <ChevronLeft size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-[4px] text-[14px] font-bold tracking-wide transition-colors ${
                  isActive 
                    ? 'bg-brand-main text-brand-light' 
                    : 'text-brand-dark hover:bg-brand-main/10'
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-brand-main space-y-1">
          <button 
            onClick={() => navigate('/')} 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[4px] text-[14px] font-bold tracking-wide text-brand-dark hover:bg-brand-main/10 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Store
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[4px] text-[14px] font-bold tracking-wide text-red-900 hover:bg-red-900/10 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-brand-main bg-brand-content/50 shrink-0">
          <h1 className="font-bold text-brand-dark text-lg uppercase tracking-[2px]">
            <span className="leading-none">Lorenzo</span>
            <span className="text-brand-main ml-1">Clothing</span>
          </h1>
          
          <div className="flex items-center gap-4">
            <span className="text-[13px] font-bold text-brand-main italic hidden sm:block">rizvisiamahmed@gmail.com</span>
            <div className="w-8 h-8 rounded-full bg-brand-main text-brand-light flex items-center justify-center font-bold text-sm uppercase">
              R
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 bg-brand-light">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
