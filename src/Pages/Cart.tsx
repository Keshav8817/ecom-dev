import { useEffect, useState } from 'react'
import Layout from '../Componets/Layout'
import { useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md'

const Cart = () => {

    const Products = useSelector((state: any) => state.cart.cart)
    const [cartProducts, setCartProducts] = useState(Products)


    // const HandleItemTotal = (item: any) => {
    //     const total = Number(item?.quantity) * Number(item?.Price);
    //     return total.toFixed(2);
    // };

    useEffect(() => {
        setCartProducts(Products)
    }, [Products])

    const HandleUpdateCost = (array: any, id: any, newQuantity: any) => {
        if (newQuantity > 0) {
            const updatedArray = array.map((item: any) => {
                if (item.id === id) {
                    return { ...item, quantity: Number(newQuantity) }; // Ensure newQuantity is a number
                }
                return item;
            });

            setCartProducts(updatedArray);
        }
    };


    // function calculateTotalPrice(items: any) {
    //     let totalprice = {
    //         price: 0,
    //         quantity: 0

    //     }
    //     // Use reduce to accumulate the total price
    //     const totalPrice = items.reduce((total: any, item: any) => {
    //         // Convert Price to a number and multiply by quantity
    //         const itemTotal = Number(item.Price) * item.quantity;

    //         totalprice = {
    //             price: total + itemTotal,
    //             quantity: item.quantity
    //         }

    //         // Add the item's total to the running total
    //         return totalprice;
    //     }, 0); // Initial value of total is 0

    //     return totalPrice;
    // }

    const totaalQuantity = cartProducts.reduce((total: any, item: any) => total + item.quantity, 0)
    const totalPrice = cartProducts.reduce((preve: any, curr: any) => preve + (curr.quantity * curr?.Price), 0)





    return (
        <Layout>
            <div className='flex min-h-96 container mx-auto p-4 '>



                <div className='bg-white w-3/4 px-4'>
                    <div className='border-grey-600 border-b-2 p-2'>
                        <h1 className=' px-6 font-semibold text-2xl  mt-4 pt-4 '>Shopping Cart</h1>
                    </div>

                    <div className='text-center text-lg my-3'>
                        {
                            cartProducts.length === 0 && (
                                <p className='bg-white py-5'>No Item In Cart</p>
                            )
                        }
                    </div>

                    <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                        {/***view product */}
                        <div className='w-full max-w-6xl'>
                            {
                                cartProducts.map((product: any) => {
                                    return (
                                        <div key={product?._id + "Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]'>
                                            <div className='w-32 h-32 bg-slate-200'>
                                                <img src={product?.imageSrc} className='w-full h-full object-scale-down mix-blend-multiply' />
                                            </div>
                                            <div className='px-4 py-2 relative'>
                                                <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.Name}</h2>
                                                <div className='flex items-center justify-between'>
                                                    <p className='text-red-600 font-medium text-lg'>{product?.Price}</p>
                                                    <p className='text-slate-600 font-semibold text-lg'>{product?.Price * product?.quantity}</p>
                                                </div>
                                                <div className='flex justify-between w-[30%] items-center '>
                                                    <div className='flex items-center gap-3 mt-1 border border-slate-200 max-w-[110px] rounded-full p-2'>
                                                        Qty:
                                                        <input type="number" value={product?.quantity} className='outline-none w-[50px] pl-2 rounded-full no-arrows ' onChange={(e) => HandleUpdateCost(cartProducts, product?.id, e.target.value)} />
                                                    </div>
                                                    <div className='text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer flex items-center justify-between '>
                                                        <h6 className='pr-1'>Remove Item</h6>  <MdDelete />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>


                        {/***summary  */}
                    </div>
                    <div className='border-grey-600 border-t-2 p-2 text-right w-full'>
                        <h1 className=' px-6 font-semibold text-xl  my-4  '>{`Subtotal (${totaalQuantity || 0} item): ₹ ${totalPrice || 0}`}</h1>
                    </div>
                </div>

                <div className="max-w-sm mx-auto bg-white h-96 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Price Details</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Price {`( ${totaalQuantity || 0} Item)`}</span>
                            <span>₹{totalPrice || 0}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="text-green-500">– 0</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Platform Fee</span>
                            <span>₹0</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Charges</span>
                            <span className="line-through text-gray-400">₹40</span>
                            <span className="text-green-500">Free</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total Amount</span>
                            <span>₹{totalPrice || 0}</span>
                        </div>
                        <p className="text-green-500 text-sm mt-2">You will save ₹348 on this order</p>
                        <div className='mt-[45px]'>
                            <button className='bg-blue-600 p-2 text-white rounded-full w-full '>Check-out</button>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Cart