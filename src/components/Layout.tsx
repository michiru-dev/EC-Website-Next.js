import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Footer.module.css'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.footerFixed}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
