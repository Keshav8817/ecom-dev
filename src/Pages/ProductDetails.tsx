import { useDispatch, useSelector } from "react-redux"
import Layout from "../Componets/Layout"
import { addToCart } from "../Redux/cartSlice"
import { useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaStarHalf } from "react-icons/fa"
import featureCard from "../Componets/FeatureCard"
import FeatureCard from "../Componets/FeatureCard"


const ProductDetails = () => {
  const dispatch = useDispatch()
  const [activeImage, setActiveImage] = useState("")

  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0
  })
  const [zoomImage, setZoomImage] = useState(false)
  const [data, setData] = useState(
    {
      id: 3,
      type: "T-Shirt",
      Name: "PrintOctopus Men's Classic Fit T-Shirt",
      Price: "₹ 465.80",
      imageAlt: "Front of men's Basic Tee in black.",
      imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      Description: "Roadster The Lifestyle Co Men Charcoal Grey Analogue Watch ",
      otherImages: [
        "/cp1.jpg", "/cp2.jpg", "/cp3.jpg", "/cp4.jpg"
      ],
      details: [
        {
          lable: "Fabric",
          detail: "100% Cotton "
        },
        {
          lable: "Style",
          detail: "Regular "
        },
        {
          lable: "Neck_Style",
          detail: "Round Neck "
        },
        {
          lable: "Pattern",
          detail: "Solid "
        },
        {
          lable: "fitType",
          detail: "Regular fit"
        },
      ]
    }
  )
  const id = useParams()
  const currentVal: any = useSelector((state: any) => state.cart.products)
  const [quantity, setQuantity] = useState(1)

  const filterData = () => {
    const newData = currentVal.filter((item: any) => item.id == id.id)
    setData(newData[0])
  }

  const handleMouseEnterProduct = (imageURL: any) => {
    setActiveImage(imageURL)
  }

  const handleZoomImage = useCallback((e: any) => {
    setZoomImage(true)
    const { left, top, width, height } = e.target.getBoundingClientRect()
    console.log("coordinate", left, top, width, height)

    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    setZoomImageCoordinate({
      x,
      y
    })
  }, [zoomImageCoordinate])

  const handleLeaveImageZoom = () => {
    setZoomImage(false)
  }


  useEffect(() => {
    filterData()
  }, [id])

  const handleCart = () => {
    dispatch(addToCart({
      id: data?.id,
      imageSrc: data?.imageSrc,
      Price: data?.Price,
      Name: data?.Name,
      quantity: quantity
    }))
    toast("Item Added To Cart")
  }
  return (
    <Layout>
      {/* <div className="mt-[40px] pl-[25px] max-w-screen-lg">
                <div className="flex items-center justify-around text-left flex-wrap">
                    <div className="p-[80px] basis-2/4 min-w-80  ">
                        <img src={data?.imageSrc} width="100%" className=""
                        />
                        <div className="flex justify-between mx-2 gap-2 ">
                            {data?.otherImages?.map((img) => (
                                <div className="basis-1/4 border cursor-pointer border-black  my-2">
                                    <img src={img} width="100%" className="" />
                                </div>
                            ))}
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
                            <input type="number" value={quantity} className="mr-[20px] my-[10px] w-[40px] h-[45px] text-2xl border-2 border-black " onChange={(e) => setQuantity(Number(e.target.value))}
                            />
                            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 px-[30px] py-[8px] my-[30px] rounded-lg bg-orange-600" onClick={handleCart}>Add to cart</button>
                        </div>
                        <h3 className="text-3xl pt-[20px]">Product Deatils</h3>
                      <p>{data?.Description}</p>
                        {data?.details?.map((items:any) => (
                            <p>{items.lable}: {items?.detail}<br /></p>
                        ))}

                    </div>
                </div>
            </div> */}
      <div className='container mx-auto p-4'>

        <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
          {/***product Image */}
          <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>

            <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
              <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom} />

              {/**product zoom */}
              {
                zoomImage && (
                  <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0'>
                    <div
                      className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
                      style={{
                        background: `url(${activeImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}% `

                      }}
                    >

                    </div>
                  </div>
                )
              }

            </div>

            <div className='h-full'>
              <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {
                  data?.otherImages?.map((imgURL, index) => {
                    return (
                      <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                        <img src={imgURL} className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={() => handleMouseEnterProduct(imgURL)} onClick={() => handleMouseEnterProduct(imgURL)} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          {/***product details */}

          <div className='flex flex-col gap-1'>
            <p className='bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit'>{data?.type}</p>
            <h2 className='text-2xl lg:text-4xl font-medium'>{data?.Name}</h2>
            <p className='capitalize text-slate-400'>{data?.type}</p>

            <div className='text-red-600 flex items-center gap-1'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>

            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
              <p className='text-red-600'>{data?.Price}</p>
              <p className='text-slate-400 line-through'>{data?.Price}</p>
            </div>

            <div className='flex items-center gap-3 my-2'>
              <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' onClick={handleCart}>Buy</button>
              <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white' onClick={handleCart}>Add To Cart</button>
            </div>

            <div>
              <p className='text-slate-600 font-medium my-1'>Description : </p>
              <p>{data?.Description}</p>
            </div>
          </div>
        </div>
      </div>
      <FeatureCard title={"Recommended Product"}/>
      <ToastContainer />
    </Layout>
  )
}

export default ProductDetails