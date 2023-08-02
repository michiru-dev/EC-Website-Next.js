import CartItemsList from '@/components/UI/CartItemsList'
import Layout from '@/components/UI/Layout'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clearCart } from '@/redux/slicers/cartSlice'
import { useRouter } from 'next/router'
import React, { useState, useMemo } from 'react'
import styles from '@/components/pages/payment/Payment.module.scss'
import TotalAmountAndQuantity from '@/components/UI/TotalAmountAndQuantity'

function Payment() {
  const cartItems = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expireMonth: '',
    expireYear: '',
    cardHolder: '',
  })

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    //オブジェクトのkey名を変数で指定するなら[]が必要
    setCardInfo((prev) => ({ ...prev, [field]: e.target.value }))
  }

  //cardInfoが更新された時に関数を実行してtrue/falseを返す
  const isValidCardInfo = useMemo(() => {
    const regex = /^\d{14,16}$/
    if (regex.test(cardInfo.cardNumber) && cardInfo.cardHolder !== '') {
      return true
    }
    return false
  }, [cardInfo])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/purchased').then(() => {
      dispatch(clearCart())
    })
  }

  const currentYear = new Date().getFullYear()
  //Array.fromで新しい配列を生成。長さは10,第二引数は生成する各要素に対して実行する関数
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)

  if (cartItems.length === 0) {
    router.push('/')
    return
  }

  return (
    <Layout>
      <div className={styles.outerDiv}>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <div className={styles.formContent}>
            <label htmlFor='cardNumber' className={styles.cardNumLabel}>
              カード番号&emsp;
              <input
                className={styles.input}
                onChange={(e) => handleOnchange(e, 'cardNumber')}
                type='text'
                id='cardNumber'
              />
              <div className={styles.tooltipForCardNum}>
                任意の数字14~16桁を入力してください
              </div>
            </label>

            <div className={styles.expireDateDiv}>
              <label htmlFor='expireMonth' className={styles.expireDateLabel}>
                有効期限&emsp;&emsp;
                <select
                  onChange={(e) => handleOnchange(e, 'expireMonth')}
                  name='expireDate'
                  id='expireMonth'
                >
                  {months.map((month) => (
                    <option value={month} key={month}>
                      {month}
                    </option>
                  ))}
                </select>
                月
              </label>
              ／
              <label htmlFor='expireYear' className={styles.label}>
                <select
                  onChange={(e) => handleOnchange(e, 'expireYear')}
                  name='expireYear'
                  id='expireYear'
                >
                  {years.map((year) => (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  ))}
                </select>
                年
              </label>
            </div>

            <label htmlFor='cardHolder' className={styles.cardHolderLabel}>
              カード名義人
              <input
                className={styles.input}
                onChange={(e) => handleOnchange(e, 'cardHolder')}
                type='text'
                id='cardHolder'
              />
              <div className={styles.tooltipForCardHolder}>
                一文字以上入力してください
              </div>
            </label>
            {/* formの中のbuttonかinputにtype=submitがあればそれはまずボタンの見た目になって、
        それをクリックするとformのonsubmitが着火される */}
            <input
              className={styles.button}
              type='submit'
              value='購入'
              disabled={!isValidCardInfo}
            />
          </div>
        </form>
        <div className={styles.rightBar}>
          <TotalAmountAndQuantity cartItems={cartItems} />
          <CartItemsList itemsList={cartItems} showControls={false} />
        </div>
      </div>
    </Layout>
  )
}

export default Payment
