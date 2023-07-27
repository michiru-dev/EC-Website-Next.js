import React from 'react'
import { FaDog } from 'react-icons/fa'
import MoveToCartButton from './MoveToCartButton'
import BackToHomeButton from './BackToHomeButton'
import styles from '@/styles/Header.module.css'
import Link from 'next/link'

function Header() {
  return (
    <Link className={`${styles.link}`} href={'/'}>
      <div className={`${styles.headerDiv}`}>
        <h1 className={`${styles.title}`}>
          HokoHoko Shopping&nbsp;
          <FaDog />
        </h1>
        <div className={`${styles.iconDiv}`}>
          <BackToHomeButton />
          <MoveToCartButton />
        </div>
      </div>
    </Link>
  )
}

export default Header
