import '../src/App.css'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Product from '../components/Product';
import { Link } from "react-router-dom";

export const Mainpage = () => {
  
  return (
    <>
        <Navbar/>
          <div id='ShowAllProduct' className="Items">

          <div className="Itme">
            <Link to = "/Product1">
              <div className="Pic-Items">
                <Product id={1}  />
              </div>
            </Link>
             <br />
            <p>Product 1</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
           
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>

          <div className="Itme">
            <div className="Pic-Items">
              <Product id={2} />
             </div>
             <br />
            <p>Product 2</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
           <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>

          <div className="Itme">
            <div className="Pic-Items">
              <Product id={3} />
             </div>
             <br />
            <p>Product 3</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
           <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>

          <div className="Itme">
            <div className="Pic-Items">
              <Product id={4} />
             </div>
             <br />
            <p>Product 4</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
           <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>

          <div className="Itme">
            <div className="Pic-Items">
              <Product id={5} />
             </div>
             <br />
            <p>Product 5</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>

          <div className="Itme">
            <div className="Pic-Items">
              <Product id={6} />
             </div>
             <br />
            <p>Product 6</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>

          <div className="Itme"><div className="Pic-Items">
            <Product id={7} />
             </div>
             <br />
            <p>Product 7</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button></div>
          
          <div className="Itme">
            <div className="Pic-Items">
              <Product id={8} />
             </div>
             <br />
            <p>Product 8</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>


           <div className="Itme">
            <div className="Pic-Items">
              <Product id={9} />
             </div>
             <br />
            <p>Product 9</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>



           <div className="Itme">
            <div className="Pic-Items">
              <Product id={10} />
             </div>
             <br />
            <p>Product 10</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>


          <div className="Itme">
            <div className="Pic-Items">
              <Product id={11} />
             </div>
             <br />
            <p>Product 11</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>


          <div className="Itme">
            <div className="Pic-Items">
              <Product id={12} />
             </div>
             <br />
            <p>Product 12</p>
            <br />
            <div className="mini-line"></div>
            <br />
            <p>฿ 300</p>
            <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>

      </div>
      
        <div id='aboutus'>
            <Footer/>
        </div>
    </>
  )
}


export default Mainpage;
