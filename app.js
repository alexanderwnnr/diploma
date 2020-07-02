const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const PORT = config.get('port') || 5000


const app = express()


app.use(express.json())

async function start() {
    try {   
        await mongoose.connect(config.get('mongoDb'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    // Use routes
    app.use('/api/items', require('./routes/api/items'))
    app.use('/api/item', require('./routes/api/item'))
    app.use('/api/auth', require('./routes/api/auth'))
    app.use('/api/order', require('./routes/api/order'))
    app.use('/api/admin', require('./routes/api/admin'))

    app.listen(PORT, () => {console.log(`App has been started on port ${PORT}...`)})

    } catch (error) {
        console.log('Server Error!', error.message)
        process.exit(1)
    }
}

start()
