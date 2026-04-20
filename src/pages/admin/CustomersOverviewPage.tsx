import React from 'react';
import { Users } from 'lucide-react';

export default function CustomersOverviewPage() {
  const customers: any[] = []; // empty array to match the "No customers yet" empty state

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px]">Customers</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-brand-content border border-brand-main rounded-[4px] p-6 flex flex-col items-start gap-4 shadow-sm w-fit min-w-[240px]">
          <div className="w-12 h-12 rounded-full bg-brand-main/10 text-brand-main flex items-center justify-center shrink-0">
            <Users size={24} />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-brand-dark font-sans leading-none mb-1">0</h3>
            <p className="text-[13px] font-serif text-brand-main uppercase tracking-wide">Total Customers</p>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-brand-content border border-brand-main rounded-[4px] overflow-hidden min-h-[300px] flex flex-col shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-brand-main/50">
                <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide w-16">#</th>
                <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Customer</th>
                <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Phone</th>
                <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Email</th>
                <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">District</th>
                <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Orders</th>
                <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Joined</th>
              </tr>
            </thead>
            {customers.length > 0 ? (
              <tbody className="divide-y divide-brand-main/30">
                {customers.map((customer, index) => (
                  <tr key={index} className="hover:bg-brand-main/5 transition-colors">
                    <td className="py-4 px-6 font-mono text-[13px] text-brand-dark">{index + 1}</td>
                    <td className="py-4 px-6 font-serif text-[14px] text-brand-dark">{customer.name}</td>
                    <td className="py-4 px-6 font-mono text-[14px] text-brand-dark">{customer.phone}</td>
                    <td className="py-4 px-6 font-serif text-[14px] text-brand-main">{customer.email}</td>
                    <td className="py-4 px-6 font-serif text-[14px] text-brand-dark">{customer.district}</td>
                    <td className="py-4 px-6 font-bold text-[14px] text-brand-dark">{customer.orders}</td>
                    <td className="py-4 px-6 font-serif text-[14px] text-brand-main">{customer.joined}</td>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
        
        {customers.length === 0 && (
          <div className="flex-1 flex items-center justify-center p-8 text-[14px] text-brand-main font-serif italic border-t border-transparent">
            No customers yet
          </div>
        )}
      </div>
    </div>
  );
}
