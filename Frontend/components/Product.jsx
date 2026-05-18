
import { useState } from "react"

const Product = ({ id }) => {
    const [hovered  , setHovered]  = useState(false)

    const products =  [
        {   id: 1,
            img1: "../public/bag1.png",
            img2: "../public/showbag1.png",
        },

         {   id: 2,
            img1: "../public/bag2.png",
            img2: "../public/showbag2.png",
        },


         {   id: 3,
            img1: "../public/bag3.png",
            img2: "../public/showbag3.png",
        },

         {   id: 4,
            img1: "../public/bag4.png",
            img2: "../public/showbag4.png",
        },

         {   id: 5,
            img1: "../public/bag5.png",
            img2: "../public/showbag5.png",
        },

         {   id: 6,
            img1: "../public/bag6.png",
            img2: "../public/showbag6.png",
        },

         {   id: 7,
            img1: "../public/bag7.png",
            img2: "../public/showbag7.png",
        },

         {   id: 8,
            img1: "../public/bag8.png",
            img2: "../public/showbag8.png",
        } , 
         {   id: 9,
            img1: "../public/bag9.png",
            img2: "../public/showbag9.png",
        } ,
         {   id: 10,
            img1: "../public/bag10.png",
            img2: "../public/showbag10.png",
        },
         {   id: 11,
            img1: "../public/bag11.png",
            img2: "../public/showbag11.png",
        },
         {   id: 12,
            img1: "../public/bag12.png",
            img2: "../public/showbag12.png",
        }
    ]
    const product = products.find((item) => item.id === id)
  return (
      <img
            className="img-item"

            src={
                hovered
                    ? product.img2
                    : product.img1
            }

            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        />
  )
}

export default Product