# BAGSTORE Backend

Node.js, Express and MongoDB REST API for the BAGSTORE frontend.

## Setup

1. Copy `.env.example` to `.env` and set `MONGO_URI`.
2. Install dependencies with `npm install`.
3. Add the existing products with `npm run seed`.
4. Start the API with `npm run dev`.

The API runs on `http://localhost:5000` by default.
For MongoDB Atlas, add the development machine's IP address under
**Network Access** before starting the API.

## Main endpoints

- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:productId`
- `POST /api/products`
- `PATCH /api/products/:productId`
- `DELETE /api/products/:productId`
- `GET /api/carts/:cartId`
- `POST /api/carts/:cartId/items`
- `PATCH /api/carts/:cartId/items/:itemId`
- `DELETE /api/carts/:cartId/items/:itemId`
- `DELETE /api/carts/:cartId`
- `POST /api/orders`
- `GET /api/orders`
- `GET /api/orders/:orderNumber`
- `PATCH /api/orders/:orderNumber/status`

For a guest cart, generate one UUID in the frontend, save it in
`localStorage`, and use it as `cartId`.

### Add an item

```json
{
  "id": 1,
  "name": "Product1",
  "price": 300,
  "colors": "orange",
  "img": "/bag1.png",
  "quantity": 2
}
```

### Create an order

```json
{
  "cartId": "guest-cart-uuid",
  "customer": {
    "name": "Customer name",
    "email": "customer@example.com",
    "phone": "0812345678",
    "address": "Shipping address"
  },
  "paymentMethod": "cod"
}
```
