import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../Pages/ProductData";


const initialState: any =  {
    cart:[] ,
    products: Products
}

const CartSlice = createSlice({
    name:"cart" ,
    initialState,
    reducers:{
        addToCart(state , action){
            state.cart.push({...action.payload})
        }
    }
})

export const {addToCart} = CartSlice.actions
export default CartSlice.reducer