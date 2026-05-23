
import Mainpage from "../page/Mainpage"
import FAQ from "../page/FAQ"
import Product1 from "../Products/Product1"
import {  Routes, Route } from "react-router-dom"

 
function App() {
  

  return (
   
      <Routes>
        <Route path="/" element={<Mainpage/>}  />
        <Route path="/FAQ" element={<FAQ/>}  />
        <Route path="/Product1" element={<Product1/>}  />
      </Routes>
    
  )
}

export default App
