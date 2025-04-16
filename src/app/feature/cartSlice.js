import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart: [],
    totalAmount : 0,
    totalPrice : 0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart:(state, {payload})=>{
            state.cart.push(payload)
        },
        incrementAmount:(state,{payload})=>{
           const item = state.cart.find((i)=>i.id==payload);
           item.amount+=1
        },
        decrementAmount: (state, { payload }) => {
            const itemIndex = state.cart.findIndex((i) => i.id === payload);
            if (itemIndex !== -1) {
                const item = state.cart[itemIndex];
                if (item.amount > 1) {
                    item.amount -= 1;
                } else {
                    state.cart.splice(itemIndex, 1);
                }
            }
        }
        ,
        
        clearCart: ()=>{},
    },
});

export default cartSlice.reducer
export const {addToCart,incrementAmount,decrementAmount,clearCart}=cartSlice.actions
