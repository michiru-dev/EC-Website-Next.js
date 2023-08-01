import { useAppSelector } from '@/redux/hooks'
import CartItemsList from '@/components/UI/CartItemsList'
import MoveToPaymentButton from '@/components/UI/MoveToPaymentButton'
import Layout from '@/components/UI/Layout'
import EmptyCart from '@/components/UI/EmptyCart'
import styles from '@/components/pages/cart/Cart.module.scss'
import TotalAmountAndQuantity from '@/components/UI/TotalAmountAndQuantity'

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items)

  return (
    <Layout>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className={styles.outerDiv}>
          <div className={styles.totalAndButtonDiv}>
            <TotalAmountAndQuantity cartItems={cartItems} />
            <MoveToPaymentButton />
          </div>
          <CartItemsList itemsList={cartItems} showControls={true} />
        </div>
      )}
    </Layout>
  )
}

export default Cart
