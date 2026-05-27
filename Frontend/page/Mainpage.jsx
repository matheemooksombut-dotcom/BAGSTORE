import '../src/App.css'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Product from '../components/Product';
import { Link } from "react-router-dom";
import { useState } from 'react';
import products from '../data/products';

export const Mainpage = () => {
 const [show , setShow] = useState(false);
 const [selectedProduct , setSelectedProduct] = useState(null);
 const [countitem , setCountItem] = useState(1);
 const handleClose = ()=>{
    setShow(false);
    setCountItem(1);
}
  
     const handleOpen = (id)=>{
        const product = products.find(item=>item.id === id);

        setSelectedProduct(product);
        setShow(true);
    } 

  return (
    <>
        <Navbar/>
          <div id='ShowAllProduct' className="Items">

        {products.map((item)=>(
                <div className="Itme" key={item.id}>

                    <Link to={`/Product${item.id}`}>
                        <div className="Pic-Items">
                            <Product id={item.id}/>
                        </div>
                    </Link>

                    <br/>

                    <p>{item.name}</p>

                    <br/>

                    <div className="mini-line"></div>

                    <br/>

                    <p>฿ {item.price}</p>

                    <br/>

                    <button
                        className="btn-add-tocart"
                        onClick={()=>handleOpen(item.id)}
                    >
                        เพิ่มลงรถเข็น
                    </button>

                </div>
            ))}

        </div>


        {show && selectedProduct && (

            <div
                className="overlay"
                onClick={handleClose}
            >

                <div
                    className="overlay-wrapper"
                    onClick={(e)=>e.stopPropagation()}
                >

                    <div className="Pic-Items">
                        <Product id={selectedProduct.id}/>
                    </div>

                    <div className="Inside-Content-Wrapper">

                        <div className="Content-overlay">

                            <h2>
                                {selectedProduct.name}
                            </h2>

                            <br/>

                            <p>SKU: {selectedProduct.id}</p>

                            <br/>

                            <b>
                                <p>฿ {selectedProduct.price}</p>
                            </b>

                            <br/>

                              <div className="color-wrapper">
                                {selectedProduct.colors.map((color,index)=>(

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

                            <button className="add-to-cart">
                                เพิ่มลงรถเข็น
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        )}

        <div id='aboutus'>
            <Footer/>
        </div>

    </>
  )
}

export default Mainpage