import {
  CategoryOptionsProps,
  ItemType,
  ItemTypeArray,
} from '@/types/itemTypes'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/pages/home/Home.module.scss'
import StarRating from '@/components/UI/StarRating'
import Layout from '@/components/UI/Layout'
import { useEffect, useState } from 'react'
import FilterButton from '@/components/UI/FilterButton'
import axios from 'axios'
import { categoryArr } from '@/const/selectOptions'

export default function Home({ allItems }: { allItems: ItemTypeArray }) {
  const [category, setCategory] = useState<CategoryOptionsProps>(categoryArr[0])
  const [itemsList, setItemsList] = useState<ItemTypeArray>(allItems)

  const handleOnchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryObj = categoryArr.find((category) => {
      return category.eng === e.target.value
    })
    setCategory(categoryObj as CategoryOptionsProps)
  }

  useEffect(() => {
    if (category.eng === categoryArr[0].eng) {
      setItemsList(allItems)
      return
    }
    const categorizedItems = (category: string) => {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.data)
        .then((res) => setItemsList(res))
    }
    categorizedItems(category.eng)
  }, [category, allItems])

  return (
    <Layout className={styles.layout}>
      <FilterButton handleOnchange={handleOnchange} />
      <ul className={styles.itemUl}>
        {itemsList.map((item: ItemType) => (
          <li className={styles.itemList} key={item.id}>
            <Link className={styles.link} href={`/items/${item.id}`}>
              <div className={styles.itemDiv}>
                <p className={styles.itemTitle}>{item.title}</p>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                  />
                </div>
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
