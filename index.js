const express = require('express')
const mongoose = require('mongoose')

const config = require('config')
const clientsRoute = require('./routes/clients.routes')

const app = express();

app.use(express.json({extendet: true}))

app.use('/api/clients', clientsRoute)

const PORT = config.get('port' || 5000)
const MONGO_URI = config.get('mongoUri')

async function start() {
    try {
        await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Server has been started on ${PORT}...`))
    } catch (e) {
        console.log('Error: ', e.message)
        process.exit(1)
    }
}

start()




