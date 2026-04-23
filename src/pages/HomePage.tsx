import { useState } from 'react';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Product } from '@/data/products';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product) => void;
}

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredProducts = products.slice(0, 4);
  const hits = products.filter(p => p.badge === 'Хит продаж' || p.badge === 'Хит' || p.badge === 'Новинка');

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden grid-bg">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow delay-300" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-cyan/30 mb-6 animate-slide-up">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-sm font-golos text-neon-cyan">Новые поступления 2025</span>
              </div>

              <h1 className="font-oswald font-black text-6xl sm:text-7xl lg:text-8xl leading-none mb-6 animate-slide-up delay-100">
                ТЕХНИКА
                <br />
                <span className="neon-text-cyan">БУДУЩЕГО</span>
                <br />
                <span className="text-4xl sm:text-5xl text-muted-foreground">уже сегодня</span>
              </h1>

              <p className="font-golos text-lg text-muted-foreground mb-8 max-w-md leading-relaxed animate-slide-up delay-200">
                Ноутбуки, смартфоны, планшеты и комплектующие для ПК. 
                Лучшие бренды по выгодным ценам с гарантией и быстрой доставкой.
              </p>

              <div className="flex gap-4 animate-slide-up delay-300">
                <button
                  onClick={() => onNavigate('catalog')}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-neon-cyan text-background font-golos font-bold text-base neon-glow-cyan hover:scale-105 transition-all duration-200"
                >
                  <Icon name="Zap" size={20} />
                  Смотреть каталог
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-white/20 text-foreground font-golos font-semibold text-base hover:border-neon-cyan/50 transition-all duration-200"
                >
                  О магазине
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 animate-slide-up delay-400">
                {[
                  { value: '5000+', label: 'товаров' },
                  { value: '15 лет', label: 'на рынке' },
                  { value: '98%', label: 'довольных' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="font-oswald font-bold text-3xl neon-text-cyan">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-golos">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-3xl blur-2xl" />
              <img
                src="https://cdn.poehali.dev/projects/1ef7ab98-beb5-48de-9dcf-5cbcbbf21d72/files/a5f7645d-7628-4af1-a290-0492d2ab81f6.jpg"
                alt="Ноутбук"
                className="relative z-10 w-full rounded-3xl border border-neon-cyan/20 shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 border border-neon-cyan/30 z-20 animate-slide-up delay-500">
                <p className="text-xs text-muted-foreground font-golos">Бестселлер</p>
                <p className="font-oswald font-bold text-lg neon-text-cyan">GameForce Pro</p>
                <p className="font-golos font-bold text-foreground">от 124 900 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-oswald font-bold text-4xl text-foreground mb-8">
          КАТЕГОРИИ <span className="neon-text-purple">ТОВАРОВ</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.slice(1).map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => onNavigate('catalog')}
              className={`glass rounded-2xl p-6 text-left border border-white/8 card-hover group animate-slide-up delay-${(i + 1) * 100}`}
            >
              <span className="text-4xl mb-3 block">{cat.icon}</span>
              <p className="font-oswald font-semibold text-lg text-foreground group-hover:text-neon-cyan transition-colors">
                {cat.label}
              </p>
              <p className="text-xs text-muted-foreground font-golos mt-1 flex items-center gap-1">
                Смотреть все <Icon name="ArrowRight" size={12} />
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-oswald font-bold text-4xl text-foreground">
              ПОПУЛЯРНЫЕ <span className="neon-text-cyan">ТОВАРЫ</span>
            </h2>
            <button
              onClick={() => onNavigate('catalog')}
              className="flex items-center gap-2 text-neon-cyan font-golos font-medium hover:gap-3 transition-all"
            >
              Все товары <Icon name="ArrowRight" size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass border border-neon-cyan/20 p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-transparent to-neon-purple/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/15 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="text-neon-cyan font-golos font-semibold mb-2">⚡ Специальное предложение</p>
              <h3 className="font-oswald font-black text-5xl text-foreground mb-3">
                ДО -30%<br />
                <span className="neon-text-purple">НА СМАРТФОНЫ</span>
              </h3>
              <p className="text-muted-foreground font-golos">Только до конца месяца. Успей оформить заказ!</p>
            </div>
            <button
              onClick={() => onNavigate('catalog')}
              className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl bg-neon-purple text-white font-golos font-bold text-base neon-glow-purple hover:scale-105 transition-all duration-200"
            >
              <Icon name="Smartphone" size={20} />
              Выбрать смартфон
            </button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald font-bold text-4xl text-foreground mb-12 text-center">
            ПОЧЕМУ <span className="neon-text-cyan">TECHZONE</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Truck', title: 'Быстрая доставка', desc: 'Доставим за 1–2 дня по всей России' },
              { icon: 'Shield', title: 'Гарантия', desc: 'Официальная гарантия 12–24 месяца' },
              { icon: 'RefreshCw', title: 'Возврат 30 дней', desc: 'Легкий возврат и обмен без вопросов' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Эксперты ответят в любое время' },
            ].map((item, i) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl glass border border-neon-cyan/20 flex items-center justify-center mx-auto mb-4 neon-glow-cyan">
                  <Icon name={item.icon} size={28} className="text-neon-cyan" />
                </div>
                <h3 className="font-oswald font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-golos">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}