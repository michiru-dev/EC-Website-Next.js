import { useAppSelector } from '@/redux/hooks'
import CartItemsList from '@/components/CartItemsList'
import MoveToPaymentButton from '@/components/MoveToPaymentButton'
import Layout from '@/components/Layout'
import EmptyCart from '@/components/EmptyCart'
import { useTotalAmount } from '@/hooks/useTotalAmount'
import styles from '@/styles/Cart.module.css'

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items)
  const { totalAmount, totalItemsQuantity } = useTotalAmount(cartItems)

  //空のカートはここで表示
  if (cartItems.length === 0) {
    return (
      <Layout>
        <EmptyCart />
      </Layout>
    )
  }
  return (
    <Layout>
      <div className={styles.outerDiv}>
        <div className={styles.totalAndButtonDiv}>
          <div className={styles.totalDiv}>
            <p className={styles.totalQuantity}>合計 {totalItemsQuantity}点:</p>
            <p className={styles.totalAmount}>${totalAmount}</p>
          </div>

          <MoveToPaymentButton />
        </div>
        <CartItemsList itemsList={cartItems} showControls={true} />
      </div>
    </Layout>
  )
}

export default Cart
