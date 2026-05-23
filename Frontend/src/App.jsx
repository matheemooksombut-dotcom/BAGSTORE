
import Mainpage from "../page/Mainpage"
import FAQ from "../page/FAQ"
import Product1 from "../Products/Product1"
import Product2 from "../Products/Product2"
import {  Routes, Route } from "react-router-dom"

 
function App() {
  

  return (
   
      <Routes>
        <Route path="/" element={<Mainpage/>}  />
        <Route path="/FAQ" element={<FAQ/>}  />
        <Route path="/Product1" element={<Product1/>}  />
        <Route path="/Product2" element={<Product2/>}  />
      </Routes>
    
  )
}

export default App
