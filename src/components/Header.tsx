import React from 'react'
import { FaDog } from 'react-icons/fa'
import MoveToCartButton from './MoveToCartButton'
import BackToHomeButton from './BackToHomeButton'
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'

function Header() {
  return (
    <div className={`${styles.headerDiv}`}>
      <Link className={styles.link} href={'/'}>
        <h1 className={`${styles.title}`}>
          HokoHoko Shopping&nbsp;
          <FaDog />
        </h1>
      </Link>
      <div className={`${styles.iconDiv}`}>
        <BackToHomeButton />
        <MoveToCartButton />
      </div>
    </div>
  )
}

export default Header
