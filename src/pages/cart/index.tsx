import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { ItemType } from '@/types/itemTypes'
import Link from 'next/link'
import Image from 'next/image'
import { removeItem, updateQuantity } from '@/redux/slicers/cartSlice'
import Button from '@/components/Button'

//SSRぽいけどAPI通信も何もないから何も書かずSSGでOK

function Cart() {
  const cartItemsList = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()

  const totalAmount = cartItemsList.reduce((sum: number, item: ItemType) => {
    //sumのとこは累積値というよりは前回までの結果
    return sum + item.price * item.quantity
  }, 0) //0は初期値

  return (
    <div>
      <ul>
        {cartItemsList.map((item: ItemType) => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <Image src={item.image} alt={item.title} width={50} height={50} />
              <p>${item.price * item.quantity}</p>
              <label htmlFor={`quantity-${item.id}`}>個数</label>
              <input
                id={`quantity-${item.id}`}
                type='number'
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      itemId: item.id,
                      quantity: parseInt(e.target.value),
                    })
                  )
                }
              />
              <Button
                text={'カートから商品を削除'}
                onClick={(e) => dispatch(removeItem({ itemId: item.id }))}
              />
            </li>
          )
        })}
      </ul>

      <h3>合計 ${totalAmount}</h3>
      <Link href={'/payment'}>お支払い</Link>
    </div>
  )
}

export default Cart
