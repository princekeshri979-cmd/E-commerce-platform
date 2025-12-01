import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

export async function GET() {
    await dbConnect();

    const products = [
        {
            name: "Wireless Noise-Canceling Headphones",
            description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions.",
            price: 299.99,
            category: "Electronics",
            images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"],
            stock: 50
        },
        {
            name: "Smart Fitness Watch",
            description: "Track your health and fitness goals with precision. Monitors heart rate, sleep patterns, and workouts. Water-resistant and stylish design.",
            price: 149.50,
            category: "Wearables",
            images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"],
            stock: 30
        },
        {
            name: "Ergonomic Office Chair",
            description: "Boost your productivity with this ergonomic office chair. Adjustable lumbar support, breathable mesh back, and premium cushioning.",
            price: 249.00,
            category: "Furniture",
            images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80"],
            stock: 15
        },
        {
            name: "Organic Cotton T-Shirt",
            description: "Soft, breathable, and eco-friendly. Made from 100% organic cotton. Available in various colors and sizes.",
            price: 29.99,
            category: "Clothing",
            images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"],
            stock: 100
        },
        {
            name: "Minimalist Backpack",
            description: "A sleek and durable backpack for your daily commute. Features a laptop compartment, water-resistant material, and plenty of pockets.",
            price: 79.95,
            category: "Accessories",
            images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"],
            stock: 40
        },
        {
            name: "Mechanical Keyboard",
            description: "Tactile and responsive mechanical keyboard for gamers and typists. RGB backlighting and customizable keys.",
            price: 120.00,
            category: "Electronics",
            images: ["https://images.unsplash.com/photo-1587829741301-dc798b91a05c?w=800&q=80"],
            stock: 25
        }
    ];

    try {
        await Product.deleteMany({}); // Clear existing products
        await Product.insertMany(products);
        return NextResponse.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Error seeding database' }, { status: 500 });
    }
}
