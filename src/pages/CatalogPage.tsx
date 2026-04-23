import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';
import { products, categories, Product } from '@/data/products';

interface CatalogPageProps {
  onAddToCart: (product: Product) => void;
}

const SORT_OPTIONS = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price_asc', label: 'Цена: по возрастанию' },
  { value: 'price_desc', label: 'Цена: по убыванию' },
  { value: 'rating', label: 'По рейтингу' },
];

const BRANDS = ['Все бренды', 'Apple', 'Samsung', 'Asus', 'MSI', 'Lenovo', 'AMD', 'ASUS ROG', 'Google', 'Xiaomi', 'Corsair'];

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedBrand, setSelectedBrand] = useState('Все бренды');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.specs.some(s => s.toLowerCase().includes(q))
      );
    }

    if (selectedBrand !== 'Все бренды') {
      list = list.filter(p => p.brand === selectedBrand);
    }

    list = list.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price_asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => b.reviews - a.reviews);
    }

    return list;
  }, [activeCategory, searchQuery, sortBy, selectedBrand, priceRange]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-oswald font-black text-5xl text-foreground mb-2">
            КАТАЛОГ <span className="neon-text-cyan">ТОВАРОВ</span>
          </h1>
          <p className="text-muted-foreground font-golos">
            Найдено товаров: <span className="text-neon-cyan font-semibold">{filtered.length}</span>
          </p>
        </div>

        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию, бренду, характеристикам..."
              className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none transition-colors font-golos"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={16} />
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-3 bg-muted border border-border rounded-xl text-foreground focus:border-neon-cyan focus:outline-none transition-colors font-golos cursor-pointer"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-golos font-medium transition-all ${
              filtersOpen
                ? 'bg-neon-cyan text-background border-neon-cyan'
                : 'bg-muted border-border text-foreground hover:border-neon-cyan'
            }`}
          >
            <Icon name="SlidersHorizontal" size={18} />
            Фильтры
          </button>
        </div>

        {/* Filters panel */}
        {filtersOpen && (
          <div className="glass border border-white/10 rounded-2xl p-6 mb-6 animate-slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Brand */}
              <div>
                <p className="font-golos font-semibold text-sm text-foreground mb-3">Бренд</p>
                <div className="flex flex-wrap gap-2">
                  {BRANDS.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-golos font-medium transition-all ${
                        selectedBrand === brand
                          ? 'bg-neon-cyan text-background'
                          : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-card border border-border'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
              {/* Price */}
              <div>
                <p className="font-golos font-semibold text-sm text-foreground mb-3">
                  Цена: до <span className="neon-text-cyan">{priceRange[1].toLocaleString('ru-RU')} ₽</span>
                </p>
                <input
                  type="range"
                  min={0}
                  max={150000}
                  step={5000}
                  value={priceRange[1]}
                  onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-neon-cyan"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1 font-golos">
                  <span>0 ₽</span>
                  <span>150 000 ₽</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-golos font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-neon-cyan text-background neon-glow-cyan'
                  : 'glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-neon-cyan/30'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="font-oswald text-2xl text-foreground mb-2">Ничего не найдено</p>
            <p className="text-muted-foreground font-golos">Попробуйте изменить фильтры или поисковый запрос</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
