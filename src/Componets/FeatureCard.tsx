import { ToastContainer, toast } from "react-toastify";
import { OtherProducts } from "../Pages/ProductData";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";



  
  export default function featureCard({title}:any) {
    const nevigate = useNavigate()
    const dispatch = useDispatch()
    
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
      // <div className="bg-white container">
      //   <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      //     <h2 className="text-3xl font-bold tracking-tight text-gray-900">
      //       Customers also purchased
      //     </h2>
  
      //     <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      //       {OtherProducts?.map((product:any) => (
      //         <div key={product?.id} className="group relative">
      //           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      //             <img
      //               src={product?.imageSrc}
      //               alt={product?.imageAlt}
      //               className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      //             />
      //           </div>
      //           <div className="mt-4 flex justify-between">
      //             <div>
      //               <h3 className="text-sm text-gray-700">
      //                 <a href={product.href}>
      //                   <span aria-hidden="true" className="absolute inset-0" />
      //                   {product?.name}
      //                 </a>
      //               </h3>
      //               <p className="mt-1 text-sm text-gray-500">{product?.color}</p>
      //             </div>
      //             <p className="text-sm font-medium text-gray-900">
      //               {product?.price}
      //             </p>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </div>
      <>
      <div className="container mx-auto  px-4 my-6">
        <h2 className="text-2xl font-semibold py-4">
        {title} 
        </h2>
        <div className="flex items-center gap-6 md:gap-6 justify-between p-4 grid grid-cols-4">
        {OtherProducts.map((product:any) => (
           <div className="  w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow">
           <div className="bg-slate-200 h-40 min-w-[280px] md:min-w-[280px] flex justify-center items-center">
             <img src={product.imageSrc} alt={product.imageAlt} className="object-scale-down h-full hover:scale-110 transition-all  mix-blend-multiply"/>
           </div>
           <div className="p-4 grid">
            <h2 className="font-medium text-lg text-ellipsis line-clamp-1"> {product.Name}</h2>
            <p className="capitalize">{product?.type}</p>
            <div className="flex gap-4">
              <p className="text-red-600 font-medium">{product?.Price}</p>
              <p className="text-slate-500 line-through">{product?.Price}</p>
            </div>
            {/* <button className="bg-red-600 hover:bg-red-700 text-white px-3 mt-4 py-1 text-sm rounded-full" onClick={()=>handleCart(product)}>Add to Cart</button> */}
           </div>
         </div>
        ))}
        </div>
      </div>
       <ToastContainer />
      </>

    );
  }
  