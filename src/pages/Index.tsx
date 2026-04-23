import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import CartPage from '@/pages/CartPage';
import AboutPage from '@/pages/AboutPage';
import { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

export default function Index() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(i => i.id !== id));
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
    }
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={cartCount}
      />

      {currentPage === 'home' && (
        <HomePage onNavigate={setCurrentPage} onAddToCart={addToCart} />
      )}
      {currentPage === 'catalog' && (
        <CatalogPage onAddToCart={addToCart} />
      )}
      {currentPage === 'cart' && (
        <CartPage
          items={cart}
          onUpdateQty={updateQty}
          onRemove={removeFromCart}
          onNavigate={setCurrentPage}
        />
      )}
      {currentPage === 'about' && (
        <AboutPage onNavigate={setCurrentPage} />
      )}

      {/* Footer */}
      <footer className="border-t border-white/8 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <span className="text-background font-oswald font-bold text-xs">TZ</span>
              </div>
              <span className="font-oswald font-bold text-lg tracking-wider">
                TECH<span className="neon-text-cyan">ZONE</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-golos text-center">
              © 2025 TechZone. Лучшая электроника по лучшим ценам.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground font-golos">
              <button className="hover:text-neon-cyan transition-colors">Оферта</button>
              <button className="hover:text-neon-cyan transition-colors">Конфиденциальность</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
