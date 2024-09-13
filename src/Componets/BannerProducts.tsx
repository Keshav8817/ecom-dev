
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BannerProducts = () => {
    const [currentImg, setCurrentImg] = useState(0)
    const banners = [
        "/banner5.jpg","https://media.licdn.com/dms/image/D4D12AQGuElni3RIZIw/article-cover_image-shrink_720_1280/0/1684154967774?e=2147483647&v=beta&t=-IgeLOQhL2M2YSyKvKFjIH1ssupP2NlvWwgJmjTGzaU","/banner1.jpg",
    ]
    
    function handleNext() {
        if(banners.length -1 > currentImg){
        setCurrentImg(pre=> (pre + 1))
        }
    }
    function handlePrev() {
        if(currentImg != 0 ){
        setCurrentImg(pre=> (pre - 1))
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=> {
            if(banners.length -1 > currentImg){
                setCurrentImg(pre=> (pre + 1))
                }else{
                    setCurrentImg(0) 
                }
        } , 3000)

         return ()=> clearInterval(interval)
    } , [currentImg])

  return (
    <div className="container mx-auto px-4 rounded " >
        <div className="h-72 w-full bg-slate-200 relative">
            
           <div className="absolute z-10 h-full w-full  flex justify-between">
            <button><FaAngleLeft className="text-2xl bg-white shadow-md rounded-full"  onClick={handleNext}/></button>
            <button><FaAngleRight className="text-2xl bg-white shadow-md rounded-full" onClick={handlePrev}/></button> 
           </div>
            <div className="flex w-full h-full overflow-hidden">

            {banners?.map((item )=> { 
                return (

                    <div className="w-full h-full min-w-full min-h-full transition-all " key={item} style={{transform : `translateX(-${currentImg * 100}%)`}}>
                    <img src={item} alt="Banner" className="w-full h-full" />
                    </div>
                )
            })}
             
           </div>
        </div>
    </div>
  )
}

export default BannerProducts