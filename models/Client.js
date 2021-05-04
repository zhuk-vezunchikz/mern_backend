const {Schema, model} = require('mongoose')

const schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true}
})

module.exports = model('Client', schema)