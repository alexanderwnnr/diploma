const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Order = require('../../models/Order')

// GET to api/items
router.get('/', (req, res) => {
    Order.find().sort({ date: -1 }).then(items => res.json(items))
})
// POST to api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
})
module.exports = router
// DELETE to api/items