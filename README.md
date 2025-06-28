# 🏠 Dream Homez Property Listing API

A scalable backend API for a property listing platform. Built with **NestJS**, **MongoDB**, **JWT auth**, and **Docker**, it supports user roles, property CRUD, filtering, pagination, and clean documentation

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 🏡 Property CRUD (Create, Read, Update, Delete)
- 🔍 Search & Filtering (by location, price, bedrooms)
- 📄 Pagination on listing endpoints
- ⚡ Rate Limiting with Throttler (basic API protection)
- 🧪 Seed Script for test users and properties
- 🐳 Dockerized for deployment
- 📘 Swagger UI for live API docs

---

## 🛠️ Tech Stack

- **Node.js** + **NestJS**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Swagger** (`@nestjs/swagger`)
- **ThrottlerModule** for rate limiting
- **Docker** for containerization

---

## ⚙️ Getting Started (Local)

### 1. Clone the Repository

```bash
git clone https://github.com/Noor-Ansari/dream-homez.git
cd dream-homez
npm install
npm run start:dev
npm run start:dev
```

### 2. Add ENV file with these properties

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/dream-homez
JWT_SECRET=supersecretkey123
JWT_EXPIRES_IN=1d
```

### 3. Build with docker

```
docker build -t dream-homez .
docker run -d -p 3000:3000 --env-file .env dream-homez
```

## Test Credentials

```
Admin:
  Email: admin@example.com
  Password: Admin@123

User:
  Email: user@example.com
  Password: User@123

```
