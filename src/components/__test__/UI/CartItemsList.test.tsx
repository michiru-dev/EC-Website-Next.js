import { render, screen, fireEvent } from '@testing-library/react'
import { useAppDispatch } from '@/redux/hooks'
import CartItemsList from '@/components/UI/CartItemsList'
import '@testing-library/jest-dom'
import { removeItem, updateQuantity } from '@/redux/slicers/cartSlice'

const mockDispatch = jest.fn()
jest.mock('@/redux/hooks', () => ({ useAppDispatch: () => mockDispatch }))

const mockData = [
  {
    id: 1,
    title: 'shirt',
    price: 10,
    description: 'nice',
    category: 'men',
    image: '/jpg',
    rating: { rate: 3, count: 10 },
    quantity: 5,
  },
]

describe('cartItemsList', () => {
  afterEach(() => {
    jest.clearAllMocks() //mock関数を各テスト毎にリセットする
  })

  test('it renders without crashing', () => {
    render(<CartItemsList itemsList={mockData} showControls={true} />)
    const itemTitle = screen.getByText('shirt')
    expect(itemTitle).toBeInTheDocument()
  })

  test('it displays controls when showControls is true', () => {
    const res = render(
      <CartItemsList itemsList={mockData} showControls={true} />
    )
    //ベストプラクティではないけどこんな方法もある
    const selectBox = res.queryByLabelText('個数:')
    const removeButton = res.queryByText('カートから商品を削除')
    expect(selectBox).toBeInTheDocument()
    expect(removeButton).toBeInTheDocument()
    expect(res.baseElement).toContainElement(selectBox)
  })

  test('it does not display controls when shoControl is false', () => {
    render(<CartItemsList itemsList={mockData} showControls={false} />)
    //querybyは要素が存在しないときにnullを返す。エラーは吐かない
    const selectBox = screen.queryByLabelText('個数:')
    const removeButton = screen.queryByText('カートから商品を削除')
    expect(selectBox).toBeNull()
    expect(removeButton).toBeNull()
  })

  test('it calls the dispatch function when item quantity is changed', () => {
    render(<CartItemsList itemsList={mockData} showControls={true} />)
    const selectBox = screen.getByLabelText('個数:')
    fireEvent.change(selectBox, { target: { value: '3' } })
    expect(mockDispatch).toHaveBeenCalledWith(
      updateQuantity({ itemId: 1, quantity: 3 })
    )
  })

  test('it calls the dispatch function when removing an item', () => {
    render(<CartItemsList itemsList={mockData} showControls={true} />)
    const removeButton = screen.getByText('カートから商品を削除')
    fireEvent.click(removeButton)
    expect(mockDispatch).toHaveBeenCalledWith(removeItem({ itemId: 1 }))
  })
})
