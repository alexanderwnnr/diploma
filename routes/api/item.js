const express = require('express')
const router = express.Router()
const Item = require('../../models/Item')

router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router