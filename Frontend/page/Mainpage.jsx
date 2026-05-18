import '../src/App.css'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Product from '../components/Product';


export const Mainpage = () => {
  
  return (
    <>
        <Navbar/>
          <div id='ShowAllProduct' className="Items">

          <div className="Itme">
            <div className="Pic-Items">
              <Product id={1}  />
             </div>
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
            <p>300$</p>
           <br />
            <button className="btn-add-tocart">เพิ่มลงรถเข็น</button>
          </div>

          <div className="Itme">
            <div className="Pic-Items">
              <Product id={3} />
              <img src="../public/bag3.png" alt="" />
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
              <img src="../public/bag4.png" alt="" />
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
              <img src="../public/bag5.png" alt="" />
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
              <img src="../public/bag6.png" alt="" />
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
              <img src="../public/bag7.png" alt="" />
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
              <img src="../public/bag8.png" alt="" />
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
              <img src="../public/bag8.png" alt="" />
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
              <img src="../public/bag8.png" alt="" />
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
              <img src="../public/bag8.png" alt="" />
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
              <img src="../public/bag8.png" alt="" />
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
