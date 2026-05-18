const mongoose = require('mongoose');


const ProductSchema =  mongoose.Schema({
    title : String,
    price : Number
})


const Products =  mongoose.model('Products' , ProductSchema)


module.exports =  Products ;  