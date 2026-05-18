const Product  =  require('../models/Product')





//!  ส่งข้อมูล Product ทั้งหมดออกไปใช้งาน 

const getProducts  = async (req  , res ) => {
    try {
        const Products =  await postMessage.find()
        res.status(200).json(Products)

    }catch(error) {
        res.status(404).json({message : error.message})
    
    }
}



// ! เพิ่มข้อมูลลง Database 
const CreateProduct  = async (req  , res ) => {
    const Products = req.body
    const NewProduct =  new Product(Products)
    try {
        await NewProduct.save()
        res.status(201).json(NewProduct)

    }catch(error) {
        res.status(409).json({message : error.message})
    
    }
}


module.exports = {
    getProducts ,
    CreateProduct
}