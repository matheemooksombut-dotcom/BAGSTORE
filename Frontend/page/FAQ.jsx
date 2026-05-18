import Navbar from "../components/Navbar"
import { useState } from "react"


const FAQ = () => {
  const [detailText , setDetailText] = useState("");
  const [active, setActive] = useState("")
  return (
    <>
    <Navbar/>

       
      <div className="FAQ-Wrapper">
        <div className="FAQ">
          <b><h1>FAQ</h1></b>
          <br />
          <p>คำถามที่พบบ่อย</p>

          <div className="SwitFAQ">
            <div className="FAQ-1">
              <p className={active ==="ทั่วไป"
                ? "detai-FAQ active"
                : "detai-FAQ"
              }  onClick={() => {setActive("ทั่วไป") 
                setDetailText("นี้คือข้อมูลสินค้า")}}>ทั่วไป</p>
            </div>

            <div className="FAQ-2">
               <p className={active ==="ข้อมูลสินค้า"
                ? "detai-FAQ active"
                : "detai-FAQ"
              }  onClick={() => {setActive("ข้อมูลสินค้า") 
                setDetailText("นี้คือลายละเอียด")}}>ข้อมูลสินค้า</p>
            </div>
          </div>
          <br />
          <p>{detailText}</p>

        </div>
        
      </div>
      
    </>
  )
}

export default FAQ