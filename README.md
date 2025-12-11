# Jerry's Streetwear - E-Commerce Platform

## Team MKJJA
- Mubarak
- Kayla 
- Jolie 
- Jerry
- Amna 

## Project Description
Jerry's Streetwear is a full-stack e-commerce web application for a streetwear clothing brand. The platform allows users to browse seasonal collections, add items to cart, create accounts, place orders, and track their shipments.

## Features
- [x] User Authentication (Signup/Login/Logout)
- [x] Browse Product Collections (Seasonal & Core)
- [x] Product Detail Pages with Size Selection
- [x] Shopping Cart (Add, Update Quantity, Remove Items)
- [x] Checkout with Address Validation
- [x] Order Placement with Order Number Generation
- [x] Order Tracking

## Technologies Used
- **Frontend:** React 19, React Router, Vite
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (hosted on Render)
- **Styling:** Custom CSS with CSS Variables

---

# 🧪 UAT Setup Guide

Follow these steps to set up the project locally and test the features.

## Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/CSC-430-Jerry-s/jerrys.git
cd jerrys
git checkout develop
```

### 2. Install Dependencies

**Install server dependencies:**
```bash
cd server
npm install
```

**Install client dependencies:**
```bash
cd ../client
npm install
```

### 3. Environment Setup
The server requires environment variables for database connection. Contact the team for the `.env` file or create one in the `server/` directory with the database credentials.

### 4. Start the Application

**Terminal 1 - Start the Backend Server:**
```bash
cd server
node server.js
```
Server runs on: `http://localhost:3001`

**Terminal 2 - Start the Frontend:**
```bash
cd client
npm run dev
```
Frontend runs on: `http://localhost:5173` (or 5174 if 5173 is in use)

---

# 🧪 UAT Test Instructions

## Test Accounts
Use these pre-seeded accounts to test login functionality:

| Email | Password | Role |
|-------|----------|------|
| `jane.doe@example.com` | `hashed_jane_pass` | Customer |
| `john.smith@example.com` | `hashed_john_pass` | Customer |
| `mike.brown@example.com` | `hashed_mike_pass` | Customer |
| `sarah.lee@example.com` | `hashed_sarah_pass` | Customer |
| `admin@example.com` | `hashed_admin_pass` | Admin |

---

## Test Case 1: User Signup
**Test Script 1.01 - Valid Sign Up**

1. Navigate to `http://localhost:5173/signup`
2. Enter a valid email (e.g., `testuser@example.com`)
3. Enter a password (min 6 characters)
4. Confirm the password
5. Optionally enter first and last name
6. Click **"SIGN UP"**

**Expected Result:** User is created and redirected to the homepage. Username appears in the navbar.

---

## Test Case 2: User Login/Logout

**Test Script 2.01 - Valid Login**
1. Navigate to `http://localhost:5173/login`
2. Enter: `jane.doe@example.com` / `hashed_jane_pass`
3. Click **"LOGIN"**

**Expected Result:** User is logged in, redirected to homepage, and greeting "Hi, Jane" appears in navbar.

**Test Script 2.02 - Invalid Login**
1. Navigate to `http://localhost:5173/login`
2. Enter incorrect credentials (e.g., `wrong@email.com` / `wrongpass`)
3. Click **"LOGIN"**

**Expected Result:** Error message "Invalid email or password" is displayed.

**Test Script 2.03 - Clear Login Form**
1. On the login page, enter some text in email and password fields
2. Click **"CLEAR"**

**Expected Result:** Both fields are emptied.

**Test Script 2.05 - Logout**
1. While logged in, click **"Logout"** button in the navbar

**Expected Result:** User is logged out and redirected to homepage. "Login" link appears in navbar.

---

## Test Case 3: Browse Collections

**Test Script 3.01 - Browse Seasonal Collection**
1. Click **"Collections"** in the navbar
2. View the seasonal collections grid

**Expected Result:** All seasonal items load with names, images, and prices.

---

## Test Case 4: Shopping Cart

**Test Script 4.01 - Add Item to Cart**
1. Navigate to Collections → Click a collection → Click a product
2. Select a size (e.g., "M" or "L")
3. Click **"ADD TO CART"**

**Expected Result:** Item appears in cart. Cart badge in navbar updates.

**Test Script 4.02 - Update Cart Quantity**
1. Go to cart (`/cart`)
2. Change quantity from 1 to 5 using the +/- buttons or input field

**Expected Result:** Total price updates correctly. Cart badge in navbar updates with animation.

**Test Script 4.03 - Remove Item from Cart**
1. In the cart, click **"Remove"** on an item

**Expected Result:** Item disappears. Total price updates.

---

## Test Case 5: Checkout & Order Placement

**Test Script 5.01 - Place Order Successfully**
1. Add items to cart
2. Click **"PROCEED TO CHECKOUT"**
3. Login if prompted
4. Fill in all required fields:
   - First Name, Last Name
   - Email, Phone
   - Street Address, City, State, ZIP Code
5. Click **"PLACE ORDER"**

**Expected Result:** Order confirmation displays with order number (format: `JRY-2025-XXXXX`).

**Test Script 5.02 - Place Order with Invalid/Missing Address**
1. Add items to cart and go to checkout
2. Leave address fields empty or enter invalid data
3. Click **"PLACE ORDER"**

**Expected Result:** Validation errors appear. Order is NOT placed until all fields are valid.

---

## Test Case 6: Track Order

**Test Script 6.01 - Track Valid Order**
1. Navigate to `http://localhost:5173/track-order`
2. Enter an order number you received from checkout (e.g., `JRY-2025-12345`)
3. Click **"Track Order"**

**Expected Result:** Order details, timeline, and items are displayed.

**Test Script 6.02 - Track Invalid Order**
1. Navigate to Track Order page
2. Enter an invalid order number (e.g., `INVALID-123`)
3. Click **"Track Order"**

**Expected Result:** "Order Not Found" message is displayed.

---

## Project Structure
```
jerrys/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── auth/       # Login & Signup pages
│   │   │   ├── checkout/   # Checkout page
│   │   │   ├── collections/# Collections page
│   │   │   ├── components/ # Navbar
│   │   │   ├── context/    # Auth & Cart contexts
│   │   │   ├── homepage/   # Homepage
│   │   │   ├── product/    # Product detail page
│   │   │   ├── products/   # Products listing
│   │   │   ├── shoppingCart/# Cart page
│   │   │   └── trackOrder/ # Order tracking page
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
├── server/                 # Express Backend
│   ├── config/
│   │   ├── database.js     # PostgreSQL connection
│   │   └── reset.js        # Database seeding
│   ├── server.js           # API routes
│   └── package.json
└── README.md
```

## Known Test Data
After running `npm run reset`, the database contains:
- 10 test users (see Test Accounts above)
- Sample products with variants
- Sample orders with shipment data

## Troubleshooting

**Port already in use?**
- Frontend will automatically try port 5174 if 5173 is busy
- Kill existing processes: `lsof -i :3001` then `kill -9 <PID>`

**Database connection issues?**
- Ensure `.env` file exists in `/server` with correct credentials
- Run `npm run reset` to reinitialize data

**Login not working?**
- Make sure the backend server is running on port 3001
- Check browser console for API errors

---

## License
CSC 430 - Software Engineering Project © 2025