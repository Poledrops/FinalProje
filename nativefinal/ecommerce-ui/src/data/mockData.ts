import DATA from './data.json';

export const categories = DATA.categories;
export const products = [
    {
        id: '1',
        name: 'Premium Wireless Headphones',
        brand: 'AUDIOPRO',
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        discount: 20,
        isNew: false,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    },
    {
        id: '2',
        name: 'Smart Watch Series 7',
        brand: 'TECHWEAR',
        price: 299.99,
        rating: 4.9,
        isNew: true,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    },
    {
        id: '3',
        name: 'Designer Sunglasses',
        brand: 'LUXURY',
        price: 159.99,
        originalPrice: 199.99,
        rating: 4.7,
        discount: 15,
        isNew: false,
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    },
    {
        id: '4',
        name: 'Leather Backpack',
        brand: 'TRAVELER',
        price: 129.99,
        rating: 4.6,
        isNew: true,
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    },
    {
        id: '5',
        name: 'Minimalist Desk Lamp',
        brand: 'HOMELIGHT',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.5,
        discount: 20,
        isNew: false,
        category: 'home',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    },
    {
        id: '6',
        name: 'Ceramic Plant Pot Set',
        brand: 'GARDEN',
        price: 49.99,
        rating: 4.4,
        isNew: true,
        category: 'home',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    },
    {
        id: '7',
        name: 'Wireless Earbuds Pro',
        brand: 'SOUND',
        price: 149.99,
        originalPrice: 179.99,
        rating: 4.8,
        discount: 17,
        isNew: false,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    },
    {
        id: '8',
        name: 'Running Shoes',
        brand: 'SPORTFIT',
        price: 119.99,
        rating: 4.7,
        isNew: true,
        category: 'sports',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    },
    {
        id: '9',
        name: 'Yoga Mat Premium',
        brand: 'FITNESS',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.6,
        discount: 33,
        isNew: false,
        category: 'sports',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    },
    {
        id: '10',
        name: 'Organic Face Cream',
        brand: 'NATURAL',
        price: 34.99,
        rating: 4.9,
        isNew: true,
        category: 'beauty',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    },
    {
        id: '11',
        name: 'Silk Scarf Collection',
        brand: 'ELEGANCE',
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.5,
        discount: 22,
        isNew: false,
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80',
    },
    {
        id: '12',
        name: 'Kids Building Blocks',
        brand: 'PLAYTIME',
        price: 29.99,
        rating: 4.8,
        isNew: true,
        category: 'toys',
        image: 'https://images.unsplash.com/photo-1587912781940-1cc1c2b4ec8a?w=800&q=80',
    },
];
export const trendingSearches = DATA.trending;
export const recentSearches = DATA.recentSearches;

// Sepet için örnek veriler
export const cartItems = [
    {
        id: '1',
        product: products[0],
        quantity: 1,
        selectedColor: 'black'
    },
    {
        id: '2',
        product: products[3],
        quantity: 2,
        selectedColor: 'white',
        selectedSize: '9'
    }
];

// Siparişler için örnek veriler
export const orders = [
    {
        id: '1',
        orderNumber: 'ORD-2024-001234',
        date: '2024-02-15',
        status: 'delivered',
        total: 299.99,
        items: [
            {
                product: products[0],
                quantity: 1
            }
        ]
    },
    {
        id: '2',
        orderNumber: 'ORD-2024-001235',
        date: '2024-02-16',
        status: 'shipped',
        total: 609.98,
        items: [
            {
                product: products[1],
                quantity: 1
            },
            {
                product: products[7],
                quantity: 1
            }
        ]
    },
    {
        id: '3',
        orderNumber: 'ORD-2024-001236',
        date: '2024-02-17',
        status: 'processing',
        total: 189.99,
        items: [
            {
                product: products[2],
                quantity: 1
            }
        ]
    }
];
