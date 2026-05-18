const express =  require('express');

// !  Require นำ ControllerProduct มาใช้งาน
const { 
    getProducts ,
    CreateProduct
} =  require('../controllers/Products')


const Router  =  express.Router()


Roter.get('/' ,  getProducts)
Roter.post('/' ,  CreateProduct)


module.exports =  Roter