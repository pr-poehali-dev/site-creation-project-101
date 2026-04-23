import Icon from '@/components/ui/icon';
import { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartPageProps {
  items: CartItem[];
  onUpdateQty: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
  onNavigate: (page: string) => void;
}

export default function CartPage({ items, onUpdateQty, onRemove, onNavigate }: CartPageProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const savings = items.reduce((sum, item) => {
    if (item.oldPrice) return sum + (item.oldPrice - item.price) * item.quantity;
    return sum;
  }, 0);

  const fmt = (n: number) => n.toLocaleString('ru-RU') + ' ₽';

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full glass border border-white/10 flex items-center justify-center mx-auto mb-8">
            <Icon name="ShoppingCart" size={56} className="text-muted-foreground" />
          </div>
          <h2 className="font-oswald font-bold text-4xl text-foreground mb-3">Корзина пуста</h2>
          <p className="text-muted-foreground font-golos mb-8">Добавьте товары из каталога, чтобы оформить заказ</p>
          <button
            onClick={() => onNavigate('catalog')}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-neon-cyan text-background font-golos font-bold mx-auto neon-glow-cyan hover:scale-105 transition-all"
          >
            <Icon name="Zap" size={20} />
            Перейти в каталог
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-oswald font-black text-5xl text-foreground mb-8">
          КОРЗИНА <span className="neon-text-cyan">({totalItems})</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="glass rounded-2xl border border-white/8 p-4 flex gap-4 card-hover">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-golos">{item.brand}</p>
                  <h3 className="font-oswald font-semibold text-lg text-foreground mb-1 truncate">{item.name}</h3>
                  <p className="text-xs text-muted-foreground font-golos mb-3">{item.specs[0]}</p>
                  <div className="flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-muted hover:bg-card border border-border hover:border-neon-cyan text-foreground flex items-center justify-center transition-all"
                      >
                        <Icon name="Minus" size={14} />
                      </button>
                      <span className="w-8 text-center font-golos font-semibold text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-muted hover:bg-card border border-border hover:border-neon-cyan text-foreground flex items-center justify-center transition-all"
                      >
                        <Icon name="Plus" size={14} />
                      </button>
                    </div>
                    {/* Price & Remove */}
                    <div className="flex items-center gap-4">
                      <p className="font-oswald font-bold text-xl neon-text-cyan">{fmt(item.price * item.quantity)}</p>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="p-2 rounded-lg text-muted-foreground hover:text-red-400 hover:bg-muted transition-all"
                      >
                        <Icon name="Trash2" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl border border-white/10 p-6 sticky top-24">
              <h2 className="font-oswald font-bold text-2xl text-foreground mb-6">ИТОГО</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm font-golos">
                  <span className="text-muted-foreground">Товары ({totalItems})</span>
                  <span className="text-foreground">{fmt(total)}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-sm font-golos">
                    <span className="text-muted-foreground">Ваша экономия</span>
                    <span className="text-neon-green font-semibold">-{fmt(savings)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-golos">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="text-neon-cyan font-semibold">Бесплатно</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between">
                  <span className="font-oswald font-semibold text-lg text-foreground">К оплате</span>
                  <span className="font-oswald font-bold text-2xl neon-text-cyan">{fmt(total)}</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-2xl bg-neon-cyan text-background font-golos font-bold text-base neon-glow-cyan hover:scale-105 transition-all duration-200 mb-3">
                Оформить заказ
              </button>
              <button
                onClick={() => onNavigate('catalog')}
                className="w-full py-3 rounded-2xl glass border border-white/20 text-foreground font-golos font-medium text-sm hover:border-neon-cyan/50 transition-all"
              >
                Продолжить покупки
              </button>

              {/* Trust badges */}
              <div className="mt-6 space-y-2">
                {[
                  { icon: 'Shield', text: 'Безопасная оплата' },
                  { icon: 'Truck', text: 'Бесплатная доставка' },
                  { icon: 'RefreshCw', text: 'Возврат 30 дней' },
                ].map(badge => (
                  <div key={badge.text} className="flex items-center gap-2 text-xs text-muted-foreground font-golos">
                    <Icon name={badge.icon} size={14} className="text-neon-cyan" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
