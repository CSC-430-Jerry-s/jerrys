DO $$
DECLARE
    -- VARIABLES --
    admin_user_id INT;
    staff_user_id INT;
    customer_1_id INT;
    customer_2_id INT;
    customer_3_id INT;
    customer_4_id INT;

    address_1_id INT;
    address_2_id INT;
    
    product_1_id INT;
    product_2_id INT;
    product_3_id INT;
    product_4_id INT;
    product_5_id INT;
    
    p1_variant_1_id INT;
    p1_variant_2_id INT;
    p1_variant_3_id INT;
    p1_variant_4_id INT;
    p2_variant_1_id INT;
    p2_variant_2_id INT;
    p2_variant_3_id INT;
    p3_variant_1_id INT;
    p4_variant_1_id INT;
    p5_variant_1_id INT;
    p5_variant_2_id INT;
    p5_variant_3_id INT;
    
    cart_1_id INT;
    cart_2_id INT;
    cart_3_id INT;
    cart_4_id INT;
    cart_5_id INT;
    cart_6_id INT;
    
    order_1_id INT;
    order_2_id INT;
    order_3_id INT;
    order_4_id INT;
    
    o1_item_1_id INT;
    o1_item_2_id INT;
    o2_item_1_id INT;
    o3_item_1_id INT;
    o3_item_2_id INT;
    o4_item_1_id INT;

    return_1_id INT;
    return_2_id INT;
    return_3_id INT;

BEGIN

    -- 1. CREATE USERS --

    INSERT INTO users (email, password, first_name, last_name, phone, role)
    VALUES ('admin@example.com', 'hashed_admin_pass', 'Admin', 'User', '111-1111', 'admin')
    RETURNING id INTO admin_user_id;
    
    INSERT INTO users (email, password, first_name, last_name, phone, role)
    VALUES ('staff@example.com', 'hashed_staff_pass', 'Staff', 'Person', '222-2222', 'staff')
    RETURNING id INTO staff_user_id;

    INSERT INTO users (email, password, first_name, last_name, phone, role)
    VALUES ('jane.doe@example.com', 'hashed_jane_pass', 'Jane', 'Doe', '333-3333', 'customer')
    RETURNING id INTO customer_1_id;

    INSERT INTO users (email, password, first_name, last_name, phone, role)
    VALUES ('john.smith@example.com', 'hashed_john_pass', 'John', 'Smith', '444-4444', 'customer')
    RETURNING id INTO customer_2_id;

    INSERT INTO users (email, password, first_name, last_name, phone, role)
    VALUES ('mike.brown@example.com', 'hashed_mike_pass', 'Mike', 'Brown', '555-5555', 'customer')
    RETURNING id INTO customer_3_id;

    INSERT INTO users (email, password, first_name, last_name, phone, role)
    VALUES ('sarah.lee@example.com', 'hashed_sarah_pass', 'Sarah', 'Lee', '666-6666', 'customer')
    RETURNING id INTO customer_4_id;

    -- 2. CREATE ADDRESSES --

    INSERT INTO addresses (user_id, line1, city, state, zip, country_code, is_default, phone)
    VALUES (customer_1_id, '123 Main St', 'Anytown', 'NY', '12345', 'US', true, '555-0101')
    RETURNING id INTO address_1_id;

    INSERT INTO addresses (user_id, line1, city, state, zip, country_code, is_default, phone)
    VALUES (customer_2_id, '456 Oak Ave', 'Someville', 'CA', '67890', 'US', true, '555-0102')
    RETURNING id INTO address_2_id;

    -- 3. CREATE PRODUCTS --

    INSERT INTO products (title, description, url_slug, season, category)
    VALUES ('Classic T-Shirt', 'A comfortable 100% cotton t-shirt.', 'classic-t-shirt', 'All-Season', 'Apparel')
    RETURNING id INTO product_1_id;

    INSERT INTO products (title, description, url_slug, season, category)
    VALUES ('Denim Jeans', 'Stylish and durable blue denim jeans.', 'denim-jeans', 'Fall', 'Apparel')
    RETURNING id INTO product_2_id;

    INSERT INTO products (title, description, url_slug, status, season, category)
    VALUES ('Vintage Hoodie', 'A very old hoodie.', 'vintage-hoodie', 'archived', 'Winter', 'Apparel')
    RETURNING id INTO product_3_id;

    INSERT INTO products (title, description, url_slug, status, season, category)
    VALUES ('Summer Shorts', 'Bright yellow shorts.', 'summer-shorts', 'discontinued', 'Summer', 'Apparel')
    RETURNING id INTO product_4_id;

    INSERT INTO products (title, description, url_slug, season, category)
    VALUES ('Denim Jacket', 'A stylish denim jacket.', 'denim-jacket', 'Fall', 'Apparel')
    RETURNING id INTO product_5_id;

    -- 4. CREATE PRODUCT VARIANTS --

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_1_id, 'https://example.com/img/tshirt-red.jpg', 'M', 'Red', 19.99, 100)
    RETURNING id INTO p1_variant_1_id;
    
    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_1_id, 'https://example.com/img/tshirt-blue.jpg', 'L', 'Blue', 19.99, 50)
    RETURNING id INTO p1_variant_2_id;
    
    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_1_id, 'https://example.com/img/tshirt-red-s.jpg', 'S', 'Red', 19.99, 100)
    RETURNING id INTO p1_variant_3_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_1_id, 'https://example.com/img/tshirt-blue-xl.jpg', 'XL', 'Blue', 21.99, 50)
    RETURNING id INTO p1_variant_4_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_2_id, 'https://example.com/img/jeans-blue.jpg', 'S', 'Blue', 49.99, 75)
    RETURNING id INTO p2_variant_1_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_2_id, 'https://example.com/img/jeans-blue-m.jpg', 'M', 'Blue', 49.99, 75)
    RETURNING id INTO p2_variant_2_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_2_id, 'https://example.com/img/jeans-blue-l.jpg', 'L', 'Blue', 49.99, 75)
    RETURNING id INTO p2_variant_3_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_3_id, 'https://example.com/img/hoodie.jpg', 'L', 'Gray', 39.99, 0)
    RETURNING id INTO p3_variant_1_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_4_id, 'https://example.com/img/shorts.jpg', 'M', 'Yellow', 24.99, 0)
    RETURNING id INTO p4_variant_1_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_5_id, 'https://example.com/img/jacket-s.jpg', 'S', 'Indigo', 89.99, 50)
    RETURNING id INTO p5_variant_1_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_5_id, 'https://example.com/img/jacket-m.jpg', 'M', 'Indigo', 89.99, 50)
    RETURNING id INTO p5_variant_2_id;

    INSERT INTO product_variants (product_id, image_url, size, color, price, stock_quantity)
    VALUES (product_5_id, 'https://example.com/img/jacket-l.jpg', 'L', 'Indigo', 89.99, 30)
    RETURNING id INTO p5_variant_3_id;

    -- 5. CREATE CARTS --

    INSERT INTO carts (user_id, user_email, status, subtotal, num_items)
    VALUES (customer_2_id, 'john.smith@example.com', 'active', 19.99, 1)
    RETURNING id INTO cart_2_id;

    INSERT INTO carts (user_id, user_email, status, subtotal, num_items, session_id)
    VALUES (NULL, 'guest123@temp.com', 'abandoned', 19.99, 1, 'sess_abc123_abandoned_hash')
    RETURNING id INTO cart_3_id;

    INSERT INTO carts (user_id, user_email, status, subtotal, num_items)
    VALUES (customer_1_id, 'jane.doe@example.com', 'order', 69.98, 2)
    RETURNING id INTO cart_1_id;

    INSERT INTO carts (user_id, user_email, status, subtotal, num_items)
    VALUES (customer_3_id, 'mike.brown@example.com', 'order', 19.99, 1)
    RETURNING id INTO cart_4_id;

    INSERT INTO carts (user_id, user_email, status, subtotal, num_items)
    VALUES (customer_4_id, 'sarah.lee@example.com', 'order', 69.98, 2)
    RETURNING id INTO cart_5_id;
    
    INSERT INTO carts (user_id, user_email, status, subtotal, num_items, session_id)
    VALUES (NULL, 'guest_checkout@example.com', 'order', 49.99, 1, 'sess_xyz789_guest_order')
    RETURNING id INTO cart_6_id;

    -- 6. CREATE CART ITEMS --

    INSERT INTO cart_items (cart_id, product_variant_id, quantity, unit_price)
    VALUES (cart_2_id, p1_variant_2_id, 1, 19.99);

    INSERT INTO cart_items (cart_id, product_variant_id, quantity, unit_price)
    VALUES (cart_3_id, p1_variant_1_id, 1, 19.99);

    INSERT INTO cart_items (cart_id, product_variant_id, quantity, unit_price)
    VALUES
        (cart_1_id, p1_variant_1_id, 1, 19.99),
        (cart_1_id, p2_variant_1_id, 1, 49.99);

    INSERT INTO cart_items (cart_id, product_variant_id, quantity, unit_price)
    VALUES (cart_4_id, p1_variant_1_id, 1, 19.99);

    INSERT INTO cart_items (cart_id, product_variant_id, quantity, unit_price)
    VALUES 
        (cart_5_id, p1_variant_1_id, 1, 19.99),
        (cart_5_id, p2_variant_1_id, 1, 49.99);
        
    INSERT INTO cart_items (cart_id, product_variant_id, quantity, unit_price)
    VALUES (cart_6_id, p2_variant_1_id, 1, 49.99);

    -- 7. CREATE ORDERS --

    INSERT INTO orders (
        user_id, user_email, user_first_name, user_last_name, cart_id, address_id,
        address_line1, address_line2, address_city, address_zip, address_country,
        order_number, status, total_tax, shipping_cost, total_amount,
        payment_hash, payment_method, payment_status, placed_at
    )
    VALUES (
        customer_1_id, 'jane.doe@example.com', 'Jane', 'Doe', cart_1_id, address_1_id,
        '123 Main St', NULL, 'Anytown', '12345', 'US',
        'ORD-1001', 'delivered', 5.60, 5.00, 75.58,
        'pm_hash_123abc', 'stripe', 'completed', '2025-11-01 10:30:00'
    )
    RETURNING id INTO order_1_id;

    INSERT INTO orders (
        user_id, user_email, user_first_name, user_last_name, cart_id, address_id,
        address_line1, address_line2, address_city, address_zip, address_country,
        order_number, status, total_tax, shipping_cost, total_amount,
        payment_hash, payment_method, payment_status, placed_at
    )
    VALUES (
        customer_3_id, 'mike.brown@example.com', 'Mike', 'Brown', cart_4_id, NULL,
        '789 Pine St', 'Apt 3B', 'Othertown', '54321', 'US',
        'ORD-1002', 'processing', 2.00, 5.00, 24.99,
        'pm_hash_456def', 'stripe', 'completed', '2025-11-13 10:00:00'
    )
    RETURNING id INTO order_2_id;

    INSERT INTO orders (
        user_id, user_email, user_first_name, user_last_name, cart_id, address_id,
        address_line1, address_line2, address_city, address_zip, address_country,
        order_number, status, total_tax, shipping_cost, total_amount,
        payment_hash, payment_method, payment_status, placed_at
    )
    VALUES (
        customer_4_id, 'sarah.lee@example.com', 'Sarah', 'Lee', cart_5_id, NULL,
        '321 Maple Rd', NULL, 'New City', '11223', 'US',
        'ORD-1003', 'shipped', 5.60, 5.00, 75.58,
        'pm_hash_789ghi', 'paypal', 'completed', '2025-11-10 14:00:00'
    )
    RETURNING id INTO order_3_id;

    INSERT INTO orders (
        user_id, user_email, user_first_name, user_last_name, cart_id, address_id,
        address_line1, address_line2, address_city, address_zip, address_country,
        order_number, status, total_tax, shipping_cost, total_amount,
        payment_hash, payment_method, payment_status, placed_at
    )
    VALUES (
        NULL, 'guest_checkout@example.com', 'Guest', 'User', cart_6_id, NULL,
        '111 No Where', NULL, 'Ghost Town', '00000', 'US',
        'ORD-1004', 'cancelled', 4.00, 5.00, 58.99,
        'pm_hash_jkl123', 'stripe', 'refunded', '2025-11-14 11:00:00'
    )
    RETURNING id INTO order_4_id;

    -- 8. CREATE ORDER ITEMS --

    INSERT INTO order_items (
        order_id, product_variant_id, product_title, product_description, product_size, product_color,
        product_image_url, quantity, unit_price, total_price
    )
    VALUES (order_1_id, p1_variant_1_id, 'Classic T-Shirt', 'A comfortable 100% cotton t-shirt.', 'M', 'Red', 'https://example.com/img/tshirt-red.jpg', 1, 19.99, 19.99)
    RETURNING id INTO o1_item_1_id;

    INSERT INTO order_items (
        order_id, product_variant_id, product_title, product_description, product_size, product_color,
        product_image_url, quantity, unit_price, total_price
    )
    VALUES (order_1_id, p2_variant_1_id, 'Denim Jeans', 'Stylish and durable blue denim jeans.', 'S', 'Blue', 'https://example.com/img/jeans-blue.jpg', 1, 49.99, 49.99)
    RETURNING id INTO o1_item_2_id;

    INSERT INTO order_items (
        order_id, product_variant_id, product_title, product_description, product_size, product_color,
        product_image_url, quantity, unit_price, total_price
    )
    VALUES (order_2_id, p1_variant_1_id, 'Classic T-Shirt', 'A comfortable 100% cotton t-shirt.', 'M', 'Red', 'https://example.com/img/tshirt-red.jpg', 1, 19.99, 19.99)
    RETURNING id INTO o2_item_1_id;

    INSERT INTO order_items (
        order_id, product_variant_id, product_title, product_description, product_size, product_color,
        product_image_url, quantity, unit_price, total_price
    )
    VALUES (order_3_id, p1_variant_1_id, 'Classic T-Shirt', 'A comfortable 100% cotton t-shirt.', 'M', 'Red', 'https://example.com/img/tshirt-red.jpg', 1, 19.99, 19.99)
    RETURNING id INTO o3_item_1_id;

    INSERT INTO order_items (
        order_id, product_variant_id, product_title, product_description, product_size, product_color,
        product_image_url, quantity, unit_price, total_price
    )
    VALUES (order_3_id, p2_variant_1_id, 'Denim Jeans', 'Stylish and durable blue denim jeans.', 'S', 'Blue', 'https://example.com/img/jeans-blue.jpg', 1, 49.99, 49.99)
    RETURNING id INTO o3_item_2_id;

    INSERT INTO order_items (
        order_id, product_variant_id, product_title, product_description, product_size, product_color,
        product_image_url, quantity, unit_price, total_price
    )
    VALUES (order_4_id, p2_variant_1_id, 'Denim Jeans', 'Stylish and durable blue denim jeans.', 'S', 'Blue', 'https://example.com/img/jeans-blue.jpg', 1, 49.99, 49.99)
    RETURNING id INTO o4_item_1_id;

    -- 9. CREATE SHIPMENTS --

    INSERT INTO shipments (order_id, service, carrier, tracking_number, status, shipped_at, delivered_at)
    VALUES
        (order_1_id, 'standard', 'UPS', 'UPS111111111111111', 'delivered', '2025-11-01 17:00:00', '2025-11-04 14:00:00');

    INSERT INTO shipments (order_id, service, carrier, tracking_number, status, shipped_at, delivered_at)
    VALUES (order_2_id, 'express', 'FedEx', 'FedEx2222222222222', 'shipped', '2025-11-14 09:00:00', NULL);

    INSERT INTO shipments (order_id, service, carrier, tracking_number, status, shipped_at, delivered_at)
    VALUES (order_3_id, 'standard', 'UPS', 'UPS333333333333333', 'delivered', '2025-11-11 12:00:00', '2025-11-13 15:00:00');
    
    INSERT INTO shipments (order_id, service, carrier, tracking_number, status, shipped_at, delivered_at)
    VALUES (order_3_id, 'standard', 'UPS', 'UPS444444444444444', 'shipped', '2025-11-12 09:00:00', NULL);

    -- 10. CREATE RETURNS --

    INSERT INTO returns (
        order_id, user_id, user_email, user_first_name, user_last_name,
        return_number, reason_category, description, status, refund_amount, 
        requested_at, approved_at, received_at, refunded_at
    )
    VALUES (
        order_1_id, customer_1_id, 'jane.doe@example.com', 'Jane', 'Doe',
        'RTN-1001', 'wrong_size', 'The t-shirt was too small', 'refunded', 19.99, 
        '2025-11-05 09:00:00', '2025-11-05 17:00:00', '2025-11-08 11:00:00', '2025-11-09 10:00:00'
    )
    RETURNING id INTO return_1_id;

    INSERT INTO returns (
        order_id, user_id, user_email, user_first_name, user_last_name,
        return_number, reason_category, description, status, refund_amount, requested_at
    )
    VALUES (
        order_2_id, customer_3_id, 'mike.brown@example.com', 'Mike', 'Brown',
        'RTN-1002', 'item_damaged', 'Item was damaged', 'rejected', 0.00, '2025-11-14 12:00:00'
    )
    RETURNING id INTO return_2_id;
    
    INSERT INTO returns (
        order_id, user_id, user_email, user_first_name, user_last_name,
        return_number, reason_category, description, status, refund_amount, requested_at, approved_at
    )
    VALUES (
        order_3_id, customer_4_id, 'sarah.lee@example.com', 'Sarah', 'Lee',
        'RTN-1003', 'wrong_item', 'This is not what I ordered.', 'approved', 19.99, '2025-11-14 13:00:00', '2025-11-14 14:00:00'
    )
    RETURNING id INTO return_3_id;

    -- 11. CREATE RETURN ITEMS --

    INSERT INTO return_items (return_id, order_item_id, quantity_returned, condition)
    VALUES (return_1_id, o1_item_1_id, 1, 'new');

    INSERT INTO return_items (return_id, order_item_id, quantity_returned, condition)
    VALUES (return_3_id, o3_item_1_id, 1, 'new');

END $$;

