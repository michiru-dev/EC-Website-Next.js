import { useAppSelector } from '@/redux/hooks'
import CartItemsList from '@/components/CartItemsList'

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items)
  return <CartItemsList itemsList={cartItems} showControls={true} />
}

export default Cart
