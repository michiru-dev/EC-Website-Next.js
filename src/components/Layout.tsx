import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Footer.module.css'

type LayoutProps = {
  children: ReactNode
  className?: string
}

function Layout({ children, className }: LayoutProps) {
  return (
    <div className={`${styles.footerFixed} ${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
