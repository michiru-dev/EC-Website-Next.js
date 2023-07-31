import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Purchased.module.scss'

function Purchased() {
  return (
    <Layout>
      <div className={styles.purchasedDiv}>
        <p className={styles.text}>ご購入ありがとうございました！</p>
        <Link className={styles.backButton} href={'/'}>
          トップページへ戻る
        </Link>
      </div>
    </Layout>
  )
}

export default Purchased
