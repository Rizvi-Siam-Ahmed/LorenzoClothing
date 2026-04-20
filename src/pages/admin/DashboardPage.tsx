import React from 'react';
import { Package, ShoppingCart, Users, FolderTree, ArrowUpRight } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

export default function DashboardPage() {
  const stats = [
    { title: 'Total Products', value: '22', icon: <Package size={20} />, link: '/admin/products' },
    { title: 'Total Orders', value: '2', icon: <ShoppingCart size={20} />, link: '/admin/orders' },
    { title: 'Total Customers', value: '2', icon: <Users size={20} />, link: '/admin/customers' },
    { title: 'Total Categories', value: '13', icon: <FolderTree size={20} />, link: '/admin/categories' },
  ];

  const pieData = [
    { name: 'Completed', value: 100 },
  ];

  const barData = [
    { name: 'Apr 2026', sales: 1200 },
  ];

  const BRAND_MAIN = '#a2762a';
  const BRAND_DARK = '#513b15';
  const BRAND_MUTED = '#c49952';

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px]">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6 relative group transition-colors hover:border-brand-dark">
            <div className="w-10 h-10 rounded-full bg-brand-main/10 text-brand-main flex items-center justify-center mb-6">
              {stat.icon}
            </div>
            
            <a href={stat.link} className="absolute top-6 right-6 text-brand-main opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={18} />
            </a>

            <div>
              <h3 className="text-3xl font-bold text-brand-dark mb-1 font-sans">{stat.value}</h3>
              <p className="text-[13px] font-serif text-brand-main uppercase tracking-wide">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {/* Order Status Distribution */}
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6">
          <h2 className="text-[16px] font-bold text-brand-dark uppercase tracking-[1px] mb-6">Order Status Distribution</h2>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={120}
                  fill={BRAND_MAIN}
                  dataKey="value"
                  stroke={BRAND_DARK}
                  strokeWidth={2}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={BRAND_MAIN} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#d5a95d', borderColor: '#a2762a', color: '#513b15' }}
                  itemStyle={{ color: '#513b15' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Sales */}
        <div className="bg-brand-content/50 border border-brand-main rounded-[4px] p-6">
          <h2 className="text-[16px] font-bold text-brand-dark uppercase tracking-[1px] mb-6">Monthly Sales</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={BRAND_MUTED} vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={{ stroke: BRAND_MAIN }}
                  tickLine={false}
                  tick={{ fill: BRAND_DARK, fontSize: 13, fontFamily: 'Georgia, serif' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={{ stroke: BRAND_MAIN }}
                  tickLine={false}
                  tick={{ fill: BRAND_DARK, fontSize: 13, fontFamily: 'Georgia, serif' }}
                  dx={-10}
                />
                <Tooltip 
                  cursor={{ fill: '#c49952', opacity: 0.2 }}
                  contentStyle={{ backgroundColor: '#d5a95d', borderColor: '#a2762a', color: '#513b15' }}
                  itemStyle={{ color: '#513b15', fontWeight: 'bold' }}
                />
                <Bar dataKey="sales" fill={BRAND_MAIN} radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
