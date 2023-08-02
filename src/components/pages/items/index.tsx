import { ItemType } from '@/types/itemTypes'
import Image from 'next/image'
import Button from '@/components/UI/Button'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { addToCart } from '@/redux/slicers/cartSlice'
import Layout from '@/components/UI/Layout'
import styles from '@/components/pages/items/[id].module.scss'
import StarRating from '@/components/UI/StarRating'

export default function Item({ itemDetail }: { itemDetail: ItemType }) {
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState(1)
  const [showAlert, setShowAlert] = useState(false)

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value))
  }

  const handleOnClick = () => {
    const item = { ...itemDetail, quantity: Number(quantity) }
    dispatch(addToCart(item))
    setQuantity(1)
    setShowAlert(true)
  }

  const quantityArr = Array.from({ length: 10 }, (_, i) => i + 1)

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [showAlert])

  return (
    <Layout>
      <div className={styles.itemContainer}>
        <div className={styles.itemImage}>
          <Image
            src={itemDetail.image}
            alt={itemDetail.title}
            width={200}
            height={300}
          />
        </div>
        {showAlert && (
          <div className={styles.alert}>カートに商品が追加されました</div>
        )}
        <div className={styles.itemDetails}>
          <h2 className={styles.itemTitle}>{itemDetail.title}</h2>
          <StarRating rating={itemDetail.rating} />
          <p>{itemDetail.description}</p>
          <p className={styles.price}>${itemDetail.price}</p>

          <div className={styles.QuantityAndButton}>
            <label htmlFor={`quantity-${itemDetail.id}`}>個数:</label>
            <select
              name={`quantity-${itemDetail.id}`}
              id={`quantity-${itemDetail.id}`}
              onChange={(e) => handleOnChange(e)}
              value={quantity}
            >
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
              onClick={handleOnClick}
              text={'カートに追加'}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
