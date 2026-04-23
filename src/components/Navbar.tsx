import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

export default function Navbar({ currentPage, onNavigate, cartCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'about', label: 'О магазине' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center neon-glow-cyan">
              <span className="text-background font-oswald font-bold text-sm">TZ</span>
            </div>
            <span className="font-oswald font-bold text-xl tracking-wider">
              TECH<span className="neon-text-cyan">ZONE</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-golos font-medium text-sm tracking-wide transition-all duration-200 relative ${
                  currentPage === item.id
                    ? 'neon-text-cyan'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-fade-in">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Поиск товаров..."
                  className="bg-muted border border-border rounded-lg px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-neon-cyan transition-colors w-48"
                />
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-muted-foreground hover:text-neon-cyan hover:bg-muted transition-all duration-200"
              >
                <Icon name="Search" size={20} />
              </button>
            )}

            {/* Cart */}
            <button
              onClick={() => onNavigate('cart')}
              className={`p-2 rounded-lg relative transition-all duration-200 ${
                currentPage === 'cart'
                  ? 'text-neon-cyan bg-muted'
                  : 'text-muted-foreground hover:text-neon-cyan hover:bg-muted'
              }`}
            >
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-neon-cyan text-background text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-slide-up">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 font-golos font-medium text-sm rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'text-neon-cyan bg-muted'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
