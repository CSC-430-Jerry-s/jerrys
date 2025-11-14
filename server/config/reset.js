import { pool } from "./database";

const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            role VARCHAR(20) NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'admin', 'staff')),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Users table created successfully✅');
    } catch (err) {
        console.error("Error creating users table: ", err);
    }
}

const createAddressTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS addresses (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            line1 VARCHAR(100) NOT NULL,
            line2 VARCHAR(50),
            city VARCHAR(20) NOT NULL,
            zip VARCHAR(20) NOT NULL,
            state VARCHAR(50),
            country_code VARCHAR(20) NOT NULL,
            is_default BOOLEAN DEFAULT false,
            phone VARCHAR(20),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Addresses table created successfully✅');
    } catch (err) {
        console.error("Error creating addresses table: ", err)
    }
}

const createCartTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS carts (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id) ON DELETE SET NULL,
            user_email VARCHAR(50) NOT NULL,
            status VARCHAR(10) NOT NULL DEFAULT 'active' CHECK (status IN ('abandoned', 'active', 'order')),
            subtotal DECIMAL(8, 2) NOT NULL DEFAULT 0.0 CHECK (subtotal >= 0),
            num_items INT NOT NULL DEFAULT 0 CHECK (num_items >= 0),
            session_id VARCHAR(100),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Carts table created successfully✅');
    } catch (err) {
        console.error("Error creating carts table: ", err)
    }
}

const createOrderTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS orders (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id) ON DELETE SET NULL,
            user_email VARCHAR(50) NOT NULL,
            user_first_name VARCHAR(50) NOT NULL,
            user_last_name VARCHAR(50) NOT NULL,
            cart_id INT NOT NULL REFERENCES carts(id) ON DELETE RESTRICT,
            address_id INT REFERENCES addresses(id) ON DELETE SET NULL,
            address_line1 VARCHAR(100) NOT NULL,
            address_line2 VARCHAR(100),
            address_city VARCHAR(50) NOT NULL,
            address_zip VARCHAR(20) NOT NULL,
            address_country VARCHAR(50) NOT NULL,
            order_number VARCHAR(50) NOT NULL,
            status VARCHAR(20) NOT NULL DEFAULT 'processing' CHECK (status IN ('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
            total_discount DECIMAL(8, 2) NOT NULL DEFAULT 0.0 CHECK (total_discount >= 0),
            total_tax DECIMAL(8, 2) NOT NULL DEFAULT 0.0 CHECK (total_tax >= 0),
            shipping_cost DECIMAL(8, 2) NOT NULL DEFAULT 0.0 CHECK (shipping_cost >= 0),
            total_amount DECIMAL(8, 2) NOT NULL CHECK (total_amount > 0),
            payment_hash VARCHAR(100) NOT NULL UNIQUE,
            payment_method VARCHAR(20) CHECK (payment_method IN ('stripe', 'paypal', 'apple_pay')),
            payment_status VARCHAR(20) CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
            placed_at TIMESTAMP NOT NULL DEFAULT NOW(),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Orders table created successfully✅');
    } catch (err) {
        console.error("Error creating orders table: ", err)
    }
}

const createProductTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            title VARCHAR(50) NOT NULL,
            description VARCHAR(200),
            url_slug VARCHAR(50) NOT NULL UNIQUE,
            season VARCHAR(50),
            status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'archived', 'discontinued')),
            category VARCHAR(50) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Products table created successfully✅');
    } catch (err) {
        console.error("Error creating products table: ", err)
    }
}

const createProductVariantTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS product_variants (
            id SERIAL PRIMARY KEY,
            product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
            image_url VARCHAR(200),
            size VARCHAR(20),
            color VARCHAR(20) NOT NULL,
            price DECIMAL(8, 2) NOT NULL CHECK (price >= 0),
            length_cm DECIMAL(8, 2) CHECK (length_cm >= 0),
            width_cm DECIMAL(8, 2) CHECK (width_cm >= 0),
            height_cm DECIMAL(8, 2) CHECK (height_cm >= 0),
            weight_kg DECIMAL(8, 2) CHECK (weight_kg >= 0),
            stock_quantity INT NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Product Variants table created successfully✅');
    } catch (err) {
        console.error("Error creating product variants table: ", err)
    }
}

const createCartItemTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS cart_items (
            id SERIAL PRIMARY KEY,
            cart_id INT NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
            product_variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
            quantity INT NOT NULL CHECK (quantity > 0),
            unit_price DECIMAL(8, 2) NOT NULL CHECK (unit_price >= 0),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP,
            UNIQUE(cart_id, product_variant_id)
        )
    `;

    try {
        await pool.query(query);
        console.log('Cart Items table created successfully✅');
    } catch (err) {
        console.error("Error creating cart items table: ", err);
    }
}

const createOrderItemTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS order_items (
            id SERIAL PRIMARY KEY,
            order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
            product_variant_id INT REFERENCES product_variants(id) ON DELETE SET NULL,
            product_title VARCHAR(100) NOT NULL,
            product_description VARCHAR(200),
            product_size VARCHAR(20),
            product_color VARCHAR(30) NOT NULL,
            product_image_url VARCHAR(200),
            quantity INT NOT NULL CHECK (quantity > 0),
            unit_price DECIMAL(8, 2) NOT NULL CHECK (unit_price >= 0),
            total_price DECIMAL(8, 2) NOT NULL CHECK (total_price >= 0),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Order Items table created successfully✅');
    } catch (err) {
        console.error("Error creating order items table: ", err);
    }
}

const createShipmentTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS shipments (
        id SERIAL PRIMARY KEY,
        order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
        service VARCHAR(20) NOT NULL DEFAULT 'standard' CHECK (service IN ('standard', 'express')),
        carrier VARCHAR(50) NOT NULL,
        tracking_number VARCHAR(50) NOT NULL,
        status VARCHAR(20) NOT NULL DEFAULT 'shipped' CHECK (status IN ('awaiting pickup', 'shipped', 'delivered')),
        shipped_at TIMESTAMP NOT NULL,
        delivered_at TIMESTAMP,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Shipments table created successfully✅');
    } catch (err) {
        console.error("Error creating shipments table: ", err);
    }
}

const createReturnTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS returns (
            id SERIAL PRIMARY KEY,
            order_id INT NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
            user_id INT NOT NULL REFERENCES users(id) ON DELETE SET NULL,
            user_email VARCHAR(50) NOT NULL,
            user_first_name VARCHAR(50) NOT NULL,
            user_last_name VARCHAR(50) NOT NULL,
            return_number VARCHAR(50) NOT NULL UNIQUE,
            reason_category VARCHAR(20) NOT NULL,
            description VARCHAR(200),
            status VARCHAR(20) NOT NULL DEFAULT 'requested' CHECK (status IN ('requested', 'approved', 'rejected', 'in_transit', 'received', 'refunded')),
            refund_amount DECIMAL(8, 2) NOT NULL,
            refund_method VARCHAR(20) NOT NULL DEFAULT 'original_payment' CHECK (refund_method IN ('original_payment', 'store_credit', 'exchange')),
            requested_at TIMESTAMP NOT NULL DEFAULT NOW(),
            approved_at TIMESTAMP,
            received_at TIMESTAMP,
            refunded_at TIMESTAMP,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Returns table created successfully✅');
    } catch (err) {
        console.error("Error creating returns table: ", err);
    }
}

const createReturnItemTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS return_items (
            id SERIAL PRIMARY KEY,
            return_id INT NOT NULL REFERENCES returns(id) ON DELETE CASCADE,
            order_item_id INT NOT NULL REFERENCES order_items(id) ON DELETE SET NULL,
            quantity_returned INT NOT NULL,
            condition VARCHAR(20) CHECK (condition IN ('new', 'worn', 'damaged')),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )
    `;

    try {
        await pool.query(query);
        console.log('Return Items table created successfully✅');
    } catch (err) {
        console.error("Error creating return_items table: ", err);
    }
}