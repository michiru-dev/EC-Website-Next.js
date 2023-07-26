import React, { useState } from 'react'

function Payment() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expireMonth: '',
    expireYear: '',
    cardHolder: '',
  })

  console.log(cardInfo)
  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    //オブジェクトのkey名を変数で指定するなら[]が必要
    setCardInfo((prev) => ({ ...prev, [field]: e.target.value }))
  }
  const currentYear = new Date().getFullYear()
  //Array.fromで新しい配列を生成。長さは10,第二引数は生成する各要素に対して実行する関数
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  return (
    <form>
      <label htmlFor='cardNumber'>
        カード番号
        <input onChange={(e) => handleOnchange(e, 'cardNumber')} type='text' />
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
        <input onChange={(e) => handleOnchange(e, 'cardHolder')} type='text' />
      </label>
      <input type='submit' value='購入' />
    </form>
  )
}

export default Payment
