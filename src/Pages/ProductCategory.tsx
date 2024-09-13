import { useState } from "react"

const ProductCategory = () => {

    const [categoryProduct, setCategoryProduct] = useState([
        {
            imgUrl: "/mobilecat.png",
            categoryName: "Mobiles"
        },
        {
            imgUrl: "/laptopcat.png",
            categoryName: "Laptop"
        },
        {
            imgUrl:"/Cameracate.png",
            categoryName: "camera"
        },
        {
            imgUrl: "/headphonecat.png",
            categoryName: "Headphones"
        },
        {
            imgUrl: "/pngtwashing-machine.png",
            categoryName: "Washing Machine"
        },
        {
            imgUrl: "/refrigeratorcat.png",
            categoryName: "Refrigerator"
        },
        {
            imgUrl: "/Schoolbagcat.png",
            categoryName: "Bages"
        },
        {
            imgUrl: "/shoescat.png",
            categoryName: "Mobiles"
        },
        {
            imgUrl: "/UltraHDLEDTVcat.png",
            categoryName: "Led Tv"
        },
        {
            imgUrl: "watchcat.png",
            categoryName: "Watches"
        },
        {
            imgUrl: "/htcat.png",
            categoryName: "Home Theater"
        },
        {
            imgUrl: "/printercat.png",
            categoryName: "Printer"
        } ])



    return (
        <div className='container mx-auto p-4'>
            <div className="flex items-center gap-4 justify-between ">
                {
                    categoryProduct?.map((item, index) => {
                        return (
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-16 h-16 md:h-20 md:w-20 rounded-full overflow-hidden p-4 bg-white  cursor-pointer">
                                    <img src={item?.imgUrl} className="h-full object-scale-down w-full mix-blend-multiply hover:scale-125 transition-all" alt="category Image" />
                                </div>
                                <p className="text-center text-sm md:text-base">{item?.categoryName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductCategory