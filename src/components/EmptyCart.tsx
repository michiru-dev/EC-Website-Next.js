import React from 'react'
import styles from '@/styles/EmptyCart.module.scss'
import Link from 'next/link'

function EmptyCart() {
  return (
    <div className={styles.emptyCartDiv}>
      <p>カートは空です</p>
      <Link className={styles.backButton} href={'/'}>
        商品を探す
      </Link>
    </div>
  )
}

export default EmptyCart
