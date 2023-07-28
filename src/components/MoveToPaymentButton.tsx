import React from 'react'
import { MdOutlinePayment } from 'react-icons/md'
//reacticonsの最後の/mdはicon名の最初の2文字
import Link from 'next/link'
import styles from '@/styles/MoveToPaymentButton.module.css'

function MoveToPaymentButton() {
  return (
    <Link className={styles.link} href={'/payment'}>
      {/* <MdOutlinePayment size={40} /> */}
      <p className={styles.title}>お支払い情報入力</p>
    </Link>
  )
}

export default MoveToPaymentButton
