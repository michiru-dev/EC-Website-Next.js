import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import '@/styles/globals.css'
import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { initialSet } from '@/redux/slicers/cartSlice'

const LocalStorageProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    //localstorageに値があるか確認
    const existingList = JSON.parse(localStorage.getItem('itemsList') ?? '[]')
    dispatch(initialSet(existingList))
  }, [dispatch])

  return <>{children}</>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LocalStorageProvider>
        <Head>
          <link rel='icon' sizes='16x16' href='/dogIcon.png' />
        </Head>
        <Component {...pageProps} />
      </LocalStorageProvider>
    </Provider>
  )
}
