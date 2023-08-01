import React from 'react'
import styles from '@/components/UI/TotalAmountAndQuantity/TotalAmountAndQuantity.module.scss'
import { useTotalAmount } from '@/hooks/useTotalAmount'
import { ItemTypeArray } from '@/types/itemTypes'

function TotalAmountAndQuantity({ cartItems }: { cartItems: ItemTypeArray }) {
  const { totalAmount, totalItemsQuantity } = useTotalAmount(cartItems)
  return (
    <div className={styles.totalDiv}>
      <p className={styles.totalQuantity}>合計 {totalItemsQuantity}点:</p>
      <p className={styles.totalAmount}>${totalAmount}</p>
    </div>
  )
}

export default TotalAmountAndQuantity
