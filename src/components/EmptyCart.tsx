import Link from 'next/link'
import React from 'react'
import BackToHomeButton from './BackToHomeButton'

function EmptyCart() {
  return (
    <>
      <h3>カートは空です</h3>
      <BackToHomeButton />
    </>
  )
}

export default EmptyCart
