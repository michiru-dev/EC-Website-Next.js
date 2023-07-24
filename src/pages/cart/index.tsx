import { useAppSelector } from '@/redux/hooks'

// export async function getServerSideProps(){

// }

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items)
  console.log(cartItems)

  return (
    <div>
      <ul>
        {cartItems.map((item: any) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Cart
