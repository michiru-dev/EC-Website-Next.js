import { ItemType } from '@/types/itemTypes'
import { createSlice } from '@reduxjs/toolkit'

type CartState = {
  items: ItemType[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
