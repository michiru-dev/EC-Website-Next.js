import { GetStaticProps } from 'next'
import axios from 'axios'
import { ItemTypeArray } from '@/types/itemTypes'
import Link from 'next/link'
import Image from 'next/image'

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
