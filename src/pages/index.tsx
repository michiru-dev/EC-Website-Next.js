import { GetStaticProps } from 'next'
import axios from 'axios'
import Home from '@/components/pages/home'
import { ItemTypeArray } from '@/types/itemTypes'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allItems = await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => res.data)
      .catch()

    return {
      props: {
        allItems,
      },
    }
  } catch (error) {
    console.error('APIエラー:', error)

    return {
      notFound: true, // これでNext.jsは404ページを表示
    }
  }
}

function index({ allItems }: { allItems: ItemTypeArray }) {
  return <Home allItems={allItems} />
}

export default index
