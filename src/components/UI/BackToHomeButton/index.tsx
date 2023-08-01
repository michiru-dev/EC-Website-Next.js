import React from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import Link from 'next/link'
import styles from '@/components/UI/BackToHomeButton/BackToHomeButton.module.scss'

function BackToHomeButton() {
  return (
    <div>
      <Link className={styles.link} href={'/'}>
        <BiHomeAlt2 size={40} />
      </Link>
    </div>
  )
}

export default BackToHomeButton