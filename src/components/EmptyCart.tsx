import Link from 'next/link'
import React from 'react'

function EmptyCart() {
  return (
    <>
      <h3>カートは空です</h3>
      <Link href={'/'}>商品一覧へ戻る</Link>
    </>
  )
}

export default EmptyCart
