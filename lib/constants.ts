/**
 * Application Constants
 * Centralized configuration and constant values
 */

// Site Configuration
export const SITE_CONFIG = {
    name: 'ShopVibe',
    description: 'Your Premium E-commerce Store',
    url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    author: 'ShopVibe Team',
} as const;

// Product Categories
export const PRODUCT_CATEGORIES = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports & Outdoors',
    'Books',
    'Toys & Games',
    'Beauty & Health',
    'Automotive',
    'Food & Grocery',
    'Other',
] as const;

// Order Status
export const ORDER_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled',
} as const;

// Payment Status
export const PAYMENT_STATUS = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
    REFUNDED: 'refunded',
} as const;

// Pagination
export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 12,
    MAX_PAGE_SIZE: 100,
} as const;

// Price Ranges for Filters
export const PRICE_RANGES = [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: 'Over $200', min: 200, max: Infinity },
] as const;

// Sort Options
export const SORT_OPTIONS = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Name: A to Z', value: 'name-asc' },
    { label: 'Name: Z to A', value: 'name-desc' },
] as const;

// Navigation Links
export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Cart', href: '/cart' },
] as const;

// Admin Navigation
export const ADMIN_NAV_LINKS = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Products', href: '/admin/products' },
    { label: 'Orders', href: '/admin/orders' },
    { label: 'Users', href: '/admin/users' },
] as const;

// API Endpoints
export const API_ENDPOINTS = {
    PRODUCTS: '/api/products',
    ORDERS: '/api/orders',
    AUTH: '/api/auth',
    REGISTER: '/api/register',
    SEED: '/api/seed',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
    GENERIC: 'Something went wrong. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
    UNAUTHORIZED: 'You must be logged in to perform this action.',
    NOT_FOUND: 'The requested resource was not found.',
    VALIDATION: 'Please check your input and try again.',
    SERVER: 'Server error. Please try again later.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
    LOGIN: 'Successfully logged in!',
    LOGOUT: 'Successfully logged out!',
    REGISTER: 'Account created successfully!',
    ADD_TO_CART: 'Product added to cart!',
    ORDER_PLACED: 'Order placed successfully!',
    PRODUCT_CREATED: 'Product created successfully!',
    PRODUCT_UPDATED: 'Product updated successfully!',
    PRODUCT_DELETED: 'Product deleted successfully!',
} as const;

// Validation Rules
export const VALIDATION = {
    PASSWORD_MIN_LENGTH: 6,
    PASSWORD_MAX_LENGTH: 100,
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 50,
    PRODUCT_NAME_MAX_LENGTH: 100,
    DESCRIPTION_MAX_LENGTH: 1000,
    MAX_CART_QUANTITY: 99,
} as const;

// Image Configuration
export const IMAGE_CONFIG = {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
    DEFAULT_PLACEHOLDER: '/placeholder-product.jpg',
} as const;

// Currency
export const CURRENCY = {
    CODE: 'USD',
    SYMBOL: '$',
} as const;

// Shipping
export const SHIPPING = {
    FREE_SHIPPING_THRESHOLD: 50,
    STANDARD_RATE: 5.99,
    EXPRESS_RATE: 12.99,
} as const;

// Tax Rate (percentage)
export const TAX_RATE = 0.08; // 8%

// Session Configuration
export const SESSION_CONFIG = {
    MAX_AGE: 30 * 24 * 60 * 60, // 30 days
} as const;

// Regular Expressions
export const REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\+?[\d\s-()]+$/,
    ZIP_CODE: /^\d{5}(-\d{4})?$/,
    SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;

// TypeScript Types
export type ProductCategory = typeof PRODUCT_CATEGORIES[number];
export type OrderStatus = typeof ORDER_STATUS[keyof typeof ORDER_STATUS];
export type PaymentStatus = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS];
export type SortOption = typeof SORT_OPTIONS[number]['value'];
