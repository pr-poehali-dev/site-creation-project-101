import Icon from '@/components/ui/icon';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formatPrice = (price: number) =>
    price.toLocaleString('ru-RU') + ' ₽';

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return (
    <div className="glass rounded-2xl overflow-hidden card-hover border border-white/8 group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.badge && (
            <span className="px-2 py-1 text-xs font-golos font-semibold rounded-md bg-neon-cyan text-background">
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="px-2 py-1 text-xs font-golos font-semibold rounded-md bg-red-500 text-white">
              -{discount}%
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground font-golos mb-1">{product.brand}</p>
        <h3 className="font-oswald font-semibold text-lg text-foreground mb-2 leading-tight">
          {product.name}
        </h3>

        {/* Specs */}
        <div className="space-y-1 mb-3">
          {product.specs.slice(0, 2).map((spec, i) => (
            <p key={i} className="text-xs text-muted-foreground font-golos flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-neon-cyan inline-block flex-shrink-0" />
              {spec}
            </p>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-muted'}`}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
        </div>

        {/* Price & Add */}
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="font-oswald font-bold text-2xl neon-text-cyan">{formatPrice(product.price)}</p>
            {product.oldPrice && (
              <p className="text-xs text-muted-foreground line-through">{formatPrice(product.oldPrice)}</p>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-cyan text-background font-golos font-semibold text-sm hover:bg-neon-purple hover:text-white transition-all duration-300 neon-glow-cyan"
          >
            <Icon name="ShoppingCart" size={16} />
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
