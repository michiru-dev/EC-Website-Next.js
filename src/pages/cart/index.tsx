import { useAppSelector } from '@/redux/hooks'
import CartItemsList from '@/components/CartItemsList'
import MoveToPaymentButton from '@/components/MoveToPaymentButton'
import Layout from '@/components/Layout'
import EmptyCart from '@/components/EmptyCart'
import styles from '@/styles/Cart.module.css'
import TotalAmountAndQuantity from '@/components/TotalAmountAndQuantity'

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
