import React from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import Link from 'next/link'
import styles from '@/components/UI/BackToHomeButton/BackToHomeButton.module.scss'

function BackToHomeButton() {
  return (
    <div>
      <Link data-testid='goBackHome' className={styles.link} href={'/'}>
        <BiHomeAlt2 data-testid='homeSvgIcon' className={styles.svg} />
      </Link>
    </div>
  )
}

export default BackToHomeButton
