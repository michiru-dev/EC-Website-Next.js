import CartItemsList from '@/components/CartItemsList'
import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useCallback } from 'react'

function Payment() {
  const cartItems = useAppSelector((state) => state.cart.items)
  const router = useRouter()
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expireMonth: '',
    expireYear: '',
    cardHolder: '',
  })

  const [isCardInfoCorrect, setIsCardInfoCorrect] = useState(false)

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    //オブジェクトのkey名を変数で指定するなら[]が必要
    setCardInfo((prev) => ({ ...prev, [field]: e.target.value }))
    validateCardInfo()
  }

  //そうまにきく
  const validateCardInfo = useCallback(() => {
    if (cardInfo.cardNumber === '00000000' && cardInfo.cardHolder !== '') {
      setIsCardInfoCorrect(true)
    } else {
      setIsCardInfoCorrect(false)
    }
  }, [cardInfo])

  // validateCardInfoが変更されたときに実行
  useEffect(() => {
    validateCardInfo()
  }, [validateCardInfo])

  //他にいいやり方？
  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    router.push('/purchased')
  }

  const currentYear = new Date().getFullYear()
  //Array.fromで新しい配列を生成。長さは10,第二引数は生成する各要素に対して実行する関数
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='cardNumber'>
          カード番号
          <input
            onChange={(e) => handleOnchange(e, 'cardNumber')}
            type='text'
          />
        </label>

        <div>
          <label htmlFor='expireDate'>
            有効期限
            <select
              onChange={(e) => handleOnchange(e, 'expireMonth')}
              name='expireDate'
              id='expireDate'
            >
              {months.map((month) => (
                <option value={month} key={month}>
                  {month}月
                </option>
              ))}
            </select>
            ／
            <select
              onChange={(e) => handleOnchange(e, 'expireYear')}
              name='expireYear'
              id='expireYear'
            >
              {years.map((year) => (
                <option value={year} key={year}>
                  {year}年
                </option>
              ))}
            </select>
          </label>
        </div>

        <label htmlFor='cardHolder'>
          カード名義人
          <input
            onChange={(e) => handleOnchange(e, 'cardHolder')}
            type='text'
          />
        </label>
        <input type='submit' value='購入' disabled={!isCardInfoCorrect} />
      </form>
      <Link href={'/cart'}>☜カートへ戻る</Link>
      <CartItemsList itemsList={cartItems} showControls={false} />
    </>
  )
}

export default Payment
