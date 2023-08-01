import axios from 'axios'
import { ItemType } from '@/types/itemTypes'
import Item from '@/components/pages/items'

export async function getStaticPaths() {
  try {
    const allItems = await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => res.data)

    const paths = allItems.map((item: ItemType) => {
      return { params: { id: `${item.id}` } }
    })

    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    console.error('パス取得失敗:', error)
    return {
      paths: [],
      fallback: false,
    }
  }
}

export async function getStaticProps({ params }: { params: ItemType }) {
  try {
    const itemDetail = await axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.data)

    return {
      props: {
        itemDetail,
      },
    }
  } catch (error) {
    console.error('ページ取得失敗:', error)
    return {
      notFound: true,
    }
  }
}

function index({ itemDetail }: { itemDetail: ItemType }) {
  return <Item itemDetail={itemDetail} />
}

export default index
