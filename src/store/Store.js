import { createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Cart from '../pages/Cart';
import { toast } from 'react-toastify';
const initialState = {
    items: [],
    cart: []
};

export const ecomReducer = createSlice({
    name: 'ecom',
    // initialState: initialState,
    initialState: initialState,
    reducers: {
        addtoitems: (state, action) => {
            const data = action.payload;
            data.forEach((item) => {
                // Check if item.id already exists in state.items
                const isItemExist = state.items.some((existingItem) => existingItem.id === item.id);
                if (!isItemExist) {
                    state.items.push(item);
                }
            });
        },
        edititems: (state, action) => {
            const { index, form } = action.payload;
            state.items[index] = form;
            toast.success('Item Edit successful');

        },
        deleteitem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
            toast.success('Item delete successful');

        },
        addtocart: (state, action) => {
            const index = action.payload;
            const item = state.items[index];
            // Check if itemToAdd already exists in state.cart
            const isItemExist = state.cart.some((cartItem) => cartItem.id === item.id);

            if (!isItemExist) {
                state.cart.push(item);
                toast.success('Item Add in Cart successful');
            } else {
                toast.error('Item Already Add');
            }

        },
        removetocard: (state, action) => {
            const index = action.payload;
            state.cart.splice(index, 1);
            toast.success('Cart remvoe successful');
        },
        addextraitems: (state, action) => {
            const form = action.payload;
            state.items.push(form)
        }
    },
});

export const { addtoitems, edititems, deleteitem, addtocart, removetocard, addextraitems } = ecomReducer.actions;

// export default ecomReducer.reducer;
export default ecomReducer.reducer;