const {Schema, model} = require('mongoose')

const schema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: String}
})

module.exports = model('Client', schema)