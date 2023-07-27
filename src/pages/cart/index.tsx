import { useAppSelector } from '@/redux/hooks'
import CartItemsList from '@/components/CartItemsList'
import MoveToPaymentButton from '@/components/MoveToPaymentButton'
import Layout from '@/components/Layout'

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items)
  return (
    <Layout>
      <CartItemsList itemsList={cartItems} showControls={true} />
      <MoveToPaymentButton />
    </Layout>
  )
}

export default Cart
