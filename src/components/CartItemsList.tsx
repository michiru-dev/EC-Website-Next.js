import { useAppDispatch } from '@/redux/hooks'
import { ItemType, ItemTypeArray } from '@/types/itemTypes'
import Link from 'next/link'
import Image from 'next/image'
import { removeItem, updateQuantity } from '@/redux/slicers/cartSlice'
import Button from '@/components/Button'
import EmptyCart from '@/components/EmptyCart'

type CartItemsProps = {
  itemsList: ItemTypeArray
  showControls: boolean
}

//SSRぽいけどAPI通信も何もないから何も書かずSSGでOK
function CartItemsList({ itemsList, showControls }: CartItemsProps) {
  const dispatch = useAppDispatch()

  const totalAmount = itemsList.reduce((sum: number, item: ItemType) => {
    //sumのとこは累積値というよりは前回までの結果
    return sum + item.price * item.quantity
  }, 0) //0は初期値

  const totalItemsQuantity = itemsList.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)

  const quantityArr = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <>
      {itemsList.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <ul>
            {itemsList.map((item: ItemType) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <p>${item.price * item.quantity}</p>

                  {showControls ? (
                    <>
                      <label htmlFor={`quantity-${item.id}`}>個数</label>
                      <select
                        name={`quantity-${item.id}`}
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateQuantity({
                              itemId: item.id,
                              quantity: parseInt(e.target.value),
                            })
                          )
                        }
                      >
                        <option value='0'>0(削除)</option>
                        {quantityArr.map((num) => {
                          return (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          )
                        })}
                      </select>
                      <Button
                        text={'カートから商品を削除'}
                        onClick={() =>
                          dispatch(removeItem({ itemId: item.id }))
                        }
                      />
                    </>
                  ) : (
                    <>
                      <label htmlFor={`quantity-${item.id}`}>個数</label>
                      <p>{item.quantity}</p>
                    </>
                  )}
                </li>
              )
            })}
          </ul>

          <h3>合計 ${totalAmount}</h3>
          <h3>計 {totalItemsQuantity}点</h3>
          <Link href={'/payment'}>お支払い情報入力</Link>
          <Link href={'/'}>☜商品一覧へ戻る</Link>
        </div>
      )}
    </>
  )
}

export default CartItemsList
