import Navbar from "../components/Navbar"
import Product from "../components/Product";
import products from "../data/products";

const Product1 = () => {
     const product = products.find(
        item => item.id === 1
    );

  return (
    <>
        <Navbar/>
        <div className="Product-Wrapper">
            <div className="Product-nav"> 
                <div className="Product-menu-1">
                    <b><p className="font-gap">หน้าหลัก </p> </b>
                    <b><p className="style-gap">/</p> </b>
                    <b><p className="font-gap"> หน้าสินค้าปัจจุบัน</p></b>
                </div>


                <div className="Product-menu-2">
                    <b><p className="font-gap">ก่อนหน้า </p> </b>
                    <b><p className="style-gap">|</p> </b>
                    <b><p className="font-gap"> ถัดไป</p></b>
                </div>
            </div>

            <div className="Incontent-product">

                <div className="Product-1-pic">
                    <Product id={1}/>
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
                        
                      


                    </div>
                </div>

            </div>


        </div>

      


    </>
  )
}

export default Product1