export type ItemType = {
  id: number
  title: string
  price: number
  description: string
  category: string //unionに変える
  image: string
  rating: { rate: number; count: number }
  quantity: number
}

export type ItemTypeArray = ItemType[]
