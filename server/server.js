import express from 'express'
import cors from 'cors'
import { pool } from './config/database.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ Jerrys API</h1>')
})

// ============ AUTH ROUTES ============

// Login
app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' })
        }

        const result = await pool.query(
            'SELECT id, email, first_name, last_name, phone, role FROM users WHERE email = $1 AND password = $2',
            [email, password]
        )

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' })
        }

        const user = result.rows[0]
        res.json({
            id: user.id,
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
            phone: user.phone,
            role: user.role
        })
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Signup
app.post('/auth/signup', async (req, res) => {
    try {
        const { email, password, firstName, lastName, phone } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' })
        }

        // Check if user already exists
        const existingUser = await pool.query(
            'SELECT id FROM users WHERE email = $1',
            [email]
        )

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'User already exists with this email' })
        }

        // Create new user
        const result = await pool.query(
            `INSERT INTO users (email, password, first_name, last_name, phone, role)
             VALUES ($1, $2, $3, $4, $5, 'customer')
             RETURNING id, email, first_name, last_name, phone, role`,
            [email, password, firstName || '', lastName || '', phone || '']
        )

        const user = result.rows[0]
        res.status(201).json({
            id: user.id,
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
            phone: user.phone,
            role: user.role
        })
    } catch (error) {
        console.error('Signup error:', error)
        res.status(500).json({ error: 'Server error' })
    }
})

// ============ ORDER ROUTES ============

// Create order
app.post('/orders', async (req, res) => {
    try {
        const { userId, userEmail, firstName, lastName, address, items, total } = req.body

        // Generate order number
        const year = new Date().getFullYear()
        const randomNum = Math.floor(10000 + Math.random() * 90000)
        const orderNumber = `JRY-${year}-${randomNum}`

        const result = await pool.query(
            `INSERT INTO orders (
                user_id, user_email, user_first_name, user_last_name,
                address_line1, address_city, address_zip, address_country,
                order_number, status, total_amount, payment_status, placed_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'processing', $10, 'completed', NOW())
            RETURNING *`,
            [
                userId || null,
                userEmail,
                firstName,
                lastName,
                address.address,
                address.city,
                address.zip,
                address.country || 'US',
                orderNumber,
                total
            ]
        )

        res.status(201).json({
            orderNumber: result.rows[0].order_number,
            status: result.rows[0].status,
            total: result.rows[0].total_amount
        })
    } catch (error) {
        console.error('Create order error:', error)
        res.status(500).json({ error: 'Server error' })
    }
})

// Track order by order number
app.get('/orders/:orderNumber', async (req, res) => {
    try {
        const { orderNumber } = req.params

        const result = await pool.query(
            `SELECT o.*, s.status as shipment_status, s.carrier, s.tracking_number, s.shipped_at, s.delivered_at
             FROM orders o
             LEFT JOIN shipments s ON o.id = s.order_id
             WHERE o.order_number = $1`,
            [orderNumber]
        )

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Order not found' })
        }

        const order = result.rows[0]
        res.json({
            orderNumber: order.order_number,
            status: order.status,
            total: order.total_amount,
            placedAt: order.placed_at,
            address: {
                firstName: order.user_first_name,
                lastName: order.user_last_name,
                address: order.address_line1,
                city: order.address_city,
                state: order.address_state,
                zip: order.address_zip
            },
            shipment: order.shipment_status ? {
                status: order.shipment_status,
                carrier: order.carrier,
                trackingNumber: order.tracking_number,
                shippedAt: order.shipped_at,
                deliveredAt: order.delivered_at
            } : null
        })
    } catch (error) {
        console.error('Track order error:', error)
        res.status(500).json({ error: 'Server error' })
    }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})
