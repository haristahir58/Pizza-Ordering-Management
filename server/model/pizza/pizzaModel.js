const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required: true
    },
    imageUrl:{
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true      
    },
    price:{
        type: Number,
        required: true
    }
})

const Pizza = new mongoose.model('pizza', pizzaSchema)
module.exports = Pizza;