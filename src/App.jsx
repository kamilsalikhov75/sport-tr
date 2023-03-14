import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getCart, saveCart } from './cart-controller';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { About } from './pages/about/about';
import { Cart } from './pages/cart/cart';
import { Catalog } from './pages/catalog/catalog';
import { Contacts } from './pages/contacts/contacts';
import { Main } from './pages/main/main';
import { ProductPage } from './pages/product-page/product-page';
import { ProductsPage } from './pages/products-page/products-page';

function App() {
  const [cart, setCart] = useState(getCart());

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/index.html" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<ProductsPage />} />
        <Route
          path="/product/:id"
          element={<ProductPage cart={cart} setCart={setCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
