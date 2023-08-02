import { categoryArr } from '@/const/selectOptions'

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

//arrayを型にするやり方（これでユニオンになる）
export type CategoryOptionsProps = (typeof categoryArr)[number]
