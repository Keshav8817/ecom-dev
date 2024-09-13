import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 3,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 4,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
// ];

export default function ProductCard() {
  const products  = useSelector((state:any) => state.cart.products)
  const dispatch = useDispatch()
  const nevigate = useNavigate()

  const handleNevigate = (id:any) => {
    nevigate(`/productDetails/${id}`)
  }

  const handleCart = (item:any) => {
    dispatch(addToCart({
        id: item?.id,
        imageSrc: item?.imageSrc,
        Price: item?.Price,
        Name: item?.Name,
        quantity: 1
    }))
    toast("Item Added To Cart")
}
  return (
    <>
    <div className="container mx-auto  px-4 my-6">
      <h2 className="text-2xl font-semibold py-4">
      Top Categories to choose from   
      </h2>
      <div className="flex items-center gap-4 md:gap-6 justify-between p-4 grid grid-cols-4">
      {products.map((product:any) => (
         <div className=" flex w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow" >
         <div className="bg-slate-200 h-full  min-w-[120px] md:min-w-[145px]">
           <img src={product.imageSrc} alt={product.imageAlt} className="object-scale-down h-full hover:scale-110 transition-all  mix-blend-multiply cursor-pointer" onClick={() => handleNevigate(product?.id)}/>
         </div>
         <div className="p-4 grid">
          <h2 className="font-medium text-lg text-ellipsis line-clamp-1"> {product.Name}</h2>
          <p className="capitalize">{product?.type}</p>
          <div className="flex gap-4">
            <p className="text-red-600 font-medium">{product?.Price}</p>
            <p className="text-slate-500 line-through">{product?.Price}</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 text-sm rounded-full" onClick={()=>handleCart(product)}>Add to Cart</button>
         </div>
       </div>
      ))}
      </div>
    </div>
     <ToastContainer />
    </>
  );
}
 