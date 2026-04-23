export interface Product {
  id: number;
  name: string;
  category: 'laptops' | 'smartphones' | 'tablets' | 'components';
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  specs: string[];
  brand: string;
}

const LAPTOP_IMG = 'https://cdn.poehali.dev/projects/1ef7ab98-beb5-48de-9dcf-5cbcbbf21d72/files/a5f7645d-7628-4af1-a290-0492d2ab81f6.jpg';
const PHONE_IMG = 'https://cdn.poehali.dev/projects/1ef7ab98-beb5-48de-9dcf-5cbcbbf21d72/files/ad4de4ee-351e-462b-a203-812238d35793.jpg';
const TABLET_IMG = 'https://cdn.poehali.dev/projects/1ef7ab98-beb5-48de-9dcf-5cbcbbf21d72/files/27cce009-5133-447f-aa33-2e053f1967cf.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'ProBook Ultra X1',
    category: 'laptops',
    price: 89990,
    oldPrice: 109990,
    image: LAPTOP_IMG,
    badge: 'Хит продаж',
    rating: 4.8,
    reviews: 312,
    specs: ['Intel Core i7-13700H', '16 GB RAM', '512 GB SSD', '15.6" 2K OLED'],
    brand: 'Asus',
  },
  {
    id: 2,
    name: 'GameForce Pro 17',
    category: 'laptops',
    price: 124900,
    image: LAPTOP_IMG,
    badge: 'Геймерский',
    rating: 4.9,
    reviews: 189,
    specs: ['AMD Ryzen 9 7900X', '32 GB RAM', '1 TB NVMe', 'RTX 4070'],
    brand: 'MSI',
  },
  {
    id: 3,
    name: 'SlimBook Air 14',
    category: 'laptops',
    price: 64990,
    oldPrice: 74990,
    image: LAPTOP_IMG,
    rating: 4.6,
    reviews: 98,
    specs: ['Intel Core i5-1335U', '8 GB RAM', '256 GB SSD', '14" IPS 120Hz'],
    brand: 'Lenovo',
  },
  {
    id: 4,
    name: 'Galaxy S25 Ultra',
    category: 'smartphones',
    price: 99990,
    image: PHONE_IMG,
    badge: 'Новинка',
    rating: 4.9,
    reviews: 541,
    specs: ['Snapdragon 8 Gen 3', '12 GB RAM', '256 GB', 'AMOLED 6.8"'],
    brand: 'Samsung',
  },
  {
    id: 5,
    name: 'iPhone 16 Pro',
    category: 'smartphones',
    price: 109990,
    image: PHONE_IMG,
    badge: 'Premium',
    rating: 4.8,
    reviews: 823,
    specs: ['Apple A18 Pro', '8 GB RAM', '256 GB', 'Super Retina XDR 6.3"'],
    brand: 'Apple',
  },
  {
    id: 6,
    name: 'Pixel 9 Pro',
    category: 'smartphones',
    price: 74990,
    oldPrice: 84990,
    image: PHONE_IMG,
    rating: 4.7,
    reviews: 276,
    specs: ['Google Tensor G4', '12 GB RAM', '128 GB', 'OLED 6.3"'],
    brand: 'Google',
  },
  {
    id: 7,
    name: 'Tab Ultra Pro 12',
    category: 'tablets',
    price: 54990,
    image: TABLET_IMG,
    badge: 'Топ',
    rating: 4.7,
    reviews: 152,
    specs: ['Snapdragon 8s Gen 3', '8 GB RAM', '256 GB', '12" AMOLED 144Hz'],
    brand: 'Xiaomi',
  },
  {
    id: 8,
    name: 'iPad Pro M4 11"',
    category: 'tablets',
    price: 94990,
    image: TABLET_IMG,
    badge: 'Apple',
    rating: 4.9,
    reviews: 445,
    specs: ['Apple M4', '16 GB RAM', '256 GB', '11" Liquid Retina'],
    brand: 'Apple',
  },
  {
    id: 9,
    name: 'RTX 4080 Super 16GB',
    category: 'components',
    price: 79990,
    oldPrice: 89990,
    image: TABLET_IMG,
    badge: '-11%',
    rating: 4.9,
    reviews: 204,
    specs: ['NVIDIA Ada Lovelace', '16 GB GDDR6X', 'TDP 320W', 'PCIe 4.0'],
    brand: 'ASUS ROG',
  },
  {
    id: 10,
    name: 'Ryzen 9 7950X',
    category: 'components',
    price: 39990,
    image: TABLET_IMG,
    badge: 'Хит',
    rating: 4.8,
    reviews: 178,
    specs: ['16 ядер / 32 потока', 'До 5.7 GHz', 'AM5', '170W TDP'],
    brand: 'AMD',
  },
  {
    id: 11,
    name: 'Samsung 990 Pro 2TB',
    category: 'components',
    price: 14990,
    oldPrice: 18990,
    image: TABLET_IMG,
    rating: 4.8,
    reviews: 389,
    specs: ['NVMe PCIe 4.0', '7450 МБ/с чтение', '6900 МБ/с запись', 'M.2 2280'],
    brand: 'Samsung',
  },
  {
    id: 12,
    name: 'DDR5 32GB 6000MHz',
    category: 'components',
    price: 9990,
    image: TABLET_IMG,
    rating: 4.6,
    reviews: 112,
    specs: ['32 GB (2x16)', '6000 MHz XMP', 'RGB подсветка', 'Intel/AMD XMP'],
    brand: 'Corsair',
  },
];

export const categories = [
  { id: 'all', label: 'Все товары', icon: '🖥️' },
  { id: 'laptops', label: 'Ноутбуки', icon: '💻' },
  { id: 'smartphones', label: 'Смартфоны', icon: '📱' },
  { id: 'tablets', label: 'Планшеты', icon: '📟' },
  { id: 'components', label: 'Комплектующие', icon: '⚙️' },
];
