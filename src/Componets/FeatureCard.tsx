import { ToastContainer } from "react-toastify";
import { OtherProducts } from "../Pages/ProductData";

  export default function featureCard({title}:any) {    
 

    return (
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
           </div>
         </div>
        ))}
        </div>
      </div>
       <ToastContainer />
      </>

    );
  }
  