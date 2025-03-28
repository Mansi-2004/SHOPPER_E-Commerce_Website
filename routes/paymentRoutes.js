const express = require("express");
const Stripe = require("stripe");
require("dotenv").config(); // Load .env variables

const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Create a checkout session
router.post("/create-checkout-session", async (req, res) => {
    try {
        const { products } = req.body;

        const lineItems = products.map((product) => ({
            price_data: {
                currency: "usd",
                product_data: { name: product.name },
                unit_amount: product.price * 100, // Convert to cents
            },
            quantity: product.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3001/success",
            cancel_url: "http://localhost:3001/cancel",
        });

        res.json({ id: session.id, url: session.url });
    } catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
