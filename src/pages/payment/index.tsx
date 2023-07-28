import CartItemsList from '@/components/CartItemsList'
import Layout from '@/components/Layout'
import { useTotalAmount } from '@/hooks/useTotalAmount'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clearCart } from '@/redux/slicers/cartSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useMemo } from 'react'

function Payment() {
  const cartItems = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { totalAmount, totalItemsQuantity } = useTotalAmount(cartItems)

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
    if (cardInfo.cardNumber === '00000000' && cardInfo.cardHolder !== '') {
      return true
    }
    return false
  }, [cardInfo])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/purchased')
    dispatch(clearCart())
  }

  const currentYear = new Date().getFullYear()
  //Array.fromで新しい配列を生成。長さは10,第二引数は生成する各要素に対して実行する関数
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <Layout>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='cardNumber'>
          カード番号
          <input
            onChange={(e) => handleOnchange(e, 'cardNumber')}
            type='text'
            id='cardNumber'
          />
        </label>

        <div>
          <label htmlFor='expireMonth'>
            有効期限
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
          <label htmlFor='expireYear'>
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

        <label htmlFor='cardHolder'>
          カード名義人
          <input
            onChange={(e) => handleOnchange(e, 'cardHolder')}
            type='text'
            id='cardHolder'
          />
        </label>
        {/* formの中のbuttonかinputにtype=submitがあればそれはまずボタンの見た目になって、
        それをクリックするとformのonsubmitが着火される */}
        <input type='submit' value='購入' disabled={!isValidCardInfo} />
      </form>
      <Link href={'/cart'}>☜カートへ戻る</Link>
      <p>合計 {totalItemsQuantity}点</p>
      <p>${totalAmount}</p>
      <CartItemsList itemsList={cartItems} showControls={false} />
    </Layout>
  )
}

export default Payment
