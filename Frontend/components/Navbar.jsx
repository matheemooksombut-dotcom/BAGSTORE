import { Link } from "react-router-dom"
import { useCart } from "../src/context/UseCart";
import { useState } from "react";
// import { useCart } from "../src/context/CartContext";

const Navbar = () => {
  
const {
    cartCount,
    cartItems,
    setCartCount,
    setCartItems
} = useCart();
const removeItem = (id) => {

  const itemToDelete = cartItems.find(
    item => item.id === id
  );

  setCartItems(
    prev => prev.filter(item => item.id !== id)
  );

  setCartCount(
    prev => prev - itemToDelete.quantity
  );
};
  const [show , setShow] = useState(false);
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
              <i
              onClick={() => setShow(true)}
              className="fa-solid fa-cart-arrow-down"
            >
              ({cartCount})
            </i>
            </ul>
       
      </div>

    
    {
  show && (
    <div
      className="overlay"
      onClick={() => setShow(false)}
    >
      <div
        className="cart-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="Conception-Cart">
          <h2>ตะกร้าสินค้า</h2>
          
        <button className="Close-btn" onClick={() => setShow(false)}>
          X
        </button>
        </div>
        
      
        <p>สินค้าในตะกร้า: {cartCount}</p>
        <br />
        {cartItems.map(item => (
    <div
        key={item.id}
        className="cart-item"
      >
        <img
            src={item.image}
            alt={item.name}
            width="80"
        />
      <br />
      <br />

        <h4>{item.name}</h4>
      <br />
      <br />
        <p>ราคา ฿{item.price}</p>
      <br />
     
        <p>จำนวน {item.quantity}</p>
      <br />
      <div className="Option">
        <button className="btn-buy">ซื้อสินค้า</button>
        <button className="btn-Deleatd" onClick={() => removeItem(item.id)}>ลบสินค้า</button>
      </div>
     
    </div>
    
))}
        <button className="Buy-btn">ซื้อสินค้าทั้งหมด</button>
        <br />
        <br />

      </div>
    </div>
  )
}


    </>
  )
}

export default Navbar