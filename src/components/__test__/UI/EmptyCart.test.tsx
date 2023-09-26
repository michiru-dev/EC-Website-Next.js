import EmptyCart from '@/components/UI/EmptyCart'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('EmptyCart', () => {
  test('it displays the correct text', () => {
    render(<EmptyCart />)
    const textCart = screen.getByText('カートは空です')
    const textProd = screen.getByText('商品を探す')
    expect(textCart).toBeInTheDocument()
    expect(textProd).toBeInTheDocument()
  })

  test('directs to home page', () => {
    render(<EmptyCart />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})
