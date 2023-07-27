import { GetStaticProps } from 'next'
import axios from 'axios'
import { ItemTypeArray } from '@/types/itemTypes'
import Link from 'next/link'
import Image from 'next/image'
import MoveToCartButton from '@/components/MoveToCartButton'
import styles from '@/styles/Home.module.css'

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
  return (
    <>
      <MoveToCartButton />
      <ul className={`${styles.itemUl}`}>
        {allItems.map((item) => (
          <li className={`${styles.itemList}`} key={item.id}>
            <Link className={`${styles.link}`} href={`/items/${item.id}`}>
              <div className={`${styles.itemDiv}`}>
                <p className={`${styles.itemTitle}`}>{item.title}</p>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={130}
                  height={130}
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
