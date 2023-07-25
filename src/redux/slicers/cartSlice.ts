import { ItemType } from '@/types/itemTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    addToCart: (state, action: PayloadAction<ItemType>) => {
      //すでにitemsに同じ商品があるかどうか確認
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>
    ) => {
      //そもそもquanityが0だったら画面から削除
      if (action.payload.quantity === 0) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.itemId
        )
        return
      }
      //quantityを変更したい商品をitemsの中からidで検索
      const item = state.items.find((item) => item.id === action.payload.itemId)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    removeItem: (state, action) => {
      //idが一致しない商品のリストをitemsに代入
      state.items = state.items.filter(
        (item) => item.id !== action.payload.itemId
      )
    },
  },
})

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer
