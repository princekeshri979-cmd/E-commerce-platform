# 🛍️ ShopVibe - E-commerce Platform

A modern, full-stack e-commerce platform built with Next.js 16, TypeScript, MongoDB, and Stripe. Features a beautiful UI, secure authentication, shopping cart, and complete checkout flow.

## ✨ Features

### 🎨 User Experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI** - Clean, professional interface with Tailwind CSS
- **Smooth Animations** - Enhanced UX with Framer Motion
- **Product Search & Filters** - Easy product discovery
- **Shopping Cart** - Real-time cart management with Zustand

### 🔐 Authentication & Security
- **NextAuth.js Integration** - Secure user authentication
- **Protected Routes** - Admin and user-specific pages
- **Password Encryption** - bcrypt for secure password hashing

### 🛒 E-commerce Features
- **Product Catalog** - Browse all products with filtering
- **Product Details** - Detailed product pages with images
- **Shopping Cart** - Add, remove, and update quantities
- **Checkout Flow** - Streamlined purchase process
- **Order Management** - Track orders and history
- **Admin Dashboard** - Manage products and orders

### 💳 Payment Integration
- **Stripe Integration** - Secure payment processing
- **Order Tracking** - Complete order history

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)
- Stripe account (for payments)

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd ecommerce-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_random_secret_key
   NEXTAUTH_URL=http://localhost:3000
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

6. **Seed the database (optional)**
   
   Visit [http://localhost:3000/api/seed](http://localhost:3000/api/seed) to populate sample products

## 📁 Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed architecture documentation.

```
ecommerce-platform/
├── app/              # Next.js pages and API routes
├── components/       # Reusable React components
├── lib/              # Utility functions
├── models/           # MongoDB schemas
├── store/            # State management
├── types/            # TypeScript definitions
└── public/           # Static assets
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Database** | MongoDB + Mongoose |
| **Authentication** | NextAuth.js |
| **Payment** | Stripe |
| **Styling** | Tailwind CSS |
| **State Management** | Zustand |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔑 Key Pages

- `/` - Homepage with featured products
- `/products` - Product catalog with filters
- `/product/[id]` - Individual product details
- `/cart` - Shopping cart
- `/checkout` - Checkout and payment
- `/login` - User login
- `/register` - User registration
- `/admin` - Admin dashboard

## 🔌 API Routes

- `/api/auth/*` - Authentication endpoints
- `/api/products` - Product CRUD operations
- `/api/orders` - Order management
- `/api/register` - User registration
- `/api/admin/orders` - Admin order management
- `/api/seed` - Database seeding

## 🎨 Customization

### Update Branding
- Edit `app/layout.tsx` for site title and metadata
- Modify `components/Navbar.tsx` for navigation
- Update colors in Tailwind classes (currently using indigo theme)

### Add Products
- Use the admin dashboard at `/admin`
- Or seed sample data via `/api/seed`
- Or directly add to MongoDB

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000
```

**Database connection issues?**
- Verify `MONGODB_URI` in `.env.local`
- Check MongoDB server is running
- Ensure IP whitelist in MongoDB Atlas

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
- Ensure Node.js 18+ support
- Set environment variables
- Run `npm run build` then `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for e-commerce applications.

---

**Need help?** Check out the [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed documentation.
