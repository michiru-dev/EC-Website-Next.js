import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from '@/styles/MoveToCartButton.module.css'

function MoveToCartButton() {
  const cartItemsList = useAppSelector((state) => state.cart.items)
  const totalItemsQuantity = cartItemsList.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)
  return (
    <div className={`${styles.cartButtonDiv}`}>
      <Link href={'/cart'} className={`${styles.link}`}>
        {/* <FontAwesomeIcon icon={faCartShopping} /> */}
        <AiOutlineShoppingCart size={40} />
        <p className={`${styles.totalQuantity}`}>{totalItemsQuantity}</p>
        <p>カートを確認/お会計に進む</p>
      </Link>
    </div>
  )
}

export default MoveToCartButton
