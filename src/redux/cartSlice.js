import { createSlice } from '@reduxjs/toolkit';
const loadCartFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) return [];
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Failed to load cart from localStorage:', err);
        return [];
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromLocalStorage(), 
    },
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) { 
                state.items[itemIndex] = { ...state.items[itemIndex], ...action.payload };
            } else {
                state.items.push(action.payload);
            }
            try {
                localStorage.setItem('cart', JSON.stringify(state.items));
            } catch (err) {
                console.error('Failed to save cart to localStorage:', err);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            try {
                localStorage.setItem('cart', JSON.stringify(state.items));
            } catch (err) {
                console.error('Failed to save cart to localStorage:', err);
            }
        },
        clearCart: (state) => {
            console.log('Clearing cart. Before clear:', state.items);
            state.items = [];
            try {
                localStorage.removeItem('cart');
            } catch (err) {
                console.error('Failed to remove cart from localStorage:', err);
            }
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
