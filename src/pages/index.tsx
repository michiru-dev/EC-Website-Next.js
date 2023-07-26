import { GetStaticProps } from 'next'
import axios from 'axios'
import { ItemTypeArray } from '@/types/itemTypes'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useAppSelector } from '@/redux/hooks'

export const getStaticProps: GetStaticProps = async () => {
  const allItems = await axios
    .get('https://fakestoreapi.com/products')
    .then((res) => res.data)
  return {
    props: {
      allItems,
    },
  }
}

export default function Home({ allItems }: { allItems: ItemTypeArray }) {
  const cartItemsList = useAppSelector((state) => state.cart.items)
  const totalItemsQuantity = cartItemsList.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)

  return (
    <>
      <Link href={'/cart'}>
        {/* <FontAwesomeIcon icon={faCartShopping} /> */}
        <AiOutlineShoppingCart />
        <p>{totalItemsQuantity}</p>
        カートを確認/お会計に進む
      </Link>
      <ul>
        {allItems.map((item) => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`}>
              <div>
                {item.title}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <p>${item.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
