
import Product from "../components/Product";
import { useCart } from '../src/context/UseCart';
import products from "../data/products";
import { Link } from "react-router-dom"
import { useState } from 'react';
const Product7 = () => {
     const product = products.find(
        item => item.id === 7
    );
    const { setCartCount } = useCart();
     const [countitem , setCountItem] = useState(1);
  return (
    <>
        
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
                     <Link to ="/Product6" className="stylenone">
                        <b><p className="font-gap">ก่อนหน้า </p> </b>
                    </Link>
                    <b><p className="style-gap">|</p> </b>
                    <Link to = "/Product8" className="stylenone">
                    <b><p className="font-gap"> ถัดไป</p></b>
                    </Link>
                </div>
            </div>

            <div className="Incontent-product">

                <div className="Product-pic-full">
                    <Product id={7}/>
                </div>
                <div className="info-wrapper">
                    <div className="Info-Product">
                        <h2>{product.name}</h2>
                        <br />
                        <p>
                            SKU: 007
                        </p>
                        <br />
                        <b><p>$ 300.00</p></b>
                        <br />
                        <b><p>สี :</p></b>
                        <br />
                       <div className="color-wrapper">
                                {product.colors.map((color,index)=>(

                                <span
                                    key={index}
                                    className="color-box"
                                    style={{
                                        backgroundColor:color
                                    }}
                                ></span>

                              ))}
                            </div>
                        <br />
                        <b><p>จำนวน :</p> </b>
                        <br />
                        <div className="eqt-box">
                           <button className="btn-count" onClick={()=>{
                                if(countitem > 1){
                                setCountItem(countitem - 1)
                                }
                            }}>-</button>
                            <input className="eqt-input" type="number" readOnly  value={countitem}  />
                            <button className="btn-count" onClick={()=>{
                                if(countitem < 99){
                                setCountItem(countitem + 1)
                                }
                            }}>+</button>
                            
                        </div>
                        <br />
                        <button className="add-to-cart"onClick={()=>{
                                        setCartCount(
                                            prev => prev + countitem
                                        );
                                        }}>เพิ่มลงรถเข็น</button>
                        <br />
                        <button className="btn-buy">ซื้อเลย</button>
                      


                    </div>
                </div>

            </div>


        </div>

      


    </>
  )
}

export default Product7