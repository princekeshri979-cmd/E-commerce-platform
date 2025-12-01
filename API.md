# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication

Most endpoints require authentication via NextAuth.js session cookies.

### Register User
**POST** `/api/register`

Create a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "message": "User created successfully"
}
```

**Errors:**
- `400` - Invalid input or user already exists
- `500` - Server error

---

### Login
**POST** `/api/auth/signin`

Handled by NextAuth.js. Use the login page at `/login`.

---

### Logout
**POST** `/api/auth/signout`

Handled by NextAuth.js.

---

## Products

### Get All Products
**GET** `/api/products`

Retrieve all products with optional filtering and pagination.

**Query Parameters:**
- `category` (optional) - Filter by category
- `minPrice` (optional) - Minimum price filter
- `maxPrice` (optional) - Maximum price filter
- `search` (optional) - Search by name or description
- `sort` (optional) - Sort order (newest, price-asc, price-desc, name-asc, name-desc)
- `page` (optional) - Page number (default: 1)
- `limit` (optional) - Items per page (default: 12)

**Example:**
```
GET /api/products?category=Electronics&minPrice=50&maxPrice=500&sort=price-asc
```

**Response (200):**
```json
{
  "products": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Wireless Headphones",
      "description": "High-quality wireless headphones",
      "price": 99.99,
      "category": "Electronics",
      "image": "https://example.com/image.jpg",
      "stock": 50,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "pages": 1
}
```

---

### Get Single Product
**GET** `/api/products/[id]`

Retrieve a single product by ID.

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Wireless Headphones",
  "description": "High-quality wireless headphones with noise cancellation",
  "price": 99.99,
  "category": "Electronics",
  "image": "https://example.com/image.jpg",
  "stock": 50,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `404` - Product not found
- `500` - Server error

---

### Create Product (Admin)
**POST** `/api/products`

Create a new product. Requires admin authentication.

**Request Body:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 49.99,
  "category": "Electronics",
  "image": "https://example.com/image.jpg",
  "stock": 100
}
```

**Response (201):**
```json
{
  "message": "Product created successfully",
  "product": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "New Product",
    "description": "Product description",
    "price": 49.99,
    "category": "Electronics",
    "image": "https://example.com/image.jpg",
    "stock": 100,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `401` - Unauthorized
- `400` - Invalid input
- `500` - Server error

---

### Update Product (Admin)
**PUT** `/api/products/[id]`

Update an existing product. Requires admin authentication.

**Request Body:**
```json
{
  "name": "Updated Product Name",
  "price": 59.99,
  "stock": 75
}
```

**Response (200):**
```json
{
  "message": "Product updated successfully",
  "product": { /* updated product object */ }
}
```

**Errors:**
- `401` - Unauthorized
- `404` - Product not found
- `400` - Invalid input
- `500` - Server error

---

### Delete Product (Admin)
**DELETE** `/api/products/[id]`

Delete a product. Requires admin authentication.

**Response (200):**
```json
{
  "message": "Product deleted successfully"
}
```

**Errors:**
- `401` - Unauthorized
- `404` - Product not found
- `500` - Server error

---

## Orders

### Create Order
**POST** `/api/orders`

Create a new order. Requires authentication.

**Request Body:**
```json
{
  "items": [
    {
      "productId": "507f1f77bcf86cd799439011",
      "quantity": 2,
      "price": 99.99
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "paymentMethod": "stripe",
  "totalAmount": 199.98
}
```

**Response (201):**
```json
{
  "message": "Order created successfully",
  "order": {
    "_id": "507f1f77bcf86cd799439012",
    "userId": "507f1f77bcf86cd799439010",
    "items": [ /* order items */ ],
    "totalAmount": 199.98,
    "status": "pending",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `401` - Unauthorized
- `400` - Invalid input
- `500` - Server error

---

### Get User Orders
**GET** `/api/orders`

Get all orders for the authenticated user.

**Response (200):**
```json
{
  "orders": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "items": [ /* order items */ ],
      "totalAmount": 199.98,
      "status": "delivered",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized
- `500` - Server error

---

### Get Single Order
**GET** `/api/orders/[id]`

Get a specific order by ID. User can only access their own orders.

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "userId": "507f1f77bcf86cd799439010",
  "items": [
    {
      "productId": "507f1f77bcf86cd799439011",
      "name": "Wireless Headphones",
      "quantity": 2,
      "price": 99.99
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "totalAmount": 199.98,
  "status": "delivered",
  "paymentStatus": "completed",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-05T00:00:00.000Z"
}
```

**Errors:**
- `401` - Unauthorized
- `403` - Forbidden (not user's order)
- `404` - Order not found
- `500` - Server error

---

## Admin

### Get All Orders (Admin)
**GET** `/api/admin/orders`

Get all orders in the system. Requires admin authentication.

**Response (200):**
```json
{
  "orders": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "userId": {
        "_id": "507f1f77bcf86cd799439010",
        "name": "John Doe",
        "email": "john@example.com"
      },
      "items": [ /* order items */ ],
      "totalAmount": 199.98,
      "status": "pending",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized
- `403` - Forbidden (not admin)
- `500` - Server error

---

### Update Order Status (Admin)
**PUT** `/api/admin/orders/[id]`

Update order status. Requires admin authentication.

**Request Body:**
```json
{
  "status": "shipped"
}
```

**Response (200):**
```json
{
  "message": "Order updated successfully",
  "order": { /* updated order object */ }
}
```

**Errors:**
- `401` - Unauthorized
- `403` - Forbidden (not admin)
- `404` - Order not found
- `400` - Invalid status
- `500` - Server error

---

## Utilities

### Seed Database
**GET** `/api/seed`

Populate the database with sample products. Use for development/testing only.

**Response (200):**
```json
{
  "message": "Database seeded successfully",
  "productsCreated": 10
}
```

**Note:** This endpoint should be disabled in production.

---

## Error Response Format

All errors follow this format:

```json
{
  "error": "Error message description"
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

Currently no rate limiting is implemented. Consider adding rate limiting for production.

## CORS

CORS is configured to allow requests from the same origin. Adjust for production if needed.
