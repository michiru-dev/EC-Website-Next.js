import React, { ReactNode } from 'react'
import Header from '@/components/UI/Header'
import Footer from '@/components/UI/Footer'
import styles from '@/components/UI/Layout/Layout.module.scss'

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
