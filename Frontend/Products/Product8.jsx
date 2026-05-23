import Navbar from "../components/Navbar"
import Product from "../components/Product";
import products from "../data/products";
import { Link } from "react-router-dom"
const Product1 = () => {
     const product = products.find(
        item => item.id === 8
    );

  return (
    <>
        <Navbar/>
        <div className="Product-Wrapper">
            <div className="Product-nav"> 
                <div className="Product-menu-1 ">
                    <Link to = "/" className="stylenone">
                    <b><p className="font-gap">หน้าหลัก </p> </b>
                    </Link>
                    <b><p className="style-gap">/</p> </b>
                    <b><p className="font-gap"> หน้าสินค้า {product.name}</p></b>
                </div>


                <div className="Product-menu-2">
                   
                    <b><p className="style-gap">|</p> </b>
                    <Link to = "/Product8" className="stylenone">
                    <b><p className="font-gap"> ถัดไป</p></b>
                    </Link>
                </div>
            </div>

            <div className="Incontent-product">

                <div className="Product-1-pic">
                    <Product id={8}/>
                </div>
                <div className="info-wrapper">
                    <div className="Info-Product">
                        <h2>{product.name}</h2>
                        <br />
                        <p>
                            SKU: 001
                        </p>
                        <br />
                        <b><p>$ 300.00</p></b>
                        <br />
                        <b><p>สี :</p></b>
                        <br />
                        <div className="color-wrapper">
                            <span className="Orage"></span>
                            <span className="Pink"></span>
                        </div>
                        <br />
                        <b><p>จำนวน :</p> </b>
                        <br />
                        <div className="eqt-box">
                            <button className="btn-count">-</button>
                            <input className="eqt-input" type="number" readOnly min={1} value={1} max={99}  />
                            <button className="btn-count">+</button>
                            
                        </div>
                        <br />
                        <button className="add-to-cart">เพิ่มลงรถเข็น</button>
                        <br />
                        <button className="btn-buy">ซื้อเลย</button>
                      


                    </div>
                </div>

            </div>


        </div>

      


    </>
  )
}

export default Product1