import React, { useState } from 'react';
import { 
  DollarSign, CheckCircle2, Truck, XCircle, 
  Package, Clock, AlertTriangle, ShoppingCart, 
  Search, Eye, Trash2, X
} from 'lucide-react';
import { PRODUCTS } from '../../data';

type Order = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  district: string;
  address: string;
  date: string;
  total: number;
  paymentStatus: string;
  orderStatus: string;
  items: {
    product: any;
    quantity: number;
    price: number;
  }[];
  shippingFee: number;
};

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-2026-8192',
    customerName: 'fdsdfgdf',
    customerPhone: '01878695897',
    customerEmail: 'N/A',
    district: 'Chattogram',
    address: 'xcvzxcvzxcvzx',
    date: 'April 20, 2026',
    total: 519.00,
    paymentStatus: 'Pending',
    orderStatus: 'Pending',
    shippingFee: 120.00,
    items: [
      {
        product: PRODUCTS[0],
        quantity: 1,
        price: 399.00
      }
    ]
  },
  {
    id: 'ORD-2026-7258',
    customerName: 'Abir',
    customerPhone: '01900000000',
    customerEmail: 'abir@example.com',
    district: 'Dhaka',
    address: 'Mirpur 10',
    date: 'April 20, 2026',
    total: 710.00,
    paymentStatus: 'Pending',
    orderStatus: 'Pending',
    shippingFee: 80.00,
    items: [
      {
        product: PRODUCTS[1],
        quantity: 1,
        price: 630.00
      }
    ]
  }
];

export default function OrdersOverviewPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const stats = [
    { title: 'Total Sales', value: '৳1229.00', icon: <DollarSign size={20} /> },
    { title: 'Delivered', value: '0', icon: <CheckCircle2 size={20} /> },
    { title: 'Shipped', value: '0', icon: <Truck size={20} /> },
    { title: 'Cancelled', value: '0', icon: <XCircle size={20} /> },
    { title: 'Processing', value: '0', icon: <Package size={20} /> },
    { title: 'Pending', value: '2', icon: <Clock size={20} /> },
    { title: 'Not Received', value: '0', icon: <AlertTriangle size={20} /> },
    { title: 'Total Orders', value: '2', icon: <ShoppingCart size={20} /> },
  ];

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px]">Orders</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-brand-content/50 border border-brand-main rounded-[4px] p-5 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-brand-main/10 text-brand-main flex items-center justify-center mb-4">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-1 font-sans leading-none">{stat.value}</h3>
              <p className="text-[12px] font-serif text-brand-main uppercase tracking-wide">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-main/60" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, phone, or order number..."
            className="w-full pl-10 pr-4 py-2.5 rounded-[2px] border border-brand-main bg-brand-content focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif"
          />
        </div>
        <select className="w-full sm:w-48 py-2.5 px-4 rounded-[2px] border border-brand-main bg-brand-content focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark font-serif">
          <option value="All Status">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-brand-content/50 border border-brand-main rounded-[4px] overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-brand-main">
              <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Order ID</th>
              <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Customer</th>
              <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Date</th>
              <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Total</th>
              <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Payment</th>
              <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide">Status</th>
              <th className="py-4 px-6 text-[13px] font-bold text-brand-dark uppercase tracking-wide text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-main/50">
            {MOCK_ORDERS.map((order) => (
              <tr key={order.id} className="hover:bg-brand-main/5 transition-colors">
                <td className="py-4 px-6 font-mono text-[13px] text-brand-dark tracking-tight">{order.id}</td>
                <td className="py-4 px-6 font-serif text-[14px] text-brand-dark">{order.customerName}</td>
                <td className="py-4 px-6 font-serif text-[14px] text-brand-main">{order.date}</td>
                <td className="py-4 px-6 font-bold text-[14px] text-brand-dark">৳{order.total.toLocaleString()}</td>
                <td className="py-4 px-6">
                  <select defaultValue={order.paymentStatus} className="py-1 px-2 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none text-[13px] font-serif text-brand-dark">
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                  </select>
                </td>
                <td className="py-4 px-6">
                  <select defaultValue={order.orderStatus} className="py-1 px-2 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none text-[13px] font-serif text-brand-dark">
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <button 
                      onClick={() => setSelectedOrder(order)}
                      className="text-brand-dark hover:text-brand-main transition-colors" title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button className="text-red-700 hover:text-red-900 transition-colors" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/60 backdrop-blur-sm p-4">
          <div className="bg-brand-light w-full max-w-2xl rounded-[4px] border border-brand-main shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-main">
              <h2 className="text-xl font-bold text-brand-dark uppercase tracking-wide">
                Order Details — <span className="font-mono text-[18px]">{selectedOrder.id}</span>
              </h2>
              <button 
                onClick={() => setSelectedOrder(null)}
                className="text-brand-main hover:text-brand-dark transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 font-serif text-[14px]">
              
              {/* Customer Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-start gap-2">
                  <span className="text-brand-main italic min-w-[80px]">Customer:</span>
                  <span className="font-bold text-brand-dark">{selectedOrder.customerName}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-main italic min-w-[80px]">Phone:</span>
                  <span className="font-bold text-brand-dark">{selectedOrder.customerPhone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-main italic min-w-[80px]">Email:</span>
                  <span className="font-bold text-brand-dark">{selectedOrder.customerEmail}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-main italic min-w-[80px]">District:</span>
                  <span className="font-bold text-brand-dark">{selectedOrder.district}</span>
                </div>
                <div className="flex items-start gap-2 sm:col-span-2">
                  <span className="text-brand-main italic min-w-[80px]">Address:</span>
                  <span className="font-bold text-brand-dark">{selectedOrder.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-main italic min-w-[80px]">Payment:</span>
                  <span className="font-bold text-brand-dark uppercase">COD</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-main italic min-w-[80px]">Status:</span>
                  <span className="font-bold text-brand-dark">{selectedOrder.orderStatus}</span>
                </div>
              </div>

              <div className="border-t border-brand-main/50 pt-6">
                <h3 className="font-bold text-[15px] font-sans uppercase tracking-wide text-brand-dark mb-4">Items</h3>
                
                <div className="space-y-4 mb-6">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-brand-content/50 p-3 border border-brand-main/20 rounded-[2px]">
                      <div className="flex items-center gap-3">
                        <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-contain bg-brand-light p-1 border border-brand-main/30 rounded-[2px]" />
                        <div>
                          <p className="font-bold text-brand-dark font-sans text-[14px] leading-tight mb-0.5">{item.product.name}</p>
                          <p className="text-[12px] text-brand-main italic">Qty: {item.quantity} × ৳{(item.price).toLocaleString()}</p>
                        </div>
                      </div>
                      <span className="font-bold text-[15px] text-brand-dark">৳{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-brand-main/30">
                   <div className="flex justify-between items-center">
                     <span className="text-brand-main italic">Subtotal</span>
                     <span className="font-bold text-brand-dark text-[15px]">৳{(selectedOrder.total - selectedOrder.shippingFee).toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-brand-main italic">Shipping</span>
                     <span className="font-bold text-brand-dark text-[15px]">৳{selectedOrder.shippingFee.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between items-center pt-3 border-t border-brand-main/50">
                     <span className="font-bold font-sans uppercase tracking-wide text-brand-dark text-[16px]">Total</span>
                     <span className="font-bold text-[18px] text-brand-main">৳{selectedOrder.total.toLocaleString()}</span>
                   </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-brand-main/80 bg-brand-content/30">
               <button className="w-full bg-[#d64545] text-white py-3.5 rounded-[4px] font-bold uppercase text-[13px] tracking-wide hover:bg-red-800 transition-colors flex items-center justify-center gap-2">
                 <Trash2 size={16} /> Permanently Delete This Order
               </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
