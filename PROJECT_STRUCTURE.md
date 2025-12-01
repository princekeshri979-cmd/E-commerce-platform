# E-commerce Platform - Project Structure

## 📁 Directory Organization

```
ecommerce-platform/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── products/             # Product CRUD operations
│   │   ├── orders/               # Order management
│   │   ├── register/             # User registration
│   │   ├── admin/                # Admin operations
│   │   └── seed/                 # Database seeding
│   ├── admin/                    # Admin dashboard pages
│   ├── cart/                     # Shopping cart page
│   ├── checkout/                 # Checkout flow
│   ├── login/                    # Login page
│   ├── register/                 # Registration page
│   ├── product/[id]/             # Dynamic product detail pages
│   ├── products/                 # Product listing page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx                # Navigation bar
│   ├── ProductCard.tsx           # Product display card
│   ├── ProductFilters.tsx        # Product filtering UI
│   ├── AddToCartButton.tsx       # Add to cart functionality
│   └── Providers.tsx             # Context providers
│
├── lib/                          # Utility functions
│   └── db.ts                     # Database connection
│
├── models/                       # Mongoose schemas
│   ├── User.ts                   # User model
│   ├── Product.ts                # Product model
│   └── Order.ts                  # Order model
│
├── store/                        # State management (Zustand)
│   └── cartStore.ts              # Shopping cart state
│
├── types/                        # TypeScript type definitions
│   └── next-auth.d.ts            # NextAuth type extensions
│
├── public/                       # Static assets
│   └── favicon.ico               # Site favicon
│
├── .env.local                    # Environment variables (gitignored)
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
└── tailwind.config.ts            # Tailwind CSS configuration
```

## 🎯 Key Features

### Frontend Pages
- **Homepage** (`/`) - Hero section + featured products
- **Products** (`/products`) - Full product catalog with filters
- **Product Detail** (`/product/[id]`) - Individual product pages
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Payment and order completion
- **Login/Register** - User authentication
- **Admin Dashboard** (`/admin`) - Order management

### Backend API Routes
- **Authentication** (`/api/auth`) - NextAuth.js integration
- **Products** (`/api/products`) - CRUD operations
- **Orders** (`/api/orders`) - Order creation and retrieval
- **Registration** (`/api/register`) - New user signup
- **Admin** (`/api/admin/orders`) - Admin order management
- **Seed** (`/api/seed`) - Database initialization

### State Management
- **Zustand** for cart state (client-side)
- **MongoDB** for persistent data
- **NextAuth** for session management

### Styling
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **Lucide React** for icons

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose)
- **Authentication**: NextAuth.js
- **Payment**: Stripe
- **Styling**: Tailwind CSS
- **State**: Zustand
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Configure `.env.local` with MongoDB URI and NextAuth settings
3. Run development server: `npm run dev`
4. Seed database (optional): Visit `/api/seed`
5. Access at: `http://localhost:3000`

## 📝 Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret_key (if using payments)
```

## 🎨 Design System

- **Primary Color**: Indigo (indigo-600)
- **Font**: Inter (Google Fonts)
- **Layout**: Responsive grid system
- **Components**: Modular and reusable
