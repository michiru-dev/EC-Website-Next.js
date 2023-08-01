import React from 'react'
import Link from 'next/link'
import styles from '@/components/UI/MoveToPaymentButton/MoveToPaymentButton.module.scss'

function MoveToPaymentButton() {
  return (
    <Link className={styles.link} href={'/payment'}>
      <p className={styles.title}>お支払い情報入力</p>
    </Link>
  )
}

export default MoveToPaymentButton
