import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push({
                id: Date.now(),
                nameProduct: action.payload.name,
                quantityProduct: action.payload.quanlity,
                priceProduct : action.payload.price
            })
        },

        removeItem: (state, action) => {
            const index = state.findIndex(cartItem=> cartItem.id === action.payload.id)
            state.splice(index, 1)
        },

        updateQuantity: (state, action) => {
            const cartItem = state.find(cartItem=> cartItem.id === action.payload.id)
            if(cartItem){
                cartItem.quantityProduct =  action.payload.quanlity
            }
        }

    }
})

export const {addItem, removeItem, updateQuantity} = CartSlice.actions
export default CartSlice.reducer