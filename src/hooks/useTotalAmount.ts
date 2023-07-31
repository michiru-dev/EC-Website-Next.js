import { ItemType, ItemTypeArray } from '@/types/itemTypes'
import { useMemo } from 'react'

export const useTotalAmount = (cartItems: ItemTypeArray) => {
  const { totalAmount, totalItemsQuantity } = useMemo(() => {
    const totalAmount = cartItems.reduce((sum: number, item: ItemType) => {
      //sumのとこは累積値というよりは前回までの結果
      return Math.round(sum + item.price * item.quantity)
    }, 0) //0は初期値

    const totalItemsQuantity = cartItems.reduce((sum, item) => {
      return sum + item.quantity
    }, 0)

    return { totalAmount, totalItemsQuantity }
  }, [cartItems])

  return { totalAmount, totalItemsQuantity }
}
