import { useAppDispatch } from '@/redux/hooks'
import { ItemType, ItemTypeArray } from '@/types/itemTypes'
import Image from 'next/image'
import { removeItem, updateQuantity } from '@/redux/slicers/cartSlice'
import Button from '@/components/Button'
import styles from '@/styles/CartItemsList.module.css'

type CartItemsProps = {
  itemsList: ItemTypeArray
  showControls: boolean
}

//SSRぽいけどAPI通信も何もないから何も書かずSSGでOK
function CartItemsList({ itemsList, showControls }: CartItemsProps) {
  const dispatch = useAppDispatch()

  return (
    <div>
      <ul className={styles.ul}>
        {itemsList.map((item: ItemType) => {
          //math.maxで数字の大きい方の数字をmaxに代入
          const maxQuantity = Math.max(10, item.quantity)
          const quantityArr = Array.from(
            { length: maxQuantity },
            (_, i) => i + 1
          )
          return (
            <li key={item.id}>
              <div className={styles.itemContainer}>
                <div className={styles.itemImage}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemPrice}>${item.price}</p>
                  {showControls ? (
                    <>
                      <label htmlFor={`quantity-${item.id}`}>個数:</label>
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
                        className={styles.button}
                        text={'カートから商品を削除'}
                        onClick={() =>
                          dispatch(removeItem({ itemId: item.id }))
                        }
                      />
                    </>
                  ) : (
                    <p className={styles.itemQuantity}>個数:{item.quantity}</p>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CartItemsList
