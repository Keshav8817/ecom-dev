import React, { useState } from 'react'
import Layout from '../Componets/Layout'
import { useSelector } from 'react-redux'

const Cart = () => {

    const Products = useSelector((state: any) => state.cart.cart)
    const [cartProducts, setCartProducts] = useState(Products)


    const HandleItemTotal = (item: any) => {
        const total = Number(item?.quantity) * Number(item?.Price);
        return total.toFixed(2);
    };

    // const HandleUpdateCost = (array,  id , newName) => {
    //     const obj = array.find(item => item.id === id);
  
    //     // Check if the object is found
    //     if (obj) {
    //       obj.quantity = newName; // Update the name property
    //       console.log(`Object with id ${id} has been updated to:`, obj);
    //     } else {
    //       console.log(`Object with id ${id} not found.`);
    //     }
      
    //     // Return the updated array
    //    setCartProducts(array)
    // }

    const HandleUpdateCost = (array, id, newQuantity) => {
        const updatedArray = array.map(item => {
          if (item.id === id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
    
        setCartProducts(updatedArray);
      };

      function calculateTotalPrice(items) {
        // Use reduce to accumulate the total price
        const totalPrice = items.reduce((total, item) => {
          // Convert Price to a number and multiply by quantity
          const itemTotal = Number(item.Price) * item.quantity;
          
          // Add the item's total to the running total
          return total + itemTotal;
        }, 0); // Initial value of total is 0
      
        return totalPrice;
      }
      




    return (
        <Layout>
            <div className="mt-[40px] px-[25px]  ">
                <table className='w-[100%] '>
                    <tr className='bg-amber-200 text-left'>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    {cartProducts?.map((item: any) => (
                        <tr>
                            <td className='py-[10px] px-[5px]'>
                                <div className="flex flex-wrap">
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" width={50} height={10} />
                                    <div className='ml-[20px]'>
                                        <p>{item?.Name}</p>
                                        <small>{item?.Price}</small><br />
                                        <small className='text-rose-600 cursor-pointer'>Remove from cart</small>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value={item?.quantity} className='border-2 border-black w-[50px]' onChange={(e)=> HandleUpdateCost(cartProducts , item?.id , e.target.value  )} /></td>
                            <td>{HandleItemTotal(item)}</td>
                        </tr>
                    ))}

                    {/* <tr>
                <td>
                    <div className="flex flex-wrap">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" width={50} height={10}/>
                        <div className='ml-[20px]'>
                            <p>Red Printed T-shirt</p>
                            <small>Price</small><br/>
                            <small className='text-rose-600 cursor-pointer'>Remove from cart</small>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"  className='border-2 border-black w-[50px]'/></td>
                <td>$50.00</td> 
            </tr>
            <tr>
                <td>
                    <div className="flex flex-wrap">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" width={50} height={10}/>
                        <div className='ml-[20px]'>
                            <p>Red Printed T-shirt</p>
                            <small>Price</small><br/>
                             <small className='text-rose-600 cursor-pointer'>Remove from cart</small>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"  className='border-2 border-black w-[50px]'/></td>
                <td>$50.00</td> 
            </tr> */}
                </table>
                <div className="flex justify-end">
                    <table className='border-t-4 border-amber-200 w-[100%] max-w-sm  '>
                        <tr>
                            <td>Subtotal</td>
                            <td className='text-right'>${(calculateTotalPrice(cartProducts)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td className='text-right'>${((calculateTotalPrice(cartProducts)*18)/100).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td className='text-right'>${(calculateTotalPrice(cartProducts) + 27.00).toFixed(2) }</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Cart