import { useDispatch, useSelector } from "react-redux"
import Layout from "../Componets/Layout"
import { addToCart } from "../Redux/cartSlice"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
    const dispatch = useDispatch()
    const [data , setData] = useState(
        {
            id:3 , 
            type: "T-Shirt", 
            Name:"PrintOctopus Men's Classic Fit T-Shirt" , 
            Price: "₹ 465.80",
            imageAlt: "Front of men's Basic Tee in black.",
            imageSrc:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" , 
            Description:" Care Instructions: Ensure washing the tee in cold water and don't dry in direct sunlight. Instructions are printed on the neck label for your convenience." ,
            Fabric: "100% Cotton",
            Style: "Regular",
            Neck_Style: "Round Neck", 
            Pattern: "Solid",
            fitType:"regular_fit"
        }
    )
    const id = useParams()
    const currentVal:any = useSelector((state:any) => state.cart.products)
    const [quantity , setQuantity] = useState(1)

const filterData = () => {
    const newData = currentVal.filter((item:any) => item.id == id.id)
    setData(newData[0])
}

useEffect(()=>{
    filterData()
},[id])

const handleCart = () => {
        dispatch(addToCart({ 
            id: data?.id, 
            imageSrc: data?.imageSrc,
            Price: data?.Price,
            Name:data?.Name,
            quantity: quantity
        }))
        toast("Item Added To Cart")
    }
  return (
    <Layout>
          <div className="mt-[40px] pl-[25px] max-w-screen-lg">
        <div className="flex items-center justify-around text-left flex-wrap">
            <div className="p-[80px] basis-2/4 min-w-80  ">
                
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" width="100%"  className=""
/>
                <div className="flex justify-between   ">
                    <div className="basis-1/4 border cursor-pointer border-black mr-2 my-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" width="100%" className=""/>
                    </div>
                    <div className="basis-1/4 border cursor-pointer border-black m-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" width="100%" className=""/>
                    </div>
                    <div className="basis-1/4 border  cursor-pointer border-black m-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" width="100%" className=""/>
                    </div>
                    <div className="basis-1/4 border  cursor-pointer border-black ml-2 my-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" width="100%" className=""/>
                    </div>
                </div> 

            </div>
            <div className="basis-2/4 min-w-80">
                <p>Home / {data?.type}</p>
                <h1 className="text-4xl">{data?.Name}</h1>
                <h4 className="my-[20px] font-bold text-2xl"> Price:	₹ 465.80</h4>
                <div>
                <select className="border-2 border-black p-[10px] mt-[20px] ">
                    <option> Select Size</option>
                    <option> XXL</option>
                    <option> XL</option>
                    <option> L</option>
                    <option> M</option>
                    <option> S</option>
                </select>
                </div>
                <div className="mt-[20px]">
                <input type="number" value={quantity} className="mr-[20px] my-[10px] w-[40px] h-[45px] text-2xl border-2 border-black "   onChange={(e) => setQuantity(Number(e.target.value))}
 /> 
                <button  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 px-[30px] py-[8px] my-[30px] rounded-lg bg-orange-600" onClick={handleCart}>Add to cart</button> 
                </div>
                <h3 className="text-3xl pt-[20px]">Product Deatils</h3>
                <p>{data?.Description}
                   <br/> Fit Type: {data?.fitType}<br/> 
                    Fabric: {data?.Fabric}<br/> 
                    Style: {data?.Style}<br/> 
                    Neck Style: {data?.Neck_Style}<br/> 
                    Pattern: {data?.Pattern}</p>
            </div>
        </div>
    </div>
    <ToastContainer />
</Layout>
  )
}

export default ProductDetails