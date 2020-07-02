const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Order = require('../../models/Order')
const Item = require('../../models/Item')

// GET to api/items
router.get('/', (req, res) => {
    Order.find().sort({ date: -1 }).then(items => res.json(items))
})
// POST to api/items
router.post('/', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        date: req.body.date,
        developer: req.body.dev,
        img: req.body.img,
        desc: req.body.desc,
        price: req.body.price

    })
    console.log(newItem)
    // await newItem.save()
    res.json({ message: "Success"})
})
module.exports = router
// DELETE to api/items