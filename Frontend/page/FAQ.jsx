import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { Link } from "react-router-dom"
import { useState } from "react"

const FAQ = () => {
  const [detailText , setDetailText] = useState("");
  const [detailText2 , setDetailText2] = useState("");
  
  const [active, setActive] = useState("")
  return (
    <>
    <Navbar/>

      <div className="map-container">
        <h2>MAP</h2>
        <br />
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988672637!2d-0.2664034848794909!3d51.528739805029666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sth!4v1779286840421!5m2!1sen!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          width="30%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <br />
      <br />

       
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
                setDetailText(<> <div className="Box-faq-1">การสั่งซื้อ  <br /><br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis assumenda corrupti ipsum. Dicta similique obcaecati et, delectus praesentium corrupti repudiandae. <div className="Icon-FontAwsome">
              <i style={{ fontSize: "30px" }} class="fa-brands fa-instagram"></i>
              <i style={{ fontSize: "30px" }} class="fa-brands fa-facebook"></i>
            </div></div></>) ,  setDetailText2(<> <div className="Box-faq-1">โปรโมชั่น <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus velit odio quod consectetur nemo quae laudantium quaerat animi iusto, pariatur ullam, veritatis vel possimus nostrum ipsam aut voluptates magni! <div className="Icon-FontAwsome">
              <i style={{ fontSize: "30px" }} class="fa-brands fa-instagram"></i>
              <i style={{ fontSize: "30px" }} class="fa-brands fa-facebook"></i>
            </div></div>  </>)}}>ทั่วไป</p>
                
            </div>

            <div className="FAQ-2">
               <p className={active ==="ข้อมูลสินค้า"
                ? "detai-FAQ active"
                : "detai-FAQ"
              }  onClick={() => {setActive("ข้อมูลสินค้า") 
                setDetailText(<> <div className="Box-faq-2">รายการสินค้า <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing  numquam consequuntur! Vitae, ratione illum! Natus, voluptatibus. <Link to ="/">รายการสินค้าทั้งหมด</Link>  </div></>
                  
                ),  setDetailText2(<> <div className="Box-faq-1">การจัดส่งสินค้า <br /><br /> l possimus nostrum ipsam aut voluptates magni!  <div className="Icon-FontAwsome">
              <i style={{ fontSize: "30px" }} class="fa-brands fa-instagram"></i>
              <i style={{ fontSize: "30px" }} class="fa-brands fa-facebook"></i>
              <i style={{ fontSize: "30px" }} class="fa-brands fa-twitter"></i>
            </div></div>  </>)
              }}>ข้อมูลสินค้า</p>
                
                
            </div>
          </div>
          <br />
          <br />
          <div className="BOX-FAQ-TAG">
            {detailText} <br />
            {detailText2}
            
            
            
           
            
            

          </div>
          
          <br />
          <br />
        
          
          
          

        </div>
        
      </div>


      
    
      

      <Footer/>
      
    </>
  )
}

export default FAQ