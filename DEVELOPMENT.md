# Development Guide

## 🔧 Development Workflow

### Local Development
```bash
npm run dev
```
The app will be available at `http://localhost:3000` with hot-reload enabled.

### Database Setup

#### Using MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Get connection string
4. Add to `.env.local` as `MONGODB_URI`

#### Using Local MongoDB
```bash
# Install MongoDB locally
# Windows: Download from mongodb.com
# Mac: brew install mongodb-community
# Linux: sudo apt-get install mongodb

# Start MongoDB
mongod

# Connection string
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

### Environment Variables

Create `.env.local` in root directory:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority

# Authentication
NEXTAUTH_SECRET=generate-random-secret-here
NEXTAUTH_URL=http://localhost:3000

# Stripe (Optional - for payments)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Generate NEXTAUTH_SECRET:**
```bash
# Using OpenSSL
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 📦 Adding New Features

### Adding a New Page
1. Create file in `app/your-page/page.tsx`
2. Export default component
3. Add navigation link in `components/Navbar.tsx`

Example:
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>About Us</h1>
    </div>
  );
}
```

### Adding a New API Route
1. Create file in `app/api/your-route/route.ts`
2. Export GET, POST, PUT, DELETE functions

Example:
```typescript
// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello World' });
}
```

### Adding a New Component
1. Create file in `components/YourComponent.tsx`
2. Export component
3. Import where needed

Example:
```tsx
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
    >
      {children}
    </button>
  );
}
```

### Adding a New Model
1. Create file in `models/YourModel.ts`
2. Define Mongoose schema
3. Export model

Example:
```typescript
// models/Category.ts
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes
- Use utility classes for styling
- Follow mobile-first approach
- Common patterns:
  - Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
  - Card: `bg-white rounded-lg shadow-md p-6`
  - Button: `px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500`

### Responsive Design
```tsx
<div className="
  grid 
  grid-cols-1        // Mobile: 1 column
  sm:grid-cols-2     // Tablet: 2 columns
  lg:grid-cols-4     // Desktop: 4 columns
  gap-6
">
  {/* Content */}
</div>
```

## 🔐 Authentication

### Protecting Pages
```tsx
// app/protected/page.tsx
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/login');
  }
  
  return <div>Protected Content</div>;
}
```

### Protecting API Routes
```typescript
// app/api/protected/route.ts
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  return NextResponse.json({ data: 'Protected data' });
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration works
- [ ] User login works
- [ ] Products display correctly
- [ ] Add to cart functions
- [ ] Cart updates properly
- [ ] Checkout flow completes
- [ ] Orders are saved
- [ ] Admin dashboard accessible
- [ ] Responsive on mobile
- [ ] All links work

### Database Seeding
Visit `/api/seed` to populate sample data for testing.

## 🚀 Deployment

### Vercel Deployment
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variables
5. Deploy

### Environment Variables for Production
```env
MONGODB_URI=your_production_mongodb_uri
NEXTAUTH_SECRET=your_production_secret
NEXTAUTH_URL=https://your-domain.com
STRIPE_SECRET_KEY=sk_live_...
```

## 🐛 Common Issues

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Windows
npx kill-port 3000

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Database connection timeout
- Check MongoDB URI is correct
- Verify IP whitelist in MongoDB Atlas
- Ensure network connectivity

### NextAuth errors
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Clear browser cookies

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MongoDB Docs](https://docs.mongodb.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Stripe Docs](https://stripe.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Best Practices

1. **Always use TypeScript types** - Better autocomplete and error detection
2. **Keep components small** - Single responsibility principle
3. **Use server components by default** - Better performance
4. **Validate user input** - Both client and server side
5. **Handle errors gracefully** - User-friendly error messages
6. **Optimize images** - Use Next.js Image component
7. **Use environment variables** - Never hardcode secrets
8. **Write meaningful commit messages** - Clear project history
