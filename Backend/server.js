const express =  require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mongoose  = require('mongoose')
const dotenv  =  require('dotenv')
const MOGO_URI  = process.env.MONGO_URI
const ProductRoute   =  require('./Routes/ProductR')

//  ! midle ware

dotenv.config()
app.use(express.json())
app.use(cors())


// ! Route 
app.use('/Product' , ProductRoute)


// ! db conection

mongoose.connect(MOGO_URI)
.then(()=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log(err.message)
})





// ! Route
app.use('/Product' , ProductRoute)
 


app.listen(PORT , ()=>{
    console.log( ` Server is Runing at http://localhost:${PORT}  `  )
})