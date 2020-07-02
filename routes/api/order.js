const express = require('express')
const router = express.Router()
const Order = require('../../models/Order')
const decode = require('jwt-decode')


// POST to api/items
router.post('/', async (req, res) => {
    if(req.body.order.token === null){
        return res.json({message: 'Need to be authenticated'})
    } 
    const decodedJwt = await decode(req.body.order.token)
    

    const order = new Order({
        items: req.body.order.items,
        total: req.body.order.total,
        user: decodedJwt.userId
    })
    // console.log(req.body.order)
    console.log(order)
    await order.save()
    
    return res.json({message: 'Success'})
    
    
})
module.exports = router