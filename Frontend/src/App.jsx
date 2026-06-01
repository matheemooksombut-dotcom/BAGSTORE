
import Mainpage from "../page/Mainpage"
import FAQ from "../page/FAQ"
import Product1 from "../Products/Product1"
import Product2 from "../Products/Product2"
import Product3 from "../Products/Product3"
import Product4 from "../Products/Product4"
import Product5 from "../Products/Product5"
import Product6 from "../Products/Product6"
import Product7 from "../Products/Product7"
import Product8 from "../Products/Product8"
import Product9 from "../Products/Product9"
import Product10 from "../Products/Product10"
import Product11 from "../Products/Product11"
import Product12 from "../Products/Product12"
import Navbar from "../components/Navbar"

import {  Routes, Route } from "react-router-dom"

 
function App() {
  
  
  return (
    <>
      <Navbar />
      <Routes>
         
        <Route path="/" element={<Mainpage/>}/>
        
        <Route path="/FAQ" element={<FAQ/>}  />
        <Route path="/Product1" element={<Product1/>}  />
        <Route path="/Product2" element={<Product2/>}  />
        <Route path="/Product3" element={<Product3/>}  />
        <Route path="/Product4" element={<Product4/>}  />
        <Route path="/Product5" element={<Product5/>}  />
        <Route path="/Product6" element={<Product6/>}  />
        <Route path="/Product7" element={<Product7/>}  />
        <Route path="/Product8" element={<Product8/>}  />
        <Route path="/Product9" element={<Product9/>}  />
        <Route path="/Product10" element={<Product10/>}  />
        <Route path="/Product11" element={<Product11/>}  />
        <Route path="/Product12" element={<Product12/>}  />
      </Routes>
  </> 
  )
}

export default App
