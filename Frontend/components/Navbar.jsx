import { Link } from "react-router-dom"
import { useCart } from "../src/context/UseCart";
// import { useCart } from "../src/context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <>
      <div className="navbar">
          <div className="TextIconic">
            <h1>เป๋าเป่า</h1>
            <b><p>กระเป๋าพิมพ์ลายแนวฟังกี้</p></b>
          </div>
        
            <ul className="menu">
              <li><Link to="/" className="stylenone"><b><p onClick={()=>{
                document.getElementById("ShowAllProduct").scrollIntoView({behavior: "smooth"})
              }}>เลือกซื้อ</p></b></Link></li>
              <li><Link to="/" className="stylenone"><b><p onClick={()=>{
                document.getElementById("aboutus").scrollIntoView({behavior: "smooth"})
              }}>เกี่ยวกับเรา</p></b></Link></li>
              <li><Link to="/FAQ" className="stylenone"><b><p>FAQ</p></b></Link></li>
              <li><p>ติดต่อเรา</p></li>
              <i class="fa-solid fa-cart-arrow-down">({cartCount})</i>
            </ul>
       
      </div>

    
    


    </>
  )
}

export default Navbar