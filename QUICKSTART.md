# 🚀 Quick Start Guide

Get your e-commerce platform up and running in 5 minutes!

## ⚡ Fast Setup

### 1. Install Dependencies (30 seconds)
```bash
npm install
```

### 2. Configure Environment (2 minutes)

Create `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_uri_here
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000
```

**Need a MongoDB URI?**
- **Option A:** Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Free tier available)
- **Option B:** Use local MongoDB: `mongodb://localhost:27017/ecommerce`

**Generate NEXTAUTH_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. Run Development Server (10 seconds)
```bash
npm run dev
```

### 4. Open Browser
Navigate to: **http://localhost:3000**

### 5. Seed Database (Optional)
Visit: **http://localhost:3000/api/seed**

This will populate your database with sample products.

---

## ✅ You're Done!

Your e-commerce platform is now running! 🎉

---

## 📖 What's Next?

### Explore the Platform
- 🏠 **Homepage** - `/` - View featured products
- 🛍️ **Products** - `/products` - Browse all products
- 🛒 **Cart** - `/cart` - Manage shopping cart
- 👤 **Register** - `/register` - Create account
- 🔐 **Login** - `/login` - Sign in
- 👨‍💼 **Admin** - `/admin` - Manage orders (requires admin account)

### Learn More
- 📚 [README.md](./README.md) - Project overview
- 🏗️ [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Architecture
- 💻 [DEVELOPMENT.md](./DEVELOPMENT.md) - Developer guide
- 🔌 [API.md](./API.md) - API documentation

---

## 🎨 Customize Your Store

### Update Branding
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Store Name",
  description: "Your store description",
};
```

### Change Theme Color
Find and replace `indigo` with your preferred color in:
- `app/page.tsx`
- `components/Navbar.tsx`
- Other component files

Available Tailwind colors: `blue`, `purple`, `pink`, `green`, `red`, `yellow`, `teal`, etc.

### Add Your Logo
1. Add logo image to `public/` folder
2. Update `components/Navbar.tsx`

---

## 🛠️ Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🐛 Troubleshooting

### "Port 3000 already in use"
```bash
npx kill-port 3000
```

### "Cannot connect to MongoDB"
- Verify `MONGODB_URI` in `.env.local`
- Check MongoDB is running (if using local)
- Whitelist your IP in MongoDB Atlas

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
rm -rf .next
npm run dev
```

---

## 📱 Test the Platform

### Create Test Account
1. Go to `/register`
2. Fill in details
3. Click "Register"
4. Login at `/login`

### Test Shopping Flow
1. Browse products at `/products`
2. Click on a product
3. Click "Add to Cart"
4. Go to `/cart`
5. Click "Checkout"
6. Complete order

### Access Admin Panel
1. Create admin user in MongoDB (set `role: 'admin'`)
2. Login with admin account
3. Visit `/admin`

---

## 🚀 Deploy to Production

### Vercel (Recommended - 5 minutes)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables
6. Click "Deploy"

Done! Your store is live! 🎉

---

## 💡 Pro Tips

- **Use MongoDB Atlas** for easy cloud database
- **Enable Stripe** for real payments (add API keys to `.env.local`)
- **Add products** via admin panel or `/api/seed`
- **Customize styles** using Tailwind CSS classes
- **Check console** for any errors during development

---

## 📞 Need Help?

1. Check [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed guides
2. Review [API.md](./API.md) for API reference
3. See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for architecture

---

**Happy Coding! 🎉**
