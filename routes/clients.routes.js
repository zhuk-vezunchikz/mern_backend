const {Router} = require('express')

const Client = require('../models/Client')

const router = Router()


// api/clients/addClient
router.post('/addClient', async (req, res) => {
    
    try {
        console.log('Body: ', req.body);

        const {firstName, lastName, phone} = req.body

        const client = new Client({firstName, lastName, phone})

        await client.save()

        res.status(200).json({message: "Пользователь создан"})
        
    } catch(e) {
        res.status(500).json({message: 'Ops... Something is happend!'})
    }
})

module.exports = router