
import Mainpage from "../page/Mainpage"
import FAQ from "../page/FAQ"
import {  Routes, Route } from "react-router-dom"

 
function App() {
  

  return (
   
      <Routes>
        <Route path="/" element={<Mainpage/>}  />
        <Route path="/FAQ" element={<FAQ/>}  />
      </Routes>
    
  )
}

export default App
