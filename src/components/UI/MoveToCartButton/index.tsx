import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from '@/components/UI/MoveToCartButton/MoveToCartButton.module.scss'
import { useTotalAmount } from '@/hooks/useTotalAmount'

function MoveToCartButton() {
  const cartItemsList = useAppSelector((state) => state.cart.items)
  const { totalItemsQuantity } = useTotalAmount(cartItemsList)

  return (
    <div className={styles.cartButtonDiv}>
      <Link href={'/cart'} className={styles.link}>
        <AiOutlineShoppingCart className={styles.svg} />

        <p className={styles.totalQuantity}>{totalItemsQuantity}</p>
      </Link>
    </div>
  )
}

export default MoveToCartButton
