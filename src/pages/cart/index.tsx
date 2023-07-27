import { useAppSelector } from '@/redux/hooks'
import CartItemsList from '@/components/CartItemsList'
import MoveToPaymentButton from '@/components/MoveToPaymentButton'

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items)
  return (
    <>
      <CartItemsList itemsList={cartItems} showControls={true} />
      <MoveToPaymentButton />
    </>
  )
}

export default Cart
