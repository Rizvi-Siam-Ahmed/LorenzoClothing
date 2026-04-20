import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import TrackOrderPage from './pages/TrackOrderPage';
import DashboardPage from './pages/admin/DashboardPage';
import ProductsOverviewPage from './pages/admin/ProductsOverviewPage';
import AddProductPage from './pages/admin/AddProductPage';
import OrdersOverviewPage from './pages/admin/OrdersOverviewPage';
import NotepadPage from './pages/admin/NotepadPage';
import CustomersOverviewPage from './pages/admin/CustomersOverviewPage';
import CategoriesOverviewPage from './pages/admin/CategoriesOverviewPage';
import AddCategoryPage from './pages/admin/AddCategoryPage';
import SettingsPage from './pages/admin/SettingsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductsOverviewPage />} />
          <Route path="products/add" element={<AddProductPage />} />
          <Route path="orders" element={<OrdersOverviewPage />} />
          <Route path="customers" element={<CustomersOverviewPage />} />
          <Route path="categories" element={<CategoriesOverviewPage />} />
          <Route path="categories/add" element={<AddCategoryPage />} />
          <Route path="notepad" element={<NotepadPage />} />
          <Route path="settings" element={<SettingsPage />} />
          {/* Add more admin routes here later */}
        </Route>

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<ConfirmationPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

