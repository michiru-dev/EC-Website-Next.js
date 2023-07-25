import { useAppSelector } from '@/redux/hooks'
import { CartItemType, ItemType } from '@/types/itemTypes'

// export async function getServerSideProps(){

// }

function Cart() {
  const cartItemsList = useAppSelector((state) => state.cart.items)

  //個数計算//初期値のイメージcounts = {}
  const itemCounts = cartItemsList.reduce((counts: any, item) => {
    //countsオブジェクトの中にidがあれば
    if (item.id in counts) {
      counts[item.id] = counts[item.id] + 1 // counts[1]=2+1 // counts={1:3}
      //countsオブジェクトのkeyが[item.id]のところのvalueに1を足す
      return counts
    }
    counts[item.id] = 1 // counts[2] = 1
    return counts
  }, {})
  //出来上がりは{1:3,2:2,3:1 ..他のidとその出現回数}こんな感じ

  //重複を除いた新しいカートリストを作成
  const cartItems = (Object.entries(itemCounts) as [string, number][])
    .map(([itemId, quantity]) => {
      //findは当てはまった一つ目の値を返す
      const res = cartItemsList.find((i) => i.id === Number(itemId))
      if (typeof res === 'undefined') return undefined

      return {
        ...res,
        quantity,
      }
    })
    .flatMap((v) => (typeof v === 'undefined' ? [] : v)) //undefinedを取り除く
  //flatmapはネストされてる値を外に出す
  // [[], [], 111, 222]→[111, 222]

  const totalAmount = cartItemsList.reduce((sum: number, item: ItemType) => {
    //sumのとこは累積値というよりは前回までの結果
    return sum + item.price
  }, 0) //0は初期値

  return (
    <div>
      <ul>
        {cartItems.map((item: CartItemType) => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>Quantity {item.quantity}</p>
            </li>
          )
        })}
      </ul>

      <h3>Total ${totalAmount}</h3>
    </div>
  )
}

export default Cart
