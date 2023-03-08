import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		cart: []
	},
	reducers: {
		addToCart: (state, action) => {
			const inCart = state.cart.find(item => item.id === action.payload.id);
			if(inCart) {
				state.cart = state.cart.map(item => {
					if(item.id === action.payload.id) {
						item.quantity += 1;
					}
					return item;
				});
			} else {
				state.cart.push({...action.payload, quantity: 1});
			}
		},

		removeFormCart: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},

		addQuantity: (state, action) => {
			const currentItem = state.cart.find(item => item.id === action.payload);
			if (currentItem) {
				currentItem.quantity += 1;
			}
		},

		removeQuantity: (state, action) => {
			const currentItem = state.cart.find(item => item.id === action.payload);
			if(currentItem && currentItem.quantity > 1){
				currentItem.quantity -= 1;
			} else {
				state.cart = state.cart.filter((item) => item.id !== action.payload);
			}
		}
	}
});

export const {addToCart, removeFormCart, addQuantity, removeQuantity} = cartSlice.actions;
export default cartSlice.reducer;