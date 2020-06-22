const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Item = require('../../models/Item')

// GET to api/items
router.get('/', (req, res) => {
    Item.find().sort({ date: -1 }).then(items => res.json(items))
})
// POST to api/items
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
})
module.exports = router
// DELETE to api/items
