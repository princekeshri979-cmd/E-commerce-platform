"use client";

import Link from 'next/link';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const items = useCartStore((state) => state.items);
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = useSession();

    return (
        <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-indigo-600">ShopVibe</span>
                        </Link>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                        <Link href="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                            Products
                        </Link>
                        {session?.user?.role === 'admin' && (
                            <Link href="/admin" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                                Admin
                            </Link>
                        )}
                        <Link href="/cart" className="relative p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View cart</span>
                            <ShoppingCart className="h-6 w-6" />
                            {itemCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    {itemCount}
                                </span>
                            )}
                        </Link>

                        {session ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-700">Hi, {session.user?.name}</span>
                                <button onClick={() => signOut()} className="text-sm font-medium text-red-600 hover:text-red-500">
                                    Sign out
                                </button>
                            </div>
                        ) : (
                            <Link href="/login" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                                Sign in
                            </Link>
                        )}
                    </div>

                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Home
                        </Link>
                        <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Products
                        </Link>
                        <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Cart ({itemCount})
                        </Link>
                        {session ? (
                            <button onClick={() => signOut()} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-800 hover:bg-gray-50">
                                Sign out
                            </button>
                        ) : (
                            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                Sign in
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
