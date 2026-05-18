import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <div className="navbar">
          <div className="TextIconic">
            <h1>เป๋าเป่า</h1>
            <b><p>กระเป๋าพิมพ์ลายแนวฟังกี้</p></b>
          </div>
        
            <ul className="menu">
              <li><Link to="/" className="stylenone"><p onClick={()=>{
                document.getElementById("ShowAllProduct").scrollIntoView({behavior: "smooth"})
              }}>เลือกซื้อ</p></Link></li>
              <li><Link to="/" className="stylenone"><p onClick={()=>{
                document.getElementById("aboutus").scrollIntoView({behavior: "smooth"})
              }}>เกี่ยวกับเรา</p></Link></li>
              <li><Link to="/FAQ" className="stylenone"><p>FAQ</p></Link></li>
              <li><p>ติดต่อเรา</p></li>
            </ul>
       
      </div>

    
    


    </>
  )
}

export default Navbar