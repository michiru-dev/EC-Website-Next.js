import { ItemTypeArray } from '@/types/itemTypes'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/pages/home/Home.module.scss'
import StarRating from '@/components/UI/StarRating'
import Layout from '@/components/UI/Layout'

export default function Home({ allItems }: { allItems: ItemTypeArray }) {
  return (
    <Layout className={styles.layout}>
      <ul className={styles.itemUl}>
        {allItems.map((item) => (
          <li className={styles.itemList} key={item.id}>
            <Link className={styles.link} href={`/items/${item.id}`}>
              <div className={styles.itemDiv}>
                <p className={styles.itemTitle}>{item.title}</p>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                />
                <div className={styles.priceAndRatingDiv}>
                  <p className={styles.itemPrice}>${item.price}</p>
                  <StarRating rating={item.rating} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
