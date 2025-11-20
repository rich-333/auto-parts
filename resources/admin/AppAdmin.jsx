import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Sidebar } from './views/components/ui/sidebar/sidebar';
import { Categories } from "./views/pages/category/categories";
import { CategoriesCreate } from "./views/pages/category/categoriesCreate";
import { Dashboard } from './views/pages/dashboard/dashboard.jsx';
import { Products } from './views/pages/product/products';
import { Orders } from './views/pages/order/orders';
import { CategoriesEdit } from './views/components/categories/categoriesEdit';

export function AppAdmin() {
  return(
    <>
      <BrowserRouter>
        <Sidebar/>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path='/orders' element={<Orders/>} />

            <Route path="/categories/create" element={<CategoriesCreate />} />
            <Route path="/categories/edit/:id" element={<CategoriesEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}